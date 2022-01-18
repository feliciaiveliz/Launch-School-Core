let saveFiles = (function() {
  let files = [];
  
  return {
    createFile(game) {
      files.push(game);
    },
    
    seeFiles() {
      files.forEach(file => { console.log(file) });
    },
    
    saveGame(game) {
      if(files.includes(game)) {
        console.log(`${game} has been saved!`);
      } else {
        this.createFile(game);
        console.log(`${game} file created and ${game} save state has been made!`);
      }
    },
  };
})();

console.log(saveFiles);

// more code
// creates one object in memory

saveFiles.createFile('Blasphemous');
saveFiles.createFile('Dark Souls');
saveFiles.seeFiles()
saveFiles.saveGame('Dark Souls');
saveFiles.saveGame('Dark Souls iii');

//IIFE
let generateCourseName = (() => {
  let courseId = 225;
  return function() {
    courseId += 5;
    return courseId;
  }
})();

console.log(generateCourseName()); // 230
console.log(generateCourseName()); // 235
console.log(generateCourseName()); // 240


//no IIFE
let generateCourseName = () => {
  let courseId = 225;
  courseId += 5;
  return courseId;
};

console.log(generateCourseName()); // 230
console.log(generateCourseName()); // 230
console.log(generateCourseName()); // 230