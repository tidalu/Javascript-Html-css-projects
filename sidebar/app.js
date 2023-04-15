const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.add('show-sidebar');
})

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
})