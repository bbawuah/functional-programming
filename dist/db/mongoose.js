"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = exports.SongSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("" + process.env.MONGODB_URL, { useNewUrlParser: true });
exports.SongSchema = new mongoose_1.default.Schema({
    number: { type: String, required: true },
    title: { type: String, required: true },
    twi: { type: String, required: true },
    english: { type: String, required: false },
    favorite: { type: Boolean, required: true }
});
exports.Song = mongoose_1.default.model('Song', exports.SongSchema);
