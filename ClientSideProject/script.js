//memory declarations of variables and arrays
var charCount;
var i = 0;
var nextPicture = true;
var carouselArray = ['<img class="gallery" src="gallery1.png" alt="Pic 1" height="400" width="600"> <p class="carouselText">A webpage I did for my first HTML/CSS class in college.</p>',
'<img class="gallery" src="gallery2.png" alt="Pic 2" height="400" width="600"> <p class="carouselText">A game I did in my advanced Java class using classes, inheritance, Swing UI, and basic algorithms.</p>',
'<img class="gallery" src="gallery3.png" alt="Pic 3" height="400" width="600"> <p class="carouselText">A python program that visualizes different sorting algorithms that are written out completely, and not with the built in sort method.</p>',
'<img class="gallery" src="gallery4.png" alt="Pic 4" height="400" width="600"> <p class="carouselText">A unity 2d platforming game currently in development using C# and the Unity library.</p>',
'<img class="gallery" src="gallery5.png" alt="Pic 5" height="400" width="600"> <p class="carouselText">A C++ audio VST writted within the JUCE framework currently in very early development.</p>'];

var audioArray = ['<h2>Snow</h2> <audio controls> <source src="snow.mp3" type="audio/mpeg"> </audio>',
                '<h2>U Kno</h2> <audio controls> <source src="u kno.mp3" type="audio/mpeg"> </audio>',
                '<h2>Zoned</h2> <audio controls> <source src="zoned.wav" type="audio/wav"> </audio>',
                '<h2>Study</h2> <audio controls> <source src="study.mp3" type="audio/mp3"> </audio>'];



var navArray = [
    ['Home', "<a class='clickedA'>Home</a>"  +
    "<a href='gallery.html'>Gallery</a>" +
    "<a href='aboutme.html'>About Me</a>" +
    "<a href='contactme.html'>Contact Me</a>" +
    "<a href='mypage.html'>Music</a>"],
    ['Gallery', "<a href='index.html'>Home</a>"  +
    "<a class='clickedA'>Gallery</a>" +
    "<a href='aboutme.html'>About Me</a>" +
    "<a href='contactme.html'>Contact Me</a>" +
    "<a href='mypage.html'>Music</a>"],
    ['About Me', "<a href='index.html'>Home</a>"  +
    "<a href='gallery.html'>Gallery</a>" +
    "<a class='clickedA'>About Me</a>" +
    "<a href='contactme.html'>Contact Me</a>" +
    "<a href='mypage.html'>Music</a>"],
    ['Contact Me',"<a href='index.html'>Home</a>"  +
    "<a href='gallery.html'>Gallery</a>" +
    "<a href='aboutme.html'>About Me</a>" +
    "<a  class='clickedA'>Contact Me</a>" +
    "<a href='mypage.html'>Music</a>" ],
    ['Music', "<a href='index.html'>Home</a>"  +
    "<a href='gallery.html'>Gallery</a>" +
    "<a href='aboutme.html'>About Me</a>" +
    "<a href='contactme.html'>Contact Me</a>" +
    "<a class='clickedA'>Music</a>"]
]

function generateNav(webpage){
    if(webpage == 0){
        document.getElementById("homeNav").innerHTML = navArray[0,webpage];
    }
    else if(webpage == 1){
        document.getElementById("galleryNav").innerHTML = navArray[0,webpage];
    }
    else if(webpage == 2){
        document.getElementById("aboutNav").innerHTML = navArray[0,webpage];      
    }
    else if(webpage == 3){
        document.getElementById("contactNav").innerHTML = navArray[0,webpage];       
    }
    else if(webpage == 4){
        document.getElementById("musicNav").innerHTML = navArray[0,webpage];        
    }
}

//function that occurs on load of the home page that gathers or adjusts username and visit count cookies
function promptUsername(){
    generateNav(0);

    if(document.cookie == ""){
        var username = prompt("Hello!\nPlease enter your name.");
        if(username==null){
            username = "";
        }
        document.cookie = "username="+username+";expires"+new Date()
        + (365*24*60*60*1000)+";path=/";
        username=decodeURIComponent(document.cookie).split("=")[1].split(";")[0];
        var count=1;
        document.cookie ="count="+count+";expires"+new Date()
        + (365*24*60*60*1000)+";path=/";
    }
    else{
        count=Number(decodeURIComponent(document.cookie).split(";")[1].split("=")[1]) + 1;
        document.cookie ="count="+count+";expires"+new Date()
        + (365*24*60*60*1000)+";path=/";
        var username = decodeURIComponent(document.cookie).split("=")[1].split(";")[0];
    }
    
    document.getElementById("HomeHeading").innerText = "Welcome " + username + "!!!!";
    document.getElementById("HomeWelcome").innerText = "Thank you for visiting my portfolio site "
    + username + ". You have visited this site " + count + " times since your cookies were last wiped."
    +" I hope you enjoy my portfolio!!";

}
//function that gets called every 5 seconds or on button click with a parameter that decides direction
function updateCarousel(direction){
    if(i>=4 && direction ==1){
        i=0;
    }
    else if (i<5 && direction==1){
        i+=1;
    }
    else if(i<5 && direction==0){
        if(i<=0){
            i=5;
        }
        i-=1;
    }

    document.getElementById('Carousel').innerHTML=carouselArray[i];

}
//function for automating the carousel
function carousel(){
    generateNav(1);

    document.getElementById('Carousel').innerHTML=carouselArray[i];

    setInterval(function(){updateCarousel(1);}, 5000);
}
//two functions for changing about me photo
function aboutMouseOver(){
    document.getElementById("AboutMePic").setAttribute("src", "webpic2.jpg");
}

