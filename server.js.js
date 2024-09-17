const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;


app.use(express.static('public'));


app.get('/api/prices', async (req, res) => {
    try {
       
        const data = [
            { platform: "WazirX", lastPrice: "₹25,72,612", buySell: "₹25,72,610 / ₹25,72,612", diff: "-3.14%", savings: "₹83,498" },
            { platform: "Bitbns", lastPrice: "₹28,83,906", buySell: "₹28,55,164 / ₹28,82,157", diff: "8.58%", savings: "₹2,27,796" },
            { platform: "Colodax", lastPrice: "₹25,46,035", buySell: "₹25,33,304 / ₹28,51,559", diff: "-4.14%", savings: "₹1,10,074" },
            { platform: "Zebpay", lastPrice: "₹26,50,000", buySell: "₹26,49,999 / ₹26,21,000", diff: "-0.23%", savings: "₹6,110" }
        ];
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
