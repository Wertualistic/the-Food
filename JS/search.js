let searchInput = document.querySelector('#input');
let resultArr = [];

//Sorting

dishes.sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);
    return priceA - priceB;
});
show(dishes)

//Sorting A - Z

function sorting1(resultArr1) {
    changer[0].addEventListener("click", () => {
        dish.sort(function (a, b) {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            return titleA.localeCompare(titleB);
        });
        show(resultArr1);
        changerDefault.textContent = 'A - Z';
    });

    //Sorting Z - A

    changer[1].addEventListener("click", () => {
        dish.sort(function (a, b) {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            return titleB.localeCompare(titleA);
        });
        show(resultArr1);
        changerDefault.textContent = 'Z - A';

    });

    changer[2].addEventListener("click", () => {
        dish.sort((a, b) => {
            const priceA = parseFloat(a.price);
            const priceB = parseFloat(b.price);
            return priceA - priceB;
        });
        show(resultArr1);
        changerDefault.textContent = 'Prices';
    });
}

searchInput.addEventListener("keyup", (e) => {
    e.preventDefault();
    const search = (value) => {
        resultArr = [];
        sorting1(resultArr);
        dishes.filter((dish) => {
            if (dish.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
                resultArr.push(dish);
                document.querySelector('.noItem').style.display = 'none';
            } else if (resultArr.length === 0) {
                document.querySelector('.noItem').style.display = 'block';
            };
        });
        show(resultArr);
    };


    if (e.keyCode === 13) {
        menuItems[0].classList.add('active');
        menuItems[1].classList.remove('active');
        menuItems[2].classList.remove('active');
        menuItems[3].classList.remove('active');
        menuItems[4].classList.remove('active');
        menuItems[5].classList.remove('active');
        search(searchInput.value);
        searchInput.value = '';
    };
});