function aboutMouseOut(){
    document.getElementById("AboutMePic").setAttribute("src", "webpic1.jpg");
}
//function for the comment character counter
function countChar(){
    charCount = document.getElementById("comments").value.length;
    document.getElementById("RunningCount").innerText = charCount + "/500";
}
//function that emphasizes the audio being played
function onPlay(audioPlayed){
    for(var i = 0; i<4; i++){
        $("audio").eq(i).hide();
        $("h2").eq(i).hide();
    }   

    document.getElementsByTagName("audio")[audioPlayed].setAttribute("style", 'background-color: rgba(0,255,255,0.65); width: 20vw; margin-left:40vw; margin-right:40vw; text-align: center; font-size: calc(48px + 1vw); transition: 1s background-color;');
    document.getElementsByTagName("h2")[audioPlayed].setAttribute("style", 'background-color: rgba(0,255,255,0.65); width: 20vw; margin-top: 25vh; margin-left:40vw; margin-right:40vw; text-align: center; font-size: calc(48px + 1vw); transition: 1s background-color;');
    $("audio").eq(audioPlayed).show();
    $("h2").eq(audioPlayed).show();
}
//function that repopulates audio containers
function onPause(){
    document.getElementById("AudioDiv").innerHTML=
    '<h2>Snow</h2> <audio onplay="onPlay(0)" onpause="onPause()" controls> <source src="snow.mp3" type="audio/mpeg"> </audio>' +
    '<h2>U Kno</h2> <audio onplay="onPlay(1)" onpause="onPause()" controls> <source src="u_kno.mp3" type="audio/mpeg"> </audio>' +
    '<h2>Zoned</h2> <audio onplay="onPlay(2)" onpause="onPause()" controls> <source src="zoned.wav" type="audio/wav"></audio>' +
    '<h2>Study</h2> <audio onplay="onPlay(3)" onpause="onPause()" controls><source src="study.mp3" type="audio/mp3"></audio>';

    for(var i = 0; i<4; i++){
        document.getElementsByTagName("audio")[i].setAttribute("style", 'background-color: rgba(0,255,255,0.65); width: 20vw; margin-left:40vw; margin-right:40vw; text-align: center; font-size: calc(12px + 1vw);');
        document.getElementsByTagName("h2")[i].setAttribute("style", 'background-color: rgba(0,255,255,0.65); width: 20vw; margin-left:40vw; margin-right:40vw; text-align: center; font-size: calc(12px + 1vw);');
    }
}
//function called on every input into the email textarea
function validate(){
    var emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!emailFormat.test(document.getElementById("email").value)){
        document.getElementById("emailValidate").innerText="Not valid!!";
    }
    else if(emailFormat.test(document.getElementById("email").value)){
        document.getElementById("emailValidate").innerText="";
    }
}
//function called on form submission
function validateSubmission(){
    var emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    alert("Email not valid!!!");
    if(!emailFormat.test(document.getElementById("email").value)){
        document.getElementById("emailValidate").innerText="Not valid!!";
        return false;
    }
    else if(emailFormat.test(document.getElementById("email").value)){
        document.getElementById("emailValidate").innerText="";
        return true;
    }
}
//function for determining password strength
function pwdStr(){
    let password = document.getElementById("pwd").value;
    let unacceptablePwdFormat = /[\w\W]/;
    let weakPwdFormat = /^(?=.*[^A-Za-z0-9])(?=.*[0-9])(?=.*[a-zA-Z])/;
    let fairPwdFormat = /^(?=.*[^A-Za-z0-9])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
    let numSpec = password.replace(/[^\W]/g, "").length;
    let numDig = password.replace(/[^\d]/g, "").length;

    if(fairPwdFormat.test(password) && numSpec >= 2 && numDig >= 2 && password.length>=6){
        document.getElementById("PwdStrength").innerText = ("Very Secure");
    }
    else if(fairPwdFormat.test(password) && numSpec < 2 && numDig >= 2 && password.length>=6){
        document.getElementById("PwdStrength").innerText = ("Strong");
    }
    else if(fairPwdFormat.test(password) && password.length>=6){
        document.getElementById("PwdStrength").innerText = ("Fair");
    }
    else if(weakPwdFormat.test(password) && password.length>=6){
        document.getElementById("PwdStrength").innerText = ("Weak");
    }
    else if(unacceptablePwdFormat.test(password) && password.length<6){
        document.getElementById("PwdStrength").innerText = ("Unacceptable");
    }
}