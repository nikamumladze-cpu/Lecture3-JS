const grades = [85, 90, 75, 96, 60, 55];

function addGrade(grade) {
  grades.push(grade);
  console.log("ნიშანი " + grade + " დაემატა.");
}

function removeFailingGrades() {
  console.log("\n ვშლი ნიშნებს 70-ის ქვემოთ");
  let removedCount = 0;

  for (let i = grades.length - 1; i >= 0; i--) {
    if (grades[i] < 70) {
      grades.splice(i, 1);
      removedCount++;
    }
  }
  console.log("\n" + removedCount + " ნიშანი წაიშალა.");
}

function printGrades() {
  console.log("\n ნიშნების ამჟამინდელი სია:");

  for (let i = 0; i < grades.length; i++) {
    console.log("> " + grades[i]);
  }
}

printGrades();

addGrade(88);
printGrades();

removeFailingGrades();

printGrades();
