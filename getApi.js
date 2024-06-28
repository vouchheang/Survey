// function saveDataApi(data) {
//     fetch ("https://wmad-survey-backend.vercel.app/api/form-answers/question/10/answers?search_created_by=leakhena", {
//          method: "GET",
//          headers: {
//           "x-secret-key": "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
//           "Content-type": "application/json"} })
 
//          .then((response) => response.json())
//          .then((data) => {
//             console.log('success', data);
//         for(let i =0;i<data.length;i++){
//             document.getElementById("getApi").innerHTML+=`
//         <h2>${data[i].fullname}</h2>
//         <p>${data[i].email}</p>
        
//         `
//         }
        
            
//         }); 
       
//      }
//  saveDataApi();