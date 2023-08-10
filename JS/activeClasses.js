//Category Active Class
let changer = document.querySelectorAll(".changer");
let changerDefault = document.querySelector("#default");
const menuItems = document.querySelectorAll(".menu li");
const noItem = document.querySelector('.noItem');

menuItems.forEach(menuItem => {
    const menuItemValue = menuItem.getAttribute('value');
    changer[0].addEventListener('click', () => {
        dishes.sort(function (a, b) {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            return titleA.localeCompare(titleB);
        });
        show(dishes);
        changerDefault.textContent = 'A - Z';
    })
    changer[1].addEventListener('click', () => {
        dishes.sort(function (a, b) {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            return titleB.localeCompare(titleA);
        });
        show(dishes);
        changerDefault.textContent = 'Z - A';
    })
    changer[2].addEventListener("click", () => {
        dishes.sort((a, b) => {
            const priceA = parseFloat(a.price);
            const priceB = parseFloat(b.price);
            return priceA - priceB;
        });
        show(dishes);
        changerDefault.textContent = 'Prices';
    });
    menuItem.addEventListener('click', () => {

        const categories = dishes.filter((itm) => {
            return itm.category.includes(menuItemValue);
        })
        if (categories.length === 0) {
            noItem.style.display = 'block';
            show(categories)
        } else {
            noItem.style.display = 'none';
            show(categories)
        }
        menuItems.forEach(menuItem => menuItem.classList.remove("active"));
        menuItem.classList.add("active");

        show(categories);
        if (menuItemValue === 'All') {
            changer[0].addEventListener('click', () => {
                dishes.sort(function (a, b) {
                    const titleA = a.title.toLowerCase();
                    const titleB = b.title.toLowerCase();
                    return titleA.localeCompare(titleB);
                });
                show(dishes);
                changerDefault.textContent = 'A - Z';
            })
            changer[1].addEventListener('click', () => {
                dishes.sort(function (a, b) {
                    const titleA = a.title.toLowerCase();
                    const titleB = b.title.toLowerCase();
                    return titleB.localeCompare(titleA);
                });
                show(dishes);
                changerDefault.textContent = 'Z - A';
            })
            changer[2].addEventListener("click", () => {
                dishes.sort((a, b) => {
                    const priceA = parseFloat(a.price);
                    const priceB = parseFloat(b.price);
                    return priceA - priceB;
                });
                show(dishes);
                changerDefault.textContent = 'Prices';
            });
            show(dishes)
        } else {
            changer[0].addEventListener('click', () => {
                categories.sort(function (a, b) {
                    const titleA = a.title.toLowerCase();
                    const titleB = b.title.toLowerCase();
                    return titleA.localeCompare(titleB);
                });
                show(categories);
                changerDefault.textContent = 'A - Z';
            })
            changer[1].addEventListener('click', () => {
                categories.sort(function (a, b) {
                    const titleA = a.title.toLowerCase();
                    const titleB = b.title.toLowerCase();
                    return titleB.localeCompare(titleA);
                });
                show(categories);
                changerDefault.textContent = 'Z - A';
            })
            changer[2].addEventListener("click", () => {
                categories.sort((a, b) => {
                    const priceA = parseFloat(a.price);
                    const priceB = parseFloat(b.price);
                    return priceA - priceB;
                });
                show(categories);
                changerDefault.textContent = 'Prices';
            });
        }
    })

})

//Sidebar Active Class

const sidebarItems = document.querySelectorAll('.sidebar li');
sidebarItems[1].classList.add('active')

sidebarItems.forEach((item) => {
    item.addEventListener('click', () => {

        sidebarItems.forEach(item => item.classList.remove("active"))
        item.classList.add("active");

    })
})

//Btns button active

const allBtns = document.querySelectorAll('.btns1 button');
let changer1 = document.querySelectorAll(".changer__");
let changerDefault1 = document.querySelector("#default__");

allBtns.forEach((btn) => {
    const btnValue = btn.innerHTML;
    btn.addEventListener('click', () => {
        changerDefault1.innerHTML = btnValue;
        allBtns.forEach((btn) => btn.classList.remove('active'));
        btn.classList.add('active');
    })
})

//.content .content__card
const contentCard = document.querySelectorAll('.content .content__card');

