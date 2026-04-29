const listProducts = document.getElementById("products-list");
const status = document.getElementById("status");

status.innerHTML += `<p class="loading">Carregando produtos... <br> </p>`;
async function getAPiInfo() {
  const url = "https://fakestoreapi.com/products";
  
  try { 
    const response = await fetch(url);
    const products = await response.json();

    const mensClothing =  products.filter(
      (product) => product.category === "men's clothing",
    );
    const womensClothing =  products.filter(
      (product) => product.category === "women's clothing",
    );
    const jewelery =  products.filter(
      (product) => product.category === "jewelery",   
    );
    const eletronics =  products.filter(
      (product) => product.category === "electronics",
    );
    status.innerHTML = ""; 
     products.forEach((product) => {
      listProducts.innerHTML += `          
            <li class="product">
                <img src="${product.image}" alt="Product Image" class="product-img"> 
                <div class="product-info">
                    <h2 class="product-name">${product.title}</h2>
                    <p class="product-price">R$${product.price}</p>
                </div>   
            </li>`;
    });
  } catch (error) {
    main.innerHTML = `<p class="error">Ocorreu um erro ao carregar os produtos.<br> Por favor, tente novamente mais tarde. <br>😥</p>`;
    console.log(error);
  }
}

getAPiInfo();
 