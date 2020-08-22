"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var controller_1 = require("./controller");
exports.router = express_1.default.Router({
    strict: true
});
exports.router.get('/songs', controller_1.allSongs);
exports.router.post('/song', controller_1.getSong);
exports.router.post('/favorites', controller_1.getFavoriteSong);
exports.router.get('/search:term', controller_1.getSearchQuery);
exports.router.patch('/song:id', controller_1.updateSong);
