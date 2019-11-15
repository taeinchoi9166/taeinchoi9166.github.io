"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Prizex.scss");
var VisualBlock_1 = __importDefault(require("../VisualBlock/VisualBlock"));
function Prizes(props) {
    var prizes = props.prizes.prizes;
    return (react_1.default.createElement(VisualBlock_1.default, { blockWidth: 50, blockHeight: 25 },
        react_1.default.createElement("div", { className: 'prizes' },
            react_1.default.createElement("h2", null, "\uC218\uC0C1 \uACBD\uB825"),
            react_1.default.createElement("br", null),
            react_1.default.createElement("ul", { className: 'prize-list' }, prizes.map(function (prize) { return (react_1.default.createElement("li", null,
                react_1.default.createElement("i", { className: "fas fa-medal" }),
                " ",
                react_1.default.createElement("b", null, prize.year),
                "\u00A0",
                react_1.default.createElement("span", null, prize.des))); })))));
}
exports.default = Prizes;
