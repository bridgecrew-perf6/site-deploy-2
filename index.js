import './header'

// Icons
import './fonts/MaterialIcons-Regular.woff2'
import './fonts/MaterialIcons-Regular.woff'
import './fonts/MaterialIcons-Regular.eot'
import './styles/icons.css'

// CSS
import './styles/chips.css'
import './styles/footer.css'
import './styles/index.css'

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
        products.innerHTML = '';
        Info.products.forEach(product => {
            render(product, products)
        })
    })
}
