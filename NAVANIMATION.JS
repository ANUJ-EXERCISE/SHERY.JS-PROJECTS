gsap.from("#head h1", {
    opacity: 0,
    duration: 1,
    top: -20,
})
gsap.from("ul li", {
    opacity: 0,
    duration: 1,
    delay: 0.3,
    top: -90,
    stagger: 0.3
})
gsap.to("#home h1", {
    opacity: 1,
    duration: 2,
    scale: 3,
    rotate: 360,
    scrollTrigger: "#home h1"
})