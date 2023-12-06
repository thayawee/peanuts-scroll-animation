gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const sections = gsap.utils.toArray("section");
  //   console.log(sections.length);

  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      start: "top top",
      end: 7000,
      // markers: true,
    },
  });

  gsap.to(".logo", {
    fontSize: "2.5rem",
    webkitTextStrokeWidth: "0.3rem",
    top: "2rem",
    left: "4rem",
    scrollTrigger: {
      trigger: ".logo",
      scrub: 1,
      start: "center 40%",
      end: "center 5%",
      // markers: true,
    },
  });

  document.querySelectorAll(".character").forEach((el) => {
    gsap.to(el.querySelector(".description"), {
      x: 0,
      y: 0,
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector(".description"),
        scrub: 1,
        start: "top bottom",
        end: "top 30%",
        // markers: true,
      },
    });

    gsap.to(el.querySelector(".quote"), {
      y: 0,
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector(".quote"),
        scrub: 1,
        start: "top bottom",
        end: "top 70%",
        // markers: true,
      },
    });

    gsap.to(el.querySelector(".appearance"), {
      y: 0,
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector(".appearance"),
        scrub: 1,
        start: "top bottom",
        end: "top 85%",
        // markers: true,
      },
    });

    gsap.to(el.querySelector(".block"), {
      opacity: 1,
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector(".block"),
        scrub: 1,
        start: "top bottom",
        end: "top",
        // markers: true,
      },
    });

    gsap.to(el.querySelector(".backdrop"), {
      width: "40rem",
      height: "40rem",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector(".backdrop"),
        scrub: 1,
        start: "center bottom",
        end: "center 50%",
        // markers: true,
      },
    });

    gsap.to(el.querySelector("img"), {
      y: -90,
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector("img"),
        scrub: 1,
        start: "top bottom",
        end: "top 50%",
        // markers: true,
      },
    });

    gsap.to(el.querySelector(".name"), {
      y: 150,
      opacity: 1,
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector(".name"),
        scrub: 1,
        start: "top 50%",
        end: "top 20%",
        // markers: true,
      },
    });
  });
});
