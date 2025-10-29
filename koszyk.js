// ==================== ZMIENNE GLOBALNE ====================
let cart = [];
let selectedItems = [];
let confirmCallback = null;

// Kody rabatowe
const PROMO_CODES = {
    'TECH10': { discount: 10, type: 'percent' },
    'TECH50': { discount: 50, type: 'fixed' },
    'WELCOME': { discount: 15, type: 'percent' }
};

let appliedPromo = null;

// Produkty polecane
const RECOMMENDED_PRODUCTS = [
    { id: 101, name: "Pamięć RAM DDR4 16GB", price: 299, emoji: "💾" },
    { id: 102, name: "Dysk SSD 1TB", price: 399, emoji: "💿" },
    { id: 103, name: "Zasilacz 650W", price: 349, emoji: "🔌" },
    { id: 104, name: "Obudowa ATX", price: 249, emoji: "📦" }
];

// ==================== INICJALIZACJA ====================
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    renderCart();
    updateCartSummary();
    renderRecommended();
});

// ==================== ŁADOWANIE I ZAPIS KOSZYKA ====================
function loadCart() {
    const savedCart = localStorage.getItem('techpc_cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            cart = [];
        }
    }
}

function saveCart() {
    localStorage.setItem('techpc_cart', JSON.stringify(cart));
}

// ==================== RENDEROWANIE KOSZYKA ====================
function renderCart() {
    const container = document.getElementById('cartItemsContainer');
    const emptyMessage = document.getElementById('emptyCartMessage');
    
    if (cart.length === 0) {
        container.style.display = 'none';
        emptyMessage.style.display = 'block';
        document.getElementById('recommendedSection').style.display = 'none';
        return;
    }
    
    container.style.display = 'block';
    emptyMessage.style.display = 'none';
    document.getElementById('recommendedSection').style.display = 'block';
    
    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item ${selectedItems.includes(index) ? 'selected' : ''}" data-index="${index}">
            <input type="checkbox" class="item-checkbox" 
                   ${selectedItems.includes(index) ? 'checked' : ''} 
                   onchange="toggleItemSelection(${index})">
            
            <div class="item-image">${item.emoji || '💻'}</div>
            
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-specs">${item.description || item.subcategory || 'Procesor'}</div>
                <div class="item-stock">
                    <span class="stock-dot"></span>
                    <span>W magazynie</span>
                </div>
                <div class="item-actions">
                    <button class="btn-save" onclick="saveForLater(${index})">
                        💾 Zapisz na później
                    </button>
                    <button class="btn-remove" onclick="confirmRemove(${index})">
                        🗑️ Usuń
                    </button>
                </div>
            </div>
            
            <div class="item-right">
                <div class="item-price">${(item.price * (item.quantity || 1)).toFixed(0)} zł</div>
                <div class="quantity-selector">
                    <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
                    <input type="number" class="qty-input" value="${item.quantity || 1}" 
                           onchange="setQuantity(${index}, this.value)" min="1" max="99">
                    <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ==================== ZARZĄDZANIE ILOŚCIĄ ====================
function changeQuantity(index, delta) {
    if (!cart[index]) return;
    
    const currentQty = cart[index].quantity || 1;
    const newQty = currentQty + delta;
    
    if (newQty < 1 || newQty > 99) return;
    
    cart[index].quantity = newQty;
    saveCart();
    renderCart();
    updateCartSummary();
    showNotification('Zaktualizowano ilość');
}

function setQuantity(index, value) {
    const qty = parseInt(value);
    if (isNaN(qty) || qty < 1 || qty > 99) {
        renderCart();
        return;
    }
    
    cart[index].quantity = qty;
    saveCart();
    renderCart();
    updateCartSummary();
}

// ==================== ZAZNACZANIE PRODUKTÓW ====================
function toggleItemSelection(index) {
    const idx = selectedItems.indexOf(index);
    if (idx > -1) {
        selectedItems.splice(idx, 1);
    } else {
        selectedItems.push(index);
    }
    renderCart();
    updateSelectAllIcon();
}

function selectAllItems() {
    if (selectedItems.length === cart.length) {
        selectedItems = [];
    } else {
        selectedItems = cart.map((_, index) => index);
    }
    renderCart();
    updateSelectAllIcon();
}

function updateSelectAllIcon() {
    const icon = document.getElementById('selectAllIcon');
    if (icon) {
        icon.textContent = selectedItems.length === cart.length && cart.length > 0 ? '☑' : '☐';
    }
}

// ==================== USUWANIE PRODUKTÓW ====================
function confirmRemove(index) {
    confirmCallback = () => {
        cart.splice(index, 1);
        selectedItems = selectedItems.filter(i => i !== index).map(i => i > index ? i - 1 : i);
        saveCart();
        renderCart();
        updateCartSummary();
        closeModal();
        showNotification('Produkt usunięty z koszyka');
    };
    
    document.getElementById('confirmMessage').textContent = 
        'Czy na pewno chcesz usunąć ten produkt z koszyka?';
    document.getElementById('confirmModal').style.display = 'flex';
}

function removeSelectedItems() {
    if (selectedItems.length === 0) {
        showNotification('Nie zaznaczono żadnych produktów');
        return;
    }
    
    confirmCallback = () => {
        cart = cart.filter((_, index) => !selectedItems.includes(index));
        selectedItems = [];
        saveCart();
        renderCart();
        updateCartSummary();
        closeModal();
        showNotification(`Usunięto produkty z koszyka`);
    };
    
    document.getElementById('confirmMessage').textContent = 
        `Czy na pewno chcesz usunąć zaznaczone produkty (${selectedItems.length})?`;
    document.getElementById('confirmModal').style.display = 'flex';
}

function confirmAction() {
    if (confirmCallback) {
        confirmCallback();
        confirmCallback = null;
    }
}

function closeModal() {
    document.getElementById('confirmModal').style.display = 'none';
}

// ==================== ZAPISZ NA PÓŹNIEJ ====================
function saveForLater(index) {
    const item = cart[index];
    let savedItems = JSON.parse(localStorage.getItem('techpc_saved') || '[]');
    savedItems.push(item);
    localStorage.setItem('techpc_saved', JSON.stringify(savedItems));
    
    cart.splice(index, 1);
    saveCart();
    renderCart();
    updateCartSummary();
    showNotification('Produkt zapisany na później');
}

// ==================== PODSUMOWANIE KOSZYKA ====================
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const shippingCost = subtotal >= 200 ? 0 : 15;
    
    let discount = 0;
    if (appliedPromo) {
        if (appliedPromo.type === 'percent') {
            discount = subtotal * (appliedPromo.discount / 100);
        } else {
            discount = appliedPromo.discount;
        }
    }
    
    const total = subtotal + shippingCost - discount;
    
    // Aktualizacja wyświetlania
    document.getElementById('cartCountHeader').textContent = cart.length;
    document.getElementById('cartItemCount').textContent = `${cart.length} ${cart.length === 1 ? 'produkt' : 'produktów'}`;
    document.getElementById('subtotal').textContent = `${subtotal.toFixed(0)} zł`;
    document.getElementById('shippingCost').textContent = shippingCost === 0 ? 'Gratis!' : `${shippingCost} zł`;
    document.getElementById('totalAmount').textContent = `${total.toFixed(0)} zł`;
    document.getElementById('cartTotalCompact').textContent = `${total.toFixed(0)} zł`;
    
    // Rabat
    const discountRow = document.getElementById('discountRow');
    if (discount > 0) {
        discountRow.style.display = 'flex';
        document.getElementById('discountAmount').textContent = `-${discount.toFixed(0)} zł`;
    } else {
        discountRow.style.display = 'none';
    }
    
    // Darmowa dostawa
    updateShippingProgress(subtotal);
}

