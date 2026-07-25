document.addEventListener("DOMContentLoaded", function () {
  const videoInput = document.getElementById("videoInput");
  const videoPreview = document.getElementById("videoPreview");
  const saveVideosButton = document.getElementById("saveVideos");
  const videoGallery = document.getElementById("videoGallery");

  let videosToSave = [];
  const dbRequest = indexedDB.open("VideoDB", 1);
  let db;

  dbRequest.onupgradeneeded = function (event) {
    db = event.target.result;
    if (!db.objectStoreNames.contains("videos")) {
      db.createObjectStore("videos", { keyPath: "id", autoIncrement: true });
    }
  };

  dbRequest.onsuccess = function (event) {
    db = event.target.result;
    loadSavedVideos();
  };

  dbRequest.onerror = function () {
    console.error("Error opening database");
  };

  videoInput.addEventListener("change", function (event) {
    videoPreview.innerHTML = "";
    videosToSave = Array.from(event.target.files);
    
    videosToSave.forEach((file, index) => {
      const videoURL = URL.createObjectURL(file);
      const videoElement = createVideoElement(videoURL, index, false);
      videoPreview.appendChild(videoElement);
    });
    
    saveVideosButton.disabled = videosToSave.length === 0;
  });

  saveVideosButton.addEventListener("click", function () {
    videosToSave.forEach(video => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(video);
      reader.onloadend = function () {
        const transaction = db.transaction(["videos"], "readwrite");
        const store = transaction.objectStore("videos");
        store.add({ data: reader.result, name: video.name });
        transaction.oncomplete = function () {
          loadSavedVideos();
        };
      };
    });
    
    videoPreview.innerHTML = "";
    saveVideosButton.disabled = true;
  });

  function loadSavedVideos() {
    videoGallery.innerHTML = "";
    const transaction = db.transaction(["videos"], "readonly");
    const store = transaction.objectStore("videos");
    const request = store.getAll();

    request.onsuccess = function () {
      request.result.forEach((videoData, index) => {
        const videoBlob = new Blob([videoData.data], { type: "video/mp4" });
        const videoURL = URL.createObjectURL(videoBlob);
        const videoElement = createVideoElement(videoURL, index, true, videoData.id, videoData.name);
        videoGallery.appendChild(videoElement);
      });
    };
  }

  function createVideoElement(src, index, isSaved, videoId = null, videoName = "") {
    const videoWrapper = document.createElement("div");
    videoWrapper.classList.add("video-wrapper");
    
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.width = 200;
    
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = videoName;
    nameInput.classList.add("video-name-input");
    nameInput.addEventListener("change", function () {
      if (isSaved && videoId !== null) {
        const transaction = db.transaction(["videos"], "readwrite");
        const store = transaction.objectStore("videos");
        store.get(videoId).onsuccess = function (event) {
          const videoData = event.target.result;
          videoData.name = nameInput.value;
          store.put(videoData);
        };
      }
    });
    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", function () {
      if (isSaved && videoId !== null) {
        const transaction = db.transaction(["videos"], "readwrite");
        const store = transaction.objectStore("videos");
        store.delete(videoId);
        transaction.oncomplete = function () {
          loadSavedVideos();
        };
      } else {
        videosToSave.splice(index, 1);
        videoWrapper.remove();
      }
    });
    
    videoWrapper.appendChild(video);
    videoWrapper.appendChild(nameInput);
    videoWrapper.appendChild(deleteButton);
    return videoWrapper;
  }
});
