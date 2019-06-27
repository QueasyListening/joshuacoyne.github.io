// Animation on page load
const triangles = Array.from(document.getElementsByClassName("triangle"));

window.addEventListener('load', () => {
    triangles.forEach((triangle, i) => {
        if (i === 0) {
            triangle.style.transform = 'scale(1)';
        } else {
            window.setTimeout(() => {
                triangle.style.transform = `rotate(${i*60}deg)`;
            }, 300*i);
        }
    });
    
    window.setTimeout(() => {
        const p = document.getElementsByClassName('p')[0];
        p.style.transform="scale(1) rotate(-30deg)";
        p.style.opacity="1";
    }, 1250);

    window.setTimeout(() => {
        document.getElementById('twinkle').style.animation = 'sparkle 1.5s ease-in';
    }, 2350);
});

// sticky nav on scroll
window.onscroll = scrollCheck;
function scrollCheck() {
    if (window.innerWidth >= 685 && (document.body.scrollTop > 380 || document.documentElement.scrollTop > 380)) {
        document.querySelector('.hexagon').classList.add('small-hex');
        Array.from(document.getElementsByClassName('triangle')).forEach(triangle => {
            triangle.classList.add('small-triangle');
        });
        document.querySelector('.p').classList.add('small-p');
        document.querySelector('header').classList.add('small-header');
        document.querySelector('nav').style.bottom = '5px';
        document.querySelector('.title').style.display = 'none';
        document.querySelector('.phone-number').classList.add('small-phone-number');
    } else {
        document.querySelector('.hexagon').classList.remove('small-hex');
        Array.from(document.getElementsByClassName('triangle')).forEach(triangle => {
            triangle.classList.remove('small-triangle');
        });
        document.querySelector('.p').classList.remove('small-p');
        document.querySelector('header').classList.remove('small-header');
        document.querySelector('nav').style.bottom = '0px';
        document.querySelector('.title').style.display = 'block';
        document.querySelector('.phone-number').classList.remove('small-phone-number');

    }
}

// 
Array.from(document.querySelectorAll('nav ul li a')).forEach(link => {
    link.addEventListener('click', closeMenu);
});

// hamburger button and drop down menu for small screens
document.querySelector('.hamburger-btn').onclick = handleHamburgerClick;
let menuIsOpen = false;
function handleHamburgerClick() {
    console.log(menuIsOpen);
    if (menuIsOpen){
        closeMenu();    
    } else {
        document.querySelector('header').style.height = '438px';
        document.querySelector('nav').style.opacity = 1;
        document.querySelector('nav ul').style.height = '290px';
        document.querySelectorAll('nav ul li').forEach(item => {
          item.style.height = '75px';  
        })
        menuIsOpen = true;
    }
}

function closeMenu() {
    if (window.innerWidth < 685) {
        document.querySelector('header').style.height = '111px';
        document.querySelector('nav').style.opacity = 0;
        document.querySelector('nav ul').style.height = '0px';
        document.querySelectorAll('nav ul li').forEach(item => {
            item.style.height = '0px';
        });
        menuIsOpen = false;  
    }
}

// Carousel
// Variable definitions
const carousel = document.getElementById("carousel");
let slides = Array.from(document.getElementsByClassName("slide"));;
const slideIndicators = Array.from(carousel.getElementsByClassName("slide-indicator"));
let activeIndicatorIndex = 0;
let transitionCompleted = true;
// transition time in seconds for sped up slide change for pagination click transition
const fastTransition = .3;
// delay between slides on the carousel
const carouselDelay = 12000;

// Function Definitions
// function for advancing the carousel forwards
const slideForward = () => {
    if (transitionCompleted) {
        // set flag to false (transition in progress)
        transitionCompleted = false;

        // find index of the last slide in the array
        const lastSlide = slides.length - 1;

        // set the opacity of the second to last slide to 0
        slides[lastSlide - 1].style.opacity = "0";

        // explicitly set the slide coming into frame to opacity = 1
        slides[0].style.opacity = "1";

        // rearange the array to reflect new display configuration
        slides.push(slides.shift());

        positionSlides();

        // update activeIndicatorIndex to reflect current position
        if (activeIndicatorIndex === slides.length - 1)
            activeIndicatorIndex = 0;
        else
            activeIndicatorIndex++;

        setActiveSlideIndicator();
    };
};

// function for advancing the carousel backward to the next slide
const slideBackward = () => {
    if (transitionCompleted) {
        // set flag to false (transition in progress)
        transitionCompleted = false;

        // find index of the last slide in the array
        let lastSlide = slides.length - 1;

        // set the opacity of the third to last slide to 0
        slides[lastSlide - 2].style.opacity = "0";

        // this line is needed to explicitly set the slide that's coming into frame to opacity 1 
        slides[lastSlide - 1].style.opacity = "1";

        // rearange the array to reflect new display configuration
        slides.unshift(slides.pop());

        positionSlides();

        if (activeIndicatorIndex === 0)
            activeIndicatorIndex = slides.length - 1;
        else
            activeIndicatorIndex--;

        setActiveSlideIndicator();
    };
};


