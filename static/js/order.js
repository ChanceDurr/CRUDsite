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
            $('<input/>', { class: "btn-check", type: "checkbox", autocomplete: "off", id: "sauceCheckbox"+i, value: val }),
            $('<label/>', { class: "btn btn-outline-primary titleCase", for: "sauceCheckBox"+i }).text(val)]
        )
      
    })
);

$('#cheese_choices').html(
    $.map(toppings.cheeses, function(val,i) {
        return $('<div/>', { class: 'form-check form-check-inline' }).html([
            $('<input/>', { class: "btn-check", type: "checkbox", autocomplete: "off", id: "cheeseCheckbox"+i, value: val }),
            $('<label/>', { class: "btn btn-outline-primary titleCase", for: "cheeseCheckBox"+i }).text(val)]
        )
      
    })
);

$('#meat_choices').html(
    $.map(toppings.meats, function(val,i) {
        return $('<div/>', { class: 'form-check form-check-inline' }).html([
            $('<input/>', { class: "btn-check", type: "checkbox", autocomplete: "off", id: "meatCheckbox"+i, value: val }),
            $('<label/>', { class: "btn btn-outline-primary titleCase", for: "meatCheckBox"+i }).text(val)]
        )
      
    })
);

$('#vegetable_choices').html(
    $.map(toppings.vegetables, function(val,i) {
        return $('<div/>', { class: 'form-check form-check-inline' }).html([
            $('<input/>', { class: "btn-check", type: "checkbox", autocomplete: "off", id: "vegetableCheckbox"+i, value: val }),
            $('<label/>', { class: "btn btn-outline-primary titleCase", for: "vegetableCheckBox"+i }).text(val)]
        )
      
    })
);

$(document).ready(function() {
    $("input#sauceCheckbox0").prop({'checked': true})
    $("input#cheeseCheckbox0").prop({'checked': true})
    $("span#pizzaTotal").text("$" + ($(":input:checked").length * 1.5))
    updateTotal()
})


// Allow tthe boxes to be checked. Also run the updatePrice function with the auto checked boxes
$(document).ready(function() {
    $("label[class*='btn-outline']").click(function() {

        var input = $(this).siblings('input')
        input.prop({'checked': !input.prop('checked')})

        updatePizzaTotal()
        updateTotal()
    })
})


// Add functionality to the save pizza button
$(document).ready(function(){
    $("button#savePizza").click(function() {
        addPizza()
    })
})


var pizzas = []

function addPizza() {

    var pizza_toAdd = {
        "toppings": [],
        "price": updatePizzaTotal()
    }

    

    $(":input:checked").each(function(index, element) {
        pizza_toAdd.toppings.push(element.value)
    })

    pizzas.push(pizza_toAdd)

    reset_toppings()

    showPizzas()

    updateTotal()

    updatePizzaTotal()
};

function reset_toppings() {
    $(":input:checked").each(function() {
        if ($(this)[0].id == "sauceCheckbox0" || $(this)[0].id == "cheeseCheckbox0") {
            $(this).prop("checked", true)
        } else {
            $(this).prop("checked", false)
        }
    })
    
}


function showPizzas() {
    $("#pizzaList").html(
        $.map(pizzas, function(pizzas) {
            return $("<div/>").html([
                $("<ul/>", { class: "list-group" }).html(
                    $.map(pizzas.toppings, function(topping){
                        return $("<li/>", { class: "list-group-item titleCase bg-light" }).text(topping)
                    })
                ),
                $("<span/>").text("Pizza Cost: $" + pizzas.price),
                $("<br/>")

            ])
        })
    )
}

function updateTotal() {
    var totalCost = 0
    if (pizzas.length > 0) {
        $.each(pizzas, function(index, pizza) {
            totalCost += pizza.price
        })
    }

    $("#orderTotal").text("$" + totalCost)
}

function updatePizzaTotal() {
    newPrice = ($(":input:checked").length * 1.5) + 7
    $("span#pizzaTotal").text("$" + newPrice)

    return newPrice
}

// Submit order button functionality
$(document).ready(function() {
    $("#submitOrder").click(function() {
        if (pizzas.length < 1) {
            alert("You don't have any pizzas added")
        } else {
            $.post("submit_order", JSON.stringify(pizzas))
                .done(function() {
                    window.location.href = "/order_status"
                })
        }
    })
})