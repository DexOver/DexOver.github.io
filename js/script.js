// Магазин услуг
let cart = [];

function addServiceToCart(serviceType, serviceName, serviceTime, servicePrice) {
    // Добавление услуги в корзину
    cart.push({ type: serviceType, name: serviceName, time: serviceTime, price: servicePrice });
    
    // Обновление счетчика услуг и содержимого корзины
    updateServiceCount();
    updateCartContent();
}

function updateServiceCount() {
    const serviceCountElement = document.getElementById('serviceCount');
    const count = cart.length;
    
    serviceCountElement.textContent = count;
    
    if (count > 0) {
        serviceCountElement.style.display = 'inline';
    } else {
        serviceCountElement.style.display = 'none';
    }
}

function updateCartContent() {
    const cartItemsContainer = document.getElementById('cartItems');
    
    // Очистка текущего содержимого
    cartItemsContainer.innerHTML = '';
    
    let totalPrice = 0;
    
    cart.forEach((item, index) => {
        totalPrice += item.price;
        
        // Создание элемента для услуги
        const itemElement = document.createElement('div');
        itemElement.classList.add('service-info'); // Добавляем класс service-info

        // Создание и добавление элементов для типа и названия услуги
        const typeNameElement = document.createElement('p');
        typeNameElement.textContent = `${item.type} - ${item.name};`
        itemElement.append(typeNameElement);

        // Создание и добавление элемента для сроков выполнения
        const timeElement = document.createElement('p');
        timeElement.textContent = `Сроки выполнения: ${item.time};`
        itemElement.append(timeElement);

        // Создание и добавление элемента для цены
        const priceElement = document.createElement('p');
        priceElement.textContent = `Цена: ${item.price}р;`
        itemElement.append(priceElement);

        // Создание и добавление кнопки для удаления услуги
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Удалить';
        removeButton.classList.add('delete-button'); // Добавляем класс delete-button
        removeButton.onclick = function() {
            removeFromCart(index);
        };
        itemElement.appendChild(removeButton);

        // Добавляем элемент услуги в контейнер
        cartItemsContainer.appendChild(itemElement);
    });

    document.getElementById('totalPrice').textContent = `Общая сумма: ${totalPrice}р;`
}

function removeFromCart(index) {
    // Удаление элемента из корзины по индексу
    cart.splice(index, 1);
    
    // Обновление счетчика услуг и содержимого корзины
    updateServiceCount();
    updateCartContent();
}


document.getElementById('shopIcon').onclick = function() {
    document.getElementById('orderModal').style.display = 'block';
};

document.querySelector('.close').onclick = function() {
    document.getElementById('orderModal').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === document.getElementById('orderModal')) {
        document.getElementById('orderModal').style.display = 'none';
    }
};


document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const headerMenu = document.querySelector(".header-menu");
    const closeMenu = document.querySelector(".close-menu");

    // Открыть меню при клике на бургер
    burgerMenu.addEventListener("click", () => {
        headerMenu.classList.add("open");
    });

    // Закрыть меню при клике на крестик
    closeMenu.addEventListener("click", () => {
        headerMenu.classList.remove("open");
    });
});


