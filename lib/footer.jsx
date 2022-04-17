import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import {Info} from './info';

export const Footer = () => <footer>
    <ul className="list">
        <li className="info_text">Контакты:</li>

        <li className="footer-icon-li">
            <PhoneIcon className={'footer-icon'}/>
            <div className="list_text">
                <span>Телефон:</span>
                <span><a href={"tel:" + Info.admin.phone}>{Info.admin.phone}</a></span>
            </div>
        </li>
        <li className="footer-icon-li">
            <EmailIcon className={'footer-icon'}/>
            <div className="list_text">
                <span>
                    Электронная почта:
                </span>
                <span>
                    <a href={"mailto:" + Info.admin.email}>{Info.admin.email}</a>
                </span>
            </div>
        </li>
        <li className="footer-icon-li">
            <PlaceIcon className={'footer-icon'}/>
            <div className="list_text">
                <span>
                    Адрес:
                </span>
                <span>
                    <a href={Info.admin.addressLink}>{Info.admin.address}</a>
                </span>
            </div>
        </li>
    </ul>
    <ul className="list info_block">
        <li className="info_text">Информация:</li>
        <li><a href="">О магазине</a></li>
        <li><a href="">Доставка</a></li>
        <li><a href="">Гарантия</a></li>
    </ul>
</footer>