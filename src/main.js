let shop = document.getElementById("shop");

let shopItemData = [
  {
    id: "1",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit architecto, culpa illum autem iste nihil",
    img: "images/image1.png",
  },
  {
    id: "2",
    name: "Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit architecto, culpa illum autem iste nihil",
    img: "images/image2.png",
  },
  {
    id: "3",
    name: "blue Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit architecto, culpa illum autem iste nihil",
    img: "images/image3.png",
  },
  {
    id: "4",
    name: "Checked Shirt",
    price: 34,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit architecto, culpa illum autem iste nihil",
    img: "images/image4.png",
  },
];

let generateShop = () => {
  return (shop.innerHTML = shopItemData
    .map((e) => {
      let { id, name, price, desc, img } = e;
      return `<div id=product-id-${id} class="item">
    <img width="220" src=${img} alt="" />
    <div class="details">
      <h3>${name}</h3>
      <p>
        ${desc}
      </p>
      <div class="price-quantity">
        <h2>${price}</h2>
        <div class="button">
          <i class="bi bi-dash-lg"></i>
          <div class="quantity">0</div>
          <i class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join(""));
};

generateShop();
