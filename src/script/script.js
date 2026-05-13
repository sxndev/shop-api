export async function getProducts() {
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(url);
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

    main.innerHTML = `
     <section id="welcome-section">
          <div id="welcome-mensage">
            <h2>Bem Vindo a </h2>
            <h2 id="shop-api-title">
            <span>
              <span class="letter-animation">g</span>
              <span class="letter-animation">o</span>
              <span class="letter-animation">l</span>
              <span class="letter-animation">d <br></span>
              <span class="letter-animation">S</span>
              <span class="letter-animation">h</span>
              <span class="letter-animation">o</span> 
              <span class="letter-animation">p</span> 
            </span>
            </h2>
            <h2>A sua mais nova loja favorita</h2>
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

    const mensClothingSelector = document.getElementById("mens-clothing-selector");
    mensClothingSelector.addEventListener("click", () => {
      listProducts.innerHTML = "";
      mensClothing.forEach((product) => {
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

    const womensClothingSelector = document.getElementById("womens-clothing-selector");
    womensClothingSelector.addEventListener("click", () => {
      listProducts.innerHTML = "";
      womensClothing.forEach((product) => {
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
    const jewelerySelector = document.getElementById("jewelery-selector");
    jewelerySelector.addEventListener("click", () => {
      listProducts.innerHTML = "";
      jewelery.forEach((product) => {
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

    const electronicsSelector = document.getElementById("electronics-selector");
    electronicsSelector.addEventListener("click", () => {
      listProducts.innerHTML = "";

      eletronics.forEach((product) => {
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

    const allItemsSelector = document.getElementById("all-items");

    allItemsSelector.addEventListener("click", () => {
      listProducts.innerHTML = "";
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
    });

    async function getSingleProduct(id) {
      const url = `https://fakestoreapi.com/products/${id}`
      const response = await fetch(url)
      const product = await response.json()

      main.innerHTML = ""

      main.innerHTML = `
      
        <section id="">
        
        </section>

      `

      console.log(product)
    }

    const buttons = document.querySelectorAll('.product-btn') 
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        getSingleProduct(index + 1)
      })
    })  
     
  } catch (error) {
    main.innerHTML = ` 
    <div class="mensage">
    <p>Não foi possível buscar os produtos</p> 
    <button onclick="getProducts()"> Tente Novamente</button>
    </div>
    `;
    console.log(error);
  }
}


const main = document.getElementById("main");

main.innerHTML += `
  <div class="loading ">
  <p>Carregando produtos...</p>
  </div>
`;



getProducts(); 