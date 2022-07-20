//Items
const drone = document.querySelector(".drone img");

//Moving Animation Event
drone.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 12;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 12;
    drone.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/pages/404.html",
    "/": "/index.html",
    "/hvordan": "/pages/hvordan.html",
    "/ommig": "/pages/ommig.html",
    "/booktid": "/pages/booktid.html",
};

const handleLocation = async() => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();