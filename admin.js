const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
// tạo biến đổi chế độ sáng tối
const themeToggler = document.querySelector(".theme-toggler");

// Mở menu 
menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})

// Đóng menu
closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})

//đổi màu giao diện
themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

})