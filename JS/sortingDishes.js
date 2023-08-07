//Sorting

let changer = document.querySelectorAll(".changer");
let changerDefault = document.querySelector("#default");

dishes.sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);
    return priceA - priceB;
});
show(dishes)

//Sorting A - Z

function sorting(resultArr) {
    changer[0].addEventListener("click", () => {
        dishes.sort(function (a, b) {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            return titleA.localeCompare(titleB);
        });
        show(resultArr);
        changerDefault.textContent = 'A - Z';

        

    });

    //Sorting Z - A

    changer[1].addEventListener("click", () => {
        dishes.sort(function (a, b) {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            return titleB.localeCompare(titleA);
        });
        show(resultArr);

        changerDefault.textContent = 'Z - A';

    });

    changer[2].addEventListener("click", () => {
        dishes.sort((a, b) => {
            const priceA = parseFloat(a.price);
            const priceB = parseFloat(b.price);
            return priceA - priceB;
        });
        show(resultArr);

        changerDefault.textContent = 'Prices';
    });

    changer[3].addEventListener("click", () => {
        dishes.sort((a, b) => {
            const priceA = parseFloat(a.price);
            const priceB = parseFloat(b.price);
            return priceB - priceA;
        });
        show(resultArr);

        changerDefault.textContent = 'Prices';
    });
}

sorting(dishes);