const frases = ["Simplifica tu vida con tecnología de vanguardia.", "Explora el poder de la innovación tecnológica.", "Construyendo soluciones tecnológicas a medida.", "Navega hacia el futuro con nuestra tecnología puntera.", "Descubre un mundo de posibilidades tecnológicas.", "Impulsando tu éxito con soluciones tecnológicas eficientes.", "Haciendo posible lo imposible a través de la tecnología.", "Conectando personas a través de la tecnología."];
const fraseElement = document.getElementById("frase");
let index = 0;
let intervalo;

function escribirFrase() {
  const fraseActual = frases[index];
  const palabras = fraseActual.split(" ");
  let i = 0;

  intervalo = setInterval(function() {
    if (i < palabras.length - 1) {
      fraseElement.innerHTML += palabras[i] + " ";
      i++;
    } else if (i === palabras.length - 1) {
      const ultimaPalabra = palabras[i];
      fraseElement.innerHTML += `<span style="color: ${getRandomColor()}">${ultimaPalabra}</span> `;
      clearInterval(intervalo);
      setTimeout(borrarFrase, 1000); // Espera 1 segundo antes de borrar la frase
    }
  }, 100); // Escribe una palabra cada 100ms
}

function borrarFrase() {
  let fraseActual = fraseElement.innerHTML;
  let i = fraseActual.length - 1;

  intervalo = setInterval(function() {
    if (i >= 0) {
      fraseActual = fraseActual.slice(0, -1);
      fraseElement.innerHTML = fraseActual;
      i--;
    } else {
      clearInterval(intervalo);
      fraseElement.innerHTML = "";
      index = (index + 1) % frases.length; // Pasa a la siguiente frase
      setTimeout(escribirFrase, 100); // Espera 100ms antes de comenzar a escribir la siguiente frase
    }
  }, 50); // Borra un carácter cada 50ms
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

escribirFrase();


window.addEventListener('scroll', function() {
  var elemento = document.getElementById('titulo');
  var elemento2 = document.getElementById('parrafotitulo')
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var elemento3 = document.getElementById('titulo2')
  var elemento4 = document.getElementById('parrafotitulo2')
  var elemento5 = document.querySelector('.ul3')
  var subelemento = elemento5.children[0]
  var subelemento2 = elemento5.children[1]
  var subelemento3 = elemento5.children[2]
  var elemento6 = document.getElementById('opciones_ele1')
  var elemento7 = document.getElementById('opciones')
  var elemento8 = document.querySelector('.ul4')
  var subelemento4 = elemento8.children[0]
  var subelemento5 = elemento8.children[1]
  var subelemento6 = elemento8.children[2]
  var elemento9 = document.getElementById('subline_servicios')
  var elemento10 = document.getElementById('subline2_servicios')
  


  if (scrollTop >= 200) {
    elemento2.classList.add('aparecer')
    elemento.classList.add('aparecer');
  }

  if(scrollTop >= 1500) {
    elemento3.classList.add('aparecer')
    elemento4.classList.add('aparecer')
  }


  if(scrollTop >= 2000) {
    subelemento2.classList.add('smoot_aparicion_2')
    subelemento.classList.add('smoot_aparicion_1')
    subelemento3.classList.add('smoot_aparicion_3')
    elemento6.classList.add('scale_menu_line')
    elemento7.classList.add('inicio_menus')
    subelemento4.classList.add('scalesopcion1')
    subelemento5.classList.add('scalesopcion2')
    subelemento6.classList.add('scalesopcion3')
  }

  if(scrollTop >= 2400) {
    elemento9.classList.add('left-to-right')
    elemento10.classList.add('right-to-left')
  }
  
});




let numeros = document.querySelector('.ul6')
let numeros2 = document.querySelector('.ul7')
let numeros3 = document.querySelector('.ul8')
let HTMLcode = document.getElementById('htmlcode')
let CSScode = document.getElementById('csscode')
let JScode = document.getElementById('jscode')

let buttonHTML = document.getElementById('html')
let buttonCSS = document.getElementById('css')
let buttonJS = document.getElementById('js')

buttonHTML.addEventListener('click', function() {
  numeros.style.display = 'block'
  HTMLcode.style.display = 'block'
  numeros2.style.display = 'none'
  CSScode.style.display = 'none'
  numeros3.style.display = 'none'
  JScode.style.display = 'none'
})

buttonCSS.addEventListener('click', function() {
  numeros.style.display = 'none'
  HTMLcode.style.display = 'none'
  numeros2.style.display = 'block'
  CSScode.style.display = 'block'
  numeros3.style.display = 'none'
  JScode.style.display = 'none'
})

buttonJS.addEventListener('click', function() {
  numeros.style.display = 'none'
  HTMLcode.style.display = 'none'
  numeros2.style.display = 'none'
  CSScode.style.display = 'none'
  numeros3.style.display = 'block'
  JScode.style.display = 'block'
})



let aprender = document.getElementById('aprender')
let diagonal = document.getElementById('diag')
let saber = document.getElementById('learn')
let resenas = document.getElementById('rese')
let agregar = document.getElementById('adds')



aprender.addEventListener('mouseover', function() {
  diagonal.style.marginLeft = '10px'
  diagonal.style.marginTop = '-10px'
  
})



aprender.addEventListener('mouseout', function() {
  diagonal.style.marginLeft = '0px'
  diagonal.style.marginTop = '0px'
})

resenas.addEventListener('mouseover', function() {
  agregar.style.rotate = '360deg'
})

resenas.addEventListener('mouseout', function() {
  agregar.style.rotate = '0deg'
})


