import "./styles.css";
import axios from "axios";
import _ from "lodash";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    // Firstly, log response to the console,
    // inspect the response and see that it has data field
      console.log(response)

    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const { data: products } = response;

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    products.forEach(product => console.log(product.name))

    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const mappedProducts = _.filter(products, p => p.description.includes("Şal"))
        .map(p => ({ name: p.name, image: p.image }));

    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
    document.body.style.cssText = "padding: 25px 150px;display:flex;flex-wrap:wrap;column-gap:32px"
    mappedProducts.forEach(product => {
        const divElement = document.createElement("div")
        divElement.style.cssText = "display:flex;flex-direction:column;align-content:center;gap:24px;height:500px;width:250px";
        const imgElement = document.createElement("img")
        const spanElement = document.createElement("span")

        imgElement.src = product.image;
        imgElement.setAttribute("alt", product.name);

        spanElement.innerText = product.name;

        divElement.appendChild(imgElement)
        divElement.appendChild(spanElement)

        document.body.appendChild(divElement)
    });
  });
