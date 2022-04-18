import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlaceIcon from '@mui/icons-material/Place';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Overlay} from "./overlay";
import React, {useState} from 'react'

export function Header() {
    const [showOverlay, setShowOverlay] = useState(false)

    return <>
        <HeaderPage onAddressClicked={() => {
            setShowOverlay(true)
        }}/>
        <Overlay show={showOverlay} onCloseClicked={() => setShowOverlay(false)}></Overlay>
    </>
}

const HeaderPage = ({onAddressClicked}) => <header>
    <div className="title clickable">Shop</div>
    <div className="address clickable" id="address" onClick={onAddressClicked}>
        <PlaceIcon/>

        <span className="your_address">
            Ваш адрес
        </span>
    </div>
    <nav className="right_panel">
        <span className="item last-item clickable">
            <SearchIcon className={"panel_icon"}/>
            Поиск
        </span>

        <span className="item clickable">
            <AccountCircleIcon className={"panel_icon"}/>
            Войти
        </span>

        <span className="item first-item clickable">
            <ShoppingCartIcon className={"panel_icon"}/>
            Корзина
        </span>
    </nav>
</header>
