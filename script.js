function setTime() {
    let date = new Date();
    let hours = date.getHours();
    let abyt = "AM"
    document.getElementById("min").innerHTML = date.getMinutes();
    document.getElementById("second").innerHTML = date.getSeconds();
    if(hours>5 && hours<=11){
        document.getElementById("message").innerHTML = "GOOD MORNING !! WAKE UP !!";
    }
    else if(hours>11 && hours<=16){
        document.getElementById("message").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    }
    else if(hours>=16 && hours<=20){
        document.getElementById("message").innerHTML = "GOOD EVENING !!";
    }
    else{
        document.getElementById("message").innerHTML="GOOD NIGHT !!";
    }
    if (hours > 12) {
        hours -= 12;
        abyt = "PM";
        document.getElementById("abvt").innerHTML = abyt;
        document.getElementById("hours").innerHTML = hours;
    }
    else if (hours === 12) {
        document.getElementById("abvt").innerHTML = "PM";
        document.getElementById("hours").innerHTML = hours;
    }
    else {
        document.getElementById("abvt").innerHTML = "AM";
        document.getElementById("hours").innerHTML = hours;
    }
}

document.getElementById('myButton').addEventListener('click', function (event) {
    event.preventDefault();
    let date = new Date();
    let hours = date.getHours();
    sessionStorage.setItem("nightTime", event.target.form.night.value);
    sessionStorage.setItem("wakeUp", event.target.form.wake.value);
    sessionStorage.setItem("lunchTime", event.target.form.lunch.value);
    sessionStorage.setItem("napTime", event.target.form.nap.value);
    var selectedIndexNight = event.target.form.night.selectedIndex;
    var selectedIndexWake = event.target.form.wake.selectedIndex;
    var selectedIndexLunch = event.target.form.lunch.selectedIndex;
    var selectedIndexNap = event.target.form.nap.selectedIndex;
    document.getElementById("nightTime").innerHTML =event.target.form.night.options[selectedIndexNight].innerHTML;
    document.getElementById("wakeUp").innerHTML = event.target.form.wake.options[selectedIndexWake].innerHTML;
    document.getElementById("lunchTime").innerHTML = event.target.form.lunch.options[selectedIndexLunch].innerHTML;
    document.getElementById("napTime").innerHTML = event.target.form.nap.options[selectedIndexNap].innerHTML;
    if (parseInt(sessionStorage.getItem("wakeUp")) === hours) {
        document.getElementById("foodMessage").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("imagesMorning").style.backgroundImage = "url('./images/Component 30 – 1.png')";
    }
    else if (parseInt(sessionStorage.getItem("lunchTime")) === hours) {
        document.getElementById("foodMessage").innerHTML = "LET'S HAVE SOME LUNCH";
        document.getElementById("imagesMorning").style.backgroundImage = "url('./images/lunch_image.png')";
    }
    else if (parseInt(sessionStorage.getItem("napTime")) === hours) {
        document.getElementById("foodMessage").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("imagesMorning").style.backgroundImage = "url('./images/Component 31 – 1.svg')";
    }
    else if (parseInt(sessionStorage.getItem("nightTime")) === hours) {
        document.getElementById("foodMessage").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("imagesMorning").style.backgroundImage = "url('./images/Component 32 – 1.svg')";
    }
});
let alarmSetBtn = document.querySelector(".setAlarmBtn");
alarmSetBtn.addEventListener("mouseover", () => {
    alarmSetBtn.innerText = "Party Time"
})
alarmSetBtn.addEventListener("mouseout", () => {
    alarmSetBtn.innerText = "Set Alarm"
})


setInterval(() => {
    setTime()
}, 1000)