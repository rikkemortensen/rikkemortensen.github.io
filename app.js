//Items
const drone = document.querySelector(".drone img");

//Moving Animation Event
drone.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 12;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 12;
    drone.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});