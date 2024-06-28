function getDataApi(){
    fetch ("https://wmad-survey-backend.vercel.app/api/form-answers/question/10/answers?search_created_by=leakhena",{
        method: "GET",
        headers: {
             "x-secret-key": "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
          "Content-type": "application/json"
        }
    }

    )
    .then((response) => response.json())
    .then((data) => {
       console.log("sucess",data);
       let num = data.length;
       console.log(num);

       document.getElementById("twin").innerHTML+=`
          <div class="child1">
            <p>Number of responses</p>
            <div class="num" style="margin-top: 14%">${num}</div>
          </div>
         
       `
    }
)
    .catch((error) => {
        console.error("Error:",error);
    }
    );
    // experien
    fetch ("https://wmad-survey-backend.vercel.app/api/form-answers/question/6/answers?search_created_by=leakhena&search_answer=yes",{
      method: "GET",
      headers: {
           "x-secret-key": "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
        "Content-type": "application/json"
      }
  }

  )
  .then((response) => response.json())
  .then((data) => {
     console.log("sucess",data);
     let experien = data.length;
     console.log(experien);

     document.getElementById("twin").innerHTML+=`
    
        <div class="child2">
          <p>Students with previous experiances <br />in web development</p>
          <div class="num">${experien}</div>
        </div>
     `
  }
)
  .catch((error) => {
      console.error("Error:",error);
  }
  );


}
getDataApi();
// grade
function Grade(){
  let grades =document.getElementById('mySelect').value;

  fetch ("https://wmad-survey-backend.vercel.app/api/form-answers/question/3/answers?search_created_by=leakhena&search_answer=" +
     grades,
    {
      method: "GET",
      headers: {
           "x-secret-key": "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
        "Content-type": "application/json"
      },
  }

  )
  .then((response) => response.json())
  .then((data) => {
     console.log("sucess",data);
     let grade= data.length;
     console.log(grade);

     document.getElementById("myGrade").innerHTML = grade;
       
     
  }
)
  .catch((error) => {
      console.error("Error:",error);
  }
  );
}
Grade();
// school

function School(){
  let schools =document.getElementById('school').value;

  fetch ("https://wmad-survey-backend.vercel.app/api/form-answers/question/4/answers?search_created_by=leakhena&search_answer=" +
     schools,
    {
      method: "GET",
      headers: {
           "x-secret-key": "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
        "Content-type": "application/json"
      },
  }

  )
  .then((response) => response.json())
  .then((data) => {
     console.log("sucess",data);
     let school = data.length;
     console.log(school);

     document.getElementById("myGrade1").innerHTML = school;
       
     
  }
)
  .catch((error) => {
      console.error("Error:",error);
  }
  );
}
School();


