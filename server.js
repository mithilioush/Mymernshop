const express = require('express');
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')

if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_KEY)
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
if (process.env.NODE_ENV !== 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.post('/api/payment', (req, res) => {
        const body = {
            source: req.body.token.id,
            amount: req.body.amount,
            currency: "usd"
        }
        stripe.charges.create(body, (err, rej) => {
            if (err) {
                return res.status(500).json({ status: "fail", error: err });
            }
            res.status(200).json({
                status: "success",
                data: rej
            })
        })
    })

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

const port = process.env.PORT || 5000
app.listen(port, err => {
    if (err) { throw err }
    process.env.NODE_ENV = 'production'
    console.log("Server Started!!");
})