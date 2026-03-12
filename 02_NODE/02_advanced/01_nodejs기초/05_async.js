let likePizza = false;
const pizza = new Promise((resolve, reject) => {
    likePizza
        ? resolve('피자를 주문합니다.')
        : reject('피자를 주문하지 않습니다.');
});

const processOrder = async () => {
    try {
        const order = await pizza;
        console.log(order);
    } catch (error) {
        console.error(error);
    }
};
processOrder();
