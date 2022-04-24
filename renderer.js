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
