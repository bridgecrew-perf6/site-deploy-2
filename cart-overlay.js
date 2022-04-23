import theme from "./theme";

class CartOverlay {
    constructor(overlay) {
        this.isClicked = false;
        this.products = []
        this.cart_header_button = document.getElementById('cart_button');
        this.empty_cart = document.getElementById('empty_cart')
        this.order_button = document.getElementById('order_button')
        this.overlay = overlay

        this.order_button.onclick = ev => {

        }

        this.cart_header_button.onclick = ev => {
            this.toggle()
        }
    }

    show() {
        this.cart_header_button.style.background = theme.dark_color
        this.overlay.style.display = 'block';
        this.isClicked = true;
    }

    hide() {
        this.overlay.style.display = 'none';
        this.isClicked = false;
        this.cart_header_button.style.background = theme.primary_color
    }

    toggle() {
        if (this.isClicked) {
            this.hide();
        } else {
            this.show();
        }

        return this.isClicked;
    }

    add_product(product) {
        this.empty_cart.style.display = 'none'
        this.order_button.style.display = 'block'

        product.count = 1
        this.products.push(product)

        let element = document.createElement('div')
        element.classList.add('cart_product')
        element.innerHTML = `
<img class="cart_product_img" src="${product.image_uri}" alt="" loading="lazy"/>
<div class="cart_product_info">
   <div class="cart_product_title">${product.title}</div>
   <div class="cart_product_detailed_info">
      <span class="product_description">
      ${product.description}
      </span>
      <div class="cart_product_count">
         <span id="cart_product_count_text">
             <span style="margin-right: 4px">x</span>
             <span class="cart_product_count_number">1</span>
         </span>
         <div class="controls">
            <div class="count_controls">
               <span class="material-icons-outlined count_up">
               keyboard_arrow_up
               </span>
               <span class="material-icons-outlined count_down">
               keyboard_arrow_down
               </span>
            </div>
            <span class="material-icons-outlined delete_product">
            clear
            </span>
         </div>
      </div>
   </div>
   <div class="cart_product_price">${product.price / 100} ₽</div>
</div>`

        let count_element = element.getElementsByClassName("cart_product_count_number").item(0);

        element.getElementsByClassName("count_up")[0].onclick = () => {
            product.count++
            count_element.textContent = product.count
        }

        element.getElementsByClassName("count_down")[0].onclick = () => {
            if (product.count !== 1) {
                product.count--
                count_element.textContent = product.count
            }
        }

        element.getElementsByClassName('delete_product').item(0).onclick = () => {
            this.remove_product(product, element)
        };

        this.overlay.prepend(element)
    }

    remove_product(product, element) {
        let index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
        console.log(this.products);

        element.remove()
        if (this.products.length === 0) {
            this.empty_cart.style.display = 'inline-block'
            this.order_button.style.display = 'none'
        }
    }
}

export default CartOverlay;