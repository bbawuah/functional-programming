"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var constants_1 = require("./config/constants");
var routes_1 = require("./routes");
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(routes_1.songRouter);
app.listen(constants_1.PORT, function () {
    console.log("Server is listening on port " + constants_1.PORT);
});
