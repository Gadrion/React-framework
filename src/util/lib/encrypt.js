import CryptoJS from 'crypto-js';

export const encrypt = input => {
    const key = CryptoJS.enc.Utf8.parse('7061737323313233');
    const iv = CryptoJS.enc.Utf8.parse('7061737323313233');
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(input), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    console.log(encrypted);

    return encrypted.toString();
}