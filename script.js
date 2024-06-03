

// let x = document.getElementById("tester");
// let a = document.getElementById("aa");



// zuzu = document.getElementById("aa"); 
 
// zuzu.addEventListener("scroll", mafaka);


// function mafaka() {
   

//    console.log( "asd");
// }   




// x.addEventListener ("scroll" , myfun);
// // x.addEventListener ("mouseover" , my);

// let z = 0;
// function myfun() {
    
//     z += 1;
//     let e; 

//     if (z == 2) {
//         x.style.background = "blue" ;
//         x.style.opacity = "0.9" ;

//     }
//     if (z == 3) {
//         x.style.background = "blue" ;
//         x.style.opacity = "0.8" ;

//     }

//     if (z == 4) {
//         x.style.background = "blue" ;
//         x.style.opacity = "0.7" ;

//     }
//     if (z == 5) {
//         x.style.background = "blue" ;
//         x.style.opacity = "0.6" ;

//     }

//     if (z == 10) {
//         x.style.background = "blue" ;
//         x.style.opacity = "0.5" ;

//     }

//     if (z == 20) {
//         x.style.background = "blue" ;
//         x.style.opacity = "0.4" ;

//     }
//     if (z == 25) {
//         x.style.background = "blue" ;
//         x.style.opacity = "0.3" ;

//     }
//     if (z == 30) {
//         x.style.background = "blue" ;
//         x.style.opacity = "0.2" ;

//     }
//     if (z == 35) {
//         x.style.background = "blue" ;
//         x.style.opacity = "0.1" ;

//     }

    
//     if (z > 40) {
//         x.style.background = "none" ;
//         x.style.opacity = "0" ;


//     }

//     if (z > 50 ) {
//         x.style.background = "none" ;
//         x.style.opacity = "1" ;
//         z = 0;

//     }

//     document.getElementById("demo").innerHTML = z;
   


// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// gsap.registerPlugin(ScrollTrigger);

// const slides = document.querySelectorAll(".slide");
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".scroll-trigger",
//     start: "top top",
//     end: "+=300%",
//     pin: true,
//     scrub: true,
//     snap: 1 / (slides.length - 1),
//     onUpdate: self => {
//       // Fade out previous slide
//       slides.forEach((slide, i) => {
//         const slidePosition = self.progress - i / slides.length;
//         gsap.to(slide, {
//           opacity: 1 - Math.abs(slidePosition) * slides.length,
//           duration: 0.2,
//         });
//       });
//     },
//   },
// });

// // Animate each slide in sequence
// slides.forEach((slide, i) => {
//   tl.fromTo(slide, { opacity: 0 }, { opacity: 1, duration: 1 }, i);
//   tl.to(slide, { opacity: 0, duration: 1 }, i + 1 - 0.5);
// });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener("scroll", handleScroll);

// const slides = document.querySelectorAll(".slide");
// const container = document.querySelector(".scroll-container");
// let currentIndex = 0;
// let isLocked = false;

// function handleScroll() {
//     if (isLocked) return;
//     if (window.scrollY >= container.offsetTop && window.scrollY < container.offsetTop + container.offsetHeight) {
//         isLocked = true;
//         document.body.style.overflow = "hidden";
//         showSlide(currentIndex);
//     }
// }

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.remove("active");
//         if (i === index) {
//             slide.classList.add("active");
//         }
//     });

//     setTimeout(() => {
//         currentIndex++;
//         if (currentIndex < slides.length) {
//             showSlide(currentIndex);
//         } else {
//             unlockScroll();
//         }
//     }, 3000); // Change slides every 3 seconds
// }

// function unlockScroll() {
//     isLocked = false;
//     document.body.style.overflow = "auto";
//     document.removeEventListener("scroll", handleScroll);
// }

// // Initial call to lock the scroll and start the slide show
// handleScroll();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener("scroll", handleScroll);

// const slides = document.querySelectorAll(".slide");
// const container = document.querySelector(".scroll-container");
// let currentIndex = 0;
// let isLocked = false;

// function handleScroll() {
//     if (window.scrollY >= container.offsetTop && window.scrollY < container.offsetTop + container.offsetHeight) {
//         if (!isLocked) {
//             isLocked = true;
//             document.body.style.overflow = "hidden";
//             showSlide(currentIndex);
//         }
//     } else if (window.scrollY < container.offsetTop) {
//         resetSlides();
//     }
// }

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.remove("active");
//         if (i === index) {
//             slide.classList.add("active");
//         }
//     });

//     setTimeout(() => {
//         currentIndex++;
//         if (currentIndex < slides.length) {
//             showSlide(currentIndex);
//         } else {
//             unlockScroll();
//         }
//     }, 1000); // Change slides every 1 second
// }

// function resetSlides() {
//     isLocked = false;
//     currentIndex = 0;
//     slides.forEach(slide => slide.classList.remove("active"));
//     document.body.style.overflow = "auto";
// }

// function unlockScroll() {
//     isLocked = false;
//     document.body.style.overflow = "auto";
//     document.removeEventListener("scroll", handleScroll);
//     document.addEventListener("scroll", handleScroll);
// }

// // Initial call to lock the scroll and start the slide show
// handleScroll();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener("scroll", handleScroll);

