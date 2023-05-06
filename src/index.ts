import Koa from "koa";

/* 
// If you decide to Koa Router after cloning
import Router from "@koa/router"; 
*/

/*
// If you want to Koa Bodyparser after cloning
import bodyparser from "koa-bodyparser";
*/

/*
// If you want to Koa Logger after cloning
import logger from "koa-logger";
*/

const app = new Koa();

/* 
// If you want to Koa Bodyparser after cloning
app.use(bodyParser()) 
*/

/* 
// If you want to Koa Logger after cloning
app.use(KoaLogger()); 
*/

/* // If you decide to Koa Router after cloning
const router: Router = new Router();
router.get('/hello', (ctx: Koa.Context) => ctx.body = "Hello Koa!");
app.use(router.routes()).use(router.allowedMethods()); 
 */

app.listen(
    3300,
    () => {
        console.log("Koa Started!");
    }
);