const levels = ["1", "2", "3", "4"];

const goeValues = ["-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5"];

// Jumps calculation
const jumps = [
  { name: "1A", points: 1.10 },
  { name: "2A", points: 3.30 },
  { name: "3A", points: 8.00 },
  { name: "4A", points: 12.50 },
  { name: "1S", points: 0.40 },
  { name: "2S", points: 1.30 },
  { name: "3S", points: 4.30 },
  { name: "4S", points: 9.70 },
  { name: "1T", points: 0.40 },
  { name: "2T", points: 1.30 },
  { name: "3T", points: 4.20 },
  { name: "4T", points: 9.50 },
  { name: "1Lo", points: 0.50 },
  { name: "2Lo", points: 1.70 },
  { name: "3Lo", points: 4.90 },
  { name: "4Lo", points: 10.50 },
  { name: "1F", points: 0.50 },
  { name: "2F", points: 1.80 },
  { name: "3F", points: 5.30 },
  { name: "4F", points: 11.00 },
  { name: "1Lz", points: 0.60 },
  { name: "2Lz", points: 2.10 },
  { name: "3Lz", points: 5.90 },
  { name: "4Lz", points: 11.50 }
];

const goePercentages = {
  "-5": -0.50,
  "-4": -0.40,
  "-3": -0.30,
  "-2": -0.20,
  "-1": -0.10,
   "1": 0.10,
   "2": 0.20,
   "3": 0.30,
   "4": 0.40,
   "5": 0.50
};

// Spins calculation
const spins = [
  { name: "USpB", points: 1.20 }, 
  { name: "SSpB", points: 1.30 }, 
  { name: "CSpB", points: 1.30 }, 
  { name: "LSpB", points: 1.40 },  
  { name: "CUSpB", points: 1.80 }, 
  { name: "CSSpB", points: 1.90 }, 
  { name: "CCSpB", points: 2.00 }, 
  { name: "CLSpB", points: 2.00 }, 
  { name: "CoSpB", points: 1.80 }, 
  { name: "CCoSpB", points: 2.00 }, 
  { name: "FUSpB", points: 1.80 }, 
  { name: "FSSpB", points: 2.00 }, 
  { name: "FCSpB", points: 1.90 }, 
  { name: "FLSpB", points: 2.00 }, 
  { name: "FCoSpB", points: 1.80 }, 
  { name: "FCUSpB", points: 1.80 }, 
  { name: "FCSSpB", points: 1.90 }, 
  { name: "FCCSpB", points: 2.00 }, 
  { name: "FCLSpB", points: 2.00 }, 
  { name: "FCCoSpB", points: 2.00 }, 
];

  const spinsLevelData = [
  // USp
  { name: "USp1", points: 1.40 },
  { name: "USp2", points: 1.80 },
  { name: "USp3", points: 2.30 },
  { name: "USp4", points: 2.90 },//done

  // LSp
  { name: "LSp1", points: 1.80 },
  { name: "LSp2", points: 2.30 },
  { name: "LSp3", points: 2.90 },
  { name: "LSp4", points: 3.20 }, //done

  // CSp
  { name: "CSp1", points: 1.70 },
  { name: "CSp2", points: 2.20 },
  { name: "CSp3", points: 2.80 },
  { name: "CSp4", points: 3.10 }, //done

  // SSp
  { name: "SSp1", points: 1.60 },
  { name: "SSp2", points: 1.90 },
  { name: "SSp3", points: 2.50 },
  { name: "SSp4", points: 3.00 }, //done

  // CUSp
  { name: "CUSp1", points: 2.00 },
  { name: "CUSp2", points: 2.40 },
  { name: "CUSp3", points: 2.90 },
  { name: "CUSp4", points: 3.50 }, //done

  // CSSp
  { name: "CSSp1", points: 2.30 },
  { name: "CSSp2", points: 2.80 },
  { name: "CSSp3", points: 3.10 },
  { name: "CSSp4", points: 3.60 }, //done

  //CCSp
  { name: "CCSp1", points: 2.40 },
  { name: "CCSp2", points: 2.80 },
  { name: "CCSp3", points: 3.40 },
  { name: "CCSp4", points: 3.80 }, //done

  //CLSp
  { name: "CLSp1", points: 2.40 },
  { name: "CLSp2", points: 2.90 },
  { name: "CLSp3", points: 3.50 },
  { name: "CLSp4", points: 3.80 }, //done

  // CoSp
  { name: "CoSp1", points: 2.00 },
  { name: "CoSp2", points: 2.40 },
  { name: "CoSp3", points: 3.00 },
  { name: "CoSp4", points: 3.60 }, //done

  // CCoSp
  { name: "CCoSp1", points: 2.40 },
  { name: "CCoSp2", points: 3.00 },
  { name: "CCoSp3", points: 3.60 },
  { name: "CCoSp4", points: 4.20 }, //done

  // FUSp
  { name: "FUSp1", points: 2.00 },
  { name: "FUSp2", points: 2.40 },
  { name: "FUSp3", points: 2.90 },
  { name: "FUSp4", points: 3.50 }, //done

  //FSSp
  { name: "FSSp1", points: 2.40 },
  { name: "FSSp2", points: 2.80 },
  { name: "FSSp3", points: 3.10 },
  { name: "FSSp4", points: 3.60 }, //done

  //FCSp
  { name: "FCSp1", points: 2.30 },
  { name: "FCSp2", points: 2.80 },
  { name: "FCSp3", points: 3.40 },
  { name: "FCSp4", points: 3.80 }, //done

  //FLSp
  { name: "FLSp1", points: 2.40 },
  { name: "FLSp2", points: 2.90 },
  { name: "FLSp3", points: 3.50 },
  { name: "FLSp4", points: 3.80 }, //done

  //FCoSpB
  { name: "FCoSp1", points: 2.00 },
  { name: "FCoSp2", points: 2.40 },
  { name: "FCoSp3", points: 3.00 },
  { name: "FCoSp4", points: 3.60 }, //done

  //FCUSp
  { name: "FCUSp1", points: 2.00 },
  { name: "FCUSp2", points: 2.40 },
  { name: "FCUSp3", points: 2.90 },
  { name: "FCUSp4", points: 3.50 }, //done

  //FCSSp
  { name: "FCSSp1", points: 2.30 },
  { name: "FCSSp2", points: 2.80 },
  { name: "FCSSp3", points: 3.10 },
  { name: "FCSSp4", points: 3.60 }, //done

  //FCCSp
  { name: "FCCSp1", points: 2.40 },
  { name: "FCCSp2", points: 2.80 },
  { name: "FCCSp3", points: 3.40 },
  { name: "FCCSp4", points: 3.80 }, //done

  //FCLSp
  { name: "FCLSp1", points: 2.40 },
  { name: "FCLSp2", points: 2.90 },
  { name: "FCLSp3", points: 3.50 },
  { name: "FCLSp4", points: 3.80 }, //done

  //FCCoSp
  { name: "FCCoSp1", points: 2.40 },
  { name: "FCCoSp2", points: 3.00 },
  { name: "FCCoSp3", points: 3.60 },
  { name: "FCCoSp4", points: 4.20 }, //done
];


