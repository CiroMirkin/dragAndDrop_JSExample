"use strict"

const geometricShapes = document.getElementById('geometricShapes')

geometricShapes.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('geometricShape', e.target.id)
})

geometricShapes.addEventListener('drag', (e) => {
  e.target.classList.add('shape--drag')
})

