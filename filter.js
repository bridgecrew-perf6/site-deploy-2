import Info from "./info";

export function filter(category, root) {
    root.innerHTML = ''
    Info.products.filter(product => product.category === category).forEach(product => {
        render(product, root)
    })
}

function renderImg(product) {
    let product_img = document.createElement('div');
    product_img.classList.add('product_img')

    let img = document.createElement('img')
    img.src = product.image_uri;
    img.alt = product.title;
    img.width = 300;
    img.height = 150;
    img.loading = 'lazy';
    product_img.appendChild(img)

    return product_img
}

export function render(product, root) {
    let product_element = document.createElement('div');
    product_element.classList.add('product')
    product_element.id = product.id

    product_element.appendChild(renderImg(product));

    let title_element = document.createElement('div')
    title_element.classList.add('product_title')
    title_element.textContent = product.title
    product_element.appendChild(title_element)

    let description_element = document.createElement('div')
    description_element.classList.add('product_description')
    description_element.textContent = product.description;
    product_element.appendChild(description_element)

    let product_price_element = document.createElement('div')
    product_price_element.classList.add('product_price')
    product_price_element.textContent = (product.price / 100) + ' ₽'
    product_element.appendChild(product_price_element)

    root.appendChild(product_element)
}
