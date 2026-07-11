let cartBox = [];
let wishListBox = [];

const productItems = [
    /*Pens Markers*/
    {
        id: 1,
        title: "Mochiri & Co. Japan inspired Kokuon Edition...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pens",
        image: "https://inkarto.com/cdn/shop/files/85_8b49b77e-63ce-49d1-9a3a-50fa02390f05.jpg?v=1780774008&width=600",
        hoverImage: "https://inkarto.com/cdn/shop/files/87_5ec67259-800c-4c03-9d3f-3c2d6db3e9a2.jpg?v=1780774008&width=600"
    },
    {
        id: 2,
        title: "Mochiri & Co. Japan inspired Loushi Edition...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pens",
        image: "https://inkarto.com/cdn/shop/files/103_3efbb6a6-6c40-4173-a8c5-3ea4f7073dee.jpg?v=1780773669&width=600",
        hoverImage: "https://inkarto.com/cdn/shop/files/104.jpg?v=1780773669&width=493"
    },
    {
        id: 3,
        title: "Mochiri & Co.Japan inspired VECTOR 5 | Matte Silver...",
        price: Math.floor(Math.random() * 2000) + 500,
        category: "Pens",
        rating: (Math.random() + 4).toFixed(1),
        image: "https://inkarto.com/cdn/shop/files/248.jpg?v=1781612730&width=600",
        hoverImage: "https://inkarto.com/cdn/shop/files/249.jpg?v=1781612730&width=600"
    },
    {
        id: 4,
        title: "Mochiri & Co. – Meisterwood EF Edition Fountain Pen I...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pens",
        image: "https://inkarto.com/cdn/shop/files/94.jpg?v=1780986393&width=600",
        hoverImage: "https://inkarto.com/cdn/shop/files/w5xsr9wl2wkcugnid6dx.webp?v=1780986335&width=713"
    },
    {
        id: 5,
        title: "Mochiri & Co. Jokuo 樹皇 Edition Roller Ball Pen ...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pens",
        image: "https://inkarto.com/cdn/shop/files/1_fa73fa11-5650-4633-8b16-07ce683f5cee.webp?v=1781104721&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/3_e13f5850-cff7-4dd1-8f67-87c7304ec667.webp?v=1781104769&width=713"
    },
    {
        id: 6,
        title: "(Buy 1 Get 1 Free) Golden Acrylic Marker for painting ...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pens",
        image: "https://inkarto.com/cdn/shop/files/eb0f037a5b9d78b7f60498e587acfb3e.jpg?v=1760282051&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/f7926e1de899b20d3433e376ed972f11.jpg?v=1762059986&width=713"
    },
    {
        id: 7,
        title: "Mochiri & Co. Japan inspired ARISTOCRAT 1988 Retro Pen...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pens",
        image: "https://inkarto.com/cdn/shop/files/187_1f995d4f-25cc-46e6-ab63-62a2481e4546.jpg?v=1780774346&width=493",
        hoverImage: "https://inkarto.com/cdn/shop/files/188_ea33ed83-7e0e-416b-aaf9-651e121a2b07.jpg?v=1780774346&width=493"
    },
    {
        id: 8,
        title: "Mochiri & Co. Japan inspired – Ō-Tei II Edition ...",
        price: Math.floor(Math.random() * 2000) + 500,
        category: "Pens",
        rating: (Math.random() + 4).toFixed(1),
        image: "https://inkarto.com/cdn/shop/files/233.jpg?v=1780987432&width=493",
        hoverImage: "https://inkarto.com/cdn/shop/files/235.jpg?v=1780987432&width=600"
    },
    {
        id: 9,
        title: "Mochiri & Co. Japan inspired TAKUMI Edition...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pens",
        image: "https://inkarto.com/cdn/shop/files/226.jpg?v=1780774844&width=1946",
        hoverImage: "https://inkarto.com/cdn/shop/files/228.jpg?v=1780774844&width=600"
    },
    {
        id: 10,
        title: "Touch Smooth Alcohol Markers - 100 Vibrant Colors...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pens",
        image: "https://inkarto.com/cdn/shop/files/WhatsAppImage2024-12-28at3.10.04PM.jpg?v=1760301373&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/WhatsAppImage2024-12-28at3.10.03PM.jpg?v=1760301374&width=713"
    },
    {
        id: 11,
        title: "Acrylic Paint Markers – Multi-Surface Art Pens for Resin, Wood...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pens",
        image: "https://inkarto.com/cdn/shop/files/Untitled_design_76_9607eb71-5c4b-4c2c-9f54-e5ccfd15fd29.jpg?v=1768717247&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/WhatsApp_Image_2024-07-26_at_12.43.13_PM.jpg?v=1768717247&width=713"
    },
    {
        id: 12,
        title: "Premium Acrylic Marker Pen l Pack of 1...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pens",
        image: "https://inkarto.com/cdn/shop/files/mg-traders-1-marker-940054-acrylic-marker-pen-12-color-41328549167317.jpg?v=1760293881&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/mg-traders-marker-940054-acrylic-marker-pen-12-color-41328227647701.jpg?v=1760293882&width=713"
    },
    /*NoteBooks & Diary*/
    {
        id: 13,
        title: "Vintage Ancient Egypt planner undated printed diary ...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "NoteBooks & Diary",
        image: "https://inkarto.com/cdn/shop/files/WhatsAppImage2024-11-23at3.31.52PM.jpg?v=1766923967&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitleddesign_22.jpg?v=1766923967&width=713"
    },
    {
        id: 14,
        title: "Vintage Journal Diary for gifting l pack of 1 diary l ...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "NoteBooks & Diary",
        image: "https://inkarto.com/cdn/shop/files/WhatsAppImage2025-05-26at12.35.46PM.jpg?v=1773042889&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/WhatsAppImage2025-05-26at12.35.47PM.jpg?v=1773042889&width=713"
    },
    {
        id: 15,
        title: "(Buy 1 Get 1 Free ) Butterfly & Blossom Pocket Diary l...",
        price: Math.floor(Math.random() * 2000) + 500,
        category: "NoteBooks & Diary",
        rating: (Math.random() + 4).toFixed(1),
        image: "https://inkarto.com/cdn/shop/files/Untitleddesign-2025-12-11T152530.676.jpg?v=1767940366&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2025-12-11T152457.144.jpg?v=1767940368&width=713"
    },
    {
        id: 16,
        title: "(Buy 1 Get 1 Free ) Cute Panda Mini Ruled Diary l Kawaii ...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "NoteBooks & Diary",
        image: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-04-03T131057.224.jpg?v=1775202515&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitleddesign-2026-04-03T124653.558.jpg?v=1775202515&width=713"
    },
    {
        id: 17,
        title: "(Buy 1 Get 1 Free ) Cute Panda Mini Ruled Diary l Kawaii ...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "NoteBooks & Diary",
        image: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-02-25T164613.256.jpg?v=1772018208&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-02-25T163424.035.jpg?v=1772018208&width=713"
    },
    {
        id: 18,
        title: "A7 Fancy Journal Diary I Ruled & Undated I 100 Sheets I ...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "NoteBooks & Diary",
        image: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-03-28T122428.624.jpg?v=1774681891&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-03-28T123636.267.jpg?v=1774681891&width=360"
    },
    {
        id: 19,
        title: "Van Gogh Vintage Aesthetic Diary l Ruled | Pack of 1 Diary ...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "NoteBooks & Diary",
        image: "https://inkarto.com/cdn/shop/files/WhatsApp_Image_2026-03-16_at_10.24.59_AM_1.jpg?v=1773636991&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-03-15T122429.003.jpg?v=1773557742&width=713"
    },
    {
        id: 20,
        title: "(Buy 1 Get 1 free ) Cute Mini Kawaii Spiral Diary ...",
        price: Math.floor(Math.random() * 2000) + 500,
        category: "NoteBooks & Diary",
        rating: (Math.random() + 4).toFixed(1),
        image: "https://inkarto.com/cdn/shop/files/ChatGPT_Image_Mar_12_2026_04_31_25_PM.png?v=1773314338&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-03-12T162453.731.png?v=1773314338&width=713"
    },
    {
        id: 21,
        title: "Cute Animal Pocket Diary with Snap Closure | Pack of 1 diary...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "NoteBooks & Diary",
        image: "https://inkarto.com/cdn/shop/files/Untitled_design_42_e6b4b692-023d-4397-902f-4c64a77eacb5.jpg?v=1767940104&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitleddesign_41_d5e61421-11a8-4b36-8c33-22b8f27a338e.jpg?v=1767940105&width=713"
    },
    {
        id: 22,
        title: "Van Gogh Latest Edition Velcro Fancy Diary A7 | Contains 1 diary...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "NoteBooks & Diary",
        image: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-03-21T130130.868.jpg?v=1774078593&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-03-21T130558.731.jpg?v=1774078593&width=713"
    },
    {
        id: 23,
        title: "Vintage retro Undated Journal I Aesthetic Retro Edition...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "NoteBooks & Diary",
        image: "https://inkarto.com/cdn/shop/files/Untitleddesign_69.jpg?v=1760302571&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/3_59299cf9-bd18-45cb-81cf-79ce7ab36abb.jpg?v=1760302574&width=713"
    },
    {
        id: 24,
        title: "(BUY 1 GET 1 FREE ) A7 Fancy Journal Diary I Ruled & Undated ...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "NoteBooks & Diary",
        image: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-03-28T124911.985.jpg?v=1774683260&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-03-28T125818.619.jpg?v=1774683260&width=713"
    },
    /*SticyNotes*/
    {
        id: 25,
        title: "(440 sticky notes ) Coffee or Bakery Printed Sticky...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "SticyNotes",
        image: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-01-10T115708.446.jpg?v=1768032051&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-01-10T115549.477.jpg?v=1768032051&width=713"
    },
    {
        id: 26,
        title: "(Buy 1 get 1 free) Cute Animal Printed Sticky Notes Set l ...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "SticyNotes",
        image: "https://inkarto.com/cdn/shop/files/WhatsApp_Image_2026-04-25_at_12.59.10_PM.jpg?v=1777102184&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/WhatsApp_Image_2026-04-25_at_12.59.09_PM.jpg?v=1777102184&width=713"
    },
    {
        id: 27,
        title: "(Buy 1 Get 1 Free ) Cute Fruit sticky Notes (30 Sheets)...",
        price: Math.floor(Math.random() * 2000) + 500,
        category: "SticyNotes",
        rating: (Math.random() + 4).toFixed(1),
        image: "https://inkarto.com/cdn/shop/files/WhatsApp_Image_2026-01-10_at_1.19.26_PM.jpg?v=1768031464&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-01-10T124648.927.jpg?v=1768031464&width=713"
    },
    {
        id: 28,
        title: "(Buy 1 Get 1 Free) Mini Cute Animal Sticky Notes...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "SticyNotes",
        image: "https://inkarto.com/cdn/shop/files/F8CF386F-DF75-4EE9-A99C-D5EF39F4A1CF.webp?v=1760310606&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/WhatsAppImage2025-06-05at3.03.31PM.jpg?v=1760310608&width=713"
    },
    {
        id: 29,
        title: "Premium Weekly Journal Spiral Notepad Diary | 80 Pages...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "SticyNotes",
        image: "https://inkarto.com/cdn/shop/files/WhatsAppImage2025-09-16at5.58.12PM.jpg?v=1776764039&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/WhatsAppImage2025-09-16at5.58.12PM_1.jpg?v=1776764039&width=713"
    },
    {
        id: 30,
        title: "Floral printed sticky notes in diary style l Pack of 1...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "SticyNotes",
        image: "https://inkarto.com/cdn/shop/files/WhatsApp_Image_2026-03-06_at_6.46.36_PM.jpg?v=1776765144&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitleddesign-2026-03-06T170918.192.png?v=1776765144&width=713"
    },
    {
        id: 31,
        title: "(Buy 1 Get 1 Free ) Cute kawaii sticky notes l Pack of 1...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "SticyNotes",
        image: "https://inkarto.com/cdn/shop/files/WhatsAppImage2026-01-10at1.29.49PM_1.jpg?v=1768393967&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/WhatsAppImage2026-01-10at1.29.49PM.jpg?v=1768393966&width=713"
    },
    {
        id: 32,
        title: "(Buy 1 Get 1 Free) 3-in-1 Cute Cat Sticky Notes...",
        price: Math.floor(Math.random() * 2000) + 500,
        category: "SticyNotes",
        rating: (Math.random() + 4).toFixed(1),
        image: "https://inkarto.com/cdn/shop/files/WhatsAppImage2025-08-22at5.57.51PM_1_a1ec4004-98c2-458c-951b-f512ca6accdf.jpg?v=1760312912&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/WhatsAppImage2025-08-22at5.57.51PM_090aec30-4707-43dc-8758-608039ab971f.jpg?v=1760312916&width=713"
    },
    {
        id: 33,
        title: "(440 pcs ) Cute Candy Sticky Note Colorful Design Memo ...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "SticyNotes",
        image: "https://inkarto.com/cdn/shop/files/Untitleddesign-2026-01-27T172326.135.jpg?v=1769515714&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitleddesign-2026-01-27T172854.173.jpg?v=1769515713&width=713"
    },
    {
        id: 34,
        title: "Cute Kawaii 6 in 1 Sticky notes for return gift 1...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "SticyNotes",
        image: "https://inkarto.com/cdn/shop/files/DIYcrafts_34.jpg?v=1771140225&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/DIY_crafts_36.jpg?v=1771142766&width=713"
    },
    {
        id: 35,
        title: "Pastel dreamy sticky notes box I To do list planner notes...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "SticyNotes",
        image: "https://inkarto.com/cdn/shop/files/WhatsAppImage2024-08-05at3.24.09PM_2.jpg?v=1760299192&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/WhatsAppImage2024-08-05at3.26.07PM.jpg?v=1760299194&width=713"
    },
    {
        id: 36,
        title: "Premium Van Gogh Aesthetic Sticky Notes Set | 4 design x 30...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "SticyNotes",
        image: "https://inkarto.com/cdn/shop/files/DIY_crafts_24.jpg?v=1771055207&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/DIY_crafts_27.jpg?v=1771055650&width=1946"
    },
    /*Erasers & Correction Tapes*/
    {
        id: 37,
        title: "Fun Correction Tape with Decorative Dispenser (6M x 5MM)...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Erasers & Correction Tapes",
        image: "https://inkarto.com/cdn/shop/files/mg-traders-correction-tape-bh105aa-correction-tape-6mtrx5mm-1pc-41550578286805.jpg?v=1760291571&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/mg-traders-correction-tape-bh105aa-correction-tape-6mtrx5mm-1pc-41550704574677.jpg?v=1760291573&width=713"
    },
    {
        id: 38,
        title: "Kawaii Correction Tape Roller| Smooth Mess-Free Correction Tool...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Erasers & Correction Tapes",
        image: "https://inkarto.com/cdn/shop/files/Untitleddesign-2026-03-17T173929.661.png?v=1773749383&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-03-17T174812.704.png?v=1773749912&width=713"
    },
    {
        id: 39,
        title: "Pen Correction Tape BH-155A",
        price: Math.floor(Math.random() * 2000) + 500,
        category: "Erasers & Correction Tapes",
        rating: (Math.random() + 4).toFixed(1),
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-correction-tape-pen-correction-tape-bh-155a-41142804807893.jpg?v=1760282469&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-correction-tape-pen-correction-tape-bh-155a-41142984179925.jpg?v=1760282471&width=713"
    },
    {
        id: 40,
        title: "Pen Correction Tape with refill BH-155BTX",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Erasers & Correction Tapes",
        image: "https://inkarto.com/cdn/shop/files/1_7084e549-f4d7-46e6-a720-abcc6b096f5f.jpg?v=1760282475&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/3_56742a43-8acc-4dd6-b00a-f53d25ccf305.jpg?v=1760282478&width=713"
    },
    {
        id: 41,
        title: "Table Sharpener Tank ",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Erasers & Correction Tapes",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-sharpner-table-sharpener-tank-41166946369749.JPG?v=1760280609&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-sharpner-table-sharpener-tank-41166624096469.JPG?v=1760280607&width=713"
    },
    {
        id: 42,
        title: "Cute Clown Shape Table Sharpener",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Erasers & Correction Tapes",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-sharpner-cute-clown-shape-table-sharpener-41166625276117.JPG?v=1760277211&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-sharpner-cute-clown-shape-table-sharpener-41166947647701.JPG?v=1760277213&width=713"
    },
    {
        id: 43,
        title: "Table Sharpner Guitar",
        price: "3.00",
        rating: (Math.random() + 4).toFixed(1),
        category: "Erasers & Correction Tapes",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-sharpner-table-sharpner-guiter-41166626619605.JPG?v=1760274298&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-sharpner-table-sharpner-guiter-41166949449941.jpg?v=1760274300&width=713"
    },
    {
        id: 44,
        title: "Drink type Correction Tape",
        price: Math.floor(Math.random() * 2000) + 500,
        category: "Erasers & Correction Tapes",
        rating: (Math.random() + 4).toFixed(1),
        image: "https://inkarto.com/cdn/shop/files/ravrai-craft-mumbai-branch-correction-tape-drink-type-correction-tape-40816694526165.jpg?v=1760279105&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/ravrai-craft-mumbai-branch-correction-tape-drink-type-correction-tape-40816694526165.jpg?v=1760279105&width=713"
    },
    {
        id: 45,
        title: "Correction Tape",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Erasers & Correction Tapes",
        image: "https://inkarto.com/cdn/shop/files/ravrai-craft-mumbai-branch-correction-tape-correction-tape-40816699343061.jpg?v=1760279107&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/ravrai-craft-mumbai-branch-correction-tape-correction-tape-40816699343061.jpg?v=1760279107&width=713"
    },
    {
        id: 46,
        title: "Table Sharpener Cartoon Darvish",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Erasers & Correction Tapes",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-sharpner-table-sharpener-cartoon-darvish-41166625571029.JPG?v=1760275224&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-sharpner-table-sharpener-cartoon-darvish-41166948466901.JPG?v=1760275225&width=713"
    },
    {
        id: 47,
        title: "Table Sharpener Cartoon",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Erasers & Correction Tapes",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-sharpner-table-sharpener-cartoon-41166627504341.JPG?v=1760274838&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-sharpner-table-sharpener-cartoon-41166950891733.JPG?v=1760274840&width=713"
    },
    {
        id: 48,
        title: "Table Sharpener Owl",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Erasers & Correction Tapes",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-sharpner-table-sharpener-owl-41166624522453.JPG?v=1760271257&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-sharpner-table-sharpener-owl-41166947025109.jpg?v=1760271258&width=713"
    },
    /*Peints*/
    {
        id: 49,
        title: "Camel Acrylic Colour Orangr 15ml ( 1 bottel)",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: 50,
        category: "Peints",
        image: "https://inkarto.com/cdn/shop/files/Untitleddesign-2025-12-19T115150.958.jpg?v=1767943706&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2025-12-19T121113.712.jpg?v=1767943705&width=713"
    },
    {
        id: 50,
        title: "Camel Acrylic Colour Mauve | 15 ml (Pack of 1)",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: 25,
        category: "Peints",
        image: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2025-12-19T132231.949.jpg?v=1767943705&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2025-12-19T132247.606.jpg?v=1767943706&width=713"
    },
    {
        id: 51,
        title: "Chalk Paint (Ash Grey)",
        price: Math.floor(Math.random() * 2000) + 500,
        category: "Peints",
        rating: (Math.random() + 4).toFixed(1),
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-chalk-paint-chalk-paint-ash-grey-41144002347221.JPG?v=1760275508&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-chalk-paint-chalk-paint-ash-grey-41144094425301.JPG?v=1760275507&width=713"
    },
    {
        id: 52,
        title: "Jags Premium Acrylic Colour Paint P Green JPAC07",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Peints",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-paint-colours-jags-premium-acrylic-colour-paint-p-green-jpac07-41166262993109.JPG?v=1760260954&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-paint-colours-jags-premium-acrylic-colour-paint-p-green-jpac07-41166726889685.JPG?v=1760260955&width=1946"
    },
    {
        id: 53,
        title: "Yellow Ochre acrylic colour l 492 l 15ml",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Peints",
        image: "https://inkarto.com/cdn/shop/files/SKU-0608_0-1729166653401.webp?v=1767943706&width=600",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2025-12-19T170448.088.jpg?v=1767943705&width=1946"
    },
    {
        id: 54,
        title: "Acrylic Metallic Colour 45Ml Red Code 509 AMC410",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Peints",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-acrylic-glass-colours-acrylic-metallic-col-45ml-red-code-509-amc410-41142786752725.JPG?v=1760260801&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-acrylic-glass-colours-acrylic-metallic-col-45ml-red-code-509-amc410-41142960783573.JPG?v=1760260803&width=713"
    },
    {
        id: 55,
        title: "Keep Smiling Watercolour Set 7256W | Vibrant Colour Set",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Peints",
        image: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2025-11-22T153831.853.jpg?v=1767013087&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/ravrai-craft-mumbai-branch-water-gauche-colors-keep-smiling-water-color-set-7256w-brighten-your-world-with-vibrant-colors-41044050378965.jpg?v=1765995529&width=713"
    },
    {
        id: 56,
        title: "Jags Resin Ink Colours Transparent Effect Set Of 3Ps TDCPART-5",
        price: Math.floor(Math.random() * 2000) + 500,
        category: "Peints",
        rating: (Math.random() + 4).toFixed(1),
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-pen-jags-resin-ink-colours-transpent-fffect-set-of-3ps-tdcpart-5-41166401798357.jpg?v=1760264349&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-pen-jags-resin-ink-colours-transpent-fffect-set-of-3ps-tdcpart-5-41166686060757.jpg?v=1760264351&width=713"
    },
    {
        id: 57,
        title: "Liquid Watercolour l Set Of 3 Pics l JLWS05",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Peints",
        image: "https://inkarto.com/cdn/shop/files/JLWS05.jpg?v=1760304414&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/JLWS05_1.jpg?v=1760304416&width=713"
    },

    /*Pencils*/
    {
        id: 58,
        title: "12 Soft Charcoal Pencils Set (Tb1012S) - Rich & Blendable",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pencils",
        image: "https://inkarto.com/cdn/shop/files/mg-traders-charcoal-pencil-12pc-charcoal-pencils-soft-tb1012s-41044071579861.jpg?v=1760286218&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/mg-traders-charcoal-pencil-12pc-charcoal-pencils-soft-tb1012s-41044071579861.jpg?v=1760286218&width=713"
    },
    {
        id: 59,
        title: "Superior Charcoal Drawing Pencil 10Pcs",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pencils",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-charcoal-pencils-superior-charcoal-drawing-pencil-10pcs-41142688088277.jpg?v=1760277689&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/superior-charcoal-drawing-pencil-10pcs-charcoal-pencils-41458916425941.jpg?v=1760277691&width=1946"
    },
    {
        id: 60,
        title: "Superior Charcoal Drawing Pencil (10Pcs)",
        price: Math.floor(Math.random() * 2000) + 500,
        category: "Pencils",
        rating: (Math.random() + 4).toFixed(1),
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-charcoal-pencils-superior-charcoal-drawing-pencil-10pcs-41142688055509.jpg?v=1760274547&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-charcoal-pencils-superior-charcoal-drawing-pencil-10pcs-41142835380437.jpg?v=1760274548&width=713"
    },
    {
        id: 61,
        title: "Superior Charcoal Drawing Pencil (10Pcs)",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pencils",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-charcoal-pencils-superior-charcoal-drawing-pencil-10pcs-41142687957205.jpg?v=1760274540&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-charcoal-pencils-superior-charcoal-drawing-pencil-10pcs-41142835314901.jpg?v=1760274542&width=713"
    },
    {
        id: 62,
        title: "12 Premium Advanced Color Pencils for Artists & Crafters",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pencils",
        image: "https://inkarto.com/cdn/shop/files/mg-traders-pencil-hwcp12-12-color-advanced-colour-pencils-41041153687765.jpg?v=1760285410&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/mg-traders-sketching-pencil-hwcp12-12-color-advanced-colour-pencils-41041474257109.jpg?v=1760285411&width=713"
    },
    {
        id: 63,
        title: "Jags Water Colour Pencil 48 Colours JWCP-48",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pencils",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-pencil-jags-water-colour-pencil-48-colours-jwcp-48-41166502887637.jpg?v=1760283478&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-pencil-jags-water-colour-pencil-48-colours-jwcp-48-41166912553173.jpg?v=1760283479&width=713"
    },
    {
        id: 64,
        title: "Water Colour Pencil (60 Colors)",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pencils",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-pencil-water-color-pencil-60-colors-41166503215317.jpg?v=1760275566&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-pencil-water-color-pencil-60-colors-41167266578645.jpg?v=1760275568&width=713"
    },
    {
        id: 65,
        title: "Charcoal Pencil Kit 7Pc (Tb1109)",
        price: Math.floor(Math.random() * 2000) + 500,
        category: "Pencils",
        rating: (Math.random() + 4).toFixed(1),
        image: "https://inkarto.com/cdn/shop/files/mg-traders-charcoal-pencil-charcoal-pencil-kit-7pc-tb1109-41044077379797.jpg?v=1760286226&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/mg-traders-charcoal-pencil-charcoal-pencil-kit-7pc-tb1109-41044077379797.jpg?v=1760286226&width=713"
    },
    {
        id: 66,
        title: "Charcoal Pencil Set Of 12 Pieces (Medium)",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Pencils",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-charcoal-pencil-charcoal-pencil-set-of-12-pieces-medium-41142750544085.jpg?v=1760277140&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-charcoal-pencil-charcoal-pencil-set-of-12-pieces-medium-41142750544085.jpg?v=1760277140&width=713"
    },


    /*Acrylic & Wood*/
    {
        id: 67,
        title: "Glass Messages Bottle 6pcs Set 22*70 70MM GMB700",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Acrylic & Wood",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-glass-messages-bottle-glass-messages-bottle-6pcs-set-22-70-70mm-gmb700-41144047861973.JPG?v=1760262643&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-glass-messages-bottle-glass-messages-bottle-6pcs-set-22-70-70mm-gmb700-41144126308565.JPG?v=1760262644&width=713"
    },
    {
        id: 68,
        title: "Wooden plate for painting and DIY -2 cms ( pack of 4 )",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Acrylic & Wood",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-wooden-slice-wooden-plate-for-painting-and-diy-2-cms-pack-of-4-41166173274325.JPG?v=1760259181&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-wooden-slice-wooden-plate-for-painting-and-diy-2-cms-pack-of-4-41166532247765.JPG?v=1760259184&width=713"
    },
    {
        id: 69,
        title: "Round Wood Plate 14CM TO 15CM 1.5CM RWP15CM",
        price: Math.floor(Math.random() * 2000) + 500,
        category: "Acrylic & Wood",
        rating: (Math.random() + 4).toFixed(1),
        image: "https://inkarto.com/cdn/shop/files/round-wood-plate-14cm-to-15cm-1-5cm-rwp15cm-wooden-plates-41213319807189.JPG?v=1760921097&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/round-wood-plate-14cm-to-15cm-1-5cm-rwp15cm-wooden-plates-41211473920213.JPG?v=1760921099&width=713"
    },
    {
        id: 70,
        title: "Charming Mini Glass Message Bottles with Cork Lids | 12-Pack",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Acrylic & Wood",
        image: "https://inkarto.com/cdn/shop/files/WhatsAppImage2024-12-19at8.22.34PM_1.jpg?v=1760300869&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2025-11-17T170450.950.jpg?v=1767959406&width=713"
    },
    {
        id: 71,
        title: "Black Magnet (size:12x3mm) 50Pcs Pack of 1",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Acrylic & Wood",
        image: "https://inkarto.com/cdn/shop/files/mg-traders-pack-magnet-sheet-buttons-black-12x3mm-magnet-50pc-12mm-contain-1-unit-41182445666517.jpg?v=1760287333&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/round-black-magnets-500x500.webp?v=1760287334"
    },
    {
        id: 72,
        title: "Natural Round Wooden Slice for Crafts & Decor (7-8cm)",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Acrylic & Wood",
        image: "https://inkarto.com/cdn/shop/files/mg-traders-pack-wooden-slice-wooden-slice-round-7-8x1cm-wsr78-contain-1-unit-41183166595285.jpg?v=1760288071&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/mg-traders-pack-wooden-slice-wooden-slice-round-7-8x1cm-wsr78-contain-1-unit-41183181766869.jpg?v=1760288073&width=713"
    },
    {
        id: 73,
        title: "Glass Messages Bottle 11x45 9 pcs Set",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Acrylic & Wood",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-glass-messages-bottle-glass-messages-bottle-11x45-9-pcs-set-41144040292565.JPG?v=1760888365&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-glass-messages-bottle-glass-messages-bottle-11x45-9-pcs-set-41144122736853.JPG?v=1760888367&width=713"
    },


    /*Papers*/
    {
        id: 74,
        title: "A4 Glitter Foam Sheet With Sticker N Blue",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Papers",
        image: "https://inkarto.com/cdn/shop/files/a4-glitter-foam-sheet-with-sticker-n-blue-glitter-paper-foam-sheet-41454741913813.JPG?v=1760271434&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/a4-glitter-foam-sheet-with-sticker-n-blue-glitter-paper-foam-sheet-41459568541909.JPG?v=1760271436&width=713"
    },
    {
        id: 75,
        title: "A4 Glitter Foam Sheet With Stick L Purple 26164LPE",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Papers",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-glitter-paper-foam-sheet-a4-glitter-foam-sheet-with-stick-l-purple-26164lpe-41142698672341.JPG?v=1760946518&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-glitter-paper-foam-sheet-a4-glitter-foam-sheet-with-stick-l-purple-26164lpe-41142846423253.JPG?v=1760946520&width=713"
    },
    {
        id: 76,
        title: "A4 Glitter Foam Sheet With Sticker B Pink 26164BPK",
        price: Math.floor(Math.random() * 2000) + 500,
        category: "Papers",
        rating: (Math.random() + 4).toFixed(1),
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-glitter-paper-foam-sheet-a4-glitter-foam-sheet-with-sticker-b-pink-26164bpk-41142697853141.JPG?v=1760946485&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-glitter-paper-foam-sheet-a4-glitter-foam-sheet-with-sticker-b-pink-26164bpk-41142846193877.JPG?v=1760946488&width=713"
    },
    {
        id: 77,
        title: "A4 Glitter Foam Sheet With Sticker Red 26164RD",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Papers",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-glitter-paper-foam-sheet-a4-glitter-foam-sheet-with-sticker-red-26164rd-41142699098325.JPG?v=1760946507&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-glitter-paper-foam-sheet-a4-glitter-foam-sheet-with-sticker-red-26164rd-41142846488789.JPG?v=1760946510&width=713"
    },
    {
        id: 78,
        title: "A4 Glitter Foam Sheet With Sticker Purple 26164PE",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Papers",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-foam-mount-cork-sheet-a4-glitter-foam-sheet-with-sticker-purple-26164pe-41188976099541.JPG?v=1760288942&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-foam-sheet-glitter-with-sticke-a4-glitter-foam-sheet-with-sticker-purple-26164pe-41189654003925.JPG?v=1760288944&width=713"
    },
    {
        id: 79,
        title: "A3 Glitter Foam Sheet With S Multi 10Shee 71815-A3",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Papers",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-1-foam-mount-cork-sheet-a3-glitter-foam-sheet-with-s-multi-10shee-71815-a3-41189060411605.JPG?v=1760288947&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-1-foam-sheet-glitter-with-sticke-a3-glitter-foam-sheet-with-s-multi-10shee-71815-a3-41189478334677.JPG?v=1760288948&width=713"
    },
    {
        id: 80,
        title: "A4 Foam Sheet Without Sticker Blue 8198BL",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Papers",
        image: "https://inkarto.com/cdn/shop/files/jags-mumbai-foam-mount-cork-sheet-a4-foam-sheet-without-sticker-blue-8198bl-41189129093333.JPG?v=1760288934&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-foam-sheet-a4-foam-sheet-without-sticker-blue-8198bl-41189729009877.JPG?v=1760288935&width=713"
    },


    /*Resin Art*/
    {
        id: 83,
        title: "Combo Offer 8 Packets (48 Sheets) flower Sheet stickers...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Resin Art",
        image: "https://inkarto.com/cdn/shop/files/WhatsAppImage2024-06-28at12.22.28PM.jpg?v=1769757346&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/WhatsAppImage2024-06-28at12.22.24PM_2.jpg?v=1762070682&width=713"
    },
    {
        id: 84,
        title: "Natural dried flower like Sheet stickers for Journaling ",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Resin Art",
        image: "https://inkarto.com/cdn/shop/files/Untitleddesign_34_0ff03c25-3a6d-4289-b23a-2e18a30334b8.jpg?v=1760298089&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/WhatsAppImage2024-06-28at12.22.28PM.jpg?v=1769757346&width=713"
    },
    {
        id: 85,
        title: "Pipe Cleaner glitter edition for Christmas decoration ...",
        price: Math.floor(Math.random() * 2000) + 500,
        category: "Resin Art",
        rating: (Math.random() + 4).toFixed(1),
        image: "https://inkarto.com/cdn/shop/files/PG100M.jpg?v=1760296218&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitleddesign-2025-11-10T104027.788.jpg?v=1767937229&width=713"
    },
    {
        id: 86,
        title: "Pressed Dry Flowers for Resin Art & Crafts (Pack of 1)",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Resin Art",
        image: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-01-07T161020.096.jpg?v=1767941083&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-01-07T161534.185.jpg?v=1767941083&width=713"
    },
    {
        id: 87,
        title: "(Buy 1 Packet Get 1 Packet Free) Resin pigment/ Ink dropper...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Resin Art",
        image: "https://inkarto.com/cdn/shop/files/286236A6-3284-4ED2-8716-503732D05461.webp?v=1760312392&width=1946",
        hoverImage: "https://inkarto.com/cdn/shop/files/jags-mumbai-resin-pigment-resin-pigment-ink-dropper-pack-of-5-41166069498069.JPG?v=1760312393&width=713"
    },
    {
        id: 88,
        title: "Cute Star Silicon Mould for resin l Pack of 1 mould",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Resin Art",
        image: "https://inkarto.com/cdn/shop/files/WhatsAppImage2026-02-09at5.57.29PM_1.jpg?v=1770640153&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/WhatsAppImage2026-02-09at5.57.29PM.jpg?v=1770640153&width=713"
    },
    {
        id: 89,
        title: "Candle & Resin Silicone Mould Flower With Petal ...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Resin Art",
        image: "https://inkarto.com/cdn/shop/files/JSM168.jpg?v=1760946994&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/JSM168_1.jpg?v=1760946995&width=713"
    },


    /*Jewelry Making*/
    {
        id: 90,
        title: "Key Ring With Hook Multicolor 1.6X30Mm",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Jewelry Making",
        image: "https://inkarto.com/cdn/shop/files/mg-traders-chains-hooks-krh3m-key-ring-with-hook-3pc-multi-1-6x30mm-41328320250069.jpg?v=1760299528&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitleddesign-2025-10-29T162651.387.jpg?v=1762538857&width=713"
    },
    {
        id: 91,
        title: "Clasp Thread 65mm | Thread Spool Clips for Sewing & Craft ...",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Jewelry Making",
        image: "https://inkarto.com/cdn/shop/files/WhatsApp_Image_2026-04-09_at_12.33.40_PM.jpg?v=1775718256&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/WhatsApp_Image_2026-04-09_at_12.20.24_PM.jpg?v=1775718256&width=713"
    },
    {
        id: 92,
        title: "Colorful Tassel Charms – DIY Jewelry Making, Earrings & Craft ...",
        price: Math.floor(Math.random() * 2000) + 500,
        category: "Jewelry Making",
        rating: (Math.random() + 4).toFixed(1),
        image: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2026-04-18T132122.557.jpg?v=1776498727&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/ravrai-craft-mumbai-branch-pendant-tassel1-diy-craft-tassels-for-keychains-12pcs-41067132059861_2463b66d-eca9-41e1-b3e2-225d1f6d5eef.jpg?v=1776498727&width=713"
    },
    {
        id: 93,
        title: "Gold heart Chain (100cm) pack of 1",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Jewelry Making",
        image: "https://inkarto.com/cdn/shop/files/mg-traders-chains-hooks-bss13-ss-chain-100cm-41328251797717.jpg?v=1760292757&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/Untitled_design_97_fec2c0e2-9ff1-4a28-9572-fdc20b4f6023.jpg?v=1768813671&width=713"
    },
    {
        id: 94,
        title: "Copper Mix Shape Bezels 10pc for Resin Art ( pack of 1)",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Jewelry Making",
        image: "https://inkarto.com/cdn/shop/files/Untitled_design_-_2025-12-24T173958.361.jpg?v=1767941525&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/H59bd396446b748e2bd381a0e10fe7075t.jpg_250x250_c1f764df-7d6f-480b-925c-aa054179d038.avif?v=1766578242"
    },
    {
        id: 95,
        title: "Chain 100Cm Code Bss20 Ss",
        price: Math.floor(Math.random() * 2000) + 500,
        rating: (Math.random() + 4).toFixed(1),
        category: "Jewelry Making",
        image: "https://inkarto.com/cdn/shop/files/mg-traders-chains-hooks-bss20-ss-chain-100cm-41328252715221.jpg?v=1760932768&width=713",
        hoverImage: "https://inkarto.com/cdn/shop/files/mg-traders-1-jewellery-bss20-ss-chain-100cm-41328552673493.jpg?v=1760932769&width=713"
    },


];