// const slides = document.querySelectorAll(".slide");
// const container = document.querySelector(".scroll-container");
// let currentIndex = 0;
// let isLocked = false;

// function handleScroll() {
//     if (window.scrollY >= container.offsetTop && window.scrollY < container.offsetTop + container.offsetHeight) {
//         if (!isLocked) {
//             isLocked = true;
//             document.body.style.overflow = "hidden";
//             showSlide(currentIndex);
//         }
//     } else if (window.scrollY < container.offsetTop) {
//         resetSlides();
//     }
// }

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.remove("active");
//         if (i === index) {
//             slide.classList.add("active");
//         }
//     });

//     setTimeout(() => {
//         currentIndex++;
//         if (currentIndex < slides.length) {
//             showSlide(currentIndex);
//         } else {
//             currentIndex = 0;
//             unlockScroll();
//         }
//     }, 1000); // Change slides every 1 second
// }

// function resetSlides() {
//     isLocked = false;
//     currentIndex = 0;
//     slides.forEach(slide => slide.classList.remove("active"));
//     document.body.style.overflow = "auto";
// }

// function unlockScroll() {
//     isLocked = false;
//     document.body.style.overflow = "auto";
//     document.removeEventListener("scroll", handleScroll);
//     document.addEventListener("scroll", handleScroll);
// }

// // Initial call to lock the scroll and start the slide show
// handleScroll();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener("scroll", handleScroll);

// const slides = document.querySelectorAll(".slide");
// const container = document.querySelector(".scroll-container");
// let currentIndex = 0;
// let isLocked = false;

// function handleScroll() {
//     if (window.scrollY >= container.offsetTop && window.scrollY < container.offsetTop + container.offsetHeight) {
//         if (!isLocked) {
//             isLocked = true;
//             document.body.style.overflow = "hidden";
//             showSlide(currentIndex);
//         }
//     } else if (window.scrollY < container.offsetTop) {
//         resetSlides();
//     }
// }

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.remove("active");
//         if (i === index) {
//             slide.classList.add("active");
//         }
//     });

//     setTimeout(() => {
//         currentIndex++;
//         if (currentIndex < slides.length) {
//             showSlide(currentIndex);
//         } else {
//             currentIndex = 0;
//             unlockScroll();
//         }
//     }, 1000); // Change slides every 1 second
// }

// function resetSlides() {
//     isLocked = false;
//     currentIndex = 0;
//     slides.forEach(slide => slide.classList.remove("active"));
//     document.body.style.overflow = "auto";
// }

// function unlockScroll() {
//     isLocked = false;
//     document.body.style.overflow = "auto";
//     document.addEventListener("scroll", handleScroll);
// }

// // Initial call to lock the scroll and start the slide show
// handleScroll();







// document.addEventListener("DOMContentLoaded", function() {
//     const slides = document.querySelectorAll(".slide");
//     const container = document.querySelector(".scroll-container");
//     let currentIndex = 0;
//     let isLocked = false;

//     function handleScroll() {
//         const containerTop = container.offsetTop;
//         const containerBottom = containerTop + container.offsetHeight;
//         const scrollTop = window.scrollY;

//         if (scrollTop >= containerTop && scrollTop < containerBottom) {
//             if (!isLocked) {
//                 isLocked = true;
//                 document.body.style.overflow = "hidden";
//                 showSlide(currentIndex);
//             }
//         } else if (scrollTop < containerTop) {
//             resetSlides();
//         }
//     }

//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.classList.remove("active");
//             if (i === index) {
//                 slide.classList.add("active");
//             }
//         });

//         setTimeout(() => {
//             currentIndex++;
//             if (currentIndex < slides.length) {
//                 showSlide(currentIndex);
//             } else {
//                 currentIndex = 0;
//                 unlockScroll();
//             }
//         }, 1000); // Change slides every 1 second
//     }

//     function resetSlides() {
//         isLocked = false;
//         currentIndex = 0;
//         slides.forEach(slide => slide.classList.remove("active"));
//         document.body.style.overflow = "auto";
//     }

//     function unlockScroll() {
//         isLocked = false;
//         document.body.style.overflow = "auto";
//         document.addEventListener("scroll", handleScroll);
//     }

//     // Initial call to lock the scroll and start the slide show
//     handleScroll();
// });



























//////goood oneeeeeeeeeeeeeeeeeeeeeeeee /////////////////////////////////////////////////

// gsap.registerPlugin(ScrollTrigger);

// const slides = gsap.utils.toArray(".slide");
// let currentIndex = 0;
// let isSlideshowRunning = false;

// ScrollTrigger.create({
//     trigger: ".scroll-container",
//     start: "top 80%", // Adjust this threshold if needed
//     onEnter: () => {
//         startSlideShow();
//     },
//     onLeaveBack: () => {
//         stopSlideShow();
//     }
// });

// function startSlideShow() {
//     isSlideshowRunning = true;
//     showSlide(currentIndex);
// }

// function showSlide(index) {
//     const currentSlide = slides[index];
//     const nextIndex = (index + 1) % slides.length;
//     const nextSlide = slides[nextIndex];

