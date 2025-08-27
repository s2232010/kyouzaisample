const menu = document.getElementById("menu");
const back = document.getElementById("back");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
    // メニューが開いていないとき
    if (!nav.classList.contains("open-menu")) {
        nav.classList.add("open-menu");
        back.classList.add("open");
        menu.textContent = "閉じる";
    } else {
        // メニューが開いているとき
        nav.classList.remove("open-menu");
        back.classList.remove("open");
        menu.textContent = "menu";
    }
});

// 背景をクリックしてメニューを閉じる
back.addEventListener("click", () => {
    nav.classList.remove("open-menu");
    back.classList.remove("open");
    menu.textContent = "menu";
});
