import Image from "next/image";
import {Info} from "./info"
import Chip from "@mui/material/Chip";
import {Box, Typography} from "@mui/material";


function localLoader({src}) {
    return `https://site-deploy.pages.dev/${src}`;
}

function onChipClicked(index) {
    return undefined;
}

export const Index = () => <main>
    <div className="chips">
        {Info.products.map(function (item, index) {
            return (
                <Chip key={index} label={<Typography component={"span"}>
                    Вода, <Box component={"span"} sx={{fontWeight: 'bold'}}>0.5л</Box></Typography>}
                      onClick={onChipClicked(index)}></Chip>
            )
        })}
    </div>
    <div className="products">
        <div className="product">
            <div className="product_img"><Image src={'pizza.webp'} loader={localLoader} alt={'Пицца'} width='300'
                                                height='150'/></div>
            <div className="product_title">Вода негазированная</div>
            <div className="product_description">1 литр</div>
            <div className="product_price">350.0 ₽</div>
        </div>

        <div className="product">
            <div className="product_img"><Image src={'pizza.webp'} alt={'Пицца'} loader={localLoader} width='300'
                                                height='150'/></div>
            <div className="product_title">Вода негазированная</div>
            <div className="product_description">1 литр</div>
            <div className="product_price">350.0 ₽</div>
        </div>
    </div>
</main>