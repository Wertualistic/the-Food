const number = document.querySelector('.number');
if (!JSON.parse(localStorage.getItem('dishes'))) {
    number.innerHTML = 0;
} else {
    number.innerHTML = JSON.parse(localStorage.getItem('dishes')).length;
}
const cart = (items) => {
    if (items === null) {
        return bigContent.style.display = 'block',
            ordersList.style.display = 'none';
    } else {
        bigContent.style.display = 'none';
        ordersList.style.display = 'block';
    }

    const allOrders = document.querySelector('.allOrders');
    if (items.length === 0) {
        return bigContent.style.display = 'block',
            ordersList.style.display = 'none';
    } else {
        allOrders.innerHTML = "";
        let sub = 0;
        for (let i of items) {

            const order = document.createElement('div');
            order.className = 'order';
            allOrders.appendChild(order);

            const top = document.createElement('div')
            top.className = 'top';
            order.appendChild(top);

            const order__left = document.createElement('div');
            order__left.className = 'order__left';
            top.appendChild(order__left);

            const img = document.createElement('img');
            img.src = `${i.img}`;
            order__left.appendChild(img);

            const counter = document.createElement('div');
            counter.className = "counter";
            order__left.appendChild(counter);

            const button1 = document.createElement('button');
            counter.appendChild(button1)
            button1.addEventListener('click', () => {
                if (i.countable > 1) {
                    localStorage.setItem('dishes', JSON.stringify(items));
                    subTotal.innerHTML = '';
                    i.countable--;
                    span.innerHTML = i.countable;
                    total *= i.countable;
                    totalPrice.innerText = `$ ${(i.price * i.countable).toFixed(2)}`;
                    subTotal.innerHTML = `$ ${(sub -= i.price).toFixed(2)}`;
                    if (i.countable <= 1) {
                        i.countable = 1;
                    }
                }
            });

            const iconMinus = document.createElement('i')
            iconMinus.className = "ri-subtract-fill";
            button1.appendChild(iconMinus);

            let span = document.createElement('span');
            span.className = 'num';
            span.innerHTML = i.countable;
            counter.appendChild(span)
            if (span.innerHTML === 1) {
                span.innerHTML = 1;
            }

            const button2 = document.createElement('button');
            counter.appendChild(button2)
            button2.addEventListener('click', () => {
                if (i.countable >= i.available) {
                    alert(`You can't add more than ${i.available} dishes`);
                    span.innerHTML = i.available;
                } else {
                    localStorage.setItem('dishes', JSON.stringify(items));
                    subTotal.innerHTML = '';
                    i.countable++;
                    span.innerHTML = i.countable;
                    total *= i.countable;
                    totalPrice.innerText = `$ ${(i.price * i.countable).toFixed(2)}`;
                    subTotal.innerHTML = `$ ${(sub += i.price).toFixed(2)}`;
                }
            });

            const iconPlus = document.createElement('i')
            iconPlus.className = "ri-add-fill";
            button2.appendChild(iconPlus);

            const order__right = document.createElement('div');
            order__right.className = 'order__right';
            top.appendChild(order__right);

            const text = document.createElement('h3');
            text.className = 'text';
            order__right.appendChild(text);
            text.innerText = `${i.title}`

            const price = document.createElement('h3');
            price.className = 'price';
            order__right.appendChild(price);
            price.innerText = `$ ${(i.price).toFixed(2)}`

            let total = i.price * i.countable;
            const totalPrice = document.createElement('h3');
            totalPrice.className = 'totalPrice';
            order__right.appendChild(totalPrice);
            totalPrice.innerText = `$ ${(i.amount)}`;

            const bottom = document.createElement('div');
            bottom.className = 'bottom';
            order.appendChild(bottom);

            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Order Note...';
            bottom.appendChild(input);

            const button3 = document.createElement('button');
            bottom.appendChild(button3);
            button3.addEventListener('click', () => {
                removeFromCart(i.productId);
            })

            const icon3 = document.createElement('i')
            icon3.className = "ri-delete-bin-line deleteBtn"
            button3.appendChild(icon3)

            subTotal.innerHTML = `$ ${(sub += (+i.amount)).toFixed(2)}`;
        }
        bigContent.style.display = 'none';
        ordersList.style.display = 'block';

    }
}

const removeFromCart = (productId) => {
    let cartItems = JSON.parse(localStorage.getItem('dishes')) || [];
    const removedItemIndex = cartItems.findIndex(item => item.productId === productId);

    if (removedItemIndex !== -1) {
        cartItems.splice(removedItemIndex, 1);
        localStorage.setItem('dishes', JSON.stringify(cartItems));
        number.innerHTML = cartItems.length;
        cart(cartItems);
    }
}
