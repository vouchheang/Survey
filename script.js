document.getElementById("form").addEventListener("submit",submitform);
function submitform(event){
    event.preventDefault();
    // Q1
    console.log(document.getElementById("fullname").value);
    // Q2
    console.log(document.getElementById("age").value);
    // Q3
    console.log(document.getElementById("email").value);
    // Q4
    const level= document.getElementsByName("level");
    for(let i=0;i<level.length;i++){
        console.log(level[i].checked,level[i].value);
    }
    // Q5
    const current= document.getElementsByName("current");
    for(let i=0;i<current.length;i++){
        console.log(current[i].checked,current[i].value);
    }
     // Q6
     const interested = document.getElementsByName("interested");
     for(let i=0;i<interested.length;i++){
         console.log(interested[i].checked,interested[i].value);
     }
    //  Q7
     const experience = document.getElementsByName("experience");
     for(let i=0;i<experience.length;i++){
         console.log(experience[i].checked,experience[i].value);
     }
    //  Q8
     console.log(document.getElementById("describe").value);
    //    Q9
     const aspects = document.getElementsByName("aspects");
     for(let i=0;i<aspects.length;i++){
         console.log(aspects[i].checked,aspects[i].value);
     }
     console.log(document.getElementById("other_specify").value);
    //  Q10
     const  pedagogy = document.getElementsByName("pedagogy");
     for(let i=0;i<pedagogy.length;i++){
         console.log(pedagogy[i].checked,pedagogy[i].value);
     }
      //  Q11
      console.log(document.getElementById("describe pedagogy").value);
}


