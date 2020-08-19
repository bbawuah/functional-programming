"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = exports.SongSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var uri = 'mongodb+srv://brian-tech:JOeo2ntTKeU6gahw@cluster0.qkwhm.mongodb.net/hymnal-app?retryWrites=true&w=majority';
mongoose_1.default.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log('succesfully connected');
    }
});
exports.SongSchema = new mongoose_1.default.Schema({
    number: { type: String, required: true },
    title: { type: String, required: true },
    twi: { type: String, required: true },
    english: { type: String, required: true },
    favorite: { type: Boolean, required: true }
});
exports.Song = mongoose_1.default.model('Song', exports.SongSchema);
