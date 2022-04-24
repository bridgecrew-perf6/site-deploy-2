import theme from "./theme";
import {renderCartProduct} from "./renderer";

class CartOverlay {
    constructor(overlay, api) {
        this.isClicked = false;
        this.products = []

        this.cart_header_button = document.getElementById('cart_button');
        this.empty_cart = document.getElementById('empty_cart')
        this.order_button = document.getElementById('order_button')

        this.overlay = overlay

        this.order_button.onclick = ev => {
            api.order()
        }

        this.cart_header_button.onclick = ev => {
            console.log("clicked")
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
        element.innerHTML = renderCartProduct(product)

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

        element.remove()
        if (this.products.length === 0) {
            this.empty_cart.style.display = 'inline-block'
            this.order_button.style.display = 'none'
        }
    }
}

export default CartOverlay;