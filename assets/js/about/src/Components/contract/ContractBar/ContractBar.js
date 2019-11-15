"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ContractItem_1 = __importDefault(require("../ContractItem/ContractItem"));
require("./ContractBar.scss");
function ContractBar() {
    return (react_1.default.createElement("div", { className: 'contract-bar' },
        react_1.default.createElement("h1", null, "Contracts"),
        react_1.default.createElement("div", null,
            react_1.default.createElement(ContractItem_1.default, { des: 'taeinchoi9166 (Sproutseed)', name: 'Github', icon: "fab fa-github", url: 'https://github.com/taeinchoi9166' }),
            react_1.default.createElement(ContractItem_1.default, { des: '최태인', name: 'Facebook', icon: "fab fa-facebook", url: 'https://www.facebook.com/profile.php?id=100010925316863&ref=bookmarks' }),
            react_1.default.createElement(ContractItem_1.default, { des: 'taein1009@naver.com', name: 'E-Mail', icon: "fa fa-envelope" }))));
}
exports.default = ContractBar;
