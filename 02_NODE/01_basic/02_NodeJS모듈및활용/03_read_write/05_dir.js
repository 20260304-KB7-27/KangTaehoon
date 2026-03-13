const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, './test');
// const dir = fs.readdirSync(dirPath);

if (fs.existsSync(dirPath)) {
    console.log('폴더가 존재합니다!');
} else {
    fs.mkdir(dirPath, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`폴더가 생성되었습니다.`);
    });
}
