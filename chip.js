import theme from "./theme";

class Chip {
    constructor(chip, onSelected, onDeselected) {
        this.chip = chip;

        chip.onclick = () => {
            if (this.isClicked) {
                this.deselect();
                onDeselected();
            } else {
                this.isClicked = true;
                chip.firstElementChild.style.display = 'inline-block';
                chip.style.background = theme.dark_color
                onSelected();
            }
        };
    }

    deselect() {
        this.isClicked = false;
        this.chip.firstElementChild.style.display = 'none';
        this.chip.style.background = theme.light_color;
    }
}

export default Chip