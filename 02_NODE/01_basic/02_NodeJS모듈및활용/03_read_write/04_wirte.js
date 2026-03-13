const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'example.txt');
const savePath = path.join(__dirname, 'text-1.txt');

const data = fs.readFileSync(filePath, 'utf-8');
if (fs.existsSync(savePath)) {
    // 파일이 있을 때
    console.log(`파일이 존재합니다.`);
} else {
    // 파일이 없을 때 생성
    fs.writeFileSync(savePath, data);
}
// fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

// });

// fs.writeFile(savePath, data, 'utf-8', (err , file)=>{

// });