// Buttons data
const sidebarButtons = [
  { id: "jumpBtn", label: "Jumps" }, 
  { id: "spinBtn", label: "Spins" },
  { id: "choreoSpBth", label: "Choreo Spin" }, // new button  
  { id: "stepSiqBtn", label: "Step Sequence"}, 
  { id: "choreoBtn", label: "Choreo Sequence"}
];

const elementButtons = [
  { id: "a", label: "Axel" }, 
  { id: "s", label: "Salcow" }, 
  { id: "t", label: "Toeloop" }, 
  { id: "lo", label: "Loop" }, 
  { id: "f", label: "Flip" }, 
  { id: "lz", label: "Lutz"},
];

const rotationButtons = [
  [ { id: "1A", label: "1A" }, { id: "2A", label: "2A" }, { id: "3A", label: "3A" }, { id: "4A", label: "4A" } ],
  [ { id: "1S", label: "1S" }, { id: "2S", label: "2S" }, { id: "3S", label: "3S" }, { id: "4S", label: "4S" } ],
  [ { id: "1T", label: "1T" }, { id: "2T", label: "2T" }, { id: "3T", label: "3T" }, { id: "4T", label: "4T" } ],
  [ { id: "1Lo", label: "1Lo" }, { id: "2Lo", label: "2Lo" }, { id: "3Lo", label: "3Lo" }, { id: "4Lo", label: "4Lo" } ],
  [ { id: "1F", label: "1F" }, { id: "2F", label: "2F" }, { id: "3F", label: "3F" }, { id: "4F", label: "4F" } ],
  [ { id: "1Lz", label: "1Lz" }, { id: "2Lz", label: "2Lz" }, { id: "3Lz", label: "3Lz" }, { id: "4Lz", label: "4Lz" } ]
];

const spinButtons = [
  { id: "1ps", label: "Spin in One Position <span>and no</span> Change of Foot" },
  { id: "1psCf", label: "Spin in One Position <span>with</span> Change of Foot" },
  { id: "comby", label: "Combination Spin" },
  { id: "fs", label: "Flying Entry Spin <span>and no</span> Change of Foot" },
  { id: "fsCf", label: "Flying Entry Spin <span>with</span> Change of Foot"}
];

const spinTypeBtns = [
  [ { id: "USpB", label: "USp" }, { id: "SSpB", label: "SSp" }, { id: "CSpB", label: "CSp" }, { id: "LSpB", label: "LSp"} ], 
  [ { id: "CUSpB", label: "CUSp" }, { id: "CSSpB", label: "CSSp" }, { id: "CCSpB", label: "CCSp" }, { id: "CLSpB", label: "CLSp" } ],
  [ { id: "CoSpB", label: "CoSp" }, { id: "CCoSpB", label: "CCoSp" } ],
  [ { id: "FUSpB", label: "FUSp" }, { id: "FSSpB", label: "FSSp" }, { id: "FCSpB", label: "FCSp" }, { id: "FLSpB", label: "FLSp" }, { id: "FCoSpB", label: "FCoSp" } ], 
  [ { id: "FCUSpB", label: "FCUSp" }, { id: "FCSSpB", label: "FCSSp" }, { id: "FCCSpB", label: "FCCSp" }, { id: "FCLSpB", label: "FCLSp" }, { id: "FCCoSpB", label: "FCCoSp" } ]
];

const stepsLevelData = [
  { name: "StSqB", points: 1.60 },
  { name: "StSq1", points: 1.90 },
  { name: "StSq2", points: 2.70 },
  { name: "StSq3", points: 3.50 },
  { name: "StSq4", points: 4.10 } //done
];

const choreo = [
  { name: "ChSq1", points: 3.50 } //done
];

const choreoSp = [
  { name: "ChSp1", points: 3.50 } 
];


