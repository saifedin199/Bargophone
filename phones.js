const phones = [
    {
        name: "iPhone 15 Pro Max",
        specs: "شاشة 6.7 إنش، معالج A17 Pro، كاميرا 48MP",
        price: "$1199",
        image: "https://mobizil.com/iphone-15-pro-max-specs/" // استبدل بروابط صور حقيقية
    },
    {
        name: "Samsung Galaxy S24 Ultra",
        specs: "شاشة AMOLED 2X، معالج Snapdragon 8 Gen 3",
        price: "$1299",
        image: "https://iphoneprixalgerie.com/product/176/details?srsltid=AfmBOooRGLsoSZwxCkGBwgsKCRrBbc7OXQZQMzt0px8f97WRfbEhGZSk"
    },
    {
        name: "Google Pixel 8 Pro",
        specs: "معالج Tensor G3، شاشة 120Hz، كاميرا ذكاء اصطناعي",
        price: "$999",
        image: "https://mob4g.com/specs/google-pixel-8-pro/"
    },
    // يمكنك إضافة 47 هاتفاً آخر هنا بنفس الطريقة
];

const container = document.getElementById('phone-container');

phones.forEach(phone => {
    const card = `
        <div class="phone-card">
            <img src="${phone.image}" alt="${phone.name}">
            <h3>${phone.name}</h3>
            <p>${phone.specs}</p>
            <div class="price">${phone.price}</div>
        </div>
    `;
    container.innerHTML += card;
});
