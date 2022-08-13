const dropZone = document.getElementById('dropZone')
const dropElementsList = document.getElementById('dropElementsList')

dropZone.addEventListener('drop', (e) => {
    const dropShapeID = e.dataTransfer.getData('geometricShape')
    const dropShape = document.getElementById(dropShapeID)

    dropShape.classList.remove('shape--drag')
    dropElementsList.appendChild(dropShape)
    dropShape.removeAttribute('draggable', false)
})

dropZone.addEventListener('dragover', (e) => e.preventDefault())

dropZone.addEventListener('dragenter', () => {
    dropZone.classList.add('drop__dropZone--dropOver')
})

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drop__dropZone--dropOver')
})
