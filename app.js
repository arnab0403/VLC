// hedaer part

const speedUp=document.querySelector("#speedUp");
const speedDown=document.querySelector("#speedDown");
const volumeUp=document.querySelector("#volumeUp");
const volumeDown=document.querySelector("#volumeDown");
const openBtn=document.querySelector("#openBtn")
const video=document.querySelector("#video");
const main=document.querySelector("main");
const videoElement=document.createElement("video");
const toast=document.querySelector(".toast");
const maxtime=document.querySelector(".maxtime");

const handlespeedUp=()=>
{   if(videoElement.playbackRate<2)
    {
        videoElement.playbackRate=videoElement.playbackRate+0.25;
        showToast(videoElement.playbackRate);
    }
    else
    alert("maximum speed");
}

const handlespeedDown=()=>
{   if(videoElement.playbackRate>0.25)
    {
        videoElement.playbackRate=videoElement.playbackRate-0.25;
        showToast(videoElement.playbackRate);
    }
    else
    alert("minimum speed");
}

const handlevolumeUp=()=>
{
    videoElement.volume=videoElement.volume+0.05;
    console.log(videoElement.volume);
}

const handlevolumeDown=()=>
{
    videoElement.volume=videoElement.volume-0.05;
    console.log(videoElement.volume);
}

const handleOpenbtn=()=>
{
    video.click();
}

const handleVideo = (obj)=>
{     
    const videourl=URL.createObjectURL(obj.target.files[0]);
    videoElement.src=videourl;
    main.appendChild(videoElement);
    videoElement.play();
    console.log(videoElement.volume);
    videoElement.volume=0.7;
}

const showToast = (value) =>
{
    toast.innerHTML=value+"X";
    toast.style.display="block";
    setTimeout(()=>
    {
        toast.style.display="none";
    },2000);
}

speedUp.addEventListener("click",handlespeedUp);
speedDown.addEventListener("click",handlespeedDown);
volumeUp.addEventListener("click",handlevolumeUp);
volumeDown.addEventListener("click",handlevolumeDown);
openBtn.addEventListener("click",handleOpenbtn);
video.addEventListener("change",handleVideo);

//fotter part of the program / controls part

const play = document.querySelector(".play");
const prev = document.querySelector(".prev");
const pause = document.querySelector(".pause");
const next = document.querySelector(".next");
const fullScreen=document.querySelector(".fullScreen");
const curentTimetime=document.querySelector(".curentTime");
const timeLength = document.querySelector(".timeLenght");

play.addEventListener("click",()=>{
    if (videoElement==="") {
        return;
    }
    videoElement.play();
    console.log("play");
})

pause.addEventListener("click",()=>{
    if (videoElement==="") {
        return;
    }
    videoElement.pause();
})

prev.addEventListener("click",()=>{
    if(videoElement==="")
    {
        return;
    }
    videoElement.currentTime=videoElement.currentTime-5;
})

next.addEventListener("click",()=>{
    if(videoElement==="")
    {
        return;
    }
    videoElement.currentTime=videoElement.currentTime+5;
})

videoElement.addEventListener("loadedmetadata",()=>
{
    const float =parseFloat(videoElement.duration/60);
    maxtime.innerHTML=float.toFixed(2);
    setInterval(calculateTime,100);
    setInterval(calculateTimeX,1000)
})

fullScreen.addEventListener("click",()=>{
    if(videoElement==="")
    {
        return;
    }
    videoElement.requestFullscreen();
})

let percentage=0;

const calculateTime = () =>
{
    
    let maxtime=videoElement.duration;
    let playtime=videoElement.currentTime;
    percentage=(playtime/maxtime)*100;
    if(percentage<1)
    {
        percentage=1;
    }
    timeLength.style.width=percentage+"%";
            
}


const calculateTimeX = () =>
    {
        curentTimetime.innerHTML=calc(videoElement.currentTime);           
    }
     

    let min="0", sec="0";
    
    const calc = (string) =>
        {
            console.log(time)
        sec=parseInt(string);
        console.log(sec);
        if(sec!==0 && sec%60===0)
        {
            min++;
            console.log(sec);
            console.log(min);
        }
        sec=sec-(min*60);
        min= min<=9 && min!="00" && min!="01" && min!="02" && min!="03" && min!="04" && min!="05" && min!="06" && min!="07" && min!="08" && min!="09"? "0"+min : min;
        sec= sec<=9 ? "0"+sec : sec;
        console.log(min+":"+sec);
        return min+":"+sec;
    }