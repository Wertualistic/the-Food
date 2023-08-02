let searchInput = document.querySelector('#input');
let resultArr = [];

searchInput.addEventListener("keyup", (e) => {
    e.preventDefault();
    const search = (value) => {
        resultArr = [];
        sorting(resultArr);
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
        search(searchInput.value);
        searchInput.value = '';
    };
});