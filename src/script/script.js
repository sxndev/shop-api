// const listProducts = document.getElementById("products-list");
const listProducts = document.getElementById('products-list');
const apiStatus = document.getElementById("status");
const main = document.getElementById("main");

// apiStatus.innerHTML += `<p class="loading">Carregando produtos... <br> </p>`;

async function getAPiInfo() {
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

    // console.log(mensClothing[0])
    products.forEach((product) => {
      listProducts.innerHTML += `          
            <li class="product">
                <img src="${product.image}" alt="Product Image" class="product-img"> 
                <div class="product-info">
                  <h2 class="product-name">${product.title}</h2>
                  <a href="">Ver</a>   
                </div>    
            </li>`;
    });
  } catch (error) {
    console.log(error);
  }
}

getAPiInfo();
