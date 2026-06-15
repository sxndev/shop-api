async function getProducts() {
  const url = "https://fakestoreapi.com/products";

  try {
    const response = await fetch(url);
    
    if(!response.ok) throw new Error()
    
    
    const products = await response.json();

    const mensClothing = products.filter(
      (product) => product.category === "men's clothing",
    );

    const womensClothing = products.filter(
      (product) => product.category === "women's clothing",
    );

    const jewelery = products.filter(
      (product) => product.category === "jewelery",
    );
    const eletronics = products.filter(
      (product) => product.category === "electronics",
    );
    const allProducts = products;

    main.innerHTML = `
    <section id="welcome-section">
          <div id="welcome-mensage">
            <h2>Bem Vindo a </h2>
            <h3 id="gold-shop-title">
            Gold Shop
            </h3>
            <h2>A sua mais nova loja favorita.</h2>
          </div>
      </section>
      <ul id="products-list"></ul>`;

    const categoriesList = document.getElementById("categories-list");
    const categoriesBtn = document.getElementById("categories-btn");
    const listProducts = document.getElementById("products-list");

     products.forEach((product) => {
      listProducts.innerHTML += `
            <li class="product">
                <img src="${product.image}" alt="Product Image" class="product-img"> 
                <div class="product-info">
                  <h2 class="product-name">${product.title}</h2>
                  <div class="product-rate"> 
                    <p> ${product.rating.rate} ★</p>
                  <button class="product-btn">Ver</button>   
                  </div>
                </div>    
            </li>`;
    });

    categoriesBtn.addEventListener("click", () => {
      categoriesList.classList.toggle("active");
    });

    const mensClothingSelector = document.getElementById(
      "mens-clothing-selector",
    );
    const womensClothingSelector = document.getElementById(
      "womens-clothing-selector",
    );
    const jewelerySelector = document.getElementById("jewelery-selector");
    const electronicsSelector = document.getElementById("electronics-selector");
    const allItemsSelector = document.getElementById("all-items");

    const menuOptions = [
      mensClothingSelector,
      womensClothingSelector,
      jewelerySelector,
      electronicsSelector,
      allItemsSelector,
    ];

    const categories = [
      mensClothing,
      womensClothing,
      jewelery,
      eletronics,
      allProducts,
    ];

    menuOptions.forEach((option, index) => {
      option.addEventListener("click", () => {
        listProducts.innerHTML = ''
        const selected = categories[index];
        selected.forEach((product) => {
          listProducts.innerHTML += `          
            <li class="product">
                <img src="${product.image}" alt="Product Image" class="product-img"> 
                <div class="product-info">
                  <h2 class="product-name">${product.title}</h2>
                  <div class="product-rate"> 
                    <p> ${product.rating.rate} ★</p>
                  <button class="product-btn">Ver</button>   
                  </div>
                </div>    
            </li>`;
        });
      });
    });
    
  } catch (error) {
    main.innerHTML = ` 
    <div class="mensage">
    <p>Não foi possível buscar os produtos</p> 
    <button id="try-again-btn" > Tente Novamente</button>
    </div>
    `;
    console.log(error);
    const tryAgainBtn = document.getElementById("try-again-btn");
    tryAgainBtn.addEventListener('click', () => {
      main.innerHTML = loadMensage
      getProducts()
    })
  }
}

const main = document.getElementById("main");
const loadMensage = `<div class="loading ">
  <p>Carregando produtos...</p>
  </div>`


  main.innerHTML = loadMensage;

getProducts();
