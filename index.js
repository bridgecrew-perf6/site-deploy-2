import './header'

// Icons
import './fonts/MaterialIconsOutlined.woff2'
import './styles/icons.less'

// CSS
import './styles/chips.less'
import './styles/footer.less'
import './styles/cart-overlay.less'
import './styles/index.less'

import './robots.txt'
require.context('./images/');
import './manifest.json'

import Info from './info'
import Chip from "./chip";
import {filter, render} from "./filter";

let chips_root = document.getElementById("chips")
let products = document.getElementById("products")
let chips = chips_root.getElementsByClassName("chip");
let currentChip = null;

for (let i = 0; i < chips.length; i++) {
    let chip = chips[i];
    let chipClass = new Chip(chip, function () {
        if(currentChip != null) currentChip.deselect()

        currentChip = chipClass;
        filter(Info.categories[i], products)
    }, function () {
        currentChip = null;
        products.innerHTML = '';
        Info.products.forEach(product => {
            render(product, products)
        })
    })
}
