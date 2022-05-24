function clear() {
    document.getElementById("menu_nav").classList.remove('mobile_menu_open');
    document.getElementById("menu_nav").classList.add('mobile_menu');
}

function menu_open() {
    if (document.getElementById("menu_nav").classList == 'mobile_menu') {
        document.getElementById("menu_nav").classList.remove('mobile_menu');
        document.getElementById("menu_nav").classList.add('mobile_menu_open');
    } else{
        document.getElementById("menu_nav").classList.remove('mobile_menu_open');
        document.getElementById("menu_nav").classList.add('mobile_menu');
    }
}