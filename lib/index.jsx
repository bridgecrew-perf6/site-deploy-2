import Image from "next/image";
import {Info} from "./info"
import Chip from "@mui/material/Chip";
import {Button, Typography} from "@mui/material";
import {AddShoppingCart} from "@mui/icons-material";

function localLoader({src}) {
    return `https://site-deploy.pages.dev/${src}`;
}

const Index = ({onChipClicked, filteredProducts, clicked}) => <main>
    <div className="chips">
        {Info.categories.map(function (item, index) {
            return (
                <Chip key={index} className="chip" label={<Typography component={"span"}>{item}</Typography>}
                      onClick={event => onChipClicked(item)}
                      variant={(item === clicked) ? "filled" : "outlined"}></Chip>
            )
        })}
    </div>
    <div className="products">
        {filteredProducts.map(function (item, index) {
            return (
                <div key={index} className="product">
                    <div className="product_img"><Image src={item.image_uri} alt={'Пицца'} loader={localLoader}
                                                        width="300"
                                                        height="150"/></div>
                    <div className="product_title">{item.title}</div>
                    <div className="sub">
                        <div>
                            <div className="product_description">{item.description}</div>
                            <div className="product_price">{item.price / 100} ₽</div>
                        </div>
                        <Button variant="outlined" startIcon={<AddShoppingCart />} className="order_button">
                            Заказать
                        </Button>
                    </div>
                </div>
            )
        })}
    </div>
</main>

export {Index}