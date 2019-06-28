const memesArray = [  
  'https://abrilveja.files.wordpress.com/2016/05/pvjayr-original.jpeg?quality=70&strip=info&w=600',
  'https://t1.uc.ltmcdn.com/pt/images/8/1/9/os_melhores_memes_para_o_crush_em_2019_27918_paso_15_600.jpg',
  'https://abrilmdemulher.files.wordpress.com/2016/10/meme-gato-encrencado.png?w=540&h=658',
  'https://i.barkpost.com/wp-content/uploads/2015/02/featmeme.jpg?q=70&fit=crop&crop=entropy&w=808&h=500',
  'https://akns-images.eonline.com/eol_images/Entire_Site/20141029/rs_560x558-141129073019-images.jpg?fit=inside|900:auto&output-quality=90'
];

let img = document.createElement("IMG");
let buttonShere = document.createElement("P");
let image = document.getElementById('imagens')
let randomValue = memesArray[Math.floor(memesArray.length * Math.random())];
img.src = randomValue;
buttonShere = 'hi';
image.appendChild(img);
image.appendChild(buttonShere);


function gerarMemes() {
  let image = document.getElementById('imagens')
  let randomValue = memesArray[Math.floor(memesArray.length * Math.random())];
  img.src = randomValue;
  
  image.appendChild(img);
}

function oooooo() {
  console.log('oi')
  let shereMemes = document.getElementById('shereMemes');
  shereMemes.innerHTML = 'HUM';

}






