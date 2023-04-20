window.onload = function () {
  const triangleCard = document.getElementById("trianlge");
  const maktabCard = document.getElementById("maktab");
  const seifCard = document.getElementById("seif");
  const sinmarCard = document.getElementById("sinmar");
  const yasinCard = document.getElementById("yasin");
  const beutiCard = document.getElementById("beuti");
  const someCard = document.getElementById("some");
  const elHadiCard = document.getElementById("elhadi");


  console.log(beutiCard)


  
  const canvas = document.getElementById("viewport");
  const nameField = document.querySelector("#nameField");
  const submitBtn = document.querySelector("#my-btn");     
  

defaultImg = new Image();
defaultImg.src = 'img/assets/معايدات العملاء-01.png';

let selectedImg = defaultImg;

defaultImg.onload = function(e){
  console.log(canvas, defaultImg, nameField.value);
  updateCanvas(canvas, defaultImg, nameField.value);
}

trianlge = new Image();
trianlge.src = 'img/assets/معايدات العملاء-02 (1).png';


elhadi = new Image();
elhadi.src = 'img/assets/معايدات العملاء-01.png';

yasin = new Image();
yasin.src = 'img/assets/معايدات العملاء-10.png';

beuti = new Image();
beuti.src = 'img/assets/معايدات العملاء-04.png';

maktab = new Image();
maktab.src = 'img/assets/معايدات العملاء-06.png';

seif = new Image();
seif.src = 'img/assets/معايدات العملاء-07.png';

sinmar = new Image();
sinmar.src = 'img/assets/معايدات العملاء-03.png';

some = new Image();
some.src = 'img/assets/معايدات العملاء-08.png';

triangleCard.onclick = function(e){
    selectedImg = trianlge;
    updateCanvas(canvas, trianlge, nameField.value);
}
yasinCard.onclick = function(e){
  selectedImg = yasin;
  updateCanvas(canvas, yasin, nameField.value);
}

beutiCard.onclick = function(e){
  selectedImg = beuti;
  updateCanvas(canvas, beuti, nameField.value);
}

maktabCard.onclick = function(e){
    selectedImg = maktab;
    updateCanvas(canvas, maktab, nameField.value);
}
someCard.onclick = function(e){
  selectedImg = some;
  updateCanvas(canvas, some, nameField.value);
}

seifCard.onclick = function(e){
    selectedImg = seif;
    updateCanvas(canvas, seif, nameField.value);
}

elhadiCard.onclick = function(e){
  selectedImg = elhadi;
  updateCanvas(canvas, elhadi, nameField.value);
}

sinmarCard.onclick = function(e){
    selectedImg = sinmar;
    updateCanvas(canvas, sinmar, nameField.value);
}



submitBtn.onclick = function(e){
        updateCanvas(canvas, selectedImg, nameField.value);
        downloadEidCard();
    }

 nameField.onchange = function(e){
    updateCanvas(canvas, selectedImg, nameField.value);
 }

 function updateCanvas(canvas, image, text) {
    const ctx = canvas.getContext("2d");
    const width = 750;
    const height = 1333.33;
    const fontSize = Math.floor(width / 18);
    const yOffset = height / 3;
    console.log(text)
  
    // Set canvas dimensions
    canvas.width = width * 1;
    canvas.height = height * 1;
  
    // Draw the image
    const imgAspectRatio = image.width / image.height;
    const canvasAspectRatio = width / height;
  
    let imgWidth = width;
    let imgHeight = height;
  
    if (imgAspectRatio > canvasAspectRatio) {
      imgWidth = height * imgAspectRatio;
    } else {
      imgHeight = width / imgAspectRatio;
    }
  
    const imgX = (width - imgWidth) / 2;
    const imgY = (height - imgHeight) / 2;
  
    ctx.drawImage(image, imgX, imgY, imgWidth, imgHeight);
  
    // Prepare text
    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 4);
    let fillStyleColor = "black";
    if (selectedImg == trianlge)
      fillStyleColor = "white";
    ctx.fillStyle = fillStyleColor;
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px Tajawal`;
  
    // Add top text
    ctx.textBaseline = "bottom";
    if (selectedImg == yasin)
      ctx.fillText(text, width / 2, height - 150);
      else 
    ctx.fillText(text, width / 2, height - 250);
  }
  
  


function downloadEidCard(){
let link = document.createElement('a');
document.body.append(link);
link.download = `بطاقة معايدة ${nameField.value}.png`;
link.href = document.getElementById('viewport').toDataURL()
link.click();
}  

}

