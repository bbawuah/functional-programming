"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSongs = exports.getSong = exports.allSongs = void 0;
var mongoose_1 = require("../db/mongoose");
exports.allSongs = function (req, res) {
    var songs = mongoose_1.Song.find(function (err, song) {
        if (err) {
            res.send(err);
        }
        else {
            console.log(song);
            res.send(song);
        }
    });
};
exports.getSong = function (req, res) {
    var song = mongoose_1.Song.find(function (err, song) {
        if (err) {
            res.send(err);
        }
        else {
            console.log(song);
            res.send(song);
        }
    });
};
exports.addSongs = function (req, res) {
    var song = mongoose_1.Song.find(function (err, song) {
        if (err) {
            res.send(err);
        }
        else {
            console.log(song);
            res.send(song);
        }
    });
};
