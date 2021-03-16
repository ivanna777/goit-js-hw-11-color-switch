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

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let changeId = undefined;

  startBtnRef.addEventListener('click', startChangeColor);
  stopBtnRef.addEventListener('click', stopChangeColor);
  
  function startChangeColor() {
    startBtnRef.disabled = true;
    
    changeId = setInterval(() => {
      const colorIndex = randomIntegerFromInterval(0, 5);
      bodyRef.style.backgroundColor = colors[colorIndex];
      console.log(colorIndex)
    }, 1000);  
  }

  function stopChangeColor() {
    startBtnRef.disabled = false;
    clearInterval(changeId);
  }
  