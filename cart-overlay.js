import theme from "./theme";

let overlay = document.getElementById('cart_overlay')
let isClicked = false;
let products = []

let cart_header_button = document.getElementById('cart_button');
cart_header_button.onclick = ev => {
    if (overlay_toggle()) {
        cart_header_button.style.background = theme.dark_color
    } else cart_header_button.style.background = theme.primary_color
}

function overlay_toggle() {
    if (isClicked) {
        // Hide
        overlay.style.display = 'none';
        isClicked = false;
    } else {
        // Show
        overlay.style.display = 'block';
        isClicked = true;
    }

    return isClicked;
}

export function add_product(product) {
    if (products.empty) overlay.innerHTML = ''
    products += product

    let element = document.createElement('div')
    element.classList.add('cart_product')
    element.id = product.id
    element.innerHTML = `
<img class="cart_product_img" src="${product.image_uri}" alt="" loading="lazy"/>
<div class="cart_product_info">
   <div class="cart_product_title">${product.title}</div>
   <div class="cart_product_detailed_info">
      <span class="product_description">
      ${product.description}
      </span>
      <div class="cart_product_count">
         <span id="cart_product_count_text"><span style="margin-right: 4px">x</span>1</span>
         <div class="controls">
            <div class="count_controls">
               <span class="material-icons-outlined count_up">
               keyboard_arrow_up
               </span>
               <span class="material-icons-outlined count_down">
               keyboard_arrow_down
               </span>
            </div>
            <span class="material-icons-outlined" id="delete_product">
            clear
            </span>
         </div>
      </div>
   </div>
   <div class="cart_product_price">${product.price / 100} ₽</div>
</div>`
    element.getElementsByClassName("count_up")[0].onclick = ev => {
        console.log('count_up');
    }
    element.getElementsByClassName("count_down")[0].onclick = ev => {
        console.log('count_down')
    }

    overlay.appendChild(element)
}

export function remove_product(product) {
    products -= product;
    document.getElementById(product.uid).remove()
}