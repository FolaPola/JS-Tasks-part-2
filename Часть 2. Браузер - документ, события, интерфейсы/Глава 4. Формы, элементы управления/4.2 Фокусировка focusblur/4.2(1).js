let view = document.getElementById('view');

view.addEventListener('click', clickHandler);

function clickHandler(e) {
  let textarea = document.createElement('textarea');

  textarea.classList.add('edit');
  view.replaceWith(textarea);
  textarea.value = view.innerHTML;
  textarea.focus();

  textarea.addEventListener('keydown', keyDownHandler);
  textarea.addEventListener('blur', blurHandler);

  function keyDownHandler(e) {
    if (e.code === 'Enter') e.target.blur();
  }

  function blurHandler(e) {
    textarea.replaceWith(view);
    view.innerHTML = textarea.value;

    textarea.removeEventListener('keydown', keyDownHandler);
    textarea.removeEventListener('blur', blurHandler);
  }
}