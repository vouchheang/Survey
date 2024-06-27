document.getElementById("form").addEventListener("submit", submitform);
function submitform(event) {
  event.preventDefault();
  // Q1
  console.log(document.getElementById("fullname").value);
  let fullname = document.getElementById("fullname").value;
  // // Q2
  // console.log(document.getElementById("age").value);
  // Q2
  console.log(document.getElementById("email").value);
  let email = document.getElementById("email").value;
  // Q3
  let levels = [];
  const level = document.getElementsByName("level");
  for (let i = 0; i < level.length; i++) {
    if(level[i].checked){
      levels.push(level[i].value);


    }
    

  } console.log(levels);
  // Q4
  const current = document.getElementById("current");
  let currents = [];
  for (let i = 0; i < current.options.length; i++) {
    // currents.push(current.options[i].selected, current.options[i].value);
    if (current[i].selected) {
      currents.push(current[i].value);
    }
  }
  console.log(currents);
  

  // Q5
  let interesteds = [];
  const interested = document.getElementsByName("interested");
  for (let i = 0; i < interested.length; i++) {
    if(interested[i].checked){
      interesteds.push(interested[i].value);

  }
}console.log(interesteds);
  //  Q6
  let experiences = [];
  const experience = document.getElementsByName("experience");
  for (let i = 0; i < experience.length; i++) {
    if(experience[i].checked){
      experiences.push(experience[i].value);

  }
}console.log(experiences);
  //  Q7
  console.log(document.getElementById("describe").value);
  let describe = document.getElementById("describe").value;
  //    Q8
  let aspects = [];
  const aspect = document.getElementsByName("aspect");
  for (let i = 0; i < aspect.length; i++) {
    if(aspect[i].checked){
      aspects.push(aspect[i].value);

  }

  }console.log(aspects);

  // console.log(document.getElementById("other_specify").value);
  // let other_specify = document.getElementById("other_specify");
  //  Q9
  let pedagogys = [];
  const pedagogy = document.getElementsByName("pedagogy");
  for (let i = 0; i < pedagogy.length; i++) {
    if(pedagogy[i].checked){
      pedagogys.push(level[i].value);

  }
}console.log(pedagogys);
  //  Q10
  console.log(document.getElementById("describePedagogy").value);
  let describePedagogy = document.getElementById("describePedagogy").value
  // Q11
  let participateds = [];
  const participated = document.getElementsByName("participated");
  for (let i = 0; i < participated.length; i++) {
    if(participated[i].checked){
      participateds.push(participated[i].value);

  }
}console.log(participateds);
  // Q12
  console.log(document.getElementById("activity").value);
  let activity = document.getElementById("activity").value;
  // Q13
  let prefers = [];
  const prefer = document.getElementsByName("prefer");
  for (let i = 0; i < prefer.length; i++) {
    if(prefer[i].checked){
      prefers.push(prefer[i].value);

  }
}console.log(prefers);
  // Q14
  let environments = [];
  const environment = document.getElementsByName("environment");
  for (let i = 0; i < environment.length; i++) {
    if(environment[i].checked){
      environments.push(environment[i].value);

  }
}console.log(environments);
  // Q15
  let peers = [];
  const peer = document.getElementsByName("peer");
  for (let i = 0; i < peer.length; i++) {
    if(peer[i].checked){
      peers.push(peer[i].value);

  }
}console.log(peers);
  // Q16
  let receivings = [];
  const receiving = document.getElementsByName("receiving");
  for (let i = 0; i < peer.length; i++) {
    if(receiving[i].checked){
      receivings.push(receiving[i].value);

  }
}console.log(receivings);
  // Q17
  let achieves = [];
  const achieve = document.getElementsByName("achieve");
  for (let i = 0; i < achieve.length; i++) {
    if(achieve[i].checked){
      achieves.push(achieve[i].value);

  }
  }console.log(achieves);
  // Q18
  console.log(document.getElementById("futureCareer").value);
  let futureCareer = document.getElementById("futureCareer").value;
  // Q19

  console.log(document.getElementById("specific").value);
  let specific = document.getElementById("specific").value;
  // Q20
  console.log(document.getElementById("suggestion").value);
  let suggestion = document.getElementById("suggestion").value;
  // Q21
  console.log(document.getElementById("preference").value);
  let preference = document.getElementById("preference").value;
  
  let answers = [];
  for (let i = 1; i <= 21; i++) {
    answers.push({
      fullname: fullname,
      email: email,
      question_id: i,
      created_by: 'leakhena',
      answer: [""],
    });
  }
  answers[0].answer = [fullname];
  answers[1].answer = [email];
  answers[2].answer = [levels];
  answers[3].answer = [currents];
  answers[4].answer = [interesteds];
  answers[5].answer = [experiences];
  answers[6].answer = [describe];
  answers[7].answer = [aspects];
  answers[8].answer = [pedagogys];
  answers[9].answer = [describePedagogy];
  answers[10].answer = [participateds];
  answers[11].answer = [activity];
  answers[12].answer = [prefers];
  answers[13].answer = [environments];
  answers[14].answer = [peers];
  answers[15].answer = [receivings];
  answers[16].answer = [achieves];
  answers[17].answer = [futureCareer];
  answers[18].answer = [specific];
  answers[19].answer = [suggestion];
  answers[20].answer = [preference];
  

saveDataApi(answers);
}

function saveDataApi(data) {
   fetch ("https://wmad-survey-backend.vercel.app/api/form-answers/submit", {
        method: "POST",
        body: JSON.stringify({
          answers: data
        }),
        headers: {
         "x-secret-key": "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
         "Content-type": "application/json"} })

        .then((response) => response.json())
        .then((data) => console.log('success', data));
        
      
    }
