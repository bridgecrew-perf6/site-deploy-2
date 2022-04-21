let overlay = document.getElementById('cart_overlay')
let isClicked = false;

export function overlay_toggle() {
    if(isClicked) {
        // Hide
        overlay.style.display = 'none';
        isClicked = false;
    } else {
        // Show
        overlay.style.display = 'block';
        isClicked = true;
    }

    return isClicked;
}