const firstProductsRender = document.getElementById("first-products-render");
const secondProductsRender = document.getElementById("second-products-render");
const thirdProductsRender = document.getElementById("thrid-products-render");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const CartCount = document.getElementById("cart-count");
const WishlistCount = document.getElementById("whishlist-count");
const searchInput = document.getElementById("searchInput");
const searchProductsRender = document.getElementById("search-products-render");
const searchTitle = document.getElementById("search-title");
const productsSections = document.getElementById("products-sections");
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const popupCloseBtn = document.getElementById("popup-close-btn")
const cartItemsList = document.getElementById("cart-items-list")
const subTotal = document.getElementById("cart-subtotal")
const cartTotal = document.getElementById("cart-total")
const cartButton = document.getElementById("addto-cart-btn")
const wishListPopupCloseBtn = document.getElementById("second-popup-close-btn")
const whishListItemsList = document.getElementById("second-cart-items-list")
const wishButton = document.getElementById("addto-wishlist-btn")
const viewBtn1 = document.getElementById("view-all-btn1");
const viewBtn2 = document.getElementById("view-all-btn2");
const viewBtn3 = document.getElementById("view-all-btn3");

const categoryLinks = document.querySelectorAll("[data-category]");

const randomProducts = [...productItems].sort(() => Math.random() - 0.5);



