let shop = document.getElementById("shop");

let shopItemData = [
  {
    id: "liegjljwehg",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit architecto, culpa illum autem iste nihil",
    img: "images/image1.png",
  },
  {
    id: "lkvnlJ",
    name: "Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit architecto, culpa illum autem iste nihil",
    img: "images/image2.png",
  },
  {
    id: "KLFNLKvnj",
    name: "blue Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit architecto, culpa illum autem iste nihil",
    img: "images/image3.png",
  },
  {
    id: "djnawjghj",
    name: "Checked Shirt",
    price: 34,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit architecto, culpa illum autem iste nihil",
    img: "images/image4.png",
  },
];

let basket = [];

let generateShop = () => {
  return (shop.innerHTML = shopItemData
    .map((x) => {
      let { id, name, price, desc, img } = x;
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
          <i onclick = "decrement(${id})" class="bi bi-dash-lg"></i>
          <div id=${id} class="quantity">0</div>
          <i onclick = "increment(${id})" class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(selectedItem.id);
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  // console.log(basket);
  update(selectedItem.id);
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  console.log(search);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  console.log("calculation");
};
