import Image from "next/image";


function localLoader({src}) {
    return `https://site-deploy.pages.dev/${src}`;
}

export const Index = () => <div className="products">
    <div className="product">
        <div className="product_img"><Image src={'pizza.webp'} loader={localLoader} alt={'Пицца'} width='300'
                                            height='150'/></div>
        <div className="product_title">Вода негазированная</div>
        <div className="product_description">1 литр</div>
        <div className="product_price">350.0 ₽</div>
    </div>

    <div className="product">
        <div className="product_img"><Image src={'pizza.webp'} alt={'Пицца'} loader={localLoader} width='300' height='150'/></div>
        <div className="product_title">Вода негазированная</div>
        <div className="product_description">1 литр</div>
        <div className="product_price">350.0 ₽</div>
    </div>
</div>