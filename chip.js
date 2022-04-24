import theme from "./theme";

class Chip {
    constructor(chip, onSelected, onDeselected) {
        this.chip = chip;

        chip.onclick = () => {
            if(this.toggle()) {
                onSelected()
            } else onDeselected();
        };
    }

    toggle() {
        if(this.isSelected) {
            this.deselect()
        } else this.select()

        return this.isSelected
    }

    select() {
        this.isSelected = true;
        this.chip.firstElementChild.style.display = 'inline-block';
        this.chip.style.background = theme.dark_color
    }

    deselect() {
        this.isClicked = false;
        this.chip.firstElementChild.style.display = 'none';
        this.chip.style.background = theme.light_color;
    }
}

export default Chip