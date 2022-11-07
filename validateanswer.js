function validatercb(x) {

    localStorage.setItem("storageName",0);
    
        if(x.id==="rcb")
        {
            x.style.backgroundColor = "green";
            
            localStorage.setItem("storageName",1);
            setTimeout(function() {
                window.location="LogoThree.html";
            }, 1000);
    
        }
    
    
        if(x.id!="rcb"){
            x.style.backgroundColor="red"
            document.getElementById("rcb").style.backgroundColor="green"
            setTimeout(function() {
                window.location="LogoThree.html";
            }, 1000);
    
        }
    
}
    
function validatehonda(x) {
    
        if(x.id==="honda")
        {
            x.style.backgroundColor = "green";
            localStorage.setItem("storageName",2);
             
            setTimeout(function() {
                window.location="LogoFour.html";
            }, 1000);
    
        }
    
    
        if(x.id!="honda"){
            x.style.backgroundColor="red"
            document.getElementById("honda").style.backgroundColor="green"
    
            setTimeout(function() {
                window.location="LogoFour.html";
            }, 1000);
    
        }
}
    
function validatetelegram(x) {
    
        if(x.id==="telegram")
        {
            x.style.backgroundColor = "green";
            localStorage.setItem("storageName",3);
            setTimeout(function() {
                window.location="LogoFive.html";
            }, 1000);
    
        }
    
    
        if(x.id!="telegram"){
            x.style.backgroundColor="red"
            document.getElementById("telegram").style.backgroundColor="green"
    
            setTimeout(function() {
                window.location="LogoFive.html";
            }, 1000);
    
        }
}
    
function validatesbi(x) {
    
        if(x.id==="sbi")
        {
            x.style.backgroundColor = "green";
    
            localStorage.setItem("storageName",4);
            setTimeout(function() {
                window.location="LogoSix.html";
            }, 1000);
    
        }
    
    
        if(x.id!="sbi"){
            x.style.backgroundColor="red"
            document.getElementById("sbi").style.backgroundColor="green"
    
            setTimeout(function() {
                window.location="LogoSix.html";
            }, 1000);
    
        }
}
function validatekia(x) {
    
    if(x.id==="kia")
    {
        x.style.backgroundColor = "green";
        localStorage.setItem("storageName",5);
        setTimeout(function() {
            window.location="index8.html";
        }, 1000);

    }


    if(x.id!="kia"){
        x.style.backgroundColor="red"
        document.getElementById("kia").style.backgroundColor="green"

        setTimeout(function() {
            window.location="index8.html";
        }, 1000);

    }
}
    
function quizResult() {
        document.getElementById("ResultLabel").innerHTML=  localStorage.getItem("storageName") + "/5"
        localStorage.clear();
        
}