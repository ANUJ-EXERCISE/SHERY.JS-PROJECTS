
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector("h1")
.addEventListener("mousemove",
    throttleFunction((dets) => {



        var div = document.createElement("div");

        div.setAttribute("class","imagediv");

        document.body.appendChild(div);

        div.style.left=dets.clientX + 'px';
        div.style.top=dets.clientY + 'px';

        setTimeout(() => {
            div.remove(div)
        }, 2000); 


        var img = document.createElement("img")
        img.setAttribute("src","https://images.unsplash.com/photo-1683491753112-604719ba1797?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

        div.appendChild(img)

        var tl = gsap.timeline();

        tl.to(img,{
            y:"0%",
            scrub:4,
            duration:0.6
        })

        tl.to(img,{
            y:"100%",
            scrub:4,
            duration:0.6,
        })



    }, 200));