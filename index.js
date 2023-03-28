const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');


const app = new Koa();
const router = new Router();

// statik dosyalar için bir klasör tanımlayın
const staticFiles = serve(path.join(__dirname, 'public'));




// response
app.use(ctx => {
    console.log(ctx.url);
    if (ctx.URL.pathname === '/index') {
        ctx.body = 'Index Page';
    } else if (ctx.url === '/iletisim') {
        ctx.body = 'iletisim Index';
    } else if (ctx.url === '/hakkimda') {
        ctx.body = 'hakkimda Index';
    } else {
        ctx.body = '404 Page not found';
    }
});

app.listen(3000);