function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: !0,
        smartphone: {
            smooth: true,
            direction: 'vertical',
        },
        scrollbar: {
            el: document.querySelector('.simplebar-scrollbar'),
        },
    });
    locoScroll.on('scroll', ScrollTrigger.update);
    ScrollTrigger.scrollerProxy('#main', {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y
        }, getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            }
        }, pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed',
    });
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh()
}

function loader() {
    var tl = gsap.timeline();
    tl.from('.line h1', {
        y: 150,
        stagger: 0.5,
        duration: 0.6,
    });
    tl.from('#line1-part1', {
        opacity: 0,
        duration: 1,
        onStart: function() {
            var h5timer = document.querySelector('#line1-part1 h5');
            var grow = 0;
            var interval = setInterval(function() {
                if (grow <= 100) {
                    h5timer.innerHTML = grow++
                } else {
                    clearInterval(interval)
                }
            }, 30)
        },
    });
    tl.to('.line h2', {
        animationName: 'anime',
        opacity: 1,
        duration: 1,
    });
    tl.to('#loader', {
        opacity: 0,
        y: -1500,
        duration: 6.5,
        delay: 2.9,
        ease: 'circ.out',
    });
    tl.from('#page1 #nav h1, #page1 #nav-part2 h2, #page1 .hero h1', {
        delay: -5.7,
        opacity: 0,
        y: 100,
        duration: 0.8,
        stagger: 0.2,
    })
}

function cursor() {
    document.addEventListener('mousemove', function(e) {
        var x = e.clientX;
        var y = e.clientY;
        gsap.to('#crsr', {
            left: x + 'px',
            top: y + 'px',
            duration: 1.5,
            ease: 'elastic.out(1,0.2)',
            rotate: 30,
        })
    });
    Shery.makeMagnet('#nav-part2 h2,#nav h1,#footer p,.blu-div-elem p img,.blu-div-elem p a,.cards');
    const h2Elements = document.querySelectorAll('#nav-part2 h2,#nav h1,#footer p a,.blu-div-elem p img,.blu-div-elem p a,.cards,.cards img');
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
            })
        });
        h2.addEventListener('mouseleave', () => {
            gsap.to('#crsr', {
                scale: 1,
                boxShadow: 'inset 0px 0px 12px white',
                backdropFilter: 'blur(2px)',
                duration: 0.3,
                ease: Power4,
            })
        });
        h2.addEventListener('focus', () => {
            gsap.to('#crsr', {
                scale: 0.5,
                boxShadow: 'inset 0px 0px 15px #ff9999',
                backdropFilter: 'blur(2px)',
                duration: 0.3,
                ease: Power4,
            })
        })
    })
}

function videoCrsr() {
    const vContainer = document.getElementById('video-container');
    const videoCrsr = document.getElementById('video-crsr');
    const videoCrsr2 = document.getElementById('video-crsr2');
    const customCrsr = document.getElementById('crsr');
    const videoImg = document.querySelector('#video-img-container img');
    const video1 = document.querySelector('#video-img-container video:nth-child(2)');
    const video2 = document.querySelector('#video-img-container video:nth-child(3)');
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
            })
        })
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
        })
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
                })
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
                })
            }
        })
    })
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
    })
}

function page1() {
    var hero1 = document.querySelector('.hero3 h1 .web');
    var hero2 = document.querySelector('.hero3 h1 .fe');
    var webImg = document.querySelector('.web_img');
    var webImg22 = document.querySelector('.web_img22');
    hero1.addEventListener('mousemove', function(e) {
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
        })
    });
    hero1.addEventListener('mouseleave', function(e) {
        var x = e.clientX;
        var y = e.clientY;
        gsap.to(webImg, {
            opacity: 0,
            duration: 0.5,
            scale: 0,
        })
    });
    hero2.addEventListener('mousemove', function(e) {
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
        })
    });
    hero2.addEventListener('mouseleave', function(e) {
        var x = e.clientX;
        var y = e.clientY;
        gsap.to(webImg22, {
            opacity: 0,
            duration: 0.5,
            scale: 0,
        })
    })
}

function sheryAnimation() {
    Shery.imageMasker('.cards', {
        mouseFollower: !0,
        text: 'View',
        ease: 'elastic.out(5,5)',
        duration: 3,
    })
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
        scrub: !0,
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
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').replace('/#', '');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            locoScroll.scrollTo(targetSection, {
                duration: 1000,
                easing: [0.25, 0.0, 0.35, 1.0],
                offset: 0,
            })
        }
    })
})