function renderProducts(products, container, button = null, visibleCount = products.length) {

    container.innerHTML = "";

    products.slice(0, visibleCount).forEach(item => {

        container.innerHTML += `
        <div class="products-card">

            <div class="image-box">
                <img src="${item.image}" class="main-img">
                <img src="${item.hoverImage}" class="hover-img">

                <button class="wishlist-btn" onclick="AddToWishlist(${item.id})">
                    <i class="fa-regular fa-heart" onclick="AddToWishlist(${item.id})"></i>
                    <span class="whishlist-tooltip">Wishlist</span>
                </button>

                <button class="quickview-btn">
                    <i class="fa-solid fa-eye"></i>
                    <span class="quickview-tooltip">Quick View</span>
                </button>
            </div>

            <div class="products-card-body">
                <h3 class="products-card-name">${item.title}</h3>

                <div class="products-card-info">
                    <span class="price">₹${item.price}.00</span>
                    <span class="rating">⭐ ${item.rating}</span>
                </div>

                <button class="btn-add" onclick="AddToCart(${item.id})">
                    Add to Cart
                </button>
            </div>

        </div>
        `;
    });

    if (button) {

        if (visibleCount >= products.length) {
            button.style.display = "none";
        } else {
            button.style.display = "block";
        }

    }
}


