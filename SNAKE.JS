

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
window.addEventListener("mousemove",
    throttleFunction((details) => {
       
        var div = document.createElement("div");

        div.setAttribute("class","style")

        document.body.appendChild(div)

        div.style.left=details.clientX + 'px';
        div.style.top=details.clientY + 'px';

        gsap.to(div,{
            duration:1,
            ease:Power3,
        })

        gsap.to(div,{
            duration:1,
            opacity:0
        })



        setTimeout(()=>{
            div.remove(div)
        },1000)

        





    }, 50));