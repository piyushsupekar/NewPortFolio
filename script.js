function locomotive() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    // lerp: 0.04,
    smoothMobile: true,
    scrollbar: {
      el: document.querySelector('.simplebar-scrollbar'),
    },
  });
  locoScroll.on('scroll', ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "##main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy('#main', {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector('#main').style.transform
      ? 'transform'
      : 'fixed',
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
function loader() {
  var tl = gsap.timeline();

  // First animation: Moving .line h1 with stagger
  tl.from('.line h1', {
    y: 150,
    stagger: 0.5,
    duration: 0.6,
  });

  // Second animation: Fade in #line1-part1 and start a timer animation
  tl.from('#line1-part1', {
    opacity: 0,
    duration: 1,
    onStart: function () {
      var h5timer = document.querySelector('#line1-part1 h5');
      var grow = 0;
      var interval = setInterval(function () {
        if (grow <= 100) {
          h5timer.innerHTML = grow++;
        } else {
          clearInterval(interval);
        }
      }, 30);
    },
  });

  // Third animation: Fade in .line h2 with custom animation
  tl.to('.line h2', {
    animationName: 'anime',
    opacity: 1,
    duration: 1,
  });

  // Fourth animation: Fade out #loader with easing and move it offscreen
  tl.to('#loader', {
    opacity: 0,
    y: -1500,
    duration: 6.5,
    delay: 2.9,
    ease: 'circ.out',
  });

  // Sixth animation: Animate elements inside #page1
  tl.from('#page1 #nav h1, #page1 #nav-part2 h2, #page1 .hero h1', {
    delay: -5.7,
    opacity: 0,
    y: 100,
    duration: 0.8,
    stagger: 0.2,
  });
}

function cursor() {
  document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;

    gsap.to('#crsr', {
      left: x + 'px',
      top: y + 'px',
      duration: 1.5,
      ease: 'elastic.out(1,0.2)',
      rotate: 30,
    });
  });

  Shery.makeMagnet(
    '#nav-part2 h2,#nav h1,#footer p,.blu-div-elem p img,.blu-div-elem p a,.cards'
  );

  const h2Elements = document.querySelectorAll(
    '#nav-part2 h2,#nav h1,#footer p a,.blu-div-elem p img,.blu-div-elem p a,.cards,.cards img'
  );
  h2Elements.forEach((h2) => {
    h2.addEventListener('mouseenter', () => {
      gsap.to('#crsr', {
        scale: 1.7,
        boxShadow: 'none',
        border: '1px solid rgb(125, 125, 125)',
        backdropFilter: 'blur(0px)',
        duration: 0.3,
        cursor: 'none',
        ease: Power4,
      });
    });
    h2.addEventListener('mouseleave', () => {
      gsap.to('#crsr', {
        scale: 1,
        boxShadow: 'inset 0px 0px 12px white',
        backdropFilter: 'blur(2px)',
        duration: 0.3,
        ease: Power4,
      });
    });
    h2.addEventListener('focus', () => {
      gsap.to('#crsr', {
        scale: 0.5,
        boxShadow: 'inset 0px 0px 15px #ff9999',
        backdropFilter: 'blur(2px)',
        duration: 0.3,
        ease: Power4,
      });
    });
  });
}

function videoCrsr() {
  const vContainer = document.getElementById('video-container');
  const videoCrsr = document.getElementById('video-crsr');
  const videoCrsr2 = document.getElementById('video-crsr2');
  const customCrsr = document.getElementById('crsr');
  const videoImg = document.querySelector('#video-img-container img');
  const video1 = document.querySelector(
    '#video-img-container video:nth-child(2)'
  );
  const video2 = document.querySelector(
    '#video-img-container video:nth-child(3)'
  );
  let videos = [video1, video2];

  vContainer.addEventListener('mouseenter', () => {
    gsap.to(customCrsr, {
      opacity: 0,
      duration: 0.3,
      scale: 0,
    });

    vContainer.addEventListener('mousemove', (e) => {
      var x = e.clientX;
      var y = e.clientY;
      gsap.to(videoCrsr, {
        delay: 0.01,
        left: x + 'px',
        top: y + 'px',
        duration: 0.5,
        x: -340,
        y: -120,
      });
    });
  });

  vContainer.addEventListener('mouseleave', () => {
    gsap.to(videoCrsr, {
      left: '50%',
      top: '-10%',
      duration: 1.2,
      ease: 'power3.out',
      x: 'unset',
      y: 'unset',
    });
    gsap.to(customCrsr, {
      opacity: 1,
      duration: 0.3,
      scale: 1,
    });
  });

  videoImg.addEventListener('click', () => {
    gsap.to(videoImg, {
      opacity: 0,
      duration: 0.2,
    });
    videos.forEach((video) => {
      if (video.paused) {
        gsap.to(video2, {
          opacity: 1,
          duration: 0.2,
        });
        video.play();
        gsap.to(videoCrsr, {
          opacity: 0,
          duration: 0.2,
        });
        gsap.to(videoCrsr2, {
          opacity: 0,
          duration: 0.2,
        });
      } else {
        video.pause();
        gsap.to(videoCrsr, {
          opacity: 1,
          duration: 0.2,
        });
        gsap.to(videoImg, {
          delay: 1,
          opacity: 1,
          duration: 0.2,
        });
        gsap.to(video2, {
          opacity: 0,
          duration: 0.2,
        });
      }
    });
  });
}

