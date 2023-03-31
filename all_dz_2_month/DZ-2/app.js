const Starbucks = {  coffee: {
        americano: "Классический кофе на основе эспрессо с большим количеством горячей воды",    latte: "Кофе с молоком",
        cappuccino: "Классический кофе на основе эспрессо с добавлением молочной пены",  },
    tea: {
        black: "Черный чай",    green: "Зеленый чай",
        herbal: "Травяной чай",  },
};
function takeOrder(item) {  const order = item.toLowerCase();
    let message = "";
    if (Starbucks.coffee[order]) {message = "Ваш заказ ${order}. ${Starbucks.coffee[order]}";
    } else if (Starbucks.tea[order]) {message = "Ваш заказ ${order}. ${Starbucks.tea[order]}";
    } else {message = "Извините, мы не предлагаем напиток ${order}";
    }
    console.log(message);}
