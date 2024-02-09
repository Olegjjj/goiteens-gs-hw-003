const images = document.querySelectorAll('img[data-src]');
const options = {
  rootMargin: '0px',
};
function Intersectionhandle(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; 
      observer.unobserve(img); 
    }
  });
}
const observer = new IntersectionObserver(Intersectionhandle, options);
images.forEach(image => {
  observer.observe(image);
});
