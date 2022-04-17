import Image from "next/image";
import {Info} from "./info"
import Chip from "@mui/material/Chip";
import {Typography} from "@mui/material";


function localLoader({src}) {
    return `https://site-deploy.pages.dev/${src}`;
}

function onChipClicked(index) {
    return undefined;
}

export const Index = () => <main>
    <div className="chips">
        {Info.categories.map(function (item, index) {
            return (
                <Chip key={index} className="chip" label={<Typography component={"span"}>{item}</Typography>}
                      onClick={onChipClicked(index)}></Chip>
            )
        })}
    </div>
    <div className="products">
        {Info.products.map(function (item, index) {
            return (
                <div key={index} className="product">
                    <div className="product_img"><Image src={item.image_uri} alt={'Пицца'} loader={localLoader}
                                                        width='300'
                                                        height='150'/></div>
                    <div className="product_title">{item.title}</div>
                    <div className="product_description">{item.description}</div>
                    <div className="product_price">{item.price / 100} ₽</div>
                </div>
            )
        })}
    </div>
</main>