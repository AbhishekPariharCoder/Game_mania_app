function pageoneAnimation() {
  var tl = gsap.timeline();

  tl.from("nav h1", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 1,
    stagger: true,
  });

  tl.from("nav h4, nav button", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
  });

  tl.from(".center-part1 h1", {
    x: -400,
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".center-part1 p", {
    x: -400,
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.3,
  });

  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
      x: 200,
    },
    "-=1"
  );

  tl.from(".section1bottom img", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
    delay:1
  });

  tl.from(". img", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
  });
}



var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",
    start: "top 50%",
    scrub: 2,
    end: "top 0",
  }
});

tl2.from(".services", {
  y: 50,
  duration: 0.8,
  opacity: 0,
});

tl2.from(
  ".elem.line1.left",
  {
    x: -500,
    duration: 0.8,
    opacity: 0,
  },
  "amine"
);

tl2.from(
  ".elem.line1.right",
  {
    x: 500,
    duration: 0.8,
    opacity: 0,
  },
  "amine"
);

tl2.from(
  ".elem.line2.left",
  {
    x: -500,
    duration: 0.8,
    opacity: 0,
  },
  "anime"
);

tl2.from(
  ".elem.line2.right",
  {
    x: 500,
    duration: 0.8,
    opacity: 0,
  },
  "anime"
);

tl2.from(
  ".elem.line3.left",
  {
    x: -500,
    duration: 0.8,
    opacity: 0,
  },
  "amine2"
);

tl2.from(
  ".elem.line3.right",
  {
    x: 500,
    duration: 0.8,
    opacity: 0,
  },
  "amine2"
);

tl2.from(
  ".elem.line4.left",
  {
    x: -500,
    duration: 0.8,
    opacity: 0,
  },
  "anime2"
);

tl2.from(
  ".elem.line4.right",
  {
    x: 500,
    duration: 0.8,
    opacity: 0,
  },
  "anime2"
);



pageoneAnimation();