//     gsap.set(slides, { yPercent: -100 });
//     gsap.to(currentSlide, { yPercent: 100, duration: 1 });
//     gsap.from(nextSlide, { yPercent: 0, duration: 1, onComplete: () => {
//         currentIndex = nextIndex;
//         if (isSlideshowRunning) {
//             showSlide(nextIndex);
//         }
//     }});
// }

// function stopSlideShow() {
//     isSlideshowRunning = false;
// }


///////////////////////////////////////////////////////////////
// gsap.registerPlugin(ScrollTrigger);

// const slides = gsap.utils.toArray(".slide");
// let currentIndex = 0;

// ScrollTrigger.create({
//     trigger: ".scroll-container",
//     start: "top 80%", // Adjust this threshold if needed
//     onEnter: () => {
//         showSlide(currentIndex);
//     },
// });

// function showSlide(index) {
//     const currentSlide = slides[index];
//     const nextIndex = (index + 1) % slides.length;
//     const nextSlide = slides[nextIndex];

//     gsap.set(slides, { x: "100%" }); // Start slides from right
//     gsap.to(currentSlide, { x: "-100%", duration: 1 });
//     gsap.to(nextSlide, { x: "0%", duration: 1, onComplete: () => {
//         currentIndex = nextIndex;
//     }});
// }

// /////////////////////////////////////////////////////////////NEWWWWWW////////////////////////////////////////////////////////////////////////////////////////








// const contents = document.querySelectorAll('.content');
// let currentIndex = 0;

// window.addEventListener('scroll', () => {
//     const scrollTop = window.pageYOffset;
//     const scrollHeight = window.innerHeight;
//     const sectionTop = document.querySelector('.scroll-capture').offsetTop;
    
//     if (scrollTop >= sectionTop && scrollTop < (sectionTop + scrollHeight)) {
//         const newIndex = Math.floor((scrollTop - sectionTop) / scrollHeight);
//         if (newIndex !== currentIndex) {
//             currentIndex = newIndex;
//             showContent(currentIndex);
//         }
//     }
// });

// function showContent(index) {
//     contents.forEach(content => {
//         content.classList.remove('active');
//     });
//     contents[index].classList.add('active');
// }
///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////

// gsap.registerPlugin(ScrollTrigger);

// const slides = document.querySelectorAll(".slide");
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".scroll-trigger",
//     start: "top top",
//     end: "+=300%",
//     pin: true,
//     scrub: true,
//     snap: 1 / (slides.length - 1),
//     onUpdate: self => {
//       // Fade out previous slide
//       slides.forEach((slide, i) => {
//         const slidePosition = self.progress - i / slides.length;
//         gsap.to(slide, {
//           opacity: 1 - Math.abs(slidePosition) * slides.length,
//           duration: 0.2,
//         });
//       });
//     },
//   },
// });

// // Animate each slide in sequence
// slides.forEach((slide, i) => {
//   tl.fromTo(slide, { opacity: 0 }, { opacity: 1, duration: 1 }, i);
//   tl.to(slide, { opacity: 0, duration: 1 }, i + 1 - 0.5);
// });


// gsap.registerPlugin(ScrollTrigger);

// const slides = document.querySelectorAll(".slide");
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".scroll-trigger",
//     start: "top top",
//     end: "+=300%",
//     pin: true,
//     scrub: true,
//     snap: 1 / (slides.length - 1),
//     onUpdate: ({ progress }) => {
//       // Fade out previous slide
//       slides.forEach((slide, i) => {
//         const slidePosition = progress - i / slides.length;
//         gsap.to(slide, {
//           opacity: 1 - Math.abs(slidePosition) * slides.length,
//           duration: 0.2,
//           ease: "power2.inOut", // added ease for a smoother animation
//         });
//       });
//     },
//   },
// });

// // Animate each slide in sequence
// slides.forEach((slide, i) => {
//   const delay = i;
//   const duration = 1;
//   tl.fromTo(slide, { opacity: 0 }, { opacity: 1, duration }, delay);
//   tl.to(slide, { opacity: 0, duration }, delay + 0.5);
// });


//////////////////////////////////////////////////gooood //////////////////////////////////////////////

// gsap.registerPlugin(ScrollTrigger);

// const slides = document.querySelectorAll(".slide");
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".scroll-trigger",
//     start: "top top",
//     end: "+=300%",
//     pin: true,
//     scrub: true,
//     snap: 1 / (slides.length - 1),
//     onUpdate: ({ progress }) => {
//       // Fade out previous slide
//       slides.forEach((slide, i) => {
//         const slidePosition = progress - i / slides.length;
//         gsap.to(slide, {
//           opacity: 1 - Math.abs(slidePosition) * slides.length,
//           duration: 0.2,
//           ease: "power2.inOut",
//         });
//       });
//     },
//   },
// });

// // Animate each slide in sequence
// slides.forEach((slide, i) => {
//   const delay = i;
//   const duration = 1;
//   tl.fromTo(slide, { opacity: 0 }, { opacity: 1, duration }, delay);
//   tl.to(slide, { opacity: 0, duration }, delay + 0.5);
// });

// // Add a debounce function to prevent the animation from bugging out when scrolling too fast
// const debounce = (func, wait) => {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), wait);
//   };
// };

