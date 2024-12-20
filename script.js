

gsap.from("#page2 #box",{
    scale:0,
    opacity:0,
    duration:1,
    rotate:720,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
        pin:true
    }
})



gsap.from("#page1 #box",{
    scale:0,
    opacity:0,
    duration:1,
    rotate:720,
    scrollTrigger:{
        trigger:"#page1 #box",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:2,
        
    }
})