renderProducts(
    randomProducts,
    firstProductsRender,
    viewBtn1,
    8
);

renderProducts(
    randomProducts,
    secondProductsRender,
    viewBtn2,
    8
);

renderProducts(
    randomProducts,
    thirdProductsRender,
    viewBtn3,
    8
);


viewBtn1.addEventListener("click", () => {

    renderProducts(
        randomProducts,
        firstProductsRender,
        viewBtn1,
        randomProducts.length
    );

});

viewBtn2.addEventListener("click", () => {

    renderProducts(
        randomProducts,
        secondProductsRender,
        viewBtn2,
        randomProducts.length
    );

});

viewBtn3.addEventListener("click", () => {

    renderProducts(
        randomProducts,
        thirdProductsRender,
        viewBtn3,
        randomProducts.length
    );

});


searchInput.addEventListener("input", () => {

    const inputValue = searchInput.value.toLowerCase().trim();

    if (inputValue === "") {

        searchProductsRender.innerHTML = "";
        searchTitle.style.display = "none";

        productsSections.style.display = "block";

        renderProducts(randomProducts.slice(0, 6), firstProductsRender, viewBtn1, 6);
        renderProducts(randomProducts.slice(6, 12), secondProductsRender, viewBtn2, 6);
        renderProducts(randomProducts.slice(12, 18), thirdProductsRender, viewBtn3, 6);

        return;
    }

    productsSections.style.display = "none";

    const filteredProducts = productItems.filter(item =>
        item.title.toLowerCase().includes(inputValue) ||
        item.category.toLowerCase().includes(inputValue)
    );

    searchTitle.style.display = "block";

    renderProducts(
        filteredProducts,
        searchProductsRender,
        null,
        filteredProducts.length
    );

});

categoryLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const category = this.dataset.category;

        const filteredProducts = productItems.filter(product =>
            product.category === category
        );

        productsSections.style.display = "none";

        searchTitle.style.display = "block";
        searchTitle.innerHTML = category;

        renderProducts(
            filteredProducts,
            searchProductsRender,
            null,
            filteredProducts.length
        );

    });

});

themeToggle.onclick = () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('paperVerseTheme', isDark ? 'dark' : 'light');
    themeIcon.src = isDark ? "https://img.icons8.com/ios-glyphs/24/sun.png" : "https://img.icons8.com/ios-glyphs/24/moon.png";
};

function checkTheme() {
    const saved = localStorage.getItem('paperVerseTheme');
    if (saved === 'dark') {
        document.body.classList.add('dark-mode')
        themeIcon.src = "https://img.icons8.com/ios-glyphs/24/sun.png";
    }
}
checkTheme()

cartButton.addEventListener("click", () => {

    document.querySelector(".popup-overlay").style.display = "block";
    document.querySelector(".popup-box").style.display = "flex";

    document.body.style.overflow = "hidden";

});

popupCloseBtn.addEventListener("click", () => {

    document.querySelector(".popup-overlay").style.display = "none";
    document.querySelector(".popup-box").style.display = "none";

    document.body.style.overflow = "auto";

});
wishButton.addEventListener("click", () => {

    document.querySelector(".second-popup-overlay").style.display = "block";
    document.querySelector(".second-popup-box").style.display = "flex";

     document.body.style.overflow = "hidden";

});

