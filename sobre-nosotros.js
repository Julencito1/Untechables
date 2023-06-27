let htmlEntero = document.getElementById('sobre-n')


let oscuro1 = document.getElementById('oscuro1')
let oscuro2 = document.getElementById('oscuro2')







let menu = document.getElementById('menu')
let menuback = document.querySelector('.menu')
let miLista = document.querySelector('.ul10')
let barrera = document.querySelector('.interLinee')
let nose = document.querySelector('.ul11')

menu.addEventListener('click',function() {


  oscuro1.style.opacity = '0.5'
  oscuro2.style.opacity = '0.5'


  if(menuback.style.width === '300px') {
  menuback.style.width = '00px'
  menuback.style.marginLeft = '00px'
  } else {
    menuback.style.width = '300px'
    menuback.style.marginLeft = '-300px'
    miLista.style.display = 'block'
    barrera.style.display = 'block'
    nose.style.display = 'block'
  }
})

let cruz = document.getElementById('cerrar')

cruz.addEventListener('click', function() {
  menuback.style.width = '0px'
  menuback.style.marginLeft = '0px'
  oscuro1.style.opacity = '1'
  oscuro2.style.opacity = '1'
})


window.addEventListener('scroll', function() {
  let scroll = window.pageYOffset || document.documentElement.scrollTop;
  let cuadrado = document.querySelector('.cuadrado')

  if(scroll >= 100) {
    cuadrado.style.backgroundColor = 'rgba(128,134,139,0.2)'
  }

  if(scroll < 100) {
    cuadrado.style.backgroundColor = 'white'
    cuadrado.style.color = 'black'
  }
})


