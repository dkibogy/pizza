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
var price , crustprice, toppingprice ;
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

