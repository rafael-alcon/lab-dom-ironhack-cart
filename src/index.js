// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').textContent)
  const quantity = parseFloat(product.querySelector('.quantity input').value)
  const subtotal = price * quantity
  product.querySelector('.subtotal span').textContent= subtotal
  return subtotal
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 productsCart = document.getElementsByClassName("product")
 tableCart= document.getElementById("cart")
 console.log(productsCart)
 let totalPrice =0
 for (i=0; i<productsCart.length;i++){
  totalPrice +=  updateSubtotal(productsCart[i])
  //console.log(retorno) 
 }
 console.log(totalPrice)
 document.querySelector('#total-value span').textContent = totalPrice

 //document.querySelector('total-value span').textContent = totalCost
  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4  

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  console.log('elemento eliminado')
  //... your code goes here.parentNode
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const cartGlobal = document.querySelector('#cart tbody')
  //let newRow = document.createElement('tr')
  //newRow.classList.add('product')
  let PName = document.createElement('td')
  let PNameText = document.createTextNode(document.querySelector ('.create-product input[type="text"]').value) 
  PName.appendChild(PNameText)

  let UPrice = document.createElement('td')
  let UPriceText = document.createElement('span')
  UPriceText.textContent=document.querySelector('.create-product input[type="number"]').value
  UPrice.classList.add('price')
  UPrice.textContent='$'
  UPrice.appendChild(UPriceText)
  

  let qTd = document.createElement('td')
  let qTdText = document.createElement('input')
  qTdText.setAttribute('type', 'number')
  qTdText.setAttribute('value','0')
  qTdText.setAttribute('min', '0')
  qTdText.setAttribute('placeholder','Quantity')
  qTd.classList.add('quantity')
  qTd.appendChild(qTdText)

  let sTotal = document.createElement('td')
  sTotal.textContent='$'
  let sTotalText = document.createElement('span')
  sTotalText.textContent=0
  sTotal.classList.add('subtotal')
  sTotal.appendChild(sTotalText)

  let btnDeleteCell = document.createElement('td')
  let btnDelete = document.createElement('button')
  let btnDeleteText = document.createTextNode('Remove')
  btnDelete.classList.add('btn')
  btnDelete.classList.add('btn-remove')
  btnDelete.appendChild(btnDeleteText)
  btnDelete.addEventListener('click', removeProduct)

  btnDeleteCell.appendChild(btnDelete)

  let newRow = document.createElement('tr')
  newRow.classList.add('product')
  
  newRow.appendChild(PName)
  newRow.appendChild(UPrice)
  newRow.appendChild(qTd)
  newRow.appendChild(sTotal)
  newRow.appendChild(btnDeleteCell)
  cartGlobal.appendChild(newRow)

  document.querySelector ('.create-product input[type="text"]').value=""
  document.querySelector('.create-product input[type="number"]').value="0"
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const deleteBtn = document.getElementsByClassName('btn-remove')
  for (i=0; i<deleteBtn.length; i++){
    deleteBtn[i].addEventListener('click', removeProduct)
  }
  const createBtn = document.getElementById('create')
  createBtn.addEventListener('click', createProduct)
  //... your code goes here
});
