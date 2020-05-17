// services
$(document).ready(function(){
    $("#foodLogo").click(function(){
        $("#toggleFood").animate({
            height: "toggle"
        });
    });
});
$(document).ready(function(){
    $("#customerLogo").click(function(){
        $("#toggleCustomer").animate({
            height: "toggle"
        });
    });
});
$(document).ready(function(){
    $("#deliveryLogo").click(function(){
        $("#toggleDelivery").animate({
            height: "toggle"
        });
    });
});

// The order form business logic.
var price , crustprice, toppingsprice ;
let total = 0;
class orderpizza {
    constructor(type, size, crust, toppings, total) {
        this.type = type;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.total = total;
    }
}

// the order form user interface logic
$(document).ready(function(){
    $("button.proceed").click(function(event){
        let ptype = $("#type option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptoppings = $("#toppings option:selected").val();
    });
})
switch (psize) {
    case "large":
        price = 1000;
        console.log(price);
        break;
    case "medium":
        price = 800;
        console.log(price);
        break;
    case "small":
        price = 500;
        console.log(price);
    default:
        console.log("invalid option");
}
switch (pcrust) {
    case "Thin Crust":
        crustprice = 0;
        break;
    case "Thick Crust":
        crustprice = 200;
        break;
    case "Deep Crust":
        crustprice = 300;
        break;
    case "Cheesy Crust":
        crustprice = 500;
        break;
    default:
        console.log("invalid");
}
switch (ptoppings) {
    case "Bacon":
        toppingprice = 50;
        break;
    case "Sausage":
        toppingprice = 50;
        break;
    case "Extra Cheese":
        toppingprice = 50;
        break;
    case "Olives":
        toppingprice = 50;
        break;
    default:
        console.log("invalid")
        break;
}

// total 
total = price + crustprice + toppingsprice;
console.log(total);
let checkoutTotal =0;
checkoutTotal = checkoutTotal + total;

$("#pizzaType").html($("#type option:selected").val());
$("#pizzaSize").html($("#size option:selected").val());
$("#pizzaCrust").html($("#crust option:selected").val());
$("#pizzaToppings").html($("#toppings option:selected").val());
$("#total").html(total);

//Adding on another pizza
// exact same as line 38-92
$("button.addPizza").click(function(event){
    let ptype = $("#type option:selected").val();
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptoppings = $("#toppings option:selected").val();
});
switch (psize) {
    case "large":
        price = 1000;
        console.log(price);
        break;
    case "medium":
        price = 800;
        console.log(price);
        break;
    case "small":
        price = 500;
        console.log(price);
    default:
        console.log("invalid option");
}
switch (pcrust) {
    case "Thin Crust":
        crustprice = 0;
        break;
    case "Thick Crust":
        crustprice = 200;
        break;
    case "Deep Crust":
        crustprice = 300;
        break;
    case "Cheesy Crust":
        crustprice = 500;
        break;
    default:
        console.log("invalid");
}
switch (ptoppings) {
    case "Bacon":
        toppingprice = 50;
        break;
    case "Sausage":
        toppingprice = 50;
        break;
    case "Extra Cheese":
        toppingprice = 50;
        break;
    case "Olives":
        toppingprice = 50;
        break;
    default:
        console.log("invalid")
        break;
}
total = price + crustprice + toppingsprice;
console.log(total);
let checkoutTotal =0;
checkoutTotal = checkoutTotal + total;

//A constructor is a function that can be invoked using the new keyword to create new objects. 
var addOrder = new orderpizza(ptype, psize, pcrust, ptoppings, total);
$(#selectedOrders).append('<tr><td id="pizzaType">'+addOrder.type)+'</td><td id="pizzaSize">'+addOrder.size +'</td><td id="pizzaCrust">' +addOrder.crust + '</td><td id="pizzaToppings">'+addOrder.toppings+ '</td><td id="total">'+addOrder.total'</td></tr>');
console.log(addOrder)
