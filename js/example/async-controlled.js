const takeOrder = (customer, callback) => {
    console.log(`take order for ${customer}`);
    callback(customer);
}

const processOrder = (customer, callback) => {
    console.log(`Processing order for ${customer}`);

    setTimeout(() => {
        console.log(`order processed for ${customer}`);
        console.log(`cooking completed`);
        callback(customer);
    }, 3000);
};

const completeOrder = (customer) => {
    console.log(`completed order for ${customer}`);
};

takeOrder("customer 1", (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
});

// testing non-bloking
console.log(`Non-bloked`);