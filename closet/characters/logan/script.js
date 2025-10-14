function createImageCycler(imgSelector, leftBtnId, rightBtnId) {
  const imgs = document.querySelectorAll(imgSelector);
  let currentIndex = 0;

  function updateVisibility(idx) {
    imgs.forEach((img, i) => {
      img.classList.toggle('visible', i === idx);
    });
  }

  document.getElementById(leftBtnId).addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    updateVisibility(currentIndex);
  });

  document.getElementById(rightBtnId).addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imgs.length;
    updateVisibility(currentIndex);
  });

  updateVisibility(currentIndex);
}

createImageCycler('.head', 'left-btn', 'right-btn');
createImageCycler('.body', 'left-btn2', 'right-btn2');
createImageCycler('.feet', 'left-btn3', 'right-btn3');