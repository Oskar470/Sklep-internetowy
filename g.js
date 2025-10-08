        // ==================== BAZA PRODUKTÓW ====================
        const PRODUCTS = [
            // PROCESORY AMD RYZEN 3
            { 
                id: 1, 
                name: "AMD Ryzen 3 3100", 
                price: 399, 
                category: "Procesory", 
                subcategory: "AMD Ryzen 3",
                description: "Procesor 4-rdzeniowy, 8 wątków, 3.6 GHz (boost 3.9 GHz)", 
                stock: 15,
                emoji: "💻",
                specs: {
                    "Rdzenie": "4",
                    "Wątki": "8",
                    "Takt bazowy": "3.6 GHz",
                    "Takt boost": "3.9 GHz",
                    "Socket": "AM4"
                }
            },
            { 
                id: 2, 
                name: "AMD Ryzen 3 3300X", 
                price: 499, 
                category: "Procesory", 
                subcategory: "AMD Ryzen 3",
                description: "Procesor 4-rdzeniowy, 8 wątków, 3.8 GHz (boost 4.3 GHz)", 
                stock: 8,
                emoji: "💻",
                specs: {
                    "Rdzenie": "4",
                    "Wątki": "8",
                    "Takt bazowy": "3.8 GHz",
                    "Takt boost": "4.3 GHz",
                    "Socket": "AM4"
                }
            },
            { 
                id: 3, 
                name: "AMD Ryzen 3 4100", 
                price: 429, 
                category: "Procesory", 
                subcategory: "AMD Ryzen 3",
                description: "Procesor 4-rdzeniowy, 8 wątków, 3.8 GHz (boost 4.0 GHz)", 
                stock: 12,
                emoji: "💻",
                specs: {
                    "Rdzenie": "4",
                    "Wątki": "8",
                    "Takt bazowy": "3.8 GHz",
                    "Takt boost": "4.0 GHz",
                    "Socket": "AM4"
                }
            },

            // PROCESORY AMD RYZEN 5
            { 
                id: 4, 
                name: "AMD Ryzen 5 5600X", 
                price: 799, 
                category: "Procesory", 
                subcategory: "AMD Ryzen 5",
                description: "Procesor 6-rdzeniowy, 12 wątków, 3.7 GHz (boost 4.6 GHz)", 
                stock: 20,
                emoji: "💻",
                specs: {
                    "Rdzenie": "6",
                    "Wątki": "12",
                    "Takt bazowy": "3.7 GHz",
                    "Takt boost": "4.6 GHz",
                    "Socket": "AM4"
                }
            },
            { 
                id: 5, 
                name: "AMD Ryzen 5 7600X", 
                price: 1199, 
                category: "Procesory", 
                subcategory: "AMD Ryzen 5",
                description: "Procesor 6-rdzeniowy, 12 wątków, 4.7 GHz (boost 5.3 GHz)", 
                stock: 18,
                emoji: "💻",
                specs: {
                    "Rdzenie": "6",
                    "Wątki": "12",
                    "Takt bazowy": "4.7 GHz",
                    "Takt boost": "5.3 GHz",
                    "Socket": "AM5"
                }
            },

            // PROCESORY AMD RYZEN 7
              { 
                id: 6, 
                name: "AMD Ryzen 7 5800X", 
                price: 1299, 
                category: "Procesory", 
                subcategory: "AMD Ryzen 7",
                description: "Procesor 8-rdzeniowy, 16 wątków, 3.8 GHz (boost 4.7 GHz)", 
                stock: 14,
                emoji: "💻",
                specs: {
                    "Rdzenie": "8",
                    "Wątki": "16",
                    "Takt bazowy": "3.8 GHz",
                    "Takt boost": "4.7 GHz",
                    "Socket": "AM4"
                }
            }
        ];//   zmknięci tablic