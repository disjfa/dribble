document.addEventListener('click', (evt) => {
  const { classList, dataset } = evt.target;
  if (!classList.contains('js-scrollintoview')) {
    return;
  }
  if (!dataset.target) {
    return;
  }

  const elm = document.querySelector(dataset.target);
  if (!elm) {
    return;
  }

  evt.preventDefault();
  elm.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'center',
  });
});
