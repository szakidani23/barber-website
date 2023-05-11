// select all progress-wrapper elements
const progressWrappers = document.querySelectorAll('.progress-wrapper');

// create IntersectionObserver object
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // check if element is in view
    if (entry.isIntersecting) {
      // add start class to progress bar
      const progressBar = entry.target.querySelector('.progress-bar');
      progressBar.classList.add('start');
      // stop observing element
      observer.unobserve(entry.target);
    }
  });
});

// observe each progress-wrapper element
progressWrappers.forEach(wrapper => {
  observer.observe(wrapper);
});