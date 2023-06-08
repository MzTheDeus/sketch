for (let i = 0; i < 50; i++) {
  let div1 = document.createElement('div');
  div1.classList.add('mini');
  for(let j = 0; j < 30; j++) {
    let div = document.createElement('div');
    div.classList.add('helo');
    div1.appendChild(div);
  }
  document.getElementById('container').appendChild(div1)
}

const div = document.querySelectorAll('.helo');
div.forEach((item) => {
  item.addEventListener('mouseover',(e) => {
    e.target.classList.add('change');
  });
});
