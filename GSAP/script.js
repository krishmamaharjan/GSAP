// make dom completely loaded

document.addEventListener("DOMContentLoaded", (event) => {
    //gsap code here

    let tweenTo = gsap.to(".box1", {
        // x:300,
        // y: 300, 
        // duration: 3, 
        // ease: "elastic", power1.out
        // // ease: "back",sine.out, steps(12), slow(0.7,0.7,true)
        // rotation: 360,
        // backgroundColor: "red",

        x:300,
        duration: 16, 
        ease: "elastic",
        rotation: 300,
        delay: 2,
        onComplete : () => {
            console.log("Animation Completed")
        },
        repeat: 1,
        runBackwards: true,
    });

    // controllers

    document.querySelector("#play").onclick = () => tweenTo.play()
    document.querySelector("#pause").onclick = () => tweenTo.pause()
    document.querySelector("#resume").onclick = () => tweenTo.resume()
    document.querySelector("#reverse").onclick = () => tweenTo.reverse()
    document.querySelector("#restart").onclick = () => tweenTo.restart()

    gsap.from(".box2", {opacity: 0, x:300, duration: 2});

    gsap.fromTo(".box3", {
        opacity:0.2,
        x:0, 
    }, {
        opacity: 1,
        x: 300,
        duration:6
    });



    // Timeline used for sequencing animation

    let tl = gsap.timeline();

    tl.to(".box5", {duration: 4, x: 400, opacity: 0}, "first")
    tl.to(".box6",{ duration: 1, rotation: -360, x: 400, opacity: 0}, "+=2") //positionparameter
    tl.to(".box7", {duration: 3, x: 400, y:200, ease:'expo.out', opacity: 0},"first")


    gsap.to(".box4", {
        duration: 2,
        xPercent: 50,
        yPercent: 50,
        scale:2,
        rotation: 360,
        x: "20vw",
        y: "200",
        borderRadius: "50% 50%",
        borderStyle:"dashed"
    })
})