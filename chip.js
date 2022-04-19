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
                chip.style.background = '#D8D8D8'
                onSelected();
            }
        };
    }

    deselect() {
        this.isClicked = false;
        this.chip.firstElementChild.style.display = 'none';
        this.chip.style.background = '#f6f6f6';
    }
}

export default Chip