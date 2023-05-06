import Koa from "koa";

const app = new Koa();

app.listen(
    process.env.PORT || 6000,
    () => {
        console.log("Koa Started!");
    }
);