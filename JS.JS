var ww = window.innerWidth/2;

window.addEventListener('mousemove',function(details)
{
    if(details.clientX<ww)
    {   

        var redcolor = gsap.utils.mapRange(0,ww,255,0,details.clientX)

        gsap.to("body",{
            backgroundColor:`rgb(${redcolor},0,0)`,
            scrub:4
        })
        
    }
    else{
        var bluecolor = gsap.utils.mapRange(window.innerWidth,ww,255,0,details.clientX)

        gsap.to("body",{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            scrub:4
        })
    }
})


var wh = window.innerHeight/2;

window.addEventListener('mousemove',function(details)
{
    if(details.clientY<wh)
    {   

        var purplecolor = gsap.utils.mapRange(0,ww,255,0,details.clientY)

        gsap.to("body",{
            backgroundColor: `rgb(128, 0, ${purplecolor})`,
            scrub:4
        })
        
    }
    else{
        var greencolor = gsap.utils.mapRange(window.innerHeight,wh,255,0,details.clientY)

        gsap.to("body",{
            backgroundColor: `rgb(0, ${greencolor}, 0)`,
            scrub:4
        })
    }
})