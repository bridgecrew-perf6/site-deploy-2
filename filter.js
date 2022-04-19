import Info from "./info";

export function filter(category, root) {
    root.innerHTML = ''
    Info.products.filter(product => product.category === category).forEach(product => {
        render(product, root)
    })
}

export function render(product, root) {
    root.innerHTML += `
        <div class="product">
            <div class="product_img"><img src="${product.image_uri}" alt="" width="300" height="150" loading="lazy"></div>
            <div class="product_title">${product.title}</div>
            <div class="product_description">${product.description}</div>
            <div class="product_price">${product.price / 100} ₽</div>
        </div>
        `
}