// const handleScroll = debounce(() => {
//   // Update the scroll position manually
//   const scrollTrigger = document.querySelector(".scroll-trigger");
//   const scrollPosition = window.pageYOffset;
//   scrollTrigger.style.transform = `translateY(${scrollPosition}px)`;
// }, 100);

// window.addEventListener("scroll", handleScroll);


//////////////////////////////////////////////////gooood //////////////////////////////////////////////

// gsap.registerPlugin(ScrollTrigger);

// const slides = document.querySelectorAll(".slide");
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".scroll-trigger",
//     start: "top top",
//     end: "+=300%",
//     pin: true,
//     scrub: true,
//     snap: 1 / (slides.length - 1),
//     onUpdate: ({ progress }) => {
//       // Fade out previous slide
//       slides.forEach((slide, i) => {
//         const slidePosition = progress - i / slides.length;
//         gsap.to(slide, {
//           opacity: 1 - Math.abs(slidePosition) * slides.length,
//           duration: 0.2,
//           ease: "power2.inOut",
//         });
//       });
//     },
//     onSnap: (index) => {
//       // Ensure the animation pace remains consistent
//       tl.timeScale(1);
//       tl.seek(index * (100 / slides.length));
//     },
//   },
// });

// // Animate each slide in sequence
// slides.forEach((slide, i) => {
//   const delay = i;
//   const duration = 1;
//   tl.fromTo(slide, { opacity: 0 }, { opacity: 1, duration }, delay);
//   tl.to(slide, { opacity: 0, duration }, delay + 0.5);
// });

// // Add a listener for the wheel event
// document.addEventListener("wheel", (event) => {
//   // Stop the animation if the user scrolls using a mouse wheel or trackpad
//   tl.pause();
// });
//////////////////////////////////////////////////////////////////////////////////
// gsap.registerPlugin(ScrollTrigger);

// const slides = document.querySelectorAll(".slide");
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".scroll-trigger",
//     start: "top top",
//     end: "+=300%",
//     pin: true,
//     scrub: true,
//     snap: 1 / (slides.length - 1),
//     onUpdate: ({ progress }) => {
//       // Fade out previous slide
//       slides.forEach((slide, i) => {
//         const slidePosition = progress - i / slides.length;
//         gsap.to(slide, {
//           opacity: 1 - Math.abs(slidePosition) * slides.length,
//           duration: 0.2,
//           ease: "power2.inOut",
//         });
//       });
//     },
//     onSnap: (index) => {
//       // Ensure the animation pace remains consistent
//       tl.timeScale(1);
//       tl.seek(index * (100 / slides.length));
//     },
//   },
// });

// // Animate each slide in sequence
// slides.forEach((slide, i) => {
//   const delay = i;
//   const duration = 1;
//   tl.fromTo(slide, { opacity: 0 }, { opacity: 1, duration }, delay);
//   tl.to(slide, { opacity: 0, duration }, delay + 0.5);
// });

// // Add a listener for the wheel event
// document.addEventListener("wheel", (event) => {
//   // Stop the animation if the user scrolls using a mouse wheel or trackpad
//   tl.pause();
// });






// gsap.registerPlugin(ScrollTrigger);

// const slides = document.querySelectorAll(".slide");
// const slideCount = slides.length;
// const scrollTriggerElement = document.querySelector(".scroll-trigger");

// let scrollCount = 0;
// let currentIndex = 0;

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: scrollTriggerElement,
//     start: "top top",
//     end: `+=${window.innerHeight * slideCount}`,
//     pin: true,
//     scrub: true,
//     snap: {
//       snapTo: 1 / (slideCount - 1),
//       duration: { min: 0.2, max: 0.5 },
//       delay: 0.1,
//       ease: "power1.inOut"
//     },
//     onUpdate: ({ progress }) => {
//       scrollCount++;
//       if (scrollCount % 10 === 0) {
//         // Move to the next slide
//         currentIndex = Math.floor(progress * slideCount);
//         if (currentIndex >= slideCount) {
//           currentIndex = slideCount - 1;
//         }
//         ScrollTrigger.update();
//       }
//     }
//   }
// });

// slides.forEach((slide, i) => {
//   const delay = i * 1.5;
//   const duration = 1.5;
//   tl.fromTo(slide, { opacity: 0 }, { opacity: 1, duration: duration }, delay);
//   tl.to(slide, { opacity: 0, duration: duration }, delay + 0.5);
// });

// const mediaQuery = window.matchMedia("(max-width: 600px)");
// const disableOpacityAnimation = () => {
//   slides.forEach((slide) => {
//     slide.style.opacity = "1";
//     slide.style.transition = "none";
//   });
//   tl.pause();
// };

// if (mediaQuery.matches) {
//   disableOpacityAnimation();
// }

// mediaQuery.addEventListener("change", (event) => {
//   if (event.matches) {
//     disableOpacityAnimation();
//   } else {
//     slides.forEach((slide) => {
//       slide.style.opacity = "";
//       slide.style.transition = "";
//     });
//     tl.play();
//   }
// });

// const debounce = (func, wait) => {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), wait);
//   };
// };