wishListPopupCloseBtn.addEventListener("click", () => {

    document.querySelector(".second-popup-overlay").style.display = "none";
    document.querySelector(".second-popup-box").style.display = "none";

    document.body.style.overflow = "auto";

});

let cartCount = 0;
let wishlistCount = 0;

function AddToCart(id) {

    const product = productItems.find(item => item.id === id);

    const existingProduct = cartBox.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity++;
    }
    else {
        cartBox.push({
            ...product,
            quantity: 1
        });
    }

    cartCount++;
    CartCount.textContent = cartCount;

    renderCart()
}

function renderCart() {

    cartItemsList.innerHTML = "";

    let subtotal = 0;

    cartBox.forEach(product => {

        if (!product.quantity) {
            product.quantity = 1;
        }

        subtotal += product.price * product.quantity;

        cartItemsList.innerHTML += `
        <div class="cart-item">

            <div class="cart-left">
                <img src="${product.image}" width="70" height="70">
                <h4>${product.title}</h4>
            </div>

            <div class="cart-right">

                <div class="quantity-box">

                    <button onclick="decrementQuantity(${product.id})">-</button>

                    <span>${product.quantity}</span>

                    <button onclick="incrementQuantity(${product.id})">+</button>

                </div>

                <button class="removeCartProduct"
                        onclick="removeCartProductFunction(${product.id})">
                    Remove
                </button>

            </div>

        </div>
        `;
    });

    subTotal.textContent = `₹${subtotal}`;
    cartTotal.textContent = `₹${subtotal + 40}`;

    CartCount.textContent = cartBox.length;
}

