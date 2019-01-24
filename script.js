function dropFunction() {
  let x = document.getElementById('flex-right');

  if (x.className === 'flex-right') {
    x.className += ' responsive';
  } else {
    x.className = 'flex-right';
  }
}