// const handleScroll = debounce(() => {
//   const scrollPosition = window.pageYOffset;
//   scrollTriggerElement.style.transform = `translateY(${scrollPosition}px)`;
// }, 100);

// window.addEventListener("scroll", handleScroll);

// // Add a listener for the keydown event
// document.addEventListener("keydown", (event) => {
//   if (event.key === " ") {
//     tl.pause();
//   }
// });


// gsap.registerPlugin(ScrollTrigger);

// const slides = document.querySelectorAll(".slide");
// const slideCount = slides.length;
// const scrollTriggerElement = document.querySelector(".scroll-trigger");

// let scrollCount = 0;
// let currentIndex = 0;

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: scrollTriggerElement,
//     start: "top top",
//     end: `+=${window.innerHeight * slideCount}`,
//     pin: true,
//     scrub: true,
//     snap: {
//       snapTo: 1 / (slideCount - 1),
//       duration: { min: 0.2, max: 0.5 },
//       delay: 0.1,
//       ease: "power1.inOut"
//     },
//     onUpdate: ({ progress }) => {
//       scrollCount++;
//       if (scrollCount % 10 === 0) {
//         // Move to the next slide
//         currentIndex = Math.floor(progress * slideCount);
//         if (currentIndex >= slideCount) {
//           currentIndex = slideCount - 1;
//         }
//         ScrollTrigger.update();
//       }
//     }
//   }
// });

// slides.forEach((slide, i) => {
//   const delay = i * 1.5;
//   const duration = 1.5;
//   tl.fromTo(slide, { opacity: 0 }, { opacity: 1, duration: duration }, delay);
//   tl.to(slide, { opacity: 0, duration: duration }, delay + 0.5);
// });

// const mediaQuery = window.matchMedia("(max-width: 600px)");
// mediaQuery.addEventListener("change", (event) => {
//   if (event.matches) {
//     // Add or remove classes to adjust the layout and styling
//   }
// });

// const debounce = (func, wait) => {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), wait);
//   };
// };

// const handleScroll = debounce(() => {
//   const scrollPosition = window.pageYOffset;
//   scrollTriggerElement.style.transform = `translateY(${scrollPosition}px)`;
// }, 100);

// window.addEventListener("scroll", handleScroll);

// // Add a listener for the keydown event
// document.addEventListener("keydown", (event) => {
//   if (event.key === " ") {
//     tl.pause();
//   }
// });
// gsap.registerPlugin(ScrollTrigger);

// const slides = document.querySelectorAll(".slide");
// const slideCount = slides.length;
// const scrollTriggerElement = document.querySelector(".scroll-trigger");

// let scrollCount = 0;
// let currentIndex = 0;

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: scrollTriggerElement,
//     start: "top top",
//     end: `+=${window.innerHeight * slideCount}`,
//     pin: true,
//     scrub: true,
//     snap: {
//       snapTo: 1 / (slideCount - 1),
//       duration: { min: 0.2, max: 0.5 },
//       delay: 0.1,
//       ease: "power1.inOut"
//     },
//     onUpdate: ({ progress }) => {
//       // Count the number of scroll events
//       scrollCount++;
//       if (scrollCount % 20 === 0) { // Change slide after 20 scrolls
//         // Move to the next slide
//         currentIndex++;
//         if (currentIndex >= slideCount) {
//           currentIndex = slideCount - 1;
//         }
//         // Update the opacity of the slides
//         slides.forEach((slide, i) => {
//           const opacity = i === currentIndex ? 1 : 0.5; // Change opacity based on the current index
//           gsap.to(slide, {
//             opacity: opacity,
//             duration: 1,
//             ease: "power2.inOut"
//           });
//         });
//         ScrollTrigger.update();
//       }
//     }
//   }
// });

// // Set initial opacity for each slide
// slides.forEach((slide, i) => {
//   const opacity = i === currentIndex ? 1 : 0.5; // Set initial opacity based on the current index
//   slide.style.opacity = opacity;
// });

// // Animate each slide in sequence
// slides.forEach((slide, i) => {
//   const delay = i * 1.5;
//   const duration = 1.5;
//   tl.fromTo(slide, { opacity: 0 }, { opacity: 1, duration: duration }, delay);
//   tl.to(slide, { opacity: 0, duration: duration }, delay + 0.5);
// });

// // Reverse the direction when scrolling up
// document.addEventListener("wheel", (event) => {
//   if (event.deltaY < 0) {
//     // Scroll up
//     scrollCount--;
//     if (scrollCount % 20 === 0) { // Change slide after 20 scrolls
//       // Move to the previous slide
//       currentIndex--;
//       if (currentIndex < 0) {
//         currentIndex = 0;
//       }
//       // Update the opacity of the slides
//       slides.forEach((slide, i) => {
//         const opacity = i === currentIndex ? 1 : 0.5; // Change opacity based on the current index
//         gsap.to(slide, {
//           opacity: opacity,
//           duration: 1,
//           ease: "power2.inOut"
//         });
//       });
//       ScrollTrigger.update();
//     }
//   }
// });

// // Add a debounce function to prevent the animation from bugging out when scrolling too fast
// const debounce = (func, wait) => {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), wait);
//   };
// };

