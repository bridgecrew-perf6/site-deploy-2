import Image from "next/image";
import {Button} from "@mui/material";
import {AddShoppingCart} from "@mui/icons-material";
import {loader} from "../cfloader"

export const Product = ({item}) => (
    <div className="product">
        <div className="product_img"><Image src={item.image_uri} alt={'Пицца'} loader={loader}
                                            width="300"
                                            height="150"/></div>
        <div className="product_title">{item.title}</div>
        <div className="sub">
            <div>
                <div className="product_description">{item.description}</div>
                <div className="product_price">{item.price / 100} ₽</div>
            </div>
            <Button variant="outlined" startIcon={<AddShoppingCart/>} className="order_button">
                В корзину
            </Button>
        </div>
    </div>
)