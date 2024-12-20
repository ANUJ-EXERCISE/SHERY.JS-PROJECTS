window.addEventListener("mousemove",function(details)
{
   var rect = document.querySelector("#rect");


   var xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    200 + rect.getBoundingClientRect().width/2,
   window.innerWidth - (200 + rect.getBoundingClientRect().width/2),
    details.clientX
);


var yval = gsap.utils.mapRange(
    0,
    window.innerHeight,
    200 + rect.getBoundingClientRect().width/2,
   window.innerHeight - (200 + rect.getBoundingClientRect().width/2),
    details.clientY
);


var rectanglelocation=rect.getBoundingClientRect();
var insiderectval=details.clientX-rectanglelocation.left;

if(insiderectval<rectanglelocation.width/2)
{
    var redcolor = gsap.utils.mapRange(0,
        rectanglelocation.width/2,
        255,
        0,
        insiderectval
    )
        gsap.to("#rect",{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power3
        })
    
}

else
{
    var redcolor = gsap.utils.mapRange(rectanglelocation.width/2,
        rectanglelocation.width,
        0,
        255,
        insiderectval
    )
        gsap.to("#rect",{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power3
        })
}

   gsap.to("#rect",{
    left:xval,
    top:yval,
    ease:Power3,
   });
})