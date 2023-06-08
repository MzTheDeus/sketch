


function testFunc() {
  let one = document.querySelectorAll('.mini');
  one.forEach((item) => {
    item.remove();
  });
  
  let n = prompt('Type Number 1 - 50')
  while (n > 50 || n <= 0)  {
    n = prompt('Try again')
  }
    for (let i = 0; i < n; i++) {
      let div1 = document.createElement('div');
      div1.classList.add('mini');
      for(let j = 0; j < n; j++) {
        let div = document.createElement('div');
        div.classList.add('helo');
        div1.appendChild(div);
      }
      document.getElementById('container').appendChild(div1)
    }

    randomP = function () {
      r = Math.floor(Math.random() * 255 + 100);
      g = Math.floor(Math.random() * 255 + 100);
      b = Math.floor(Math.random() * 255 + 100);
      return 'rgb(' + r + ',' + g + ',' + b + ')';
    };
    
    
    const ballsack = document.querySelectorAll('.helo');
    ballsack.forEach((item) => {
      item.addEventListener('mouseover',(e) => {
        e.target.style.backgroundColor = randomP();
      });
    });
  
}
