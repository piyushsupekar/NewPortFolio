var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.5,
  duration: 0.6,
  //   delay: 0.5,
});
tl.from("#line1-part1", {
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector("#line1-part1 h5");
    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 30);
  },
});
tl.to(".line h2", {
  animationName: "anime",
  opacity: 1,
});
tl.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 2.8,
});
gsap.from("#p1", {
  delay: 5,
  y: 1500,
  x: 1700,
  opacity: 1,
  duration: 1.5,
  ease: Power4,
});

gsap.to("#p1", {
  delay: 5,
  y: -1500,
  x: -1700,
  opacity: 0,
  duration: 1.3,
  ease: Power4,
  display: "none",
});
tl.to("#loader", {
  display: "none",
});
