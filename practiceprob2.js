// # *Adiba’s Scores in Her final exam -

// [**Bangla - 88, English- 76, Maths-71, G-Science -81, Religion -90, Economics- 75, Social-Science -80]**

// (a) Using  Declare Adiba’s Exam Subjects only (totalMarks). 

// (b) Using Function declare  totalMarks and  add(+) all subjects then show Her Results.

// (C) After Out her Result, divide the Totalmarks with her total subjects, 
// then  Show the exact results. And show out with 3 decimal

let allSubjects = ['Bangla', 'English', 'Maths', 'General Science', 'Religion', 'Social Science']
let totalMarks = [88,76,71,81,90,75,80]
totalMarks =((88+76+71+81+90+75+80)/7);

let total= totalMarks.toFixed()

function result(total) {
    console.log('Adiba Got', total );
    console.log('Grade: A+')
}
result(total)
