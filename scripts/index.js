
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.animation-scroll');
    const animation = container.querySelector('wa-animation');
    const box = animation.querySelector('.box');
  
    if (animation && box) {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          animation.play = true;
        } else {
          animation.play = false;
          animation.currentTime = 0;
        }
      });
      observer.observe(box);
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const animations = document.querySelectorAll("wa-animation[play='manual']");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const anim = entry.target.closest('wa-animation');
        if (entry.isIntersecting) {
          anim.play = true;
        } else {
          anim.play = false;
          anim.currentTime = 0;
        }
      });
    }, {
      threshold: 0.2,
    });
  
    animations.forEach(anim => {
      const child = anim.firstElementChild;
      if (child) {
        observer.observe(child); 
      }
    });
  });
  
  

  

    