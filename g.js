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
        description: "Procesor 4-rdzeniowy, 8 wątków, 3.8 GHz (boost 4.3 GHz)", 
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
        description: "Procesor 4-rdzeniowy, 8 wątków, 3.8 GHz (boost 4.0 GHz)", 
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
            "Socket": "AM4",
            "Cache": "32 MB"
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
            "Socket": "AM5",
            "Cache": "32 MB"
        }
    },
    { 
        id: 6, 
        name: "AMD Ryzen 5 5600", 
        price: 699, 
        category: "Procesory", 
        subcategory: "AMD Ryzen 5",
        description: "Procesor 6-rdzeniowy, 12 wątków, 3.5 GHz (boost 4.4 GHz)", 
        stock: 25,
        emoji: "💻",
        specs: {
            "Rdzenie": "6",
            "Wątki": "12",
            "Takt bazowy": "3.5 GHz",
            "Takt boost": "4.4 GHz",
            "Socket": "AM4",
            "Cache": "32 MB"
        }
    },

    // PROCESORY AMD RYZEN 7
    { 
        id: 7, 
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
            "Socket": "AM4",
            "Cache": "32 MB"
        }
    },
    { 
        id: 8, 
        name: "AMD Ryzen 7 7700X", 
        price: 1599, 
        category: "Procesory", 
        subcategory: "AMD Ryzen 7",
        description: "Procesor 8-rdzeniowy, 16 wątków, 4.5 GHz (boost 5.4 GHz)", 
        stock: 10,
        emoji: "💻",
        specs: {
            "Rdzenie": "8",
            "Wątki": "16",
            "Takt bazowy": "4.5 GHz",
            "Takt boost": "5.4 GHz",
            "Socket": "AM5",
            "Cache": "32 MB"
        }
    },

    // PROCESORY AMD RYZEN 9
    { 
        id: 9, 
        name: "AMD Ryzen 9 5900X", 
        price: 1899, 
        category: "Procesory", 
        subcategory: "AMD Ryzen 9",
        description: "Procesor 12-rdzeniowy, 24 wątki, 3.7 GHz (boost 4.8 GHz)", 
        stock: 8,
        emoji: "💻",
        specs: {
            "Rdzenie": "12",
            "Wątki": "24",
            "Takt bazowy": "3.7 GHz",
            "Takt boost": "4.8 GHz",
            "Socket": "AM4",
            "Cache": "64 MB"
        }
    },
    { 
        id: 10, 
        name: "AMD Ryzen 9 7900X", 
        price: 2299, 
        category: "Procesory", 
        subcategory: "AMD Ryzen 9",
        description: "Procesor 12-rdzeniowy, 24 wątki, 4.7 GHz (boost 5.4 GHz)", 
        stock: 6,
        emoji: "💻",
        specs: {
            "Rdzenie": "12",
            "Wątki": "24",
            "Takt bazowy": "4.7 GHz",
            "Takt boost": "5.4 GHz",
            "Socket": "AM5",
            "Cache": "64 MB"
        }
    },

    // PROCESORY INTEL CORE I3
    { 
        id: 11, 
        name: "Intel Core i3-12100", 
        price: 499, 
        category: "Procesory", 
        subcategory: "Intel Core i3",
        description: "Procesor 4-rdzeniowy, 8 wątków, 3.3 GHz (boost 4.3 GHz)", 
        stock: 22,
        emoji: "💻",
        specs: {
            "Rdzenie": "4",
            "Wątki": "8",
            "Takt bazowy": "3.3 GHz",
            "Takt boost": "4.3 GHz",
            "Socket": "LGA1700",
            "Cache": "12 MB"
        }
    },
    { 
        id: 12, 
        name: "Intel Core i3-13100", 
        price: 599, 
        category: "Procesory", 
        subcategory: "Intel Core i3",
        description: "Procesor 4-rdzeniowy, 8 wątków, 3.4 GHz (boost 4.5 GHz)", 
        stock: 18,
        emoji: "💻",
        specs: {
            "Rdzenie": "4",
            "Wątki": "8",
            "Takt bazowy": "3.4 GHz",
            "Takt boost": "4.5 GHz",
            "Socket": "LGA1700",
            "Cache": "12 MB"
        }
    },

    // PROCESORY INTEL CORE I5
    { 
        id: 13, 
        name: "Intel Core i5-12400F", 
        price: 699, 
        category: "Procesory", 
        subcategory: "Intel Core i5",
        description: "Procesor 6-rdzeniowy, 12 wątków, 2.5 GHz (boost 4.4 GHz)", 
        stock: 30,
        emoji: "💻",
        specs: {
            "Rdzenie": "6",
            "Wątki": "12",
            "Takt bazowy": "2.5 GHz",
            "Takt boost": "4.4 GHz",
            "Socket": "LGA1700",
            "Cache": "18 MB"
        }
    },
    { 
        id: 14, 
        name: "Intel Core i5-13600K", 
        price: 1299, 
        category: "Procesory", 
        subcategory: "Intel Core i5",
        description: "Procesor 14-rdzeniowy, 20 wątków, 3.5 GHz (boost 5.1 GHz)", 
        stock: 15,
        emoji: "💻",
        specs: {
            "Rdzenie": "14",
            "Wątki": "20",
            "Takt bazowy": "3.5 GHz",
            "Takt boost": "5.1 GHz",
            "Socket": "LGA1700",
            "Cache": "24 MB"
        }
    },

    // PROCESORY INTEL CORE I7
    { 
        id: 15, 
        name: "Intel Core i7-12700K", 
        price: 1599, 
        category: "Procesory", 
        subcategory: "Intel Core i7",
        description: "Procesor 12-rdzeniowy, 20 wątków, 3.6 GHz (boost 5.0 GHz)", 
        stock: 12,
        emoji: "💻",
        specs: {
            "Rdzenie": "12",
            "Wątki": "20",
            "Takt bazowy": "3.6 GHz",
            "Takt boost": "5.0 GHz",
            "Socket": "LGA1700",
            "Cache": "25 MB"
        }
    },
    { 
        id: 16, 
        name: "Intel Core i7-13700K", 
        price: 1899, 
        category: "Procesory", 
        subcategory: "Intel Core i7",
        description: "Procesor 16-rdzeniowy, 24 wątki, 3.4 GHz (boost 5.4 GHz)", 
        stock: 9,
        emoji: "💻",
        specs: {
            "Rdzenie": "16",
            "Wątki": "24",
            "Takt bazowy": "3.4 GHz",
            "Takt boost": "5.4 GHz",
            "Socket": "LGA1700",
            "Cache": "30 MB"
        }
    },

    // PROCESORY INTEL CORE I9
    { 
        id: 17, 
        name: "Intel Core i9-12900K", 
        price: 2199, 
        category: "Procesory", 
        subcategory: "Intel Core i9",
        description: "Procesor 16-rdzeniowy, 24 wątki, 3.2 GHz (boost 5.2 GHz)", 
        stock: 7,
        emoji: "💻",
        specs: {
            "Rdzenie": "16",
            "Wątki": "24",
            "Takt bazowy": "3.2 GHz",
            "Takt boost": "5.2 GHz",
            "Socket": "LGA1700",
            "Cache": "30 MB"
        }
    },
    { 
        id: 18, 
        name: "Intel Core i9-13900K", 
        price: 2699, 
        category: "Procesory", 
        subcategory: "Intel Core i9",
        description: "Procesor 24-rdzeniowy, 32 wątki, 3.0 GHz (boost 5.8 GHz)", 
        stock: 5,
        emoji: "💻",
        specs: {
            "Rdzenie": "24",
            "Wątki": "32",
            "Takt bazowy": "3.0 GHz",
            "Takt boost": "5.8 GHz",
            "Socket": "LGA1700",
            "Cache": "36 MB"
        }
    },

    // PŁYTY GŁÓWNE MSI
    { 
        id: 19, 
        name: "MSI B550 Gaming Plus", 
        price: 599, 
        category: "Płyty główne", 
        subcategory: "MSI",
        description: "Płyta główna ATX, Socket AM4, chipset B550", 
        stock: 16,
        emoji: "🔧",
        specs: {
            "Format": "ATX",
            "Socket": "AM4",
            "Chipset": "B550",
            "Sloty RAM": "4x DDR4",
            "Max RAM": "128 GB"
        }
    },
    { 
        id: 20, 
        name: "MSI MAG B660 Tomahawk", 
        price: 799, 
        category: "Płyty główne", 
        subcategory: "MSI",
        description: "Płyta główna ATX, Socket LGA1700, chipset B660", 
        stock: 14,
        emoji: "🔧",
        specs: {
            "Format": "ATX",
            "Socket": "LGA1700",
            "Chipset": "B660",
            "Sloty RAM": "4x DDR4",
            "Max RAM": "128 GB"
        }
    },
    { 
        id: 21, 
        name: "MSI MPG Z690 Carbon", 
        price: 1499, 
        category: "Płyty główne", 
        subcategory: "MSI",
        description: "Płyta główna ATX, Socket LGA1700, chipset Z690", 
        stock: 8,
        emoji: "🔧",
        specs: {
            "Format": "ATX",
            "Socket": "LGA1700",
            "Chipset": "Z690",
            "Sloty RAM": "4x DDR5",
            "Max RAM": "128 GB"
        }
    },

    // PŁYTY GŁÓWNE ASUS
    { 
        id: 22, 
        name: "ASUS Prime B550-PLUS", 
        price: 549, 
        category: "Płyty główne", 
        subcategory: "ASUS",
        description: "Płyta główna ATX, Socket AM4, chipset B550", 
        stock: 20,
        emoji: "🔧",
        specs: {
            "Format": "ATX",
            "Socket": "AM4",
            "Chipset": "B550",
            "Sloty RAM": "4x DDR4",
            "Max RAM": "128 GB"
        }
    },
    { 
        id: 23, 
        name: "ASUS TUF Gaming B660M", 
        price: 699, 
        category: "Płyty główne", 
        subcategory: "ASUS",
        description: "Płyta główna Micro-ATX, Socket LGA1700, chipset B660", 
        stock: 18,
        emoji: "🔧",
        specs: {
            "Format": "Micro-ATX",
            "Socket": "LGA1700",
            "Chipset": "B660",
            "Sloty RAM": "4x DDR4",
            "Max RAM": "128 GB"
        }
    },
    { 
        id: 24, 
        name: "ASUS ROG Strix Z690-E", 
        price: 1899, 
        category: "Płyty główne", 
        subcategory: "ASUS",
        description: "Płyta główna ATX, Socket LGA1700, chipset Z690", 
        stock: 6,
        emoji: "🔧",
        specs: {
            "Format": "ATX",
            "Socket": "LGA1700",
            "Chipset": "Z690",
            "Sloty RAM": "4x DDR5",
            "Max RAM": "128 GB"
        }
    },

    // PŁYTY GŁÓWNE GIGABYTE AORUS
    { 
        id: 25, 
        name: "Gigabyte AORUS B550 Elite", 
        price: 649, 
        category: "Płyty główne", 
        subcategory: "Gigabyte AORUS",
        description: "Płyta główna ATX, Socket AM4, chipset B550", 
        stock: 15,
        emoji: "🔧",
        specs: {
            "Format": "ATX",
            "Socket": "AM4",
            "Chipset": "B550",
            "Sloty RAM": "4x DDR4",
            "Max RAM": "128 GB"
        }
    },
    { 
        id: 26, 
        name: "Gigabyte AORUS Z690 Master", 
        price: 2199, 
        category: "Płyty główne", 
        subcategory: "Gigabyte AORUS",
        description: "Płyta główna E-ATX, Socket LGA1700, chipset Z690", 
        stock: 5,
        emoji: "🔧",
        specs: {
            "Format": "E-ATX",
            "Socket": "LGA1700",
            "Chipset": "Z690",
            "Sloty RAM": "4x DDR5",
            "Max RAM": "128 GB"
        }
    },

    // PŁYTY GŁÓWNE ASROCK
    { 
        id: 27, 
        name: "ASRock B550M Pro4", 
        price: 449, 
        category: "Płyty główne", 
        subcategory: "ASRock",
        description: "Płyta główna Micro-ATX, Socket AM4, chipset B550", 
        stock: 22,
        emoji: "🔧",
        specs: {
            "Format": "Micro-ATX",
            "Socket": "AM4",
            "Chipset": "B550",
            "Sloty RAM": "4x DDR4",
            "Max RAM": "128 GB"
        }
    },
    { 
        id: 28, 
        name: "ASRock Z690 Extreme", 
        price: 1299, 
        category: "Płyty główne", 
        subcategory: "ASRock",
        description: "Płyta główna ATX, Socket LGA1700, chipset Z690", 
        stock: 10,
        emoji: "🔧",
        specs: {
            "Format": "ATX",
            "Socket": "LGA1700",
            "Chipset": "Z690",
            "Sloty RAM": "4x DDR5",
            "Max RAM": "128 GB"
        }
    },

    // KARTY GRAFICZNE NVIDIA RTX 4060
    { 
        id: 29, 
        name: "ASUS GeForce RTX 4060 Dual", 
        price: 1499, 
        category: "Karty graficzne", 
        subcategory: "NVIDIA RTX 4060",
        description: "Karta graficzna 8GB GDDR6, 3072 CUDA Cores", 
        stock: 12,
        emoji: "🎮",
        specs: {
            "VRAM": "8 GB GDDR6",
            "CUDA Cores": "3072",
            "Boost Clock": "2460 MHz",
            "TDP": "115W",
            "Interfejs": "PCIe 4.0"
        }
    },
    { 
        id: 30, 
        name: "MSI GeForce RTX 4060 Gaming X", 
        price: 1699, 
        category: "Karty graficzne", 
        subcategory: "NVIDIA RTX 4060",
        description: "Karta graficzna 8GB GDDR6, 3072 CUDA Cores, zaawansowane chłodzenie", 
        stock: 10,
        emoji: "🎮",
        specs: {
            "VRAM": "8 GB GDDR6",
            "CUDA Cores": "3072",
            "Boost Clock": "2535 MHz",
            "TDP": "115W",
            "Interfejs": "PCIe 4.0"
        }
    },

    // KARTY GRAFICZNE NVIDIA RTX 4070
    { 
        id: 31, 
        name: "Gigabyte GeForce RTX 4070 Gaming OC", 
        price: 2799, 
        category: "Karty graficzne", 
        subcategory: "NVIDIA RTX 4070",
        description: "Karta graficzna 12GB GDDR6X, 5888 CUDA Cores", 
        stock: 8,
        emoji: "🎮",
        specs: {
            "VRAM": "12 GB GDDR6X",
            "CUDA Cores": "5888",
            "Boost Clock": "2475 MHz",
            "TDP": "200W",
            "Interfejs": "PCIe 4.0"
        }
    },
    { 
        id: 32, 
        name: "ASUS ROG Strix RTX 4070", 
        price: 3199, 
        category: "Karty graficzne", 
        subcategory: "NVIDIA RTX 4070",
        description: "Karta graficzna 12GB GDDR6X, 5888 CUDA Cores, RGB", 
        stock: 6,
        emoji: "🎮",
        specs: {
            "VRAM": "12 GB GDDR6X",
            "CUDA Cores": "5888",
            "Boost Clock": "2610 MHz",
            "TDP": "215W",
            "Interfejs": "PCIe 4.0"
        }
    },

    // KARTY GRAFICZNE NVIDIA RTX 4080
    { 
        id: 33, 
        name: "MSI GeForce RTX 4080 Suprim X", 
        price: 5499, 
        category: "Karty graficzne", 
        subcategory: "NVIDIA RTX 4080",
        description: "Karta graficzna 16GB GDDR6X, 9728 CUDA Cores", 
        stock: 4,
        emoji: "🎮",
        specs: {
            "VRAM": "16 GB GDDR6X",
            "CUDA Cores": "9728",
            "Boost Clock": "2610 MHz",
            "TDP": "320W",
            "Interfejs": "PCIe 4.0"
        }
    },
    { 
        id: 34, 
        name: "Gigabyte RTX 4080 AORUS Master", 
        price: 5899, 
        category: "Karty graficzne", 
        subcategory: "NVIDIA RTX 4080",
        description: "Karta graficzna 16GB GDDR6X, 9728 CUDA Cores, premium", 
        stock: 3,
        emoji: "🎮",
        specs: {
            "VRAM": "16 GB GDDR6X",
            "CUDA Cores": "9728",
            "Boost Clock": "2640 MHz",
            "TDP": "320W",
            "Interfejs": "PCIe 4.0"
        }
    },

    // KARTY GRAFICZNE NVIDIA RTX 4090
    { 
        id: 35, 
        name: "ASUS TUF Gaming RTX 4090", 
        price: 8999, 
        category: "Karty graficzne", 
        subcategory: "NVIDIA RTX 4090",
        description: "Karta graficzna 24GB GDDR6X, 16384 CUDA Cores", 
        stock: 2,
        emoji: "🎮",
        specs: {
            "VRAM": "24 GB GDDR6X",
            "CUDA Cores": "16384",
            "Boost Clock": "2565 MHz",
            "TDP": "450W",
            "Interfejs": "PCIe 4.0"
        }
    },
    { 
        id: 36, 
        name: "MSI GeForce RTX 4090 Suprim X", 
        price: 9999, 
        category: "Karty graficzne", 
        subcategory: "NVIDIA RTX 4090",
        description: "Karta graficzna 24GB GDDR6X, 16384 CUDA Cores, top model", 
        stock: 1,
        emoji: "🎮",
        specs: {
            "VRAM": "24 GB GDDR6X",
            "CUDA Cores": "16384",
            "Boost Clock": "2640 MHz",
            "TDP": "480W",
            "Interfejs": "PCIe 4.0"
        }
    },

    // KARTY GRAFICZNE AMD RX 7600
    { 
        id: 37, 
        name: "XFX Radeon RX 7600 SWFT", 
        price: 1299, 
        category: "Karty graficzne", 
        subcategory: "AMD RX 7600",
        description: "Karta graficzna 8GB GDDR6, architektura RDNA 3", 
        stock: 15,
        emoji: "🎮",
        specs: {
            "VRAM": "8 GB GDDR6",
            "Stream Processors": "2048",
            "Boost Clock": "2655 MHz",
            "TDP": "165W",
            "Interfejs": "PCIe 4.0"
        }
    },
    { 
        id: 38, 
        name: "Sapphire Radeon RX 7600 Pulse", 
        price: 1399, 
        category: "Karty graficzne", 
        subcategory: "AMD RX 7600",
        description: "Karta graficzna 8GB GDDR6, architektura RDNA 3, wydajna", 
        stock: 12,
        emoji: "🎮",
        specs: {
            "VRAM": "8 GB GDDR6",
            "Stream Processors": "2048",
            "Boost Clock": "2715 MHz",
            "TDP": "165W",
            "Interfejs": "PCIe 4.0"
        }
    },

    // KARTY GRAFICZNE AMD RX 7700
    { 
        id: 39, 
        name: "ASRock Radeon RX 7700 XT", 
        price: 2199, 
        category: "Karty graficzne", 
        subcategory: "AMD RX 7700",
        description: "Karta graficzna 12GB GDDR6, architektura RDNA 3", 
        stock: 9,
        emoji: "🎮",
        specs: {
            "VRAM": "12 GB GDDR6",
            "Stream Processors": "3456",
            "Boost Clock": "2544 MHz",
            "TDP": "245W",
            "Interfejs": "PCIe 4.0"
        }
    },

    // KARTY GRAFICZNE AMD RX 7800
    { 
        id: 40, 
        name: "Gigabyte Radeon RX 7800 XT Gaming", 
        price: 2799, 
        category: "Karty graficzne", 
        subcategory: "AMD RX 7800",
        description: "Karta graficzna 16GB GDDR6, architektura RDNA 3", 
        stock: 7,
        emoji: "🎮",
        specs: {
            "VRAM": "16 GB GDDR6",
            "Stream Processors": "3840",
            "Boost Clock": "2430 MHz",
            "TDP": "263W",
            "Interfejs": "PCIe 4.0"
        }
    },
    { 
        id: 41, 
        name: "Sapphire Radeon RX 7800 XT Nitro+", 
        price: 3099, 
        category: "Karty graficzne", 
        subcategory: "AMD RX 7800",
        description: "Karta graficzna 16GB GDDR6, architektura RDNA 3, premium", 
        stock: 5,
        emoji: "🎮",
        specs: {
            "VRAM": "16 GB GDDR6",
            "Stream Processors": "3840",
            "Boost Clock": "2565 MHz",
            "TDP": "270W",
            "Interfejs": "PCIe 4.0"
        }
    },

    // KARTY GRAFICZNE AMD RX 7900
    { 
        id: 42, 
        name: "XFX Radeon RX 7900 XT", 
        price: 3999, 
        category: "Karty graficzne", 
        subcategory: "AMD RX 7900",
        description: "Karta graficzna 20GB GDDR6, architektura RDNA 3", 
        stock: 4,
        emoji: "🎮",
        specs: {
            "VRAM": "20 GB GDDR6",
            "Stream Processors": "5376",
            "Boost Clock": "2400 MHz",
            "TDP": "315W",
            "Interfejs": "PCIe 4.0"
        }
    },
    { 
        id: 43, 
        name: "Sapphire Radeon RX 7900 XTX Nitro+", 
        price: 4999, 
        category: "Karty graficzne", 
        subcategory: "AMD RX 7900",
        description: "Karta graficzna 24GB GDDR6, architektura RDNA 3, flagowy model", 
        stock: 3,
        emoji: "🎮",
        specs: {
            "VRAM": "24 GB GDDR6",
            "Stream Processors": "6144",
            "Boost Clock": "2680 MHz",
            "TDP": "355W",
            "Interfejs": "PCIe 4.0"
        }
    },
    { 
        id: 44, 
        name: "ASRock Radeon RX 7900 XTX Taichi", 
        price: 5299, 
        category: "Karty graficzne", 
        subcategory: "AMD RX 7900",
        description: "Karta graficzna 24GB GDDR6, architektura RDNA 3, edycja limitowana", 
        stock: 2,
        emoji: "🎮",
        specs: {
            "VRAM": "24 GB GDDR6",
            "Stream Processors": "6144",
            "Boost Clock": "2700 MHz",
            "TDP": "360W",
            "Interfejs": "PCIe 4.0"
        }
    }

        ];

        // ==================== ZARZĄDZANIE KOSZYKIEM ====================
        let cart = [];

        function updateCartCount() {
            const cartCountElement = document.getElementById('cartCount');
            if (cartCountElement) {
                cartCountElement.textContent = cart.length;
            }
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
            
            if (!cartItems || !cartTotal) return;
            
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
            if (!modal) return;
            
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
            if (!grid) return;
            
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
            const categoryFilter = document.getElementById('categoryFilter');
            const priceFilter = document.getElementById('priceFilter');
            const stockFilter = document.getElementById('stockFilter');
            const sortFilter = document.getElementById('sortFilter');
            
            if (!categoryFilter || !priceFilter || !stockFilter || !sortFilter) return;

            let filtered = [...PRODUCTS];

            // Filtr kategorii
            if (categoryFilter.value !== 'all') {
                filtered = filtered.filter(p => p.category === categoryFilter.value);
            }

            // Filtr ceny
            if (priceFilter.value === 'low') {
                filtered = filtered.filter(p => p.price <= 500);
            } else if (priceFilter.value === 'medium') {
                filtered = filtered.filter(p => p.price > 500 && p.price <= 1500);
            } else if (priceFilter.value === 'high') {
                filtered = filtered.filter(p => p.price > 1500);
            }

            // Filtr dostępności
            if (stockFilter.value === 'in-stock') {
                filtered = filtered.filter(p => p.stock > 10);
            } else if (stockFilter.value === 'low-stock') {
                filtered = filtered.filter(p => p.stock > 0 && p.stock <= 10);
            }

            // Sortowanie
            if (sortFilter.value === 'price-asc') {
                filtered.sort((a, b) => a.price - b.price);
            } else if (sortFilter.value === 'price-desc') {
                filtered.sort((a, b) => b.price - a.price);
            } else if (sortFilter.value === 'name') {
                filtered.sort((a, b) => a.name.localeCompare(b.name));
            }

            currentProducts = filtered;
            renderProducts(filtered);
        }

        // ==================== FILTROWANIE PO PODKATEGORII ====================
        function filterBySubcategory(subcategory) {
            const filtered = PRODUCTS.filter(p => p.subcategory === subcategory);
            currentProducts = filtered;
            renderProducts(filtered);
        }

        // ==================== WYSZUKIWANIE ====================
        function handleSearch() {
            const searchInput = document.getElementById('searchInput');
            if (!searchInput) return;
            
            const searchTerm = searchInput.value.toLowerCase();
            const filtered = PRODUCTS.filter(p => 
                p.name.toLowerCase().includes(searchTerm) ||
                p.description.toLowerCase().includes(searchTerm) ||
                p.category.toLowerCase().includes(searchTerm) ||
                p.subcategory.toLowerCase().includes(searchTerm)
            );
            renderProducts(filtered);
        }

        // ==================== MODAL SZCZEGÓŁÓW PRODUKTU ====================
        function showProductDetails(productId) {
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product) return;

            const modalTitle = document.getElementById('modalTitle');
            const modalImage = document.getElementById('modalImage');
            const modalDescription = document.getElementById('modalDescription');
            const modalPrice = document.getElementById('modalPrice');
            const modalStock = document.getElementById('modalStock');
            const modalSpecs = document.getElementById('modalSpecs');
            const modalAddToCart = document.getElementById('modalAddToCart');
            
            if (!modalTitle || !modalImage || !modalDescription || !modalPrice || !modalStock || !modalSpecs || !modalAddToCart) return;

            modalTitle.textContent = product.name;
            modalImage.textContent = product.emoji;
            modalDescription.textContent = product.description;
            modalPrice.textContent = `${product.price} zł`;

            const stockClass = product.stock > 10 ? 'in-stock' : product.stock > 0 ? 'low-stock' : 'out-of-stock';
            const stockText = product.stock > 10 ? 'W magazynie' : product.stock > 0 ? `Ostatnie ${product.stock} szt.` : 'Brak';
            
            modalStock.innerHTML = `
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
            modalSpecs.innerHTML = specsHtml;

            // Przycisk dodaj do koszyka
            modalAddToCart.disabled = product.stock === 0;
            modalAddToCart.onclick = () => {
                addToCart(product.id);
                closeProductModal();
            };

            const productModal = document.getElementById('productModal');
            if (productModal) {
                productModal.style.display = 'flex';
            }
        }

        function closeProductModal() {
            const productModal = document.getElementById('productModal');
            if (productModal) {
                productModal.style.display = 'none';
            }
        }

        // ==================== POWIADOMIENIA ====================
        function showNotification(message) {
            const notification = document.getElementById('notification');
            if (!notification) return;
            
            notification.textContent = message;
            notification.style.display = 'block';
            
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        }

        // ==================== LOGIN MODAL ====================
        function showLogin() {
            alert('Funkcja logowania będzie dostępna wkrótce!');
        }

        // ==================== OBSŁUGA KLIKNIĘĆ POZA MODALEM ====================
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

        // ==================== INICJALIZACJA ====================
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts(PRODUCTS);
            updateCartCount();
            
            // Obsługa Enter w polu wyszukiwania
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                });
            }
        });