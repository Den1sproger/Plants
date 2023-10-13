const serviceBtns = document.querySelectorAll('.services__btns button')
const serviceItems = document.querySelectorAll('.service__item')



function toggleBlur(clickedTypes) {
  for (let serviceItem of serviceItems) {
    const serviceItemText = serviceItem.children[1].children[0].textContent
    const isServiceType = clickedTypes.includes(serviceItemText)

    if (!isServiceType) {
      serviceItem.className = 'service__item blur'
    } else {
      serviceItem.className = 'service__item'
    }
  }
}


function getServiceTexts(btnsId) {
  const serviceTypes = {
    garden: 'Garden care',
    lawn: 'Lawn care',
    planting: 'Planting'
  }

  let serviceTexts = []
  for (let id of btnsId) {
    serviceTexts.push(serviceTypes[id])
  }
  return serviceTexts
}


function checkState(button, btnsId) {
  if (button.className === 'click' && btnsId.length === 0) {
    for (let serviceItem of serviceItems) {
      serviceItem.className = 'service__item'
    }
  } else {
    let clickedTypes
    const fullBtnsID = btnsId.slice()
    fullBtnsID.push(button.id)

    if (button.className === 'click' && btnsId.length > 0) {
      clickedTypes = getServiceTexts(btnsId)
    } else {
      clickedTypes = getServiceTexts(fullBtnsID)
    }

    toggleBlur(clickedTypes)
  }
  button.classList.toggle('click')
}


function handleClick(event) {
  const button = event.target
  let clickedButtonsId = []
  
  for (let serviceBtn of serviceBtns) {
    if (serviceBtn.className === 'click' && serviceBtn.id !== button.id) {
      clickedButtonsId.push(serviceBtn.id)
    }
  }
  if (button.className === 'click' || clickedButtonsId.length < 2) {
    checkState(button, clickedButtonsId)
  }
}


for (let serviceBtn of serviceBtns) {
  serviceBtn.addEventListener('click', handleClick)
}


