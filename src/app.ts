import "reflect-metadata";
import { createExpressServer } from "routing-controllers";

const app = createExpressServer({
})

app.listen(3000);