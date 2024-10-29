var tl = gsap.timeline();
var tli = gsap.timeline();

tl.from(".logo", {
  y: -100,
  duration: 1,
  opacity: 0,
});
tli.from("nav li", {
  x: -120,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});
