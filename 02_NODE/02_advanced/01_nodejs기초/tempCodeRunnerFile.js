const fetchData = () =>
    new Promise((resolve, reject) => {
        const response = fetch(
            'https://jsonplacehfdfdfdfolder.typicode.com/users',
        );
        if (!response) {
            reject('패치 실패');
            return;
        }
        resolve(response);
    });

const getJson = (data) =>
    new Promise((resolve, reject) => {
        if (!data) {
            return;
        }
        const json = data.json();
        if (!json) {
            reject('json 만들기 실패');
            return;
        }
        resolve(json);
    });

fetchData()
    .then((d) => {
        const json = getJson(d);
        return json;
    })
    .then((r) => console.log(r))
    .catch((error) => {
        console.error(error);
    });