// ==================== PROGRESS DARMOWEJ DOSTAWY ====================
function updateShippingProgress(subtotal) {
    const freeShippingThreshold = 200;
    const remaining = freeShippingThreshold - subtotal;
    const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);
    
    document.getElementById('shippingProgress').style.width = `${progress}%`;
    
    const message = document.getElementById('shippingMessage');
    if (remaining > 0) {
        document.getElementById('shippingRemaining').textContent = `${remaining.toFixed(0)} zł`;
        message.innerHTML = `Dodaj produkty za <strong id="shippingRemaining">${remaining.toFixed(0)} zł</strong>, aby otrzymać darmową dostawę!`;
    } else {
        message.innerHTML = '<strong>🎉 Gratulacje! Masz darmową dostawę!</strong>';
    }
}

// ==================== KODY RABATOWE ====================
function applyPromoCode() {
    const input = document.getElementById('promoCodeInput');
    const code = input.value.trim().toUpperCase();
    const message = document.getElementById('promoMessage');
    
    if (!code) {
        message.className = 'promo-message error';
        message.textContent = 'Wpisz kod rabatowy';
        return;
    }
    
    if (PROMO_CODES[code]) {
        appliedPromo = PROMO_CODES[code];
        message.className = 'promo-message success';
        const discountText = appliedPromo.type === 'percent' 
            ? `${appliedPromo.discount}%` 
            : `${appliedPromo.discount} zł`;
        message.textContent = `✓ Kod ${code} zastosowany! Rabat: ${discountText}`;
        input.value = '';
        updateCartSummary();
        showNotification('Kod rabatowy zastosowany!');
    } else {
        message.className = 'promo-message error';
        message.textContent = '✗ Nieprawidłowy kod rabatowy';
    }
}

// ==================== PRODUKTY POLECANE ====================
function renderRecommended() {
    const grid = document.getElementById('recommendedGrid');
    grid.innerHTML = RECOMMENDED_PRODUCTS.map(product => `
        <div class="recommended-item" onclick="addRecommendedToCart(${product.id})">
            <div class="recommended-item-image">${product.emoji}</div>
            <div class="recommended-item-name">${product.name}</div>
            <div class="recommended-item-price">${product.price} zł</div>
            <button class="btn-primary" style="width: 100%; padding: 10px; font-size: 14px;">
                Dodaj do koszyka
            </button>
        </div>
    `).join('');
}

function addRecommendedToCart(productId) {
    const product = RECOMMENDED_PRODUCTS.find(p => p.id === productId);
    if (product) {
        cart.push({...product, quantity: 1});
        saveCart();
        renderCart();
        updateCartSummary();
        showNotification(`Dodano ${product.name} do koszyka!`);
    }
}

// ==================== PRZEJDŹ DO PŁATNOŚCI ====================
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Koszyk jest pusty!');
        return;
    }
    
    showNotification('Przekierowanie do płatności...');
    setTimeout(() => {
        alert('Funkcja płatności będzie dostępna wkrótce!');
    }, 1000);
}

// ==================== WYSZUKIWANIE ====================
function handleSearch() {
    const query = document.getElementById('searchInput').value;
    if (query.trim()) {
        alert(`Wyszukiwanie: ${query}`);
    }
}

// ==================== POWIADOMIENIA ====================
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}