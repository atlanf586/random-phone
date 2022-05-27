const zipCodes = require('./zip-codes.json');

module.exports = function() {
    let phone = '+1';

    const randomZip = zipCodes[Math.floor(Math.random() * zipCodes.length)];
    phone += randomZip;

    for (let i = 0; i < 7; i++) {
        const number = Math.floor(Math.random() * 10);
        phone += number;
    }

    return phone;
}
