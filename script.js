function loader() {
  var tl = gsap.timeline();

  // First animation: Moving .line h1 with stagger
  tl.from(".line h1", {
    y: 150,
    stagger: 0.5,
    duration: 0.6,
  });

  // Second animation: Fade in #line1-part1 and start a timer animation
  tl.from("#line1-part1", {
    opacity: 0,
    duration: 1, // Set duration to ensure it runs over time
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      var interval = setInterval(function () {
        if (grow <= 100) {
          h5timer.innerHTML = grow++;
        } else {
          clearInterval(interval); // Stop the timer once it hits 100
        }
      }, 30);
    },
  });

  // Third animation: Fade in .line h2 with custom animation
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
    duration: 1, // Set duration for this step
  });

  // Fourth animation: Fade out #loader with easing and move it offscreen
  tl.to("#loader", {
    opacity: 0,
    y: -1500,
    duration: 6.5,
    delay: 2.9,
    ease: "circ.out",
  });

  // Sixth animation: Animate elements inside #page1
  tl.from("#page1 #nav h1, #page1 #nav-part2 h2, #page1 .hero h1", {
    delay: -5.7,
    opacity: 0,
    y: 100,
    duration: 0.8,
    stagger: 0.2,
  });
}

function cursor() {
  document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;

    gsap.to("#crsr", {
      left: x + "px",
      top: y + "px",
      duration: 1.2,
      ease: "elastic.out(1,0.2)",
    });
  });
  var crsr = document.querySelector("#crsr");

  Shery.makeMagnet("#nav-part2 h2,#nav h1");

  const h2Elements = document.querySelectorAll("#nav-part2 h2,#nav h1");

  h2Elements.forEach((h2) => {
    h2.addEventListener("mouseenter", () => {
      gsap.to("#crsr", {
        scale: 1.7,
        boxShadow: "none",
        border: "1px solid rgb(125, 125, 125)",
        backdropFilter: "blur(1px)",
        duration: 0.3,
        ease: Power4,
      });
    });
    h2.addEventListener("mouseleave", () => {
      gsap.to("#crsr", {
        scale: 1,
        boxShadow: "inset 0px 0px 12px white",
        backdropFilter: "blur(2px)",
        duration: 0.3,
        ease: Power4,
      });
    });
  });
}
loader();

cursor();
