function getDataFromAPI() {

  //experinece
  fetch(
    " https://wmad-survey-backend.vercel.app/api/form-answers/question/6/answers?search_created_by=natsu&search_answer=yes",
    {
      method: "GET",
      headers: {
        "x-secret-key":
          "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      let exper = data.length;
      console.log(exper);
      document.getElementById("twin").innerHTML += `

             <div class="child2" >
               <p>Students with previous experiances <br />in web development</p>
               <div class="num">${exper}</div>
             </div>
     `;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

    //all
    fetch(
      "https://wmad-survey-backend.vercel.app/api/form-answers/question/4/answers?search_created_by=natsu",
      {
        method: "GET",
        headers: {
          "x-secret-key": "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        let count = data.length;
        console.log(count);
        document.getElementById("twin").innerHTML += `
      
           <div class="child1">
                  <p>Number of responses</p>
                  <div class="num" style="margin-top: 14%">${count}</div>
                </div>
        `;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
}
getDataFromAPI();

//grade
function myFunction() {
  let grades = document.getElementById("mySelect").value;

  fetch(
    "https://wmad-survey-backend.vercel.app/api/form-answers/question/3/answers?search_created_by=natsu&search_answer=" +
      grades,
    {
      method: "GET",
      headers: {
        "x-secret-key":
          "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      let grade = data.length;
      console.log(grade);
      document.getElementById("demo").innerHTML = grade;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
myFunction();

//school

function school() {
  let schools = document.getElementById("school").value;

  fetch(
    "https://wmad-survey-backend.vercel.app/api/form-answers/question/4/answers?search_created_by=natsu&search_answer=" +
      schools,
    {
      method: "GET",
      headers: {
        "x-secret-key":
          "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      let schooll = data.length;
      console.log(schooll);
      document.getElementById("dema").innerHTML = schooll;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
school();

