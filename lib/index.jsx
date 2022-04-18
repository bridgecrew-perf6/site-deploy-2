import {Info} from "./info"
import Chip from "@mui/material/Chip";
import {Typography} from "@mui/material";
import {Product} from "./product";

const Index = ({onChipClicked, filteredProducts, clicked}) => <main>
    <div className="page">
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
                return <Product item={item} key={index}></Product>
            })}
        </div>
    </div>
    <div className="cart">

    </div>
</main>

export {Index}