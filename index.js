//initialization
let signUpform = document.querySelector('.form')
let showCapcha = document.getElementById("preview-captcha")
let refreshBtn = document.getElementById("refresh-btn")
let userName = document.querySelector('#user-name')
let userAge = document.querySelector('#user-age')
let userEmail = document.querySelector('#user-email')
let userPass = document.querySelector('#user-password')
let userConfPass = document.querySelector('#user-confPassword')
let captcha = document.querySelector('#captcha')

//function for captcha Generation
function captchaGenerator(){
    const fonts = ['arial','cursive','sans', 'serif','monoscape']
    let capchaValue = "";
    function genrateCapcha(){
        let value = btoa(Math.random()*10000000);
        value = value.slice(0,5+Math.random()*5);
        capchaValue = value;
    }

    // function for setCaptcha
    function setCapcha(){
       let htmlData =  capchaValue.split('').map((ele)=>{
            const rotate = -20 + Math.floor(Math.random()*30);
            const font = Math.floor(Math.random*fonts.length)
            return `<span style="
            transform:rotate(${rotate});
            font-family:${fonts[font]}">${ele}</span>`
        }).join("")
        showCapcha.innerHTML = htmlData
    }

    // function for initial captcha
    function initialCapcha (){
        refreshBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            genrateCapcha();
            setCapcha()
        });
        genrateCapcha();
        setCapcha()
    }
    initialCapcha()
}

// function for reset input

function reset(){
    userName.value = "";
    userAge.value = "";
    userEmail.value = "";
    userPass.value = "";
    userConfPass.value = "";
    captcha.value = ""
}


// listener for initial captcha preview
window.onload = ()=>{
    captchaGenerator()
}

// listner for signup

signUpform.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(showCapcha.innerText == captcha.value ){
        if(userPass.value == userConfPass.value){
            alert("User Registered Successfully")
        }
        else{
            alert('Password Did Not Match')
        }
    }
    else{
        alert("Please Enter Correct Captcha")
        genrateCapcha();
        setCapcha();
    }
    reset()
})

