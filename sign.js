let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirm")

confirmPassword.addEventListener("keyup",()=>{

        let check = document.getElementById("check")
        if(password.value != confirmPassword.value){
            check.textContent = "Passwords do not match"
            check.style.color = "red"
            check.style.fontSize = "13px"
            check.style.fontFamily = "Times New Roman', Times, serif"
            password.style.borderColor = "red"
            confirmPassword.style.borderColor = "red"

        }else{
            check.textContent = "Passwords match"
            check.style.color = "green"
            check.style.fontSize = "13px"
            check.style.fontFamily = "Times New Roman', Times, serif"
            password.style.borderColor = "#E5E7EB"
            confirmPassword.style.borderColor = " #E5E7EB"
        }
      })


