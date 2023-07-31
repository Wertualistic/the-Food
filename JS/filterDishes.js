let selectedCategory = "All";

let dishes = [
    {
        id: 1,
        productId: 1,
        title: "Spicy seasoned seafood noodles",
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
        title: "Salted Pasta with mushroom sauce",
        category: "Hot Dishes",
        countable: 1,
        img: 'images/second.png',
        price: 1.99,
        available: 17,
        amount: 1.99
    },
    {
        id: 3,
        productId: 3,
        title: "Beef dumpling in hot and sour soup",
        category: "Cold Dishes",
        countable: 1,
        img: 'images/third.png',
        price: 3.99,
        available: 23,
        amount: 3.99
    },
    {
        id: 4,
        productId: 4,
        title: "Healthy noodle with spinach leaf",
        category: "Cold Dishes",
        countable: 1,
        img: 'images/fourth.png',
        price: 2.99,
        available: 20,
        amount: 2.99
    },
    {
        id: 5,
        productId: 1,
        title: "Spicy seasoned seafood noodles",
        category: "Soup",
        countable: 1,
        img: 'images/first.png',
        price: 4.69,
        available: 19,
        amount: 4.69
    },
    {
        id: 6,
        productId: 2,
        title: "Salted Pasta with mushroom sauce",
        category: "Soup",
        countable: 1,
        img: 'images/second.png',
        price: 4.29,
        available: 20,
        amount: 4.29
    },
    {
        id: 7,
        productId: 3,
        title: "Beef dumpling in hot and sour soup",
        category: "Grill",
        countable: 1,
        img: 'images/third.png',
        price: 3.19,
        available: 18,
        amount: 3.19

    },
    {
        id: 8,
        productId: 4,
        title: "Healthy noodle with spinach leaf",
        category: "Grill",
        countable: 1,
        img: 'images/fourth.png',
        price: 2.19,
        available: 22,
        amount: 2.19
    },
    {
        id: 9,
        productId: 1,
        title: "Spicy seasoned seafood noodles",
        category: "Appetizer",
        countable: 1,
        img: 'images/first.png',
        price: 3.69,
        available: 11,
        amount: 3.29
    },
    {
        id: 10,
        productId: 2,
        title: "Salted Pasta with mushroom sauce",
        category: "Appetizer",
        countable: 1,
        img: 'images/second.png',
        price: 2.69,
        available: 10,
        amount: 2.69
    },
    {
        id: 11,
        productId: 4,
        title: "Beef dumpling in hot and sour soup",
        category: "Dessert",
        countable: 1,
        img: "images/third.png",
        price: 3.29,
        available: 17,
        amount: 3.29
    },
    {
        id: 12,
        productId: 3,
        title: "Healthy noodle with spinach leaf",
        category: "Dessert",
        countable: 1,
        img: 'images/fourth.png',
        price: 2.29,
        available: 20,
        amount: 2.29
    },
];

const saveToLocalstorage = (dish) => {
    localStorage.setItem('dishes', JSON.stringify([...JSON.parse(localStorage.getItem('dishes') || "[]"), dish ]));
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
        div.lastChild.appendChild(button);
        button.classList.add("cardBtn");
        button.innerText = 'Add';
        button.addEventListener('click', () => {
            const dish = dishes[i];
            saveToLocalstorage(dish);
            number.innerHTML = JSON.parse(localStorage.getItem('dishes')).length;
            button.innerHTML = 'Added!';
            setTimeout(() => {
                button.innerHTML = 'Add';
            }, 1000);
            existingItems(dishes[i].productId, dishes[i].title, dishes[i].img, dishes[i].price, dishes[i].available, dishes[i].countable)
        });

        div.appendChild(textDiv);

        dishesContainer.appendChild(div);
    }
};

const getItem = JSON.parse(localStorage.getItem('dishes'));
const existingItems = (productId, title, img, price, available, countable) => {
    const existingItem = getItem.findIndex(item => item.productId === productId);
    if (existingItem !== -1) {
        if (getItem[existingItem].countable !== getItem[existingItem].available) {
            getItem[existingItem].countable++;
            let amount1 = parseFloat(getItem[existingItem].amount);
            let price1 = parseFloat(getItem[existingItem].price);
            amount1 += price1;
            getItem[existingItem].amount = amount1;
        } else {
            alert(`${getItem[existingItem].name}` + ' maximum 20');
        }
    } else {
        getItem.push({
            title: title,
            img: img,
            price: price,
            amount: price,
            productId: productId,
            available: available,
            countable: countable
        })
    }
    localStorage.setItem('dishes', JSON.stringify(getItem));
}

show(dishes);