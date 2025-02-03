(function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carousel = carouselContainer.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const prevBtn = carouselContainer.querySelector('.carousel-nav.prev');
    const nextBtn = carouselContainer.querySelector('.carousel-nav.next');
  
    let currentIndex = Math.floor(totalItems / 2); // Start from the middle slide
  
    function updateCarousel() {
      // Reset classes
      items.forEach((item) => {
        item.classList.remove('prev', 'active', 'next');
      });
  
      // Calculate indices of previous and next slides
      const prevIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
      const nextIndex = (currentIndex + 1) % totalItems;
  
      // Add appropriate classes
      items[prevIndex].classList.add('prev');
      items[currentIndex].classList.add('active');
      items[nextIndex].classList.add('next');
  
      // Calculate carousel offset to center the active slide
      const isMobile = window.innerWidth <= 768;
  
      if (!isMobile) {
        const itemWidth = items[currentIndex].offsetWidth;
        const containerWidth = carouselContainer.offsetWidth;
  
        const offset = -((itemWidth + parseInt(getComputedStyle(items[currentIndex]).marginLeft) + parseInt(getComputedStyle(items[currentIndex]).marginRight)) *currentIndex) + ((containerWidth - itemWidth) / 2);
  
        carousel.style.transform = `translateX(${offset}px)`;
      } else {
        // On mobile, reset transform
        carousel.style.transform = 'translateX(0)';
      }
    }
  
    // Event handlers for navigation buttons
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
      updateCarousel();
    });
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    });
  
    // Initialize carousel
    window.addEventListener('load', updateCarousel);
    window.addEventListener('resize', updateCarousel);
  
    // Auto-scroll (optional)
    let autoScroll = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    }, 5000); // Every 5 seconds
  
    // Stop auto-scroll on mouse enter
    carouselContainer.addEventListener('mouseenter', () => {
      clearInterval(autoScroll);
    });
  
    // Resume auto-scroll on mouse leave
    carouselContainer.addEventListener('mouseleave', () => {
      autoScroll = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
      }, 5000);
    });
  
    // Add touch support for mobile devices
    let startX = 0;
    let isDragging = false;
  
    carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      clearInterval(autoScroll); // Optional: pause auto-scroll during touch
    });
  
    carousel.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const currentX = e.touches[0].clientX;
      const diffX = currentX - startX;
  
      // You can add logic here to provide visual feedback during swipe
    });
  
    carousel.addEventListener('touchend', (e) => {
      isDragging = false;
      const endX = e.changedTouches[0].clientX;
      const diffX = endX - startX;
  
      if (Math.abs(diffX) > 50) { // Swipe threshold
        if (diffX > 0) {
          // Swiped right
          currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
        } else {
          // Swiped left
          currentIndex = (currentIndex + 1) % totalItems;
        }
        updateCarousel();
      }
  
      // Resume auto-scroll
      autoScroll = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
      }, 5000);
    });
  })();
  