let selectedCategory = "All";

let dishes = [
    {
        id: 1,
        productId: 1,
        title: "Spicy seasoned seafood  ",
        category: "Hot Dishes",
        countable: 1,
        img: 'images/first.png',
        price: 2.79,
        available: 7,
        amount: 2.79
    },
    {
        id: 2,
        productId: 2,
        title: "Bombay biryani",
        category: "Hot Dishes",
        countable: 1,
        img: 'https://c8.alamy.com/comp/G41ADP/yummy-delicious-chicken-biryani-in-a-round-bowl-G41ADP.jpg',
        price: 1.99,
        available: 17,
        amount: 1.99
    },
    {
        id: 3,
        productId: 3,
        title: "Malabar Fish Curry",
        category: "Cold Dishes",
        countable: 1,
        img: 'https://mitarcooking.com/wp-content/uploads/2023/05/word-image-2344-1.jpeg',
        price: 3.99,
        available: 23,
        amount: 3.99
    },
    {
        id: 4,
        productId: 4,
        title: "Gobi manchurian",
        category: "Cold Dishes",
        countable: 1,
        img: 'https://www.indianveggiedelight.com/wp-content/uploads/2021/07/gobi-manchurian-1.jpg',
        price: 2.99,
        available: 20,
        amount: 2.99
    },
    {
        id: 5,
        productId: 5,
        title: "Uttapam",
        category: "Soup",
        countable: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0FBmx95P2og3mPsrDSBFt8IhD-uTroVMaEg&usqp=CAU',
        price: 4.69,
        available: 19,
        amount: 4.69
    },
    {
        id: 6,
        productId: 6,
        title: "Curd Rice",
        category: "Soup",
        countable: 1,
        img: 'https://foodiviews.com/wp-content/uploads/2023/01/Curd-rice.jpeg',
        price: 4.29,
        available: 20,
        amount: 4.29
    },
    {
        id: 7,
        productId: 7,
        title: "Shrikhand",
        category: "Grill",
        countable: 1,
        img: 'https://www.cookingcarnival.com/wp-content/uploads/2021/08/No-bake-shrikhand-tart-4.jpg',
        price: 3.19,
        available: 18,
        amount: 3.19

    },
    {
        id: 8,
        productId: 8,
        title: "Punjabi kadhi",
        category: "Grill",
        countable: 1,
        img: 'https://1.bp.blogspot.com/-8aGepsSWmnc/XqH1SmmSoNI/AAAAAAABEQw/0hSe-oftpK8NtV7erhmggGWp2kWOBgucQCLcBGAsYHQ/s640/kadhi%2Bpakoda%2B%25281%2529.JPG',
        price: 2.19,
        available: 22,
        amount: 2.19
    },
    {
        id: 9,
        productId: 9,
        title: "Jeera Rice",
        category: "Appetizer",
        countable: 1,
        img: 'https://soyummyrecipes.co.uk/wp-content/uploads/2021/11/Tuna-Fried-Rice-1.jpg.webp',
        price: 3.69,
        available: 11,
        amount: 3.29
    },
    {
        id: 10,
        productId: 10,
        title: "Gajar ka halwa",
        category: "Appetizer",
        countable: 1,
        img: 'https://img-global.cpcdn.com/recipes/55ebf1234ed9f9b9/680x482cq70/gajar-ka-halwa-recipe-main-photo.jpg',
        price: 2.69,
        available: 10,
        amount: 2.69
    },
    {
        id: 11,
        productId: 11,
        title: "Laal maas",
        category: "Dessert",
        countable: 1,
        img: "https://www.unileverfoodsolutions.pk/dam/global-ufs/mcos/meps/pakistan/calcmenu/recipes/PK-recipes/laal-maas/laal-maas-main-header-1260x709.jpg",
        price: 3.29,
        available: 17,
        amount: 3.29
    },
    {
        id: 12,
        productId: 12,
        title: "Mattar paneer",
        category: "Dessert",
        countable: 1,
        img: 'https://c.ndtvimg.com/2020-04/e0s7nkfg_paneer-mattar_625x300_16_April_20.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886',
        price: 2.29,
        available: 20,
        amount: 2.29
    },
];
let alertt = document.querySelector('.alert');
const saveToLocalstorage = (dish) => {
    let cartItems = JSON.parse(localStorage.getItem('dishes')) || [];

    const existingItemIndex = cartItems.findIndex(item => item.productId === dish.productId);
    if (existingItemIndex !== -1) {
        if (cartItems[existingItemIndex].countable === cartItems[existingItemIndex].available) {
            alert(`Product is ${cartItems[existingItemIndex].available} limit`)
        } else {
            cartItems[existingItemIndex].countable++;
            cartItems[existingItemIndex].amount = (parseFloat(cartItems[existingItemIndex].amount) + parseFloat(dish.price)).toFixed(2);
        }
    } else {
        cartItems.push({ ...dish });
    }
    localStorage.setItem('dishes', JSON.stringify(cartItems));
    number.innerHTML = cartItems.length;
}


const dishesContainer = document.querySelector(".dishes");
const show = (dishes) => {
    dishesContainer.innerHTML = "";
    for (let i = 0; i < dishes.length; i++) {
        let div = document.createElement("div");
        div.classList.add("dish");

        let img = document.createElement("img");
        img.src = `${dishes[i].img}`;
        div.appendChild(img);

        let textDiv = document.createElement("div");
        textDiv.classList.add("text");
        div.appendChild(textDiv)

        let h4Title = document.createElement("h4");
        h4Title.classList.add("title");
        h4Title.innerText = `${dishes[i].title}`;
        textDiv.appendChild(h4Title);

        let price = document.createElement("h4");
        price.classList.add("price");
        price.innerText = `$ ${dishes[i].price}`;
        textDiv.appendChild(price);

        let isHave = document.createElement("h4");
        isHave.classList.add("isHave");
        isHave.innerText = `${dishes[i].available} Bowls available`;
        textDiv.appendChild(isHave);

        let button = document.createElement("button");
        let alert = document.querySelector('.alert');

        alert.classList.remove('active');
        div.lastChild.appendChild(button);
        button.classList.add("cardBtn");
        button.innerText = 'Add';
        const allOrders = document.querySelector('.allOrders');
        button.addEventListener('click', () => {
            const dish = dishes[i];
            allOrders.innerHTML = '';
            if (!JSON.parse(localStorage.getItem('dishes'))) number.innerHTML = 0; else number.innerHTML = JSON.parse(localStorage.getItem('dishes')).length;
            button.innerHTML = 'Added!';
            alertt.classList.add('active');
            setTimeout(() => {
                button.innerHTML = 'Add';
                alertt.classList.remove('active');
            }, 1000);
            saveToLocalstorage(dish);
            
            alertt.innerHTML = `Product "${dishes[i].title}" added to the Cart successfully`;
        });

        div.appendChild(textDiv);

        dishesContainer.appendChild(div);
    }
};

show(dishes);