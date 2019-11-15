"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Licenses.scss");
var VisualBlock_1 = __importDefault(require("../VisualBlock/VisualBlock"));
function Licenses(props) {
    var licenses = props.licenses.licenses;
    return (react_1.default.createElement(VisualBlock_1.default, { blockWidth: 50, blockHeight: 33 },
        react_1.default.createElement("div", { className: 'licenses' },
            react_1.default.createElement("h2", null, "\uC790\uACA9\uC99D"),
            react_1.default.createElement("ul", null, licenses.map(function (license) { return (react_1.default.createElement("li", null, license)); })))));
}
exports.default = Licenses;
