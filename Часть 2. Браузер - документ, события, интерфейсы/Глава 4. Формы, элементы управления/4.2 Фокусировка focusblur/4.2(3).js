let mouse = document.getElementById('mouse');

mouse.tabIndex = 0;
mouse.addEventListener('focus', focusHandler);

function focusHandler(e) {
  let target = e.target;
  let targetWidth = target.offsetWidth;
  let targetHeight = target.offsetHeight;
  let positionLeft = target.getBoundingClientRect().left;
  let positionTop = target.getBoundingClientRect().top;

  target.style.position = 'fixed';
  target.addEventListener('keydown', keyDownHandler);
  target.addEventListener('blur', blurHandler);

  function keyDownHandler(e) {
    switch (e.code) {
      case 'ArrowLeft':
        positionLeft -= targetWidth;
        target.style.left = positionLeft + 'px';
        break;
      case 'ArrowRight':
        positionLeft += targetWidth;
        target.style.left = positionLeft + 'px';
        break;
      case 'ArrowUp':
        positionTop -= targetHeight;
        target.style.top = positionTop + 'px';
        break;
      case 'ArrowDown':
        positionTop += targetHeight;
        target.style.top = positionTop + 'px';
        break;
    }
  }

  function blurHandler(e) {
    target.removeEventListener('keydown', keyDownHandler);
    target.removeEventListener('blur', blurHandler);
  }
}