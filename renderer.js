export function render(product, index) {
    return `
        <div class="product">
            <div class="product_img"><img src="${product.image_uri}" alt="" width="300" height="150" loading="lazy"></div>
            <div class="product_title">${product.title}</div>
            <div class="product_description">${product.description}</div>
            <div class="product_price">${product.price / 100} ₽</div>
            <span class="material-icons-outlined add_to_cart" id="${index}">
                &#xe854;
            </span>
        </div>
        `
}

export function renderProfileInfo(phone) {
    return `
    ${phone}
    `
}

export function renderCartProduct(product) {
    return `
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
               &#xe316;
               </span>
               <span class="material-icons-outlined count_down">
               &#xe313;
               </span>
            </div>
            <span class="material-icons-outlined delete_product">
                &#xe14c;
            </span>
         </div>
      </div>
   </div>
   <div class="cart_product_price">${product.price / 100} ₽</div>
</div>`
}
