document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.querySelector('.cart-btn');
    let cartCount = 0;

    document.querySelectorAll('.item-card button').forEach(button => {
        button.addEventListener('click', (event) => {
            // Створення елемента для анімації
            const item = event.currentTarget.closest('.item-card');
            const itemRect = item.getBoundingClientRect();
            const cartRect = cartBtn.getBoundingClientRect();

            const flyItem = document.createElement('div');
            flyItem.className = 'fly-to-cart';
            flyItem.innerHTML = 'Купити';
            flyItem.style.width = `${itemRect.width}px`;
            flyItem.style.height = `${itemRect.height}px`;
            flyItem.style.top = `${itemRect.top}px`;
            flyItem.style.left = `${itemRect.left}px`;
            document.body.appendChild(flyItem);

            // Анімація
            requestAnimationFrame(() => {
                flyItem.style.top = `${cartRect.top}px`;
                flyItem.style.left = `${cartRect.left}px`;
            });

            // Затримка для видалення елемента після анімації
            setTimeout(() => {
                flyItem.remove();
                cartCount++;
                updateCartBadge();
            }, 1000);
        });
    });

    function updateCartBadge() {
        let badge = document.querySelector('.cart-badge');
        if (!badge) {
            badge = document.createElement('div');
            badge.className = 'cart-badge';
            cartBtn.appendChild(badge);
        }
        badge.textContent = cartCount;
    }
})