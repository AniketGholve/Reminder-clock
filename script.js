function setTime() {
    let date = new Date()
    let hours = date.getHours();
    let abyt = "AM"
    document.getElementById("min").innerHTML = date.getMinutes();
    document.getElementById("second").innerHTML = date.getSeconds();
    if (hours > 12) {
        hours -= 12;
        abyt = "PM"
        document.getElementById("abvt").innerHTML = abyt;
        document.getElementById("hours").innerHTML = hours;
    }
    else {
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




setInterval(() => {
    setTime()
}, 1000)