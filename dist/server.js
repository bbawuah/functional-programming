"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Survey_Information_Design_clean_parsed_json_1 = __importDefault(require("./Survey_Information_Design_clean-parsed.json"));
var arrayOfArrays = Survey_Information_Design_clean_parsed_json_1.default.map(function (data) {
    return Object.entries(data);
});
var arrayWithNumbers = arrayOfArrays.map(function (arrayInArray) {
    var filteredArray = arrayInArray.filter(function (data) {
        var num = parseInt(data[1]);
        if (!isNaN(num)) {
            return data;
        }
    });
    var convertedArray = filteredArray.map(function (data) { return [data[0], parseInt(data[1])]; });
    return convertedArray;
});
console.log(arrayWithNumbers);
