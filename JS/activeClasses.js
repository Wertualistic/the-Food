//Category Active Class
const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(menuItem => {
    const menuItemValue = menuItem.getAttribute('value');

    menuItem.addEventListener('click', () => {
        const filteredDishes = dishes.filter((itm) => {
            return itm.category === menuItemValue;
        })
        menuItems.forEach(menuItem => menuItem.classList.remove("active"));
        menuItem.classList.add("active");

        show(filteredDishes);
        sorting(filteredDishes);

        if (menuItemValue === 'All') {
            return (
                sorting(dishes),
                show(dishes)
            );
        } else {
            return (
                sorting(filteredDishes),
                show(filteredDishes)
            );
        }
    })

})

//Sidebar Active Class

const sidebarItems = document.querySelectorAll('.sidebar li i');

sidebarItems.forEach((item) => {
    item.addEventListener('click', () => {

        sidebarItems.forEach(item => item.classList.remove("active"))
        item.classList.add("active");

    })
})

//Functions Active Class

const all = document.querySelector("#all");
const functions = document.querySelector(".functions");
const functionsBtn = document.querySelector("#functionsBtn");

functionsBtn.addEventListener("click", () => {
    functions.classList.add("active");
    all.classList.add("active")
    information.classList.remove("active");
    orders.classList.remove("active");
    account.classList.remove('active');
    orderHistory.classList.remove('active');
})

//Information Active Class

const informationBtn = document.querySelector('.informationBtn');
const information = document.querySelector('.information');

informationBtn.addEventListener("click", () => {
    information.classList.toggle("active");
    functions.classList.remove("active");
    orders.classList.remove("active");
    account.classList.remove('active');
    orderHistory.classList.remove('active');
})

// Home 
const homeBtn = document.querySelector("#homeBtn");

homeBtn.addEventListener("click", () => {
    all.classList.remove("active");
    functions.classList.remove("active");
    information.classList.remove("active");
    orders.classList.remove("active");
    account.classList.remove('active');
    orderHistory.classList.remove('active');
})

//Orders Active Class

const ordersBtn = document.querySelector("#ordersBtn");
const orders = document.querySelector(".orders");

ordersBtn.addEventListener("click", () => {
    orders.classList.add("active");
    all.classList.add("active");
    information.classList.remove("active");
    functions.classList.remove("active");
    account.classList.remove('active');
    orderHistory.classList.remove('active');
})

//Account Active Class
const accountBtn = document.querySelector("#accountBtn");
const account = document.querySelector(".account");

accountBtn.addEventListener("click", () => {
    account.classList.add('active');
    all.classList.add('active');
    information.classList.remove('active');
    functions.classList.remove('active');
    orders.classList.remove('active');
    orderHistory.classList.remove('active');
})

//Order history Active Class
const orderHistoryBtns = document.querySelectorAll(".orderHistoryBtn");
const orderHistory = document.querySelector(".orderHistory");

orderHistoryBtns.forEach((orderHistoryBtn) => {
    orderHistoryBtn.addEventListener("click", () => {
        orderHistory.classList.add('active');
        all.classList.add('active');
        information.classList.remove('active');
        functions.classList.remove('active')
        account.classList.remove("active");
        orders.classList.remove('active');
    })
})

//Remove all
const removeModals = document.querySelector('#removeModals');

removeModals.addEventListener('click', () => {
    orders.classList.remove('active');
    orderHistory.classList.remove('active');
    all.classList.remove('active');
})

//Click esc 
document.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (e.keyCode === 27) {
        orders.classList.remove('active');
        orderHistory.classList.remove('active');
        all.classList.remove('active');
        account.classList.remove('active');
        functions.classList.remove('active');
    }
})