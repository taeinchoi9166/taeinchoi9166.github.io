"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Footer.scss");
function Footer() {
    return (react_1.default.createElement("footer", null,
        react_1.default.createElement("div", null, "\u00A9 2019 Taein Choi, Sproutseed. All rights reserved.")));
}
exports.default = Footer;
