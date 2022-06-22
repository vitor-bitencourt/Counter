const value = document.querySelector('span');
const btns = document.querySelectorAll('button');
let number = 0;

btns.forEach(function(button) {
  button.addEventListener('click', function(e){
    const types = e.currentTarget.classList;
    
    if(types.contains('decrease')){
      number--;
    }
    if(types.contains('increase')){
      number++;
    }
    if(types.contains('reset')){
      number = 0;
    }

    value.textContent = number;
  });
})