// const handleScroll = debounce(() => {
//   // Update the scroll position manually
//   const scrollPosition = window.pageYOffset;
//   scrollTriggerElement.style.transform = `translateY(${scrollPosition}px)`;
// }, 100);

// window.addEventListener("scroll", handleScroll);

// // Add a listener for the keydown event
// document.addEventListener("keydown", (event) => {
//   if (event.key === " ") {
//     tl.pause();
//   }
// });



























/////////////////////nagdi////////////////////////////


// gsap.registerPlugin(ScrollTrigger);

// const slides = document.querySelectorAll(".slide");
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".scroll-trigger",
//     start: "top top",
//     end: "+=300%",
//     pin: true,
//     scrub: true,
//     snap: 1 / (slides.length - 1),
//     onUpdate: ({ progress }) => {
//       slides.forEach((slide, i) => {
//         const slidePosition = progress - i / slides.length;
//         gsap.to(slide, {
//           opacity: 1 - Math.abs(slidePosition) * slides.length,
//           duration: 0.2,
//           ease: "power2.inOut",
//         });
//       });
//     },
//     onSnap: (index) => {
//       tl.timeScale(1);
//       tl.seek(index * (100 / slides.length));
//     },
//   },
// });

// slides.forEach((slide, i) => {
//   const delay = i;
//   const duration = 1;
//   tl.fromTo(slide, { opacity: 0 }, { opacity: 1, duration }, delay);
//   tl.to(slide, { opacity: 0, duration }, delay + 0.5);
// });

// document.addEventListener("wheel", (event) => {
//   tl.pause();
// });

// const mediaQuery = window.matchMedia("(max-width: 600px)");
// const disableOpacityAnimation = () => {
//   slides.forEach((slide) => {
//     slide.style.opacity = "1";
//     slide.style.transition = "none";
//   });
//   tl.pause();
// };

// if (mediaQuery.matches) {
//   disableOpacityAnimation();
// }

// mediaQuery.addEventListener("change", (event) => {
//   if (event.matches) {
//     disableOpacityAnimation();
//   } else {
//     slides.forEach((slide) => {
//       slide.style.opacity = "";
//       slide.style.transition = "";
//     });
//     tl.play();
//   }
// });


//////////////////////nagdi/////////////////////////
// document.addEventListener("DOMContentLoaded", function () {
//     const slides = document.querySelectorAll('.slide');
//     let currentSlide = 0;
//     let isScrolling = false;
    
//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             if (i === index) {
//                 slide.classList.add('active');
//             } else {
//                 slide.classList.remove('active');
//             }
//         });
//     }

//     function nextSlide() {
//         if (!isScrolling) {
//             currentSlide = (currentSlide + 1) % slides.length;
//             showSlide(currentSlide);
//         }
//     }

//     function prevSlide() {
//         if (!isScrolling) {
//             currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//             showSlide(currentSlide);
//         }
//     }

//     function handleScroll(event) {
//         if (event.deltaY > 0) {
//             nextSlide(); // Scroll down to change to the next slide
//         } else if (event.deltaY < 0) {
//             prevSlide(); // Scroll up to change to the previous slide
//         }
//         isScrolling = true;
//         setTimeout(function () {
//             isScrolling = false;
//         }, 1000); // Set a delay to prevent rapid scrolling
//     }

//     window.addEventListener('wheel', handleScroll);

//     showSlide(currentSlide);
// });




// document.addEventListener("DOMContentLoaded", function () {
//     const slides = document.querySelectorAll('.slide');
//     let currentSlide = 0;
//     let isScrolling = false;
    
//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             if (i === index) {
//                 slide.classList.add('active');
//             } else {
//                 slide.classList.remove('active');
//             }
//         });
//     }

//     function nextSlide() {
//         if (!isScrolling) {
//             currentSlide = (currentSlide + 1) % slides.length;
//             showSlide(currentSlide);
//             isScrolling = true; // Set scrolling flag
//             setTimeout(function () {
//                 isScrolling = false; // Reset scrolling flag after transition
//             }, 1000); // Adjust the transition time
//         }
//     }

//     function prevSlide() {
//         if (!isScrolling) {
//             currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//             showSlide(currentSlide);
//             isScrolling = true; // Set scrolling flag
//             setTimeout(function () {
//                 isScrolling = false; // Reset scrolling flag after transition
//             }, 1000); // Adjust the transition time
//         }
//     }

//     function handleScroll(event) {
//         if (event.deltaY > 0) {
//             nextSlide(); // Scroll down to change to the next slide
//         } else if (event.deltaY < 0) {
//             prevSlide(); // Scroll up to change to the previous slide
//         }
//     }

//     window.addEventListener('wheel', handleScroll);

//     showSlide(currentSlide);
// });


// const carousel = document.getElementById('carousel');
// let currentSlide = 0;

// document.addEventListener("DOMContentLoaded", function () {
//     const slides = document.querySelectorAll('.slide');
//     let isScrolling = false;
    
//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             if (i === index) {
//                 slide.classList.add('active');
//             } else {
//                 slide.classList.remove('active');
//             }
//         });
//     }

