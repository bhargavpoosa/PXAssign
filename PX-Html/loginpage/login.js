const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    let fatherName, accountID, accountName;
    if(username==="sbpoosa"){
        fatherName = "xyz";
        accountID = "IBM";
        accountName = "International Business Machine";
    }
    else{
        fatherName= "abc";
        accountID = "Gainsight";
        accountName = "Gainsight";
    }
    if ((username === "sbpoosa" && password === "1234") || (username === "Sasuke" && password === "1234")) 
    {
        var id = username.substr(0,5);

        aptrinsic("identify",
          {
          //User Fields
            "id": id, 
            "email": username + "@gainsight.com",
            "firstName": username,
            "lastName": "Uchiha",
            "signUpDate": 1522697426479, //unix time in ms
            "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
            "price" : 95.5,
            "userHash": "",
            "fatherName": fatherName,  
            // optional transient for HMAC identification
          },
          {
          //Account Fields
            "id": accountID, //Required
            "name": accountName,
            "Program": "Platinum",
            "location": "Hyderabad" 
              // flat custom attributes
         });
        if(username === "Sasuke"){
            aptrinsic("set", "user", {"firstName" : "Naruto", "lastName" : "Uzumaki"});
        }
        

        alert("You have successfully logged in.");
        location.href = "../homepage/home.html";
        
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    
})
