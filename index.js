import Info from './info'
import {render} from "./renderer";

// UI
import Chip from "./chip";
import CartOverlay from './cart-overlay'
import Header from './header'

// Icons
import '!./fonts/MaterialIconsOutlined.woff2'
import '!./fonts/icons.fcss'

// CSS
import './styles/chips.less'
import './styles/footer.less'
import './styles/cart-overlay.less'
import './styles/index.less'

import './robots.txt'
import './manifest.json'

import Api from "./api";

require.context('./images/');

const chips_root = document.getElementById("chips")
const products = document.getElementById("products")
const chips = chips_root.getElementsByClassName("chip");
const api = new Api();

const header = new Header(api)

//import Api from "./api";
let cartOverlay = new CartOverlay(document.getElementById('cart_overlay'), api)
//const api = new Api();


updateListeners(document)

let currentChip = null;

for (let i = 0; i < chips.length; i++) {
    let chip = chips[i];
    let chipClass = new Chip(chip, function () {
        if (currentChip != null) currentChip.deselect()

        currentChip = chipClass;
        let root_str = ''
        Info.products.forEach((product, index) => {
            if (product.category === Info.categories[i]) {
                root_str += render(product, index)
            }
        })
        products.innerHTML = root_str;
        updateListeners(products)
    }, function () {
        currentChip = null;

        let root = ''
        Info.products.forEach((product, index) => {
            root += render(product, index)
        })
        products.innerHTML = root;

        updateListeners(products)
    })
}

function updateListeners(root) {
    for (let button of root.getElementsByClassName('add_to_cart')) {
        button.onclick = ev => {
            cartOverlay.show()
            cartOverlay.add_product(Info.products[button.id])
        }
    }
}