function aboutUs() {
  var tl = gsap.timeline();
  var h1About = document.querySelector('#page4-content h1');
  var para = document.querySelectorAll('#page4-content p');
  var underline = document.querySelectorAll('.underline');
  tl.from(h1About, {
    y: 100,
    scale: 1,
    opacity: 0,
    duration: 0.8,
  });
  tl.from(underline, {
    x: 1500,
    opacity: 0,
    duration: 2,
  });
  tl.from(para, {
    y: 1000,
    scale: 1,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
  });
}

function page1() {
  var hero1 = document.querySelector('.hero3 h1 .web');
  var hero2 = document.querySelector('.hero3 h1 .fe');
  var webImg = document.querySelector('.web_img');
  var webImg22 = document.querySelector('.web_img22');

  hero1.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;

    gsap.to(webImg, {
      opacity: 1,
      scale: 1.2,
      left: x + 'px',
      top: y + 'px',
      duration: 0.5,
      ease: 'elastic,0.2',
      transform: 'translate(-50%, -50%)',
    });
  });
  hero1.addEventListener('mouseleave', function (e) {
    var x = e.clientX;
    var y = e.clientY;

    gsap.to(webImg, {
      opacity: 0,
      duration: 0.5,
      scale: 0,
    });
  });
  hero2.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;

    gsap.to(webImg22, {
      opacity: 1,
      scale: 1.2,
      left: x + 'px',
      top: y + 'px',
      duration: 0.5,
      ease: 'elastic,0.3',
      transform: 'translate(-50%, -50%)',
    });
  });
  hero2.addEventListener('mouseleave', function (e) {
    var x = e.clientX;
    var y = e.clientY;

    gsap.to(webImg22, {
      opacity: 0,
      duration: 0.5,
      scale: 0,
    });
  });
}
function sheryAnimation() {
  // Shery.imageEffect('.cards', {
  //   style: 3,
  //   // debug: true,
  //   gooey: true,
  // });
  // Shery.imageEffect('.web_img', {
  //   style: 3,
  //   debug: true,
  //   // gooey: true,
  //   // config: {
  //   //   a: { value: 2, range: [0, 30] },
  //   //   b: { value: 0.75, range: [-1, 1] },
  //   //   zindex: { value: -9996999, range: [-9999999, 9999999] },
  //   //   aspect: { value: 0.7241195453907675 },
  //   //   gooey: { value: true },
  //   //   infiniteGooey: { value: false },
  //   //   growSize: { value: 4, range: [1, 15] },
  //   //   durationOut: { value: 1, range: [0.1, 5] },
  //   //   durationIn: { value: 1.5, range: [0.1, 5] },
  //   //   displaceAmount: { value: 0.5 },
  //   //   masker: { value: true },
  //   //   maskVal: { value: 1.23, range: [1, 5] },
  //   //   scrollType: { value: 0 },
  //   //   geoVertex: { range: [1, 64], value: 1 },
  //   //   noEffectGooey: { value: true },
  //   //   onMouse: { value: 0 },
  //   //   noise_speed: { value: 0.5, range: [0, 10] },
  //   //   metaball: { value: 0.33, range: [0, 2] },
  //   //   discard_threshold: { value: 0.5, range: [0, 1] },
  //   //   antialias_threshold: { value: 0.01, range: [0, 0.1] },
  //   //   noise_height: { value: 0.5, range: [0, 2] },
  //   //   noise_scale: { value: 10, range: [0, 100] },
  //   // },
  // });
  // Shery.hoverWithMediaCircle('.cards' /* Element to target.*/, {
  //   images: [''],
  // });
  Shery.imageMasker('.cards' /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: 'View',
    ease: 'elastic.out(5,5)',
    duration: 3,
  });
  // Shery.imageEffect('.web_img', {
  //   style: 3,
  // });
}

loader();
cursor();
videoCrsr();
page1();
aboutUs();
locomotive();
sheryAnimation();
gsap.to('#page1 .hero, .mouse-scroll i , .mouse-scroll h2', {
  opacity: 0,
  scale: 0,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: '#page1',
    start: 'top -70vh',
    end: 'bottom end',
    scrub: true,
    scroller: '#main',
  },
});
gsap.from('#page2 #video-container', {
  opacity: 0,
  x: 1000,
  scale: 0.5,
  stagger: 5,
  duration: 4,
  scrollTrigger: {
    trigger: '#page2',
    start: 'top 100%',
    end: 'top 40%',
    scrub: 5,
    scroller: '#main',
  },
});
document.querySelectorAll('a[href^="/#"]').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href').replace('/#', '');
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      locoScroll.scrollTo(targetSection, {
        duration: 1000, // Duration of the smooth scroll (in ms)
        easing: [0.25, 0.0, 0.35, 1.0], // Custom easing
        offset: 0, // Optional offset (e.g., for fixed headers)
      });
    }
  });
});
