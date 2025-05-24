const INITIAL_WEAPON_CATALOG = [
    {
        id: 1,
        name: "Zangetsu (Ichigo's Sword)",
        anime: "Bleach",
        description: "Massive cleaver-like sword wielded by Ichigo Kurosaki",
        price: 1999.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS732U7iRHmTPAqJSSWxdCeiM6yaAGipl6JRQ&s"
    },
    {
        id: 2,
        name: "Excalibur (Fate Series)",
        anime: "Fate/Stay Night",
        description: "Legendary golden sword of King Arthur (Saber)",
        price: 2499.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRXL9-C2MOu1RpHe-1Fbb4LgvVRyo3-VyAg&s"
    },
    {
        id: 3,
        name: "Kirito's Elucidator",
        anime: "Sword Art Online",
        description: "One of Kirito's iconic black swords from the death game",
        price: 1799.99,
        image: "https://fireandsteel.ca/cdn/shop/files/JT6105-ZS9495C-Kirito_sElucidatorSwordFINAL-01.jpg?v=1736275726"
    },
    {
        id: 4,
        name: "Tessaiga",
        anime: "Inuyasha",
        description: "Powerful demon-slaying sword of Inuyasha",
        price: 1699.99,
        image: "https://maxm-imggenurl.web.val.run/inuyasha-tessaiga-sword"
    },
    {
        id: 5,
        name: "Zangetsu (Ichigo's Sword)",
        anime: "Bleach",
        price: 299.99,
        description: "Massive cleaver sword of Ichigo Kurosaki",
        image: "https://maxm-imggenurl.web.val.run/zangetsu-anime-sword"
    },
    {
        id: 6,
        name: "Demon Slayer Nichirin Blade",
        anime: "Demon Slayer",
        price: 249.99,
        description: "Color-changing sword used by Demon Slayer Corps",
        image: "https://maxm-imggenurl.web.val.run/nichirin-blade"
    },
    {
        id: 7,
        name: "Sasuke's Chokuto",
        anime: "Naruto",
        price: 279.99,
        description: "Legendary sword of Sasuke Uchiha",
        image: "https://maxm-imggenurl.web.val.run/sasuke-sword"
    },
    {
        id: 8,
        name: "Kirito's Elucidator",
        anime: "Sword Art Online",
        price: 269.99,
        description: "Black swordsman's iconic dark blade",
        image: "https://maxm-imggenurl.web.val.run/elucidator-sword"
    },
    {
        id: 9,
        name: "Tenseiga",
        anime: "Inuyasha",
        price: 329.99,
        description: "Healing sword of Sesshomaru",
        image: "https://maxm-imggenurl.web.val.run/tenseiga-sword"
    },
    {
        id: 10,
        name: "Murasame",
        anime: "Akame ga Kill",
        price: 259.99,
        description: "Legendary cursed blade that kills in one cut",
        image: "https://maxm-imggenurl.web.val.run/murasame-sword"
    },
    {
        id: 11,
        name: "Tessaiga",
        anime: "Inuyasha",
        price: 349.99,
        description: "Powerful demon-slaying sword",
        image: "https://maxm-imggenurl.web.val.run/tessaiga-sword"
    },
    {
        id: 12,
        name: "Samehada",
        anime: "Naruto",
        price: 289.99,
        description: "Living sword of Kisame Hoshigaki",
        image: "https://maxm-imggenurl.web.val.run/samehada-sword"
    },
    {
        id: 13,
        name: "Sword of Rupture (Ea)",
        anime: "Fate Series",
        price: 499.99,
        description: "Gilgamesh's ultimate Noble Phantasm",
        image: "https://maxm-imggenurl.web.val.run/ea-sword"
    }
];

// Render the App component into the DOM
function App() {
    const root = document.getElementById("root");

    root.innerHTML = `
       <div class="anime-weapon-store">
         <nav class="main-nav">
           <div class="nav-brand">
             <span class="brand-icon">🗡️</span> Anime Weapon Emporium
           </div>
           <div class="nav-links">
             <button class="nav-link active">🏠 Home</button>
             <button class="nav-link" id="sell">💰 Sell Weapon</button>
             <button class="nav-link" id="cart">🛒 Cart (0)</button>
           </div>
         </nav>
         <div class="home-page">
           <h2>🗡️ Latest Anime Weapons</h2>
           <div class="product-grid">
             ${INITIAL_WEAPON_CATALOG.map(
        (product) => `
                 <div class="product-card">
                   <img src="${product.image}" alt="${product.name}" />
                   <h3>${product.name}</h3>
                   <p>From ${product.anime}</p>
                   <p>${product.description}</p>
                   <div class="product-footer">
                     <span class="price">$${product.price.toFixed(2)}</span>
                     <button id="add">Add to Cart 🛒</button>
                   </div>
                 </div>
               `
    ).join("")}
           </div>
         </div>
       </div>
     `;

    document.getElementById("sell").addEventListener("click", () => {
        const sellPage = 'sell.html';
        window.open(sellPage, "_self");  // Opens the link in a new tab
    });
    document.getElementById("cart").addEventListener("click", () => {
      const sellPage = 'cart.html';
      window.open(sellPage, "_self");  // Opens the link in a new tab
    });
    const add = document.getElementById("add")
    add.addEventListener('click', () => {
      console.log("Add to cart clicked")
    })
    add.array.forEach(element => {
      console.log("Add clicked")
    });
}

App();