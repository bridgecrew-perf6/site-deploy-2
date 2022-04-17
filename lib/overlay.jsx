export const Overlay = () => <div className="address_overlay" id="address_overlay" hidden>
    <div className="address_view">
        Ваш адрес:
        <span id="address_text"></span>

        <span className="material-icons close" id="close">
            close
        </span>
    </div>

    <div id="map">
        <div className="material-icons center-marker" id="close">
            place
        </div>
    </div>
</div>