function incrementQuantity(id) {

    const product = cartBox.find(item => item.id === id);

    product.quantity++;

    renderCart();
}

function decrementQuantity(id) {

    const product = cartBox.find(item => item.id === id);

    if (product.quantity > 1) {
        product.quantity--;
    }

    renderCart();
}

function removeCartProductFunction(id) {

    cartBox = cartBox.filter(item => item.id !== id);

    cartCount = cartBox.length;

    CartCount.textContent = cartCount;

    renderCart();
}


function AddToWishlist(id) {

     const product = productItems.find(item => item.id === id);

    const existingProduct = wishListBox.find(item => item.id === id);

    if (existingProduct) return;

    wishListBox.push(product);

    WishlistCount.textContent = wishListBox.length;

    renderWishList();
}
function renderWishList() {

    whishListItemsList.innerHTML = "";

    if (wishListBox.length === 0) {

        whishListItemsList.innerHTML = `
            <div class="wishlist-empty">
                ❤️ Your Wishlist is Empty
            </div>
        `;

        WishlistCount.textContent = 0;
        return;
    }

    wishListBox.forEach(product => {

        whishListItemsList.innerHTML += `

        <div class="pw-products-card">

            <div class="pw-image-box">
                <img src="${product.image}" class="pw-main-img">
            </div>

            <div class="pw-products-card-body">

                <h3>${product.title}</h3>

                <div class="pw-products-card-info">
                    <span>₹${product.price}</span>
                    <span>⭐ ${product.rating}</span>
                </div>

            </div>

            <button
                class="pw-btn-remove"
                onclick="removeWishProduct(${product.id})">
                Remove
            </button>

        </div>

        `;
    });

    WishlistCount.textContent = wishListBox.length;
}



function removeWishProduct(id){

    wishListBox = wishListBox.filter(product => product.id !== id);

    renderWishList();

}
menuBtn.addEventListener("click", () => {
    

    mobileMenu.classList.toggle("active");

    if (!mobileMenu.classList.contains("active")) {
        document.querySelectorAll(".navbar-inner-ul").forEach(menu => {
            menu.classList.remove("active");
        });
    }
});

document.querySelectorAll(".navbar-inner-ul a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.stopPropagation();

        mobileMenu.classList.remove("active");

        document.querySelectorAll(".navbar-inner-ul").forEach(menu => {
            menu.classList.remove("active");
        });

    });

});




const parentLinks = document.querySelectorAll(".navbar-outer-li > a");

parentLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        if (window.innerWidth > 768) return;

        const submenu = this.nextElementSibling;

        if (!submenu) return;

        e.preventDefault();
        e.stopPropagation();   

        document.querySelectorAll(".navbar-inner-ul").forEach(menu => {
            if (menu !== submenu) {
                menu.classList.remove("active");
            }
        });

        submenu.classList.toggle("active");

    });

});