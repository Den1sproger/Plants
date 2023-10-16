const selectConatcs = document.querySelector('.contacts__cities')
const form = document.querySelector('form')



selectConatcs.addEventListener('change', function() {
  const adresses = {
    'Canandaigua, NY': ['+1	585	393 0001', '151 Charlotte Street'],
    'New York City': ['+1 212 456 0002', '9 East 91st Street'],
    'Yonkers, NY': ['+1	914	678 0003', '511 Warburton Ave'],
    'Sherrill, NY': ['+1 315 908 0004', '14 WEST Noyes BLVD']
  }

  const selectedValue = selectConatcs.value
  const adressInfo = adresses[selectedValue]
  const cityCard = document.querySelector('.city-card')

  if (cityCard) {
    cityCard.remove()
  } else {
    selectConatcs.classList.toggle('active')
  }

  form.insertAdjacentHTML('beforeend', `
    <div class="city-card">
      <div class="info-for-city">
        <div class="city-text">
          <div>
            <span>City:</span>
            <p>${selectedValue}</p>
          </div>
          <div>
            <span>Phone:</span>
            <p>${adressInfo[0]}</p>
          </div>
          <div>
            <span>Office adress:</span>
            <p>${adressInfo[1]}</p>
          </div>
        </div>
        <button onclick="callUs('${adressInfo[0]}')">Call us</button>
      </div>
    </div>
   `
  )
})


function callUs(phoneNumber) {
  alert(`Call the number ${phoneNumber}`)
}
