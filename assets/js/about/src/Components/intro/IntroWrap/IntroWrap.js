"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./IntroWrap.scss");
function IntroWrap(props) {
    var c = props.children;
    return (react_1.default.createElement("div", { className: "intro-wrap" }, c));
}
exports.default = IntroWrap;
