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
    duration: 1, // Set duration to ensure it runs over time
    onStart: function () {
      var h5timer = document.querySelector('#line1-part1 h5');
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
  tl.to('.line h2', {
    animationName: 'anime',
    opacity: 1,
    duration: 1, // Set duration for this step
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
      duration: 1.2,
      ease: 'elastic.out(1,0.2)',
    });
  });

  Shery.makeMagnet('#nav-part2 h2,#nav h1,#footer p');

  const h2Elements = document.querySelectorAll(
    '#nav-part2 h2,#nav h1,#footer p'
  );

  h2Elements.forEach((h2) => {
    h2.addEventListener('mouseenter', () => {
      gsap.to('#crsr', {
        scale: 1.7,
        boxShadow: 'none',
        border: '1px solid rgb(125, 125, 125)',
        backdropFilter: 'blur(1px)',
        duration: 0.3,
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
  });
}
function videoCrsr() {
  const vContainer = document.getElementById('video-container');
  const videoCrsr = document.getElementById('video-crsr');
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
      console.log(e);
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

  hero1.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;

    gsap.to(webImg, {
      opacity: 1,
      scale: 1,
      left: x + 'px',
      top: y + 'px',
      duration: 0.5,
      ease: 'elastic,0.3',
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

    gsap.to(webImg, {
      opacity: 1,
      scale: 1,
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

    gsap.to(webImg, {
      opacity: 0,
      duration: 0.5,
      scale: 0,
    });
  });
}

function image() {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const frames = {
    currentIndex: 0,
    maxIndex: 464,
  };
  let imageLoaded = 0;

  const images = new Array(frames.maxIndex); // Pre-allocate array

  function preloadImages() {
    for (let i = 1; i <= frames.maxIndex; i++) {
      const imageUrl = `./hui4/frame_${i.toString().padStart(4, '0')}.jpeg`;
      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        imageLoaded++;
        images[i - 1] = img; // Store at correct index

        if (imageLoaded === frames.maxIndex) {
          loadImage(frames.currentIndex);
          startAnimation();
        }
      };
    }
  }

  function loadImage(index) {
    if (index >= 0 && index < frames.maxIndex) {
      const img = images[index];
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);
      const newWidth = img.width * scale;
      const newHeight = img.height * scale;
      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingQuality = 'high';
      context.imageSmoothingEnabled = true;
      context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
      frames.currentIndex = index;
    }
  }

  function startAnimation() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#page3',
        start: 'top 20%',
        end: 'bottom 5%',
        scrub: 2,
        pin: true,
        markers: true,
      },
    });

    tl.to(frames, {
      currentIndex: frames.maxIndex - 1,
      onUpdate: function () {
        loadImage(Math.floor(frames.currentIndex));
      },
    });
  }

  window.addEventListener('resize', () => {
    loadImage(frames.currentIndex); // Re-render current frame on resize
  });

  preloadImages();
}

// loader();
cursor();
videoCrsr();
page1();
aboutUs();
// image();
// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
