export const respondToVisibility = (element, callback) => {
  let observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      callback(entry.intersectionRatio > 0);
    });
  });

  observer.observe(element);
};
