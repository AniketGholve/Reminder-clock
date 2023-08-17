function setTime() {
    let date = new Date();
    let hours = date.getHours();
    let abyt = "AM"
    document.getElementById("min").innerHTML = date.getMinutes();
    document.getElementById("second").innerHTML = date.getSeconds();
    if(hours>=12 && hours<17){
        document.getElementById("message").innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
        document.getElementById("foodMessage").innerHTML="LET'S HAVE SOME LUNCH";
        document.getElementById("imagesMorning").style.backgroundImage="url('./images/lunch_image.png')";
    }
    else if(hours>=17 && hours <=19)
    {
        document.getElementById("message").innerHTML="GOOD EVENING !!";
        document.getElementById("foodMessage").innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("imagesMorning").style.backgroundImage="url('./images/Component 31 – 1.svg')";
    }   
    else if(hours>19 && hours<=23){
        document.getElementById("foodMessage").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("message").innerHTML="GOOD NIGHT !!";
        document.getElementById("imagesMorning").style.backgroundImage="url('./images/Component 32 – 1.svg')";
    }
    else if(hours>=0 && hours<=5){
        document.getElementById("foodMessage").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("message").innerHTML="GOOD NIGHT !!";
        document.getElementById("imagesMorning").style.backgroundImage="url('./images/Component 32 – 1.svg')";
    }
    else{
        document.getElementById("message").innerHTML="GOOD MORNING !! WAKE UP !!";
        document.getElementById("foodMessage").innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("imagesMorning").style.backgroundImage="url('./images/Component 30 – 1.svg')";
    }

    if (hours > 12) {
        hours -= 12;
        abyt = "PM";
        document.getElementById("abvt").innerHTML = abyt;
        document.getElementById("hours").innerHTML = hours;
    }
    else if(hours === 12){
        document.getElementById("abvt").innerHTML = "PM";
        document.getElementById("hours").innerHTML = hours;
    }
    else {
        document.getElementById("abvt").innerHTML = "AM";
        document.getElementById("hours").innerHTML = hours;
    }

}

document.getElementById('myButton').addEventListener('click', function (event) {
    event.preventDefault()
    sessionStorage.setItem("nightTime", event.target.form.night.value);
    sessionStorage.setItem("wakeUp", event.target.form.wake.value);
    sessionStorage.setItem("lunchTime", event.target.form.lunch.value);
    sessionStorage.setItem("napTime", event.target.form.nap.value);

    document.getElementById("nightTime").innerHTML = sessionStorage.getItem("nightTime");
    document.getElementById("wakeUp").innerHTML = sessionStorage.getItem("wakeUp");
    document.getElementById("lunchTime").innerHTML = sessionStorage.getItem("lunchTime");
    document.getElementById("napTime").innerHTML = sessionStorage.getItem("napTime");
});

document.getElementById("nightTime").innerHTML = sessionStorage.getItem("nightTime");
document.getElementById("wakeUp").innerHTML = sessionStorage.getItem("wakeUp");
document.getElementById("lunchTime").innerHTML = sessionStorage.getItem("lunchTime");
document.getElementById("napTime").innerHTML = sessionStorage.getItem("napTime");

let alarmSetBtn=document.querySelector(".setAlarmBtn");
alarmSetBtn.addEventListener("mouseover",()=>{
    alarmSetBtn.innerText="Party Time"
})
alarmSetBtn.addEventListener("mouseout",()=>{
    alarmSetBtn.innerText="Set Alarm"
})


setInterval(() => {
    setTime()
}, 1000)