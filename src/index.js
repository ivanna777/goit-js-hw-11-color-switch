const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const bodyRef = document.querySelector('#body');
  const startBtnRef = document.querySelector('[data-action="start"]');
  const stopBtnRef = document.querySelector('[data-action="stop"]');
  console.log(bodyRef)

  

  
  startBtnRef.addEventListener('click', startChangeColor);
  // stopBtnRef.addEventListener('click', stopChangeColor);
  
  function startChangeColor() {
    const changeColorId = setInterval(() => {
      bodyRef.style.backgroundColor = colors(`${randomIntegerFromInterval(0,5)}`);
      console.log(colorIndex)
    }, 1000);
    
  }
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const colorIndex = randomIntegerFromInterval(0, 5);
 
//   function stopChangeColor() {

//   }
  
  
  
