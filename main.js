var controller = new ScrollMagic.Controller();


var scene = new ScrollMagic.Scene({
  triggerElement: '.contacto',
  duration: "100%",
  triggerHook: 0.25,
  reverse: true,
})
.setClassToggle('.contacto', '.entra')
/* .addIndicators({
  name: 'fade scene',
  colorTrigger: 'gray',
  colorStart: 'blue',
  colorEnd: 'blue',
  indent: 20
}) */
.addTo(controller);











/* 
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.fromTo(
  ".inicio",
  20,
  { xPercent: 0 },
  { xPercent: 100, ease: Linear.easeNone },
  "+=1"
);
tl.fromTo(
  ".book",
  4,
  { yPercent: -1000 },
  { yPercent: 0, ease: Linear.easeNone },
  "+=14"
);
tl.fromTo(
  ".contacto",
  4,
  { yPercent: 1000 },
  { yPercent: 0, ease: Linear.easeNone },
  "+=14"
);

new ScrollMagic.Scene({
  triggerElement: ".book-",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".isol-")
  .setTween(tl)
  .addIndicators({
    colorTrigger: "blue",
    colorStart: "blue",
    colorEnd: "blue",
    indent: 40
  })
  .addTo(controller);
 */