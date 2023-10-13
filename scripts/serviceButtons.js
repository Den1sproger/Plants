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


function getActiveServiceTexts(btnsId) {
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
  if (button.className === 'click' && btnsId.length === 0) {      // if current button is active and other buttons are not active
    for (let serviceItem of serviceItems) {
      serviceItem.className = 'service__item'
    }
  } else {
    let clickedTypes
    const fullBtnsID = btnsId.slice()
    fullBtnsID.push(button.id)

    if (button.className === 'click' && btnsId.length > 0) {      // if currnet button is active and one other button is active
      clickedTypes = getActiveServiceTexts(btnsId)
    } else {
      clickedTypes = getActiveServiceTexts(fullBtnsID)
    }

    toggleBlur(clickedTypes)
  }
  button.classList.toggle('click')
}



function handleClick(event) {
  const button = event.target

  // search active buttons
  let activeButtonsId = []
  for (let serviceBtn of serviceBtns) {
    if (serviceBtn.className === 'click' && serviceBtn.id !== button.id) {
      activeButtonsId.push(serviceBtn.id)
    }
  }

  // if current button is active or noе all other buttons are active
  if (button.className === 'click' || clickedButtonsId.length < 2) {
    checkState(button, activeButtonsId)
  }
}


// add listeners for each service Button
for (let serviceBtn of serviceBtns) {
  serviceBtn.addEventListener('click', handleClick)
}


