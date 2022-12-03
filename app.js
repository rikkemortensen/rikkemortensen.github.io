// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".panel").forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: "top top",
//         end: "end end",

//     })
// });



// let tl = gsap.timeline({
//     // yes, we can add it to an entire timeline!
//     scrollTrigger: {
//         trigger: ".description",
//         pin: true, // pin the trigger element while active
//         start: "top top", // when the top of the trigger hits the top of the viewport
//         end: "+=500", // end after scrolling 500px beyond the start
//         // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

//     }
// });

// // add animations and labels to the timeline
// tl.to(".dronen", { y: -700, duration: 5 });
// tl.reverse();


// let proxy = { skew: 0 },
//     skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
//     clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

// ScrollTrigger.create({
//     onUpdate: (self) => {
//         let skew = clamp(self.getVelocity() / -300);
//         // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
//         if (Math.abs(skew) > Math.abs(proxy.skew)) {
//             proxy.skew = skew;
//             gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
//         }
//     }
// });

// // make the right edge "stick" to the scroll bar. force3D: true improves performance
// gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });