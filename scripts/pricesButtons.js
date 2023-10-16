const pricesItem = document.querySelector('.prices__item')
const pricesItemsContainer = document.querySelector('.prices__items')
const pricesItems = document.querySelectorAll('.price__item')


function getOpenPriceCode(title, price, catId) {
  return `
  <div class="price__item__container">
    <div>
      <span>${title}</span>
      <button class="dropup" onclick="viewPrice('${catId}')">
        <img src="assets/accordion_btn_up.svg" alt="accordion up">
      </button>
    </div>
    <hr>
    <p class="description">Release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>
    <p class="price__sec"><span>$${price}</span> / per hour</p>
    <button class="order" onclick="scrollToContacts()">Order</button>
  </div>
`
}


function getHidePriceCode(title, catId) {
  return `
    <span class="price__category">${title}</span>
    <button class="dropdown" onclick="viewPrice('${catId}')">
      <img src="assets/accordion_btn_down.svg" alt="accordion down">
    </button>
  `
}


function viewPrice(categoryId) {
  const pricesCategories = {
    'basics': ['Basics', 15],
    'standard': ['Standard', 25],
    'pro-care': ['Pro care', 35]
  }

  const categoryInfo = pricesCategories[categoryId]
  const priceItem = document.getElementById(categoryId)

  // hide another opened price category
  for (let priceItem of pricesItems) {
    const currentCatId = priceItem.id
    const currentText = pricesCategories[currentCatId][0]

    if (priceItem.className === 'price__item revealed' && currentCatId !== categoryId) {
      priceItem.innerHTML = getHidePriceCode(title=currentText, catId=currentCatId)
      
      priceItem.classList.toggle('revealed')
      pricesItem.classList.toggle('revealed')
      pricesItemsContainer.classList.toggle('revealed')
      break
    }
  }

  // Open current price category
  if (priceItem.className === 'price__item') {
    priceItem.innerHTML = getOpenPriceCode(title=categoryInfo[0],
                                           price=categoryInfo[1],
                                           catId=categoryId)
  } else {
    priceItem.innerHTML = getHidePriceCode(title=categoryInfo[0], catId=categoryId)
  }

  priceItem.classList.toggle('revealed')
  pricesItem.classList.toggle('revealed')
  pricesItemsContainer.classList.toggle('revealed')
}


function scrollToContacts() {
  const section = document.getElementById('contacts')
  window.scrollTo(
    {
      top: section.offsetTop,
      behavior: 'smooth'
    }
  )
}