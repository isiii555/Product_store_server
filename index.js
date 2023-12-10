const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const HOST = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

let goods = [
  {
    product_name: "Kişi köynəyi",
    product_description: "Mavi rəngdə, 100% pamuk",
    product_price: 50,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın bluzası",
    product_description: "Dəri detallı, qara rəngdə",
    product_price: 60,
    product_img : "https://ae01.alicdn.com/kf/HTB1G.9haTnI8KJjy0Ffq6AdoVXar/Plus-Size-vetement-Fashion-Style-Women-Clothes-Blouse-Long-Sleeves-Casual-Denim-Shirt-Nostalgic-Vintage-Blue.jpg",
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Kişi pantolonu",
    product_description: "Qəhvəyi rəng, kənar cebi",
    product_price: 75,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın eteyi",
    product_description: "Qırmızı rəng, mini",
    product_price: 40,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Kişi dəsmalı",
    product_description: "Nəqşdar dizayn",
    product_price: 20,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın çantası",
    product_description: "Əlgötürən, dəri",
    product_price: 90,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Kişi botları",
    product_description: "Qış üçün, suya davamlı",
    product_price: 120,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın ayaqqabıları",
    product_description: "Yüksək tapan, lacivərt",
    product_price: 85,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Kişi papağı",
    product_description: "Qara rəngdə, dəri",
    product_price: 45,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın şalvarı",
    product_description: "Göy rəngdə, kaşmir",
    product_price: 70,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Kişi palto",
    product_description: "Süət dəri, qara rəngdə",
    product_price: 250,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Qadın jaketi",
    product_description: "Uzun, qaşqır",
    product_price: 200,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Kişi kəməri",
    product_description: "Dəri, metal tokalı",
    product_price: 40,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Qadın badlonu",
    product_description: "Retro stil, qızıl rəngdə",
    product_price: 180,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Kişi şortu",
    product_description: "Spor stil, elastik",
    product_price: 60,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Qadın maykası",
    product_description: "Boyalı nəqş, pamuklu",
    product_price: 45,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Kişi saatı",
    product_description: "Qara rəngdə, analog",
    product_price: 150,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Qadın bəzək",
    product_description: "Qızıl, komplekt",
    product_price: 220,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi atkısı",
    product_description: "Xəzəl rəng, uzun",
    product_price: 35,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın bantı",
    product_description: "Metal detallı, elastik",
    product_price: 50,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi kostyumu",
    product_description: "İki parçalı, qara rəngdə",
    product_price: 320,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın kombinezonu",
    product_description: "Yaz üçün, açıq rəng",
    product_price: 150,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi sviteri",
    product_description: "Düz rəng, yüngül",
    product_price: 70,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın ziyafət geyimi",
    product_description: "Düzənşən, yaz üçün",
    product_price: 95,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi sport formaları",
    product_description: "Spandex, idman üçün",
    product_price: 55,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın bikini",
    product_description: "Tropik nəqş, elastik",
    product_price: 45,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi çantası",
    product_description: "Dizayner, əsas bölməsi",
    product_price: 100,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın ətri",
    product_description: "Gül ətri, uzunömürlü",
    product_price: 80,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi şalı",
    product_description: "Səliqəli, çoxrəngli",
    product_price: 25,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın sutyeni",
    product_description: "Destəklənmiş, rahat",
    product_price: 65,
    product_img : "https://emart.az/image/cache/catalog/i/hp/eb/25b1d80d89ec6e079ed2d18afb066d99-1000x1000.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
];

let myBag = [];
let orders = [];

let i = 1;
goods = goods.map((item) => {
  let obj = { ...item, id: i++ };
  return obj;
});

app.get("/goods", (req, res) => {
  res.json(goods);
});

app.get("/my-bag", (req, res) => {
  res.json(myBag);
});

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.post("/add-mybag", (req, res) => {
  let obj = req.body;
  let arr = myBag.filter((product) => product.id === obj.id);
  if (arr.length) {
    let newObj = arr.find(product => product.id === obj.id);
    newObj.product_quantity += 1;
  }
  else {
    myBag.push({...obj,product_quantity : arr.length + 1})
  }
  res.send(`Element with ${obj.product_name} is added to bag`);
});

app.post("/add-orders", (req, res) => {
  let obj = req.body;
  obj = {...obj,id : orders.length + 1};
  orders.push(obj);
  res.send(`Orders of ${obj.ordererName} is added orders`);
});

app.delete("/delete-mybag/:id", (req, res) => {
  let id = parseInt(req.params.id);
  myBag = myBag.filter((item) => id !== item.id);
  res.send(
    `Element with ${
      myBag.find((item) => id === item.id).product_name
    } is deleted from bag`
  );
});

app.delete("/delete-mybag-quantity/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let obj = myBag.find(product => product.id === id);
  if (obj.product_quantity > 1) {
    obj.product_quantity -= 1;
  }
  res.send("Request is ready!");
});

app.delete("/clear-mybag", (req, res) => {
  myBag = [];
  res.send("Bag is cleared");
});

app.delete("/delete-admin/:id", (req, res) => {
  let id = parseInt(req.params.id);
  goods = goods.filter((item) => id !== item.id);
  res.send(
    `Element ${
      goods.find((item) => id === item.id).product_name
    } is deleted from goods`
  );
});

app.post("/add-admin", (req, res) => {
  let obj = req.body;
  goods.push(obj);
  res.send(`Element with ${obj.product_name} is added to goods`);
});

app.put("/change-admin/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let index = goods.findIndex((item) => id === item.id);
  goods[index] = req.body;
  res.send(`Element ${req.body.product_name} is changed`);
});

app.get("/search-goods/:searchValue", (req, res) => {
  let searchValue = req.params.searchValue;
  console.log(searchValue);
  let filteredArray = myBag.filter((item) =>
      item.product_name.toLocaleLowerCase("AZ").startsWith(searchValue.toLocaleLowerCase("AZ"))
  );
  res.json(filteredArray);
});

app.get("/search-admin/:searchValue", (req, res) => {
  let searchValue = req.params.searchValue;
  console.log(searchValue);
  let filteredArray = goods.filter((item) =>
    item.product_name.toLocaleLowerCase("AZ").startsWith(searchValue.toLocaleLowerCase("AZ"))
  );
  console.log(filteredArray);
  res.json(filteredArray);
});

app.listen(HOST, () => {
  console.log(HOST + " OK");
});
