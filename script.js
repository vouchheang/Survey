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

}



