const menuOptions = document.querySelector('#menu-options')
const width = screen.width
const primaryImg = document.querySelector('#primary-img')

if (width <= 375) {
    primaryImg.src = '../../assets/images/image-web-3-mobile.jpg'
} else {
    primaryImg.src = '../../assets/images/image-web-3-desktop.jpg'
}

function openSideMenu() {
    menuOptions.style.display = 'block'
}

function closeSideMenu() {
    menuOptions.style.display = 'none'
}