//     function nextSlide() {
//         if (!isScrolling) {
//             currentSlide = (currentSlide + 1) % slides.length;
//             showSlide(currentSlide);
//             isScrolling = true;
//             setTimeout(function () {
//                 isScrolling = false;
//             }, 1000);
//         }
//     }

//     function prevSlide() {
//         if (!isScrolling && currentSlide > 0) {
//             currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//             showSlide(currentSlide);
//             isScrolling = true;
//             setTimeout(function () {
//                 isScrolling = false;
//             }, 1000);
//         }
//     }

//     function handleScroll(event) {
//         if (currentSlide >= 2) {
//             document.body.style.overflow = '';

//             if (event.deltaY < 0) {
//                 if (currentSlide !== 1) {
//                     prevSlide();
//                 }
//             }
//         } else if (currentSlide === 0 && event.deltaY < 0) {
//             document.body.style.overflow = '';
//             // Allow scrolling to the upper content
//         } else {
//             document.body.style.overflow = 'hidden';
//             carousel.scrollIntoView();

//             if (event.deltaY > 0) {
//                 nextSlide(); // Scroll down to change to the next slide
//             } else if (event.deltaY < 0) {
//                 prevSlide(); // Scroll up to change to the previous slide
//             }
//         }
//     }

//     window.addEventListener('wheel', handleScroll);

//     showSlide(currentSlide);
// });






// const carousel = document.getElementById('carousel');
// let currentSlide = 0;

// document.addEventListener("DOMContentLoaded", function () {
//     const slides = document.querySelectorAll('.slide');
//     let isScrolling = false;
    
//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             if (i === index) {
//                 slide.classList.add('active');
//             } else {
//                 slide.classList.remove('active');
//             }
//         });
//     }

//     function nextSlide() {
//         if (!isScrolling) {
//             currentSlide = (currentSlide + 1) % slides.length;
//             showSlide(currentSlide);
//             isScrolling = true;
//             setTimeout(function () {
//                 isScrolling = false;
//             }, 1000);
//         }
//     }

//     function prevSlide() {
//         if (!isScrolling && currentSlide > 0) {
//             currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//             showSlide(currentSlide);
//             isScrolling = true;
//             setTimeout(function () {
//                 isScrolling = false;
//             }, 1000);
//         }
//     }

//     function handleScroll(event) {
//         if (currentSlide >= 2) {
//             document.body.style.overflow = '';

//             if (event.deltaY < 0) {
//                 if (currentSlide !== 1) {
//                     prevSlide();
//                 }
//             }
//         } else if (currentSlide === 0 && event.deltaY < 0) {
//             document.body.style.overflow = '';
//             // Allow scrolling to the upper content
//         } else {
//             document.body.style.overflow = 'hidden';
//             carousel.scrollIntoView();

//             if (event.deltaY > 0) {
//                 nextSlide(); // Scroll down to change to the next slide
//             } else if (event.deltaY < 0) {
//                 prevSlide(); // Scroll up to change to the previous slide
//             }
//         }
//     }
//     carousel.addEventListener('wheel', handleScroll)
// });







// const carousel = document.getElementById('carousel');
// let currentSlide = 0;

// document.addEventListener("DOMContentLoaded", function () {
//     const slides = document.querySelectorAll('.slide');
//     let isScrolling = false;

//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.classList.toggle('active', i === index);
//         });
//     }

//     function nextSlide() {
//         if (!isScrolling) {
//             currentSlide = (currentSlide + 1) % slides.length;
//             showSlide(currentSlide);
//             debounceScrolling();
//         }
//     }

//     function prevSlide() {
//         if (!isScrolling) {
//             currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//             showSlide(currentSlide);
//             debounceScrolling();
//         }
//     }

//     function debounceScrolling() {
//         isScrolling = true;
//         setTimeout(() => {
//             isScrolling = false;
//         }, 1000); // Adjust this delay as needed
//     }

//     function handleScroll(event) {
//         if (isScrolling) return; // Ignore event if already scrolling

//         const atFirstSlide = currentSlide === 0;
//         const atLastSlide = currentSlide === slides.length - 1;

//         const slideRect = slides[currentSlide].getBoundingClientRect();
//         const slideFullyInView = slideRect.top >= 0 && slideRect.bottom <= window.innerHeight;
//         const slideTopInView = slideRect.top <= 0 && slideRect.bottom > 0;

//         if (!slideTopInView && !slideFullyInView) return;

//         if (event.deltaY > 0) { // Scrolling down
//             if (!atLastSlide) {
//                 event.preventDefault();
//                 nextSlide();
//             } else {
//                 document.body.style.overflow = ''; // Allow scrolling the site when at the last slide
//             }
//         } else if (event.deltaY < 0) { // Scrolling up
//             if (!atFirstSlide) {
//                 event.preventDefault();
//                 prevSlide();
//             } else {
//                 document.body.style.overflow = ''; // Allow scrolling the site when at the first slide
//             }
//         }

//         // Disable body scrolling when interacting with the carousel and not at the boundaries
//         if (!(atFirstSlide && event.deltaY < 0) && !(atLastSlide && event.deltaY > 0)) {
//             document.body.style.overflow = 'hidden';
//             carousel.scrollIntoView({ behavior: 'smooth' });
//         }
//     }

