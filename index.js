const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
                    "W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
                    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
                    "!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
                    "<",">",".","?","/"];


let password1 = document.getElementById("first-passwd")
let password2 = document.getElementById("second-passwd")

function generatePasswd(){
    password1.textContent = ""
    password2.textContent = ""
    for (let i = 0; i < 15; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        password1.textContent += characters[randomIndex]
    }
    for (let i = 0; i < 15; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        password2.textContent += characters[randomIndex]
    }
}


function copyText1() {
    navigator.clipboard.writeText(password1.textContent);
}

function copyText2() {
    navigator.clipboard.writeText(password2.textContent);
}
