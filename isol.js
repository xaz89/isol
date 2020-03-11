 gsap.to(".inicio", {
     duration: 1,
     opacity: 1,
     scale: 0.95,

 }, 1.5);
 gsap.to(".isol", {
     duration: 1,
     opacity: 0.5,
     scale: 200,

 });
 var tl = gsap.timeline();
 //sequenced one-after-the-other
 tl.to("body", {
     duration: 1,
     backgroundColor: "#fff",
     // borderRadius: "20px",
     border: "0px solid white",
     ease: "ease-in",
     color: "#fff",
 }) //notice that there's no semicolon!
     .to(".isol", {
         duration: 1,
         opacity: 1,
         scale: 1,
         // rotation: 160 * Math.PI / 180
     }, 0.5)
     .fromTo(".izquierda p", {
         duration: 0,
         x: "-1500%",

     },
         {
             stagger: {
                 each: .05,
                 from: "random"
             },
             x: 0,
         }, 1)
     .fromTo(".derecha p", {
         duration: 0,
         x: "1500%",
     },
         {
             stagger: 0.05,
             x: 0,
         }, 1)
 //   .to(".contacto", {duration: 3, rotation: 360});





 /* gsap.to("body", {
     duration: 2,
     backgroundColor: "#fff",
     borderRadius: "20px",
     border: "0px solid white",
     ease: "ease-in",
     color: "#fff",
     fill: "blue",
 });
  gsap.to(".isol", {
     duration: 1,
     opacity: 0.5,
     scale: 2.5
 });  */
function book() {
    gsap.to("body", {
        backgroundColor: "#f1f1f1",
    });
    gsap.fromTo(".book", {
        width: "100%",
        x: 0,
    },
        {
            duration: 1.5,
            width: 0,
            ease: "power4",
            x: "-100%",
        });
    gsap.fromTo(".contacto", {
        width: 0,
        x: 0,
    },
        {
            duration: 1.5,
            width: "100%",
            ease: "power4",
            x: "100%",
    });
    gsap.to(".portafolio", {
        y:"-100%",
    }, )
}; 



function redes() {
    gsap.to("body", {
        backgroundColor: "#f1f1f1",
    });
    gsap.fromTo(".book", {
        width: "100%",
        x: 0,
    },
        {
            duration: 1.5,
            width: 0,
            ease: "power4",
            x: "-100%",
        });
    gsap.fromTo(".contacto", {
        width: 0,
        x: 0,
    },
        {
            duration: 1.5,
            width: "100%",
            ease: "power4",
            x: "100%",
    });
    gsap.to(".portafolio", {
        y:"100%",
    }, );
    gsap.to(".redes", {
        y:"-200%",
    }, )
}; 



 gsap.fromTo(".contacto", {
     width: 0,
     x: 300,
 },
     {
         duration: 1.5,
         width: "100%",
         ease: "power3.out",
         x: 0,
     });
 gsap.fromTo(".book", {
     width: 0,
     x: -300,
 },
     {
         duration: 1.5,
         width: "100%",
         ease: "power3.out",
         x: 0,
     });
 // gsap.to("#isol-trazo", { duration: 1, morphSVG: "#isol-trazo2" });
 // gsap.to(".isol", {duration: 1, rotation: 160 * Math.PI / 180});


/* 
var tl = gsap.timeline();

 tl.fromTo(".inicio", {
     opacity: 0,
     scale: 1,

 },
 {
    duration: 1,
    opacity: 1,
    scale: 0.95,
 }, 0);
 tl.fromTo(".isol", {
     opacity: 1,
     scale: 100,

    },
    {
       duration: 0.5,
       opacity: 1,
       scale: 0.95,
    }, 1.5); */