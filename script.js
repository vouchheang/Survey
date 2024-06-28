function clearform(){
 document.getElementById("form").reset();
}

document.getElementById("form").addEventListener("submit", submitform);
function submitform(event) {
  event.preventDefault();
  

  // Q1, Q2
  let fullname = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;

  // Q3
  const level = document.getElementsByName("level");
  let levels = [];
  for (let i = 0; i < level.length; i++) {
    // console.log(level[i].checked, level[i].value);
    if (level[i].checked) {
      levels.push(level[i].value);
    }
  }

  console.log(levels);

  //q4
  const current = document.getElementById("current");
  let currents = [];
  for (let i = 0; i < current.options.length; i++) {
    // currents.push(current.options[i].selected, current.options[i].value);
    if (current[i].selected) {
      currents.push(current[i].value);
    }
  }
  console.log(currents);

  //Q5
  const interested = document.getElementsByName("interested");
  let interesteds = [];
  for (let i = 0; i < interested.length; i++) {
    if (interested[i].checked) {
      interesteds.push(interested[i].value);
    }
  }
  console.log(interesteds);
  //  Q6
  const experience = document.getElementsByName("experience");
  let experiences = [];
  for (let i = 0; i < experience.length; i++) {
    if (experience[i].checked) {
      experiences.push(experience[i].value);
    }
  }
  console.log(experiences);

  //   //  Q7
  let describe = document.getElementById("describe").value;

  //      Q8
  const aspect = document.getElementsByName("aspect");
  let aspects = [];
  for (let i = 0; i < aspect.length; i++) {
    if (aspect[i].checked) {
      aspects.push(aspect[i].value);
    }
  }
  console.log(aspects);
  // aspects.push(document.getElementById("other_specify").value);

  //   //  Q9
  const pedagogy = document.getElementsByName("pedagogy");
  let pedagogys = [];
  for (let i = 0; i < pedagogy.length; i++) {
    if (pedagogy[i].checked) {
      pedagogys.push(pedagogy[i].value);
    }
  }
  console.log(pedagogys);
  //   //  Q10
  let describep = document.getElementById("describe pedagogy").value;

  //   //q11
  const participated = document.getElementsByName("participated");
  let participateds = [];
  for (let i = 0; i < participated.length; i++) {
    if (participated[i].checked) {
      participateds.push(participated[i].value);
    }
  }
  console.log(participateds);

  //   //q12
  let experience2 = document.getElementById("experience").value;

  //   //q13
  const prefer = document.getElementsByName("prefer");
  let prefers = [];
  for (let i = 0; i < prefer.length; i++) {
    if (prefer[i].checked) {
      prefers.push(prefer[i].value);
    }
  }
  console.log(prefers);
  //    prefers = document.getElementById("prefer").value;

  //   //q14
  const effective = document.getElementsByName("effective");
  let effectives = [];
  for (let i = 0; i < effective.length; i++) {
    if (effective[i].checked) {
      effectives.push(effective[i].value);
    }
  }
  console.log(effectives);

  //   //q15
  const peer = document.getElementsByName("peer");
  let peers = [];
  for (let i = 0; i < peer.length; i++) {
    if (peer[i].checked) {
      peers.push(peer[i].value);
    }
  }
  console.log(peers);

  //   //q16
  const feel = document.getElementsByName("feel");
  let feels = [];
  for (let i = 0; i < feel.length; i++) {
    if (feel[i].checked) {
      feels.push(feel[i].value);
    }
  }
  console.log(feels);

  //   //q17
  const achieve = document.getElementsByName("achieve");
  let achieves = [];
  for (let i = 0; i < achieve.length; i++) {
    if (achieve[i].checked) {
      achieves.push(achieve[i].value);
    }
  }
  console.log(achieves);
  //  console.log(document.getElementById("achieve").value);

  //   //q18,19,20,21
  let career = document.getElementById("career").value;
  let technologies = document.getElementById("technologies").value;
  let suggestions = document.getElementById("suggestions").value;
  let preferences = document.getElementById("preferences").value;


  let errorme = document.getElementById("validate");
  console.log(errorme)
  errorme.innerText = '';
  if (!fullname){
    errorme.innerText = 'please complete your name*'; 
    return false;
  }
  if (!email){
    errorme.innerText = 'please complete your email*'; 
    return false;
  }
  if (levels.length === 0) {
    errorme.innerText = 'please complete your grade*';
    return false;
  }
  if (currents.length === 0) {
    errorme.innerText = 'please complete your answer*';
    return false;
  }
  if (interesteds.length === 0){
    errorme.innerText = 'please complete your answer*'; 
    return false;
  }
  if (experiences.length === 0){
    errorme.innerText = 'please complete your experience*'; 
    return false;
  }
  if (! describe){
    errorme.innerText = 'please complete your answer*'; 
    return false;
  }
  if (aspects.length === 0){
    errorme.innerText = 'please complete your answer*'; 
    return false;
  }
  if (pedagogys.length === 0){
    errorme.innerText = 'please complete your answer*'; 
    return false;
  }
  if (! describep){
    errorme.innerText = 'please complete your answer*'; 
    return false;
  }
  if (participateds.length === 0){
    errorme.innerText = 'please complete your answer*'; 
    return false;
  }
  if (! experience2){
    errorme.innerText = 'please complete your answer*'; 
    return false;
  }
  if (prefers.length === 0){
    errorme.innerText = 'please complete your answer*'; 
    return false;
  }
  if (effectives.length === 0){
    errorme.innerText = 'please complete your answer*'; 
    return false;
  }
  if (peers.length === 0){
    errorme.innerText = 'please complete your answer*'; 
    return false;
  }
  if (feels.length === 0){
    errorme.innerText = 'please complete your name*'; 
    return false;
  }
  if ( achieves.length === 0){
    errorme.innerText = 'please complete your answer*'; 
    return false;
  }
  if (! career){
    errorme.innerText = 'please complete your answer*'; 
    return false;
  }
  if (! technologies){
    errorme.innerText = 'please complete your answer*'; 
    return false;
  }
  if (! suggestions){
    errorme.innerText = 'please complete your answer*'; 
    return false;
  }
  if (! preferences){
    errorme.innerText = 'please complete your answer*'; 
    return false;
  }

  // prepare data for API
  let data = [];
  for (let i = 1; i <= 21; i++) {
    data.push({
      fullname: fullname,
      email: email,
      question_id: i,
      created_by: "natsu",
      answer: [""],
    });
  }

  data[0].answer = [fullname];
  data[1].answer = [email];
  data[2].answer = [levels];
  data[3].answer = [currents];
  data[4].answer = [interesteds];
  data[5].answer = [experiences];
  data[6].answer = [describe];
  data[7].answer = [aspects];
  data[8].answer = [pedagogys];
  data[9].answer = [describep];
  data[10].answer = [participateds];
  data[11].answer = [experience2];
  data[12].answer = [prefers];
  data[13].answer = [effectives];
  data[14].answer = [peers];
  data[15].answer = [feels];
  data[16].answer = [achieves];
  data[17].answer = [career];
  data[18].answer = [technologies];
  data[19].answer = [suggestions];
  data[20].answer = [preferences];

  saveDataToAPI(data);


  
}

function saveDataToAPI(datas) {
  //  console.log(data);
  fetch("https://wmad-survey-backend.vercel.app/api/form-answers/submit", {
    method: "POST",
    headers: {
      "x-secret-key":
        "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answers: datas }),
  })
    .then((response) => response.json())
    .then((datas) => {
      console.log("Success:", datas);
      window.location.href="./feedback/index.html";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
