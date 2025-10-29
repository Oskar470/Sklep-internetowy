  // ==================== BAZA PRODUKTÓW AMD RYZEN 3 ====================
        const PRODUCTS = [
            { 
                id: 1, 
                name: "AMD Ryzen 3 3100", 
                price: 399, 
                category: "Procesory", 
                subcategory: "AMD Ryzen 3",
                description: "Procesor 4-rdzeniowy, 8 wątków, 3.6 GHz (boost 3.9 GHz). Idealny do codziennego użytku i podstawowych zadań.", 
                stock: 15,
                emoji: "💻",
                specs: {
                    "Rdzenie": "4",
                    "Wątki": "8",
                    "Takt bazowy": "3.6 GHz",
                    "Takt boost": "3.9 GHz",
                    "Socket": "AM4",
                    "Cache": "16 MB"
                }
            },
            { 
                id: 2, 
                name: "AMD Ryzen 3 3300X", 
                price: 499, 
                category: "Procesory", 
                subcategory: "AMD Ryzen 3",
                description: "Procesor 4-rdzeniowy, 8 wątków, 3.8 GHz (boost 4.3 GHz). Lepsza wydajność w grach i aplikacjach wielowątkowych.", 
                stock: 8,
                emoji: "💻",
                specs: {
                    "Rdzenie": "4",
                    "Wątki": "8",
                    "Takt bazowy": "3.8 GHz",
                    "Takt boost": "4.3 GHz",
                    "Socket": "AM4",
                    "Cache": "16 MB"
                }
            },
            { 
                id: 3, 
                name: "AMD Ryzen 3 4100", 
                price: 429, 
                category: "Procesory", 
                subcategory: "AMD Ryzen 3",
                description: "Procesor 4-rdzeniowy, 8 wątków, 3.8 GHz (boost 4.0 GHz). Nowsza architektura Zen 2 dla lepszej efektywności.", 
                stock: 12,
                emoji: "💻",
                specs: {
                    "Rdzenie": "4",
                    "Wątki": "8",
                    "Takt bazowy": "3.8 GHz",
                    "Takt boost": "4.0 GHz",
                    "Socket": "AM4",
                    "Cache": "4 MB"
                }
            },
        ];

        // ==================== ZARZĄDZANIE KOSZYKIEM ====================
        let cart = [];

        function updateCartCount() {
            document.getElementById('cartCount').textContent = cart.length;
        }

        function addToCart(productId) {
            const product = PRODUCTS.find(p => p.id === productId);
            if (product && product.stock > 0) {
                cart.push({...product});
                updateCartCount();
                showNotification(`Dodano ${product.name} do koszyka!`);
            }
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartCount();
            renderCart();
        }

        function renderCart() {
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<div class="empty-cart">Twój koszyk jest pusty</div>';
                cartTotal.textContent = '';
                return;
            }

            let html = '';
            let total = 0;

            cart.forEach((item, index) => {
                total += item.price;
                html += `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <div class="cart-item-name">${item.emoji} ${item.name}</div>
                            <div class="cart-item-price">${item.price} zł</div>
                        </div>
                        <button class="remove-item" onclick="removeFromCart(${index})">Usuń</button>
                    </div>
                `;
            });

            cartItems.innerHTML = html;
            cartTotal.textContent = `Suma: ${total} zł`;
        }

        function toggleCart() {
            const modal = document.getElementById('cartModal');
            if (modal.style.display === 'flex') {
                modal.style.display = 'none';
            } else {
                modal.style.display = 'flex';
                renderCart();
            }
        }

        function handleCheckout() {
            if (cart.length === 0) {
                alert('Koszyk jest pusty!');
                return;
            }
            alert('Przekierowanie do płatności...');
            cart = [];
            updateCartCount();
            toggleCart();
        }

        // ==================== WYŚWIETLANIE PRODUKTÓW ====================
        let currentProducts = [...PRODUCTS];

        function renderProducts(products) {
            const grid = document.getElementById('productsGrid');
            
            if (products.length === 0) {
                grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">Nie znaleziono produktów</div>';
                return;
            }

            grid.innerHTML = products.map(product => {
                const stockClass = product.stock > 10 ? 'in-stock' : product.stock > 0 ? 'low-stock' : 'out-of-stock';
                const stockText = product.stock > 10 ? 'W magazynie' : product.stock > 0 ? `Ostatnie ${product.stock} szt.` : 'Brak';
                
                return `
                    <div class="product-card">
                        <div class="product-image">${product.emoji}</div>
                        <div class="product-info">
                            <div class="product-name">${product.name}</div>
                            <div class="product-description">${product.description}</div>
                            <div class="product-stock">
                                <div class="stock-indicator ${stockClass}"></div>
                                <span>${stockText}</span>
                            </div>
                            <div class="product-price">${product.price} zł</div>
                            <div class="product-actions">
                                <button class="btn-details" onclick="showProductDetails(${product.id})">Szczegóły</button>
                                <button class="btn-add-cart" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                                    Do koszyka
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // ==================== FILTRY I SORTOWANIE ====================
        function handleFilterChange() {
            const priceFilter = document.getElementById('priceFilter').value;
            const stockFilter = document.getElementById('stockFilter').value;
            const sortFilter = document.getElementById('sortFilter').value;

            let filtered = [...PRODUCTS];

            // Filtr ceny
            if (priceFilter === 'low') {
                filtered = filtered.filter(p => p.price <= 450);
            } else if (priceFilter === 'high') {
                filtered = filtered.filter(p => p.price > 450);
            }

            // Filtr dostępności
            if (stockFilter === 'in-stock') {
                filtered = filtered.filter(p => p.stock > 10);
            } else if (stockFilter === 'low-stock') {
                filtered = filtered.filter(p => p.stock > 0 && p.stock <= 10);
            }

            // Sortowanie
            if (sortFilter === 'price-asc') {
                filtered.sort((a, b) => a.price - b.price);
            } else if (sortFilter === 'price-desc') {
                filtered.sort((a, b) => b.price - a.price);
            } else if (sortFilter === 'name') {
                filtered.sort((a, b) => a.name.localeCompare(b.name));
            }

            currentProducts = filtered;
            renderProducts(filtered);
        }

        // ==================== WYSZUKIWANIE ====================
        function handleSearch() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const filtered = PRODUCTS.filter(p => 
                p.name.toLowerCase().includes(searchTerm) ||
                p.description.toLowerCase().includes(searchTerm)
            );
            renderProducts(filtered);
        }

        // Enter w polu wyszukiwania
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });

        // ==================== MODAL SZCZEGÓŁÓW ====================
        function showProductDetails(productId) {
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product) return;

            document.getElementById('modalTitle').textContent = product.name;
            document.getElementById('modalImage').textContent = product.emoji;
            document.getElementById('modalDescription').textContent = product.description;
            document.getElementById('modalPrice').textContent = `${product.price} zł`;

            const stockClass = product.stock > 10 ? 'in-stock' : product.stock > 0 ? 'low-stock' : 'out-of-stock';
            const stockText = product.stock > 10 ? 'W magazynie' : product.stock > 0 ? `Ostatnie ${product.stock} szt.` : 'Brak';
            
            document.getElementById('modalStock').innerHTML = `
                <div class="stock-indicator ${stockClass}"></div>
                <span>${stockText}</span>
            `;

            // Specyfikacja
            let specsHtml = '';
            for (const [key, value] of Object.entries(product.specs)) {
                specsHtml += `
                    <div class="spec-item">
                        <span class="spec-label">${key}:</span>
                        <span class="spec-value">${value}</span>
                    </div>
                `;
            }
            document.getElementById('modalSpecs').innerHTML = specsHtml;

            // Przycisk dodaj do koszyka
            const addButton = document.getElementById('modalAddToCart');
            addButton.disabled = product.stock === 0;
            addButton.onclick = () => {
                addToCart(product.id);
                closeProductModal();
            };

            document.getElementById('productModal').style.display = 'flex';
        }

        function closeProductModal() {
            document.getElementById('productModal').style.display = 'none';
        }

        // Zamknięcie modalu po kliknięciu poza nim
        window.onclick = function(event) {
            const cartModal = document.getElementById('cartModal');
            const productModal = document.getElementById('productModal');
            
            if (event.target === cartModal) {
                cartModal.style.display = 'none';
            }
            if (event.target === productModal) {
                productModal.style.display = 'none';
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

        // ==================== INICJALIZACJA ====================
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts(PRODUCTS);
            updateCartCount();
        });