// funtion for positioning the slides from an ordered slides array
const positionSlides = () => {
    slideWidth = carousel.getBoundingClientRect().width; 
    const lastSlide = slides.length - 1;

    // set the new last slide to the viewable position
    slides[lastSlide].style.msTransform = "unset";
    slides[lastSlide].style.webkitTransform = "unset";
    slides[lastSlide].style.transform = "unset";

    // All transforms have 6 pixels added to the to account for the 5px border around the carousel
    // set the new second to last slide to the right translated position
    slides[lastSlide - 1].style.msTransform = `translateX(${slideWidth+6}px)`;
    slides[lastSlide - 1].style.webkitTransform = `translateX(${slideWidth+6}px)`;
    slides[lastSlide - 1].style.transform = `translateX(${slideWidth+6}px)`;

    // set the remaining slides to the left translated position
    for (let i = 0; i < lastSlide - 1; i++) {
        slides[i].style.msTransform = `translateX(-${slideWidth+6}px)`;
        slides[i].style.webkitTransform = `translateX(-${slideWidth+6}px)`;
        slides[i].style.transform = `translateX(-${slideWidth+6}px)`;
    };
};

// Function to set the correct triangle to the active state
const setActiveSlideIndicator = () => {
    slideIndicators.forEach((triangle, i) => {
        if (activeIndicatorIndex === i) {
            triangle.style.msTransform = "rotate(-90deg)";
            triangle.style.webkitTransform = "rotate(-90deg)";
            triangle.style.transform = "rotate(-90deg)";
            triangle.style.borderLeft = "6px solid #1A9B7D"
        } else {
            triangle.style.msTransform = "";
            triangle.style.webkitTransform = "";
            triangle.style.transform = "";
            triangle.style.borderLeft = "6px solid white";
        };
    });
};

// Function to handle clicks on the pagination triangles
const handleIndicatorClick = (event) => {
    let newActiveIndicatorIndex;
    // find which triangle was clicked
    slideIndicators.forEach((triangle, i) => {
        if (triangle === event.target) {
            newActiveIndicatorIndex = i; 
        };
    });

    // check to make sure the triangle click isn't the visibile slide and that 
    // we aren't midway through a transition
    if (newActiveIndicatorIndex !== activeIndicatorIndex && transitionCompleted) {
        clearInterval(carouselTimer);
        // set carousel timer to false to indicate that the timer has been cleared
        carouselTimer = false;
        const slideTransition = slides[0].style.transition;
        slides.forEach(slide => {
            slide.style.transition = `transform ${fastTransition}s`;
        });

        let moves = newActiveIndicatorIndex - activeIndicatorIndex
        if (newActiveIndicatorIndex > activeIndicatorIndex) {
            // move forward (new active - active) times with progrssive delays for each move
            for (let i = 0; i < moves; i++) {
                window.setTimeout(() => {
                    // setting transition completed forces action in slideForward()
                    transitionCompleted = true;
                    slideForward() 
                }, fastTransition * 1000 * i);                              
            };
        } else {
            // makes moves positive
            moves *= -1;
            for (let i = 0; i < moves; i++) {
                window.setTimeout(() => {
                    transitionCompleted = true;
                    slideBackward();
                }, fastTransition * 1000 * i);
            };
        };

        window.setTimeout(() => {
            slides.forEach(slide => {
                slide.style.transition = slideTransition;
            });
            if (!carouselTimer)
                carouselTimer = window.setInterval(slideForward, carouselDelay);
        }, fastTransition * 1000 * moves);
    };
};

// Hook up carousel controls
const carouselControls = document.getElementsByClassName('carousel-control');
carouselControls[0].addEventListener('click', slideBackward);
carouselControls[1].addEventListener('click', slideForward);

// function that fires when a transition completes
const completeTransition = () => {
    transitionCompleted = true;
};

// add event listeners that fire when the transition completes
slides.forEach(slide => {
    slide.addEventListener("transitionend", completeTransition);
});

// add event listener for clicks on pagination triangles
slideIndicators.forEach(triangle => {
    triangle.addEventListener("click", handleIndicatorClick);
});

// Set initial position of the carousel slides
positionSlides();
//set initial active pagination triangle
setActiveSlideIndicator(); 

// start timer to advance the carousel on a regular interval
//let carouselTimer = window.setInterval(slideForward, carouselDelay); 