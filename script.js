
document.getElementById("form").addEventListener("submit", submitform);
function submitform(event) {
  event.preventDefault();

  //q5
  const current = document.getElementById("current");
  for (let i = 0; i < current.options.length; i++) {
      console.log(current.options[i].selected, current.options[i].value);
  }

  //q12
  const participated = document.getElementsByName("participated");
  for (let i = 0; i < participated.length; i++) {
    console.log(participated[i].checked, participated[i].value);
  }

  //q13
  console.log(document.getElementById("experience").value);

  //q14
  const prefer = document.getElementsByName("prefer");
  for (let i = 0; i < prefer.length; i++) {
    console.log(prefer[i].checked, prefer[i].value);
  }
  console.log(document.getElementById("prefer").value);

  //q15
  const effective = document.getElementsByName("effective");
  for (let i = 0; i < effective.length; i++) {
    console.log(effective[i].checked, effective[i].value);
  }
  console.log(document.getElementById("effective").value);

    //q16
  const peer = document.getElementsByName("peer");
  for (let i = 0; i < peer.length; i++) {
    console.log(peer[i].checked, peer[i].value);
  }

  //q17
  const feel = document.getElementsByName("feel");
  for (let i = 0; i < feel.length; i++) {
    console.log(feel[i].checked, feel[i].value);
  }

  //q18
  const achieve = document.getElementsByName("achieve");
  for (let i = 0; i < achieve.length; i++) {
    console.log(achieve[i].checked, achieve[i].value);
  }
  console.log(document.getElementById("achieve").value);

  //q19,20,21,22
  console.log(document.getElementById("career").value);
  console.log(document.getElementById("technologies").value);
  console.log(document.getElementById("suggestions").value);
  console.log(document.getElementById("preferences").value);





=======

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



