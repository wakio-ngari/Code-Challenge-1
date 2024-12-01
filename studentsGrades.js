//prompt user to input marks
function getStudentGrades(){
        let marks = prompt("Input a students grade");
}
    //determining the grade based on the marks scored.

    function studentGrade(marks){
        if(marks >= 80 && marks <= 100){
            return "A"
        }
        else if (marks >=60 && marks <= 79){
            return "B"
        }
        else if (marks >=49 && marks <= 59){
            return  "C"
        }
        else if (marks >=40 && marks <=49){
            return  "D"
        }
        else if (marks >=0 && marks <=39){
               return "E"
        }
        else{
            return "Invalid"
        }

        } 
        //checking to see if our function is working as expected and to give output of the grade scored when certain marks are got.
        console.log(studentGrade(80));
        console.log(studentGrade(54));
         console.log(studentGrade(10));
          console.log(studentGrade(-5));