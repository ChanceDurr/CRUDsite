const toppings = {
    "meats": [
        "pepperoni", "ham", "sausage", "beef",
        "bacon", "chicken", "philly steak",
        "sandwich salami"
    ],
    "vegetables": [
        "mushroom", "onion", "green pepper", "black olive",
        "pinapple", "red pepper", "spinach", "jalapeno",
        "diced tomato", "banana pepper"
    ],
    "sauces": [
        "original sauce", "garlic parmesan sauce", "honey bbq sauce",
        "hot buffalo sauce", "sandwich ranch dressing", "marinara sauce",
        "alfredo sauce", "mango habanero", "ketchup mustard sauce"
    ],
    "cheeses": [
        "pizza cheese", "feta cheese", "shredded parmesan asiago",
        "sandwich provolone sliced", "american cheese",
        "shredded provolone", "cheddar cheese"
    ]
};

const sizes = ["10", "12", "14"]

$('#sauce_choices').html(
    $.map(toppings.sauces, function(val,i) {
        return $('<div/>', { class: 'form-check form-check-inline' }).html([
            $('<input/>', { class: "btn-check", type: "checkbox", id: "sauceCheckbox"+i, value: val }),
            $('<label/>', { class: "btn btn-primary topping", for: "sauceCheckBox"+i }).text(val)]
        )
      
    })
);

$('#cheese_choices').html(
    $.map(toppings.cheeses, function(val,i) {
        return $('<div/>', { class: 'form-check form-check-inline' }).html([
            $('<input/>', { class: "btn-check", type: "checkbox", id: "cheeseCheckbox"+i, value: val }),
            $('<label/>', { class: "btn btn-primary topping", for: "cheeseCheckBox"+i }).text(val)]
        )
      
    })
);

$('#meat_choices').html(
    $.map(toppings.meats, function(val,i) {
        return $('<div/>', { class: 'form-check form-check-inline' }).html([
            $('<input/>', { class: "btn-check", type: "checkbox", id: "meatCheckbox"+i, value: val }).text(val),
            $('<label/>', { class: "btn btn-primary topping", for: "meatCheckBox"+i }).text(val)]
        )
      
    })
);

$('#vegetable_choices').html(
    $.map(toppings.vegetables, function(val,i) {
        return $('<div/>', { class: 'form-check form-check-inline' }).html([
            $('<input/>', { class: "btn-check", type: "checkbox", id: "vegetableCheckbox"+i, value: val }).text(val),
            $('<label/>', { class: "btn btn-primary topping", for: "vegetableCheckBox"+i }).text(val)]
        )
      
    })
);
