"use strict";
exports.__esModule = true;
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var UserController_1 = require("./api/controllers/UserController");
var app = routing_controllers_1.createExpressServer({
    controllers: [UserController_1.UserController]
});
app.listen(3000);
