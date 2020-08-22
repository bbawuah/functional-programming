"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchQuery = exports.updateSong = exports.getFavoriteSong = exports.getSong = exports.allSongs = void 0;
var mongoose_1 = require("../db/mongoose");
exports.allSongs = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var match, song, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                match = {};
                if (req.query.favorite) {
                    match.favorite = req.query.favorite === 'true';
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, mongoose_1.Song.find(match)];
            case 2:
                song = _a.sent();
                res.send(song);
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                res.status(500).send(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getSong = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var hymnNumber, song, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hymnNumber = req.body.number;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, mongoose_1.Song.findOne({ number: hymnNumber })];
            case 2:
                song = _a.sent();
                if (!song) {
                    res.send('No hymnal found..');
                    return [2 /*return*/];
                }
                res.send(song);
                return [3 /*break*/, 4];
            case 3:
                e_2 = _a.sent();
                res.status(500).send(e_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getFavoriteSong = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var hymnNumber, songs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hymnNumber = req.body.list;
                console.log(hymnNumber);
                return [4 /*yield*/, mongoose_1.Song.find({
                        number: { $in: hymnNumber }
                    })];
            case 1:
                songs = _a.sent();
                res.send(songs);
                return [2 /*return*/];
        }
    });
}); };
exports.updateSong = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var hymnNumber, favoriteValue, song, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hymnNumber = req.body.number;
                favoriteValue = req.body.favorite;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, mongoose_1.Song.findOneAndUpdate({ number: hymnNumber }, { $set: { favorite: favoriteValue } })];
            case 2:
                song = _a.sent();
                if (!song) {
                    res.send('No hymnal found..');
                    return [2 /*return*/];
                }
                res.send(song);
                return [3 /*break*/, 4];
            case 3:
                e_3 = _a.sent();
                res.status(500).send(e_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getSearchQuery = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var title, number, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mongoose_1.Song.find({
                    title: { $regex: new RegExp(req.params.term.replace(':', '')) }
                })];
            case 1:
                title = _a.sent();
                return [4 /*yield*/, mongoose_1.Song.find({
                        number: { $regex: new RegExp(req.params.term.replace(':', '')) }
                    })];
            case 2:
                number = _a.sent();
                results = __spreadArrays(title, number);
                if (!results) {
                    res.send('No hymnal found');
                    return [2 /*return*/];
                }
                res.send(results);
                return [2 /*return*/];
        }
    });
}); };
