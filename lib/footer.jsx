import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export const Footer = () => <footer>
    <ul className="list">
        <li className="info_text">Контакты:</li>

        <li className="footer-icon-li">
            <PhoneIcon className={'footer-icon'} />
            <div className="list_text">
                <span>Телефон:</span>
                <span><a href="tel:+79170324874">+79170324874</a></span>
            </div>
        </li>
        <li className="footer-icon-li">
            <EmailIcon className={'footer-icon'} />
            <div className="list_text">
                <span>
                    Электронная почта:
                </span>
                <span>
                    <a href="mailto:rozhkov.2006@gmail.com">rozhkov.2006@gmail.com</a>
                </span>
            </div>
        </li>
        <li className="footer-icon-li">
            <PlaceIcon className={'footer-icon'} />
            <div className="list_text">
                <span>
                    Адрес:
                </span>
                <span>
                    <a href="">Самара, ул. Томашевский тупик, дом 16</a>
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