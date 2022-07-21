// Logo fades in
const tl = new TimelineLite();
tl.add(
    TweenLite.to("#logo", 3, {
        opacity: 1,
    })
);

// flight path of Logo
const logoFlightPath = {
    curviness: 1.25,
    autoRotate: false,
    values: [{ x: 0, y: -500 }],
};

// flight path1 of bee-hike
const beeflightPath1 = {
    curviness: 1.25,
    autoRotate: true,
    values: [{ x: 300, y: 0 }],
};
// flight path1 of bee-hike
const beeflightPath2 = {
    curviness: 1.25,
    autoRotate: true,
    values: [{ x: 750, y: 0 }],
};
// flight path1 of bee-hike
const beeflightPath3 = {
    curviness: 1.25,
    autoRotate: true,
    values: [{ x: window.innerWidth + 150, y: 20 }],
};

// bee-stand flight path
const beeStandFlightPath = {
    curviness: 1.25,
    autoRotate: false,
    values: [{ x: -300, y: 0 }],
};
// bee-stand flight path
const beeCycleFlightPath = {
    curviness: 1.25,
    autoRotate: false,
    values: [
        { x: -500, y: 30 },
        { x: -700, y: -40 },
        { x: -900, y: -50 },
        { x: -1000, y: -80 },
        { x: -1600, y: -80 },
    ],
};
// bee-stand flight path
const beeStandBackPath = {
    curviness: 1.25,
    autoRotate: false,
    values: [{ x: 300, y: 0 }],
};

// bee-stand flight path
const beeBoardFlightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: -500, y: 430 },
        { x: -800, y: 510 },
        { x: -850, y: 510 },
        { x: -1000, y: 480 },
        { x: -1600, y: 430 },
    ],
};
// bee-ski flight path
const beeSkiFlightPath = {
    curviness: 1.25,
    autoRotate: false,
    values: [
        { x: 500, y: 110 },
        { x: 800, y: 200 },

        { x: 1000, y: 250 },
        { x: 1500, y: 270 },
    ],
};




// Mountains right path
const mountainsRightPath = {
    curviness: 1.25,
    autoRotate: false,
    values: [{ x: 1000, y: 0 }],
};

// Mountains left path
const mountainsLeftPath = {
    curviness: 1.25,
    autoRotate: false,
    values: [{ x: -1000, y: 0 }],
};

// Foreground comes upward
const foregroundUpward = {
    curviness: 1.25,
    autoRotate: false,
    values: [{ x: 0, y: 500 }],
};


// Tween satrts here ------> logo flightPath
const tween = new TimelineLite();

tween
    .add(
        TweenLite.to("#logo", 1, {
            bezier: logoFlightPath,
            ease: Power1.easeInOut,
        })
    )

    // Text Fades

    .add(
        TweenLite.to("#logo2", 3, {
            opacity: 1,
        })
    )
    .add(
        TweenLite.to(".bee-hike", 1, {
            bezier: beeflightPath1,
            ease: Power1.easeInOut,
        }),
        "-=3"
    )
    .add(
        TweenLite.to("#logo2", 3, {
            opacity: 0,
        })
    )
    .add(
        TweenLite.to("#logo3", 3, {
            opacity: 1,
        })
    )
    .add(
        TweenLite.to(".bee-hike", 1, {
            bezier: beeflightPath2,
            ease: Power1.easeInOut,
        }),
        "-=3"
    )

    .add(
        TweenLite.to("#logo3", 3, {
            opacity: 0,
        })
    )

    .add(
        TweenLite.to(".bee-hike", 1, {
            bezier: beeflightPath3,
            ease: Power1.easeInOut,
        }),
        "-=1"
    )
    .add(
        TweenLite.to(".bee-stand", 1, {
            bezier: beeStandFlightPath,
            ease: Power1.easeInOut,
        }),
        "simultaneous"
    )

    .add(
        TweenLite.to("#logo4", 3, {
            opacity: 1,
        }),
        "simultaneous"
    )
    .add(
        TweenLite.to("#logo4", 3, {
            opacity: 0,
        }),
        "simultaneousback"
    )
    .add(
        TweenLite.to(".bee-stand", 1, {
            bezier: beeStandBackPath,
            ease: Power1.easeInOut,
        }),
        "simultaneousback"
    )

    .add(
        TweenLite.to(".bee-cycle", 7, {
            bezier: beeCycleFlightPath,
            ease: Power1.easeInOut,
        })
    )

    .add(
        TweenLite.to("#logo5", 3, {
            opacity: 1,
            visibility: "visible",
        }),
        "-=5"
    )
    .add(
        TweenLite.to("#logo5", 3, {
            opacity: 0,
        }),
        "-=2"
    )

    .add(
        TweenLite.to("#logo5", 1, {
            visibility: "hidden",
        })
    )
    .add(
        TweenLite.to(".bee-board", 7, {
            bezier: beeBoardFlightPath,
            ease: Power1.easeInOut,
        }),
        "simultaneous2"
    )
    .add(
        TweenLite.to("#logo6", 1, {
            opacity: 1,
        }),
        "simultaneous2"
    )

    .add(
        TweenLite.to("#logo6", 1, {
            opacity: 0,
        }),
        "-=1"
    )

    .add(
        TweenLite.to(".bee-ski", 7, {
            bezier: beeSkiFlightPath,
            ease: Power1.easeInOut,
        }),
        "simultaneous3"
    )
    .add(
        TweenLite.to("#logo7", 3, {
            opacity: 1,
        }),
        "simultaneous3"
    )
    .add(
        TweenLite.to("#logo7", 3, {
            opacity: 0,
        }),
        "-=2"
    )

    .add(
        TweenLite.to("#mountain1", 7, {
            bezier: mountainsRightPath,
            ease: Power1.easeInOut,
        }),
        "right"
    )
    .add(
        TweenLite.to("#mountain3", 7, {
            bezier: mountainsRightPath,
            ease: Power1.easeInOut,
        }),
        "right"
    )
    .add(
        TweenLite.to("#trees1", 7, {
            bezier: mountainsRightPath,
            ease: Power1.easeInOut,
        }),
        "right"
    )
    .add(
        TweenLite.to("#trees2", 7, {
            bezier: mountainsLeftPath,
            ease: Power1.easeInOut,
        }),
        "right"
    )
    // Left movement of left side objects
    .add(
        TweenLite.to("#mountain2", 7, {
            bezier: mountainsLeftPath,
            ease: Power1.easeInOut,
        }),
        "right"
    )
    .add(
        TweenLite.to("#mountainPartial", 7, {
            bezier: mountainsLeftPath,
            ease: Power1.easeInOut,
        }),
        "right"
    )
    .add(
        TweenLite.to("#bushes", 7, {
            bezier: mountainsLeftPath,
            ease: Power1.easeInOut,
        }),
        "right"
    )



















// Scroll Trigger and controller
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 4000,
    triggerHook: 0,
})
    .setTween(tween)
    .setPin(".animation")
    .addTo(controller); 