contentCard.forEach(card => {
    card.addEventListener('click', () => {
        contentCard.forEach(card => card.classList.remove('active'));
        card.classList.add('active');
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
    payment.classList.remove('active');
})

//Information Active Class

const informationBtn = document.querySelector('.informationBtn');
const information = document.querySelector('.information');

informationBtn.addEventListener("click", () => {
    information.classList.add("active");
    functions.classList.remove("active");
    orders.classList.remove("active");
    account.classList.remove('active');
    orderHistory.classList.remove('active');
    payment.classList.remove('active');
})

// Home 
const homeBtn = document.querySelector("#homeBtn");

homeBtn.addEventListener("click", () => {
    payment.classList.remove('active');
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
const subTotal = document.querySelector('.subtotal');
const bigContent = document.querySelector('.bigContent');
const ordersList = document.querySelector('.ordersList');
const allOrders = document.querySelector('.allOrders');
allOrders.innerHTML = "";

ordersBtn.addEventListener("click", () => {
    payment.classList.remove('active');
    orders.classList.add("active");
    all.classList.add("active");
    information.classList.remove("active");
    functions.classList.remove("active");
    account.classList.remove('active');
    orderHistory.classList.remove('active');
    allOrders.innerHTML = "";
    cart(JSON.parse(localStorage.getItem('dishes')));
})

//Account Active Class
const accountBtn = document.querySelector("#accountBtn");
const account = document.querySelector(".account");

accountBtn.addEventListener("click", () => {
    account.classList.add('active');
    all.classList.add('active');
    payment.classList.remove('active');
    information.classList.remove('active');
    functions.classList.remove('active');
    orders.classList.remove('active');
    orderHistory.classList.remove('active');
})

//Order history Active Class
const orderHistoryBtn = document.querySelector(".orderHistoryBtn");
const orderHistoryBtnAcc = document.querySelector(".orderHistoryBtnAcc");
const orderHistory = document.querySelector(".orderHistory");


orderHistoryBtn.addEventListener("click", () => {
    arrowAcc.style.display = 'none';
    arrowOrder.style.display = 'block';
    payment.classList.remove('active');
    orderHistory.classList.add('active');
    all.classList.add('active');
    information.classList.remove('active');
    functions.classList.remove('active')
    account.classList.remove("active");
    orders.classList.remove('active');
})

orderHistoryBtnAcc.addEventListener('click', () => {
    arrowAcc.style.display = 'block';
    arrowOrder.style.display = 'none';
    payment.classList.remove('active');
    orderHistory.classList.add('active');
    all.classList.add('active');
    information.classList.remove('active');
    functions.classList.remove('active')
    account.classList.remove("active");
    orders.classList.remove('active');
})
//Payment Active Class

const payment = document.querySelector(".payment");
const paymentBtn = document.querySelector(".paymentBtn");

paymentBtn.addEventListener("click", () => {
    all.classList.add('active');
    payment.classList.add('active');
    orders.classList.remove('active');
    orderHistory.classList.remove('active');
    functions.classList.remove('active');
})

//Remove all
const removeModals = document.querySelectorAll('.removeModals');
const form = document.getElementById('form');
const arrowInfo = document.querySelector('.arrowInfo');
const arrowOrder = document.querySelector('.arrowOrder');
const arrowAcc = document.querySelector('.arrowAcc');

arrowInfo.addEventListener('click', () => {
    functions.classList.add('active');
    information.classList.remove('active');
})

arrowOrder.addEventListener('click', () => {
    functions.classList.add('active');
    orderHistory.classList.remove('active');
})

arrowAcc.addEventListener('click', () => {
    account.classList.add('active');
    orderHistory.classList.remove('active');
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

removeModals.forEach((removeModals) => {
    removeModals.addEventListener('click', () => {
        payment.classList.remove('active');
        orders.classList.remove('active');
        orderHistory.classList.remove('active');
        all.classList.remove('active');
        functions.classList.remove('active');
        account.classList.remove('active')
        sidebarItems[1].classList.add('active')
        sidebarItems[6].classList.remove('active')
        sidebarItems[5].classList.remove('active')
        sidebarItems[4].classList.remove('active')
        sidebarItems[3].classList.remove('active')
        sidebarItems[2].classList.remove('active')
        sidebarItems[0].classList.remove('active')
        sidebarItems[7].classList.remove('active')
    })
})

const remove = document.querySelector('.remove');

remove.addEventListener('click', () => {
    ordersList.classList.add('active');
    orders.classList.add('active');
    all.classList.add('active');
    functions.classList.remove('active');
    payment.classList.remove('active');
})

//Click esc 
document.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (e.keyCode === 27) {
        payment.classList.remove('active');
        orders.classList.remove('active');
        orderHistory.classList.remove('active');
        all.classList.remove('active');
        account.classList.remove('active');
        functions.classList.remove('active');
    }
})

//Order Sent 
let sentOrder = document.querySelector('#sentOrder');

sentOrder.addEventListener('click', () => {
    alert('Your order has been sent!!');
    localStorage.removeItem('dishes');
    number.innerHTML = 0;
    payment.classList.remove('active');
    orders.classList.remove('active');
    orderHistory.classList.remove('active');
    all.classList.remove('active');
    functions.classList.remove('active');
    sidebarItems[1].classList.add('active')
    sidebarItems[6].classList.remove('active')
});