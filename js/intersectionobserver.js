function callback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}

function initObserver() {
  const observer = new IntersectionObserver(callback);
  const items = document.querySelectorAll('.js-observe');

  for (const i in items) {
    if (!items.hasOwnProperty(i)) {
      continue;
    }

    observer.observe(items[i]);
  }
}

if (window.IntersectionObserver) {
  initObserver();
} else {
  console.log('IntersectionObserver not supported.');
}
