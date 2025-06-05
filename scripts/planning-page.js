
  let taskList = JSON.parse(localStorage.getItem('plan')) || [];
  const calendarBody = document.getElementById('calendarBody');
  const monthYear = document.getElementById('monthYear');
  let currentDate = new Date();

  // Display the current month and year
  function displayCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Clear the existing calendar
    calendarBody.innerHTML = '';

    // Set the month and year title
    monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

    // Create rows for the calendar
    let date = 1;
    for (let i = 0; i < 6; i++) { // Max 6 rows
      const row = document.createElement('tr');

      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');

        if (i === 0 && j < firstDay) {
          // Empty cells before the first day of the month
          cell.textContent = '';
        } else if (date > daysInMonth) {
          // Empty cells after the last day of the month
          cell.textContent = '';
        } else {
          // Populate the date cell
          cell.textContent = date;
          cell.setAttribute('data-date', `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`);
          date++;
        }

        row.appendChild(cell);
      }

      calendarBody.appendChild(row);
    }

    displayTasks();
  }

  // Add task to the task list
  function addTask() {
    const textAreaElement = document.querySelector('.js-name-input');
    const name = textAreaElement.value.trim();
    const dateInputElement = document.querySelector('.js-date-input');
    const date = dateInputElement.value;

    if (!name || !date) {
      alert('Please enter both task and date.');
      return;
    }

    taskList.push({ name, date });
    textAreaElement.value = '';
    dateInputElement.value = '';

    savePlanToLocalStorage();
    displayTasks();
  }

  // Save tasks to localStorage
  function savePlanToLocalStorage() {
    localStorage.setItem('plan', JSON.stringify(taskList));
  }

  // Display tasks in the calendar
  function displayTasks() {
    // Clear tasks from all calendar cells
    const cells = document.querySelectorAll('td[data-date]');
    cells.forEach(cell => {
      // Reset each cell to show only the date
      const cellDate = cell.getAttribute('data-date');
      const dateText = cellDate ? new Date(cellDate).getDate() : '';
      cell.innerHTML = dateText;
    });

    // Add tasks to the respective date cells
    taskList.forEach((task, index) => {
      const cell = document.querySelector(`td[data-date="${task.date}"]`);
      if (cell) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        // Truncate the task name to a maximum length 
        // const truncatedName = task.name.length > 3 ? `${task.name.slice(0, 3)}...` : task.name;

        // taskItem.innerHTML = `
        //   <p class="displayed-task">${truncatedName}</p>
        //   <button onclick="deleteTask(${index})" class="delete-button">X</button>
        // `;
        taskItem.innerHTML = `
            <p class="displayed-task">📌</p>
            <button onclick="deleteTask(${index})" class="delete-button">🗑️</button>
        `;

        taskItem.addEventListener('click', () => {
          displayFullTask(task);
        });

        cell.appendChild(taskItem);
      }
    });
  }
  //Display task in separate container
  function displayFullTask(task) {
    //let taskList = [];
    const taskContainer = document.querySelector('.js-taskList.task-container');
    if (taskContainer) {
      // Split the task into lines and wrap each line in <li>
      const taskLine = task.name.split('\n') // Split text by new lines
        .map(line => `<li>${line}</li>`) // Wrap each line in <li>
        .join(''); // Join back as a string

      taskContainer.innerHTML = `
        <p class="date"><strong>Date:</strong> ${task.date}</p>
        <div>
          <strong class="description">Descriptions:</strong> 
          <ul class="task-name">${taskLine}</ul>
        
          <div class="buttons-container">
            <button class="delete-task-btn js-delete-task-btn">Delete Task</button>
            <button class="edit-task-btn js-edit-task-btn">Edit Task</button>
          </div>
        </div>
      `;

      // Shorter virsion instead above code
      document.querySelector('.js-delete-task-btn').addEventListener('click', () => {
        taskContainer.innerHTML = '';
      });

      document.querySelector('.js-edit-task-btn').addEventListener('click', () => {
        const textArea = document.querySelector('.js-name-input');
        if (textArea) {
          textArea.value = task.name;
        }
      });
    }
  }
  
  
  // Delete a specific task by index
  function deleteTask(index) {
    taskList.splice(index, 1); // Remove the task at the given index
    savePlanToLocalStorage();
    displayCalendar(); // Refresh entire calendar
  }

  document.addEventListener('DOMContentLoaded', displayTasks);

  // Navigate to the previous month
  function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    displayCalendar();
  }

  // Navigate to the next month
  function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    displayCalendar();
  }

  // Initialize the calendar on page load
  window.onload = function () {
    displayCalendar();
  };

