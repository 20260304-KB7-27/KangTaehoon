let p = new Promise((resolve, reject) => {
    return resolve(['first!', 'second', 'third']);
    reject('error');
});

p.then((msg) => {
    const [first, ...rest] = msg;
    console.log(first);
    return rest;
})
    .then((msg) => {
        const [second, third] = msg;
        console.log(second);
        console.log(third);
    })
    .catch((error) => {
        console.log('오류 발생 ==>  ' + error);
    });
