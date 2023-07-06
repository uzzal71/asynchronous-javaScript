const takeOrder = (customer) => {
    console.log(`take order for ${customer}`);
}

const processOrder = (customer) => {
    console.log(`Processing order for ${customer}`);

    setTimeout(() => {
        console.log(`order processed for ${customer}`);
        console.log(`cooking completed`);
    }, 3000);
};

const completeOrder = (customer) => {
    console.log(`completed order for ${customer}`);
};