//     function handleKeyScroll(event) {
//         if (isScrolling) return; // Ignore event if already scrolling

//         const atFirstSlide = currentSlide === 0;
//         const atLastSlide = currentSlide === slides.length - 1;

//         const slideRect = slides[currentSlide].getBoundingClientRect();
//         const slideTopAtViewportTop = slideRect.top <= 0 && slideRect.bottom > 0;

//         if (!slideTopAtViewportTop) return;

//         if (event.key === "ArrowDown" || event.key === "PageDown") {
//             if (!atLastSlide) {
//                 event.preventDefault();
//                 nextSlide();
//             } else {
//                 document.body.style.overflow = ''; // Allow scrolling the site when at the last slide
//             }
//         } else if (event.key === "ArrowUp" || event.key === "PageUp") {
//             if (!atFirstSlide) {
//                 event.preventDefault();
//                 prevSlide();
//             } else {
//                 document.body.style.overflow = ''; // Allow scrolling the site when at the first slide
//             }
//         }

//         // Disable body scrolling when interacting with the carousel and not at the boundaries
//         if (!(atFirstSlide && (event.key === "ArrowUp" || event.key === "PageUp")) &&
//             !(atLastSlide && (event.key === "ArrowDown" || event.key === "PageDown"))) {
//             document.body.style.overflow = 'hidden';
//             carousel.scrollIntoView({ behavior: 'smooth' });
//         }
//     }

//     carousel.addEventListener('wheel', handleScroll, { passive: false });
//     window.addEventListener('keydown', handleKeyScroll);

//     // Enable body scrolling when reaching the first or last slide
//     slides.forEach(slide => {
//         slide.addEventListener('transitionend', () => {
//             const atFirstSlide = currentSlide === 0;
//             const atLastSlide = currentSlide === slides.length - 1;
//             if (atFirstSlide || atLastSlide) {
//                 document.body.style.overflow = '';
//             }
//         });
//     });
// });












const carousel = document.getElementById('carousel');
let currentSlide = 0;

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    let isScrolling = false;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        if (!isScrolling) {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
            debounceScrolling();
        }
    }

    function prevSlide() {
        if (!isScrolling) {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
            debounceScrolling();
        }
    }

    function debounceScrolling() {
        isScrolling = true;
        setTimeout(() => {
            isScrolling = false;
        }, 1000); // Adjust this delay as needed
    }

    function handleScroll(event) {
        if (isScrolling) return; // Ignore event if already scrolling

        const atFirstSlide = currentSlide === 0;
        const atLastSlide = currentSlide === slides.length - 1;

        const slideRect = slides[currentSlide].getBoundingClientRect();
        const slideFullyInView = slideRect.top >= 0 && slideRect.bottom <= window.innerHeight;
        const slideTopInView = slideRect.top <= 0 && slideRect.bottom > 0;

        if (!slideTopInView && !slideFullyInView) return;

        if (event.deltaY > 0) { // Scrolling down
            if (!atLastSlide) {
                event.preventDefault();
                nextSlide();
            }
        } else if (event.deltaY < 0) { // Scrolling up
            if (!atFirstSlide) {
                event.preventDefault();
                prevSlide();
            }
        }

        // Disable body scrolling when interacting with the carousel and not at the boundaries
        if (!(atFirstSlide && event.deltaY < 0) && !(atLastSlide && event.deltaY > 0)) {
            document.body.style.overflow = 'hidden';
            carousel.scrollIntoView({ behavior: 'smooth' });
        } else {
            document.body.style.overflow = ''; // Allow scrolling the site when at the boundaries
        }
    }

    function handleKeyScroll(event) {
        if (isScrolling) return; // Ignore event if already scrolling

        const atFirstSlide = currentSlide === 0;
        const atLastSlide = currentSlide === slides.length - 1;

        const slideRect = slides[currentSlide].getBoundingClientRect();
        const slideTopAtViewportTop = slideRect.top <= 0 && slideRect.bottom > 0;

        if (!slideTopAtViewportTop) return;

        if (event.key === "ArrowDown" || event.key === "PageDown") {
            if (!atLastSlide) {
                event.preventDefault();
                nextSlide();
            }
        } else if (event.key === "ArrowUp" || event.key === "PageUp") {
            if (!atFirstSlide) {
                event.preventDefault();
                prevSlide();
            }
        }

        // Disable body scrolling when interacting with the carousel and not at the boundaries
        if (!(atFirstSlide && (event.key === "ArrowUp" || event.key === "PageUp")) &&
            !(atLastSlide && (event.key === "ArrowDown" || event.key === "PageDown"))) {
            document.body.style.overflow = 'hidden';
            carousel.scrollIntoView({ behavior: 'smooth' });
        } else {
            document.body.style.overflow = ''; // Allow scrolling the site when at the boundaries
        }
    }

    carousel.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyScroll);

    // Enable body scrolling when reaching the first or last slide
    slides.forEach(slide => {
        slide.addEventListener('transitionend', () => {
            const atFirstSlide = currentSlide === 0;
            const atLastSlide = currentSlide === slides.length - 1;
            if (atFirstSlide || atLastSlide) {
                document.body.style.overflow = '';
            }
        });
    });
});

