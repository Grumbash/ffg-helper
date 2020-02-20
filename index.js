require("dotenv").config();
const mongoose = require("mongoose");

const Koa = require('koa')
const app = new Koa();

const connectionURL = `mongodb+srv://${process.env.DB_USER}:<${process.env.DB_PASSWORD}>@${process.env.DB_HOST}`;
mongoose.connect(connectionURL);


app.use(async ctx => {
    ctx.body = "Hello World"
});

app.listen(3228)

