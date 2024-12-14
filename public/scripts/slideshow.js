
//   const track = document.querySelector('.carousel-track');
//   const slides = Array.from(document.querySelectorAll('.carousel-slide'));
//   const slideWidth = slides[0].getBoundingClientRect().width;
//   let currentIndex = 0;

//   function moveSlides() {
//     currentIndex++;

//     // Reset to the beginning if we reach the end
//     if (currentIndex > slides.length - 3) {
//       currentIndex = 0;
//     }

//     // Move the track
//     track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//   }

//   setInterval(moveSlides, 3000); // Move every 3 seconds


const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  let currentIndex = 0;

  function getVisibleSlides() {
    const screenWidth = window.innerWidth;

    // Return the number of slides visible based on screen size
    if (screenWidth >= 1024) return 4; // Large screens
    if (screenWidth >= 768) return 3; // Medium screens
    return 1; // Small screens
  }

  function moveSlides() {
    const visibleSlides = getVisibleSlides(); // Dynamically calculate visible slides
    currentIndex++;

    // Reset to the beginning if we reach the end
    if (currentIndex > slides.length - visibleSlides) {
      currentIndex = 0;
    }

    // Move the track
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  setInterval(moveSlides, 3000); // Move every 3 seconds

  // Update carousel layout on window resize
  window.addEventListener('resize', () => {
    // Reset position to avoid layout issues during resizing
    currentIndex = 0;
    track.style.transform = `translateX(0)`;
  });

