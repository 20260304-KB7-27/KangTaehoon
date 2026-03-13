const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'test2/test3/test4');
// const dir = fs.readdirSync(dirPath);

if (fs.existsSync(dirPath)) {
    console.log('폴더가 존재합니다!');
} else {
    fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`폴더가 생성되었습니다.`);
    });
}
