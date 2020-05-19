// the order form user interface logic
$(document).ready(function(){
    $('.summary').hide();
    $('.cdata-overlay').hide();
    $("#checkout").click(function(event){
        let type = $("#type.option:selected").val();
        let size = $("#size.option:selected").val();
        let crust = $("#crust.option:selected").val();
        let toppings = $("#toppings.option:selected").val();
        let another = $("#another").val();
        console.log(size);

        let orderpizza = (type, size, crust,toppings, another, total) => {
            return {type, size, crust, toppings, another, total};
        };
        let price, totalPrice;
        switch (type) {
            case type = "pepperoni":
                switch (size) {
                    case size = "small":
                        price = 500;
                        if (crust === "thin") {
                            totalPrice === (price * another);
                        }
                        else if (crust === "thick") {
                            totalPrice === (price * another) + 200;
                        }
                        else if (crust === "deep") {
                            totalPrice === (price * another) + 300;
                        }
                        else if (crust === "cheesy") {
                            totalPrice === (price * another) + 500;
                        }
                        break;
                    case size = "medium":
                        price = 800;
                        if (crust === "thin") {
                            totalPrice === (price * another);
                        }
                        else if (crust === "thick") {
                            totalPrice === (price * another) + 200;
                        }
                        else if (crust === "deep") {
                            totalPrice === (price * another) + 300;
                        }
                        else if (crust === "cheesy") {
                            totalPrice === (price * another) + 500;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "thin") {
                            totalPrice === (price * another);
                        }
                        else if (crust === "thick") {
                            totalPrice === (price * another) + 200;
                        }
                        else if (crust === "deep") {
                            totalPrice === (price * another) + 300;
                        }
                        else if (crust === "cheesy") {
                            totalPrice === (price * another) + 500;
                        }
                        break;                    
                }
                break;
            case type = "Chicken and Macon":
                switch (size) {
                    case size = "small":
                        price = 500;
                        if (crust === "thin") {
                            totalPrice = (price * another);
                        }
                        else if (crust === "thick") {
                            totalPrice = (price * another) + 200;
                        }
                        else if (crust === "deep") {
                            totalPrice = (price * another) + 300;
                        }
                        else if (crust === "cheesy") {
                            totalPrice = (price * another) + 500;
                        }
                        break;
                    case size = "medium":
                        price = 800;
                        if (crust === "thin") {
                            totalPrice = (price * another);
                        }
                        else if (crust === "thick") {
                            totalPrice = (price * another) + 200;
                        }
                        else if (crust === "deep") {
                            totalPrice = (price * another) + 300;
                        }
                        else if (crust === "cheesy") {
                            totalPrice = (price * another) + 500;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "thin") {
                            totalPrice = (price * another);
                        }
                        else if (crust === "thick") {
                            totalPrice = (price * another) + 200;
                        }
                        else if (crust === "deep") {
                            totalPrice = (price * another) + 300;
                        }
                        else if (crust === "cheesy") {
                            totalPrice = (price * another) + 500;
                        }
                        break;
                    }
                break;
             case type = "BBQ Steak" :
                    switch (size) {
                        case size = "small":
                            price = 500;
                            if (crust === "thin") {
                                totalPrice = (price * another);
                            }
                            else if (crust === "thick") {
                                totalPrice = (price * another) + 200;
                            }
                            else if (crust === "deep") {
                                totalPrice = (price * another) + 300;
                            }
                            else if (crust === "cheesy") {
                                totalPrice = (price * another) + 500;
                            }
                            break;
                        case size = "medium":
                            price = 800;
                            if (crust === "thin") {
                                totalPrice = (price * another);
                            }
                            else if (crust === "thick") {
                                totalPrice = (price * another) + 200;
                            }
                            else if (crust === "deep") {
                                totalPrice = (price * another) + 300;
                            }
                            else if (crust === "cheesy") {
                                totalPrice = (price * another) + 500;
                            }
                            break;
                        case size = "large":
                            price = 1000;
                            if (crust === "thin") {
                                totalPrice = (price * another);
                            }
                            else if (crust === "thick") {
                                totalPrice = (price * another) + 200;
                            }
                            else if (crust === "deep") {
                                totalPrice = (price * another) + 300;
                            }
                            else if (crust === "cheesy") {
                                totalPrice = (price * another) + 500;
                            }
                            break;
                    }
                    break;
                    case type = "Veggie Delight":
                        switch (size) {
                            case size = "small":
                                price = 500;
                                if (crust === "thin") {
                                    totalPrice = (price * another);
                                }
                                else if (crust === "thick") {
                                    totalPrice = (price * another) + 200;
                                }
                                else if (crust === "deep") {
                                    totalPrice = (price * another) + 300;
                                }
                                else if (crust === "cheesy") {
                                    totalPrice = (price * another) + 500;
                                }
                                break;
                            case size = "medium":
                                price = 800;
                                if (crust === "thin") {
                                    totalPrice = (price * another);
                                }
                                else if (crust === "thick") {
                                    totalPrice = (price * another) + 200;
                                }
                                else if (crust === "deep") {
                                    totalPrice = (price * another) + 300;
                                }
                                else if (crust === "cheesy") {
                                    totalPrice = (price * another) + 500;
                                }
                                break;
                            case size = "large":
                                price = 1000;
                                if (crust === "thin") {
                                    totalPrice = (price * another);
                                }
                                else if (crust === "thick") {
                                    totalPrice = (price * another) + 200;
                                }
                                else if (crust === "deep") {
                                    totalPrice = (price * another) + 300;
                                }
                                else if (crust === "cheesy") {
                                    totalPrice = (price * another) + 500;
                                }
                                break;
                     }
                    break;
                case type = "Four Cheese":
                    switch (size) {
                        case size = "small":
                            price = 500;
                            if (crust === "thin") {
                                totalPrice = (price * another);
                            }
                            else if (crust === "thick") {
                                totalPrice = (price * another) + 200;
                            }
                            else if (crust === "deep") {
                                totalPrice = (price * another) + 300;
                            }
                            else if (crust === "cheesy") {
                                totalPrice = (price * another) + 500;
                            }
                            break;
                        case size = "medium":
                            price = 800;
                            if (crust === "thin") {
                                totalPrice = (price * another);
                            }
                            else if (crust === "thick") {
                                totalPrice = (price * another) + 200;
                            }
                            else if (crust === "deep") {
                                totalPrice = (price * another) + 300;
                            }
                            else if (crust === "cheesy") {
                                totalPrice = (price * another) + 500;
                            }
                            break;
                        case size = "large":
                            price = 1000;
                            if (crust === "thin") {
                                totalPrice = (price * another);
                            }
                            else if (crust === "thick") {
                                totalPrice = (price * another) + 200;
                            }
                            else if (crust === "deep") {
                                totalPrice = (price * another) + 300;
                            }
                            else if (crust === "cheesy") {
                                totalPrice = (price * another) + 500;
                            }
                            break;
                    }
                    break;
                 case  type = "Ham and Cheese":
                    switch (size) {
                        case size = "small":
                            price = 500;
                            if (crust === "thin") {
                                totalPrice = (price * another);
                            }
                            else if (crust === "thick") {
                                totalPrice = (price * another) + 200;
                            }
                            else if (crust === "deep") {
                                totalPrice = (price * another) + 300;
                            }
                            else if (crust === "cheesy") {
                                totalPrice = (price * another) + 500;
                            }
                            break;
                        case size = "medium":
                            price = 800;
                            if (crust === "thin") {
                                totalPrice = (price * another);
                            }
                            else if (crust === "thick") {
                                totalPrice = (price * another) + 200;
                            }
                            else if (crust === "deep") {
                                totalPrice = (price * another) + 300;
                            }
                            else if (crust === "cheesy") {
                                totalPrice = (price * another) + 500;
                            }
                            break;
                        case size = "large":
                            price = 1000;
                            if (crust === "thin") {
                                totalPrice = (price * another);
                            }
                            else if (crust === "thick") {
                                totalPrice = (price * another) + 200;
                            }
                            else if (crust === "deep") {
                                totalPrice = (price * another) + 300;
                            }
                            else if (crust === "cheesy") {
                                totalPrice = (price * another) + 500;
                            }
                            break;
                    }
                    break;
        }

         switch (toppings) {
            case toppings = "Bacon":
                totalPrice = totalPrice + 50;
                break;
            case toppings = "sausage":
                totalPrice = totalPrice + 50;
                break;
            case toppings = "Extra Cheese":
                totalPrice = totalPrice + 50;
            case toppings = "olives":
                totalPrice = totalPrice + 100;
        }

        let addOrder =  orderpizza(type, size, crust, toppings, another, totalPrice);
        console.log(addOrder);

        $('.summary').slideDown(2000);
         $('.cdata-overlay').slideUp();
         $('.deliver').show(1000);
        $('.delivernot').show(1000);
        $('#list').slideDown();

        $('#list').text("");
        $('#list').append("<br>" + "type: " + addOrder.type + "<br>" + "size: " 
         + addOrder.size + "<br>" + "crust:  " +addOrder.crust + "<br>" + "toppings: " 
         +addOrder.toppings + "<br>" + "another: " +addOrder.another + "<br>"
        +"total: " + addOrder.total +"<br><br>");      
    });
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
        });

     $(".delivernot").click(function () {
        });
});