console.log("Async JavaScript - Callback");

const storeEL = document.getElementById("store");
const orderDetailsEL = document.getElementById("order-details");
const addOnEL = document.getElementById("add-on");
const orderEL = document.getElementById("order");

function orderPizza(type, name) {
    // Query the pizzahub for a store
    storeEL.textContent = `Locating Store...`;
    query(`api/pizzahub/`, function(result, error) {
        if (!error) {
            let shopId = result[0];
            console.log(shopId);
            storeEL.textContent = `Located Store: ${shopId}`;

            // Get the store and query pizzas
            orderDetailsEL.textContent = `Loading Order...`;

            query(`api/pizzahub/pizzas/${shopId}`, function(result, error) {
                if (!error) {
                    let pizzas = result;

                    // Find if my pizza is available

                    let myPizza = pizzas.find((pizza) => {
                        return pizza.type === type && pizza.name === name;
                    });

                    console.log(myPizza);
                    orderDetailsEL.textContent = `You have ordered for ${myPizza.type} ${myPizza.name}`;

                    // check for the free beveragees
                    addOnEL.textContent = `Checking for Add-Ons...`;

                    query(`api/pizzahub/beverages/${myPizza.id}`, function(result, error) {
                        if(!error) {
                            let beverage = result[0];
                            console.log(beverage);
                            addOnEL.textContent = `We have added an add-on ${beverage.name} for you.`;

                            // Prepare an Order
                            orderEL.textContent = `Preparing your order...`;

                            query(`api/order`, function(result, error) {
                               if (!error) {
                                console.log(`Your order of ${type} ${name} with ${beverage.name} has been placed`);
                                orderEL.textContent = `Your order of ${type} ${name} with ${beverage.name} has been placed at ${new Date(result.createdAt)}`;
                               } else {
                                console.log("No Pizza is there for you today!")
                               }
                            }, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    pizzaId: myPizza.id,
                                    beverageId: beverage.id,
                                })
                            })
                        }
                    })
                }
            })
        }
    })
}


orderPizza("veg", "Margherita");

