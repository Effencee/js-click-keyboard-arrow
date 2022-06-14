let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  console.log(e.keyCode, e.which);
  // 38 - strzałka do góry
  // 40 - strzalka w dół


  // wersja 1 - instrukcja if
  // if(e.keyCode == 38){
  //   red+=2;
  //   green+=2;
  //   blue+=2;
  //   document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  //   if(red<0 && green<0 && blue<0)
  //   {
  //     red = 0;
  //     green = 0;
  //     blue = 0;
  //   }
  // }
  // else if(e.keyCode==40){
  //   red-=2;
  //   green-=2;
  //   blue-=2;
  //   document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  //   if(red>255 && green>255 && blue>255)
  //   {
  //     red = 255;
  //     green = 255;
  //     blue = 255;
  //   }
  // }
  // wersja 2 - instrukcja switch
  switch(e.keyCode){
    case 38: red+=2, green+=2, blue+=2, document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; break;
    case 40: red-=2, green-=2, blue-=2, document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }

  if(red<0 && green<0 && blue<0){
      red = 0;
      green = 0;
      blue = 0;
   } else if(red>255 && green>255 && blue>255){
        red = 255;
        green = 255;
        blue = 255;
      }
}

window.addEventListener('keydown', changeColor)
