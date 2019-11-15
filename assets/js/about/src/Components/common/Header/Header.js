"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./Header.scss");
function Header() {
    var bRef = react_1.createRef();
    var scrollScreen = function () {
        var header = bRef.current;
        if (header) {
            var h = header.offsetHeight;
            window.scrollTo({
                top: h,
                behavior: 'smooth'
            });
        }
    };
    return (react_1.default.createElement("div", { className: 'header', ref: bRef },
        react_1.default.createElement("div", { className: 'welcome-box' },
            react_1.default.createElement("div", { className: 'welcome-msg' }, " Welcome to Sproutseed!"),
            react_1.default.createElement("div", { className: 'seed-round' },
                react_1.default.createElement("i", { className: "fas fa-seedling" }))),
        react_1.default.createElement("div", { className: 'jump-btn-wrap' },
            react_1.default.createElement("div", { className: 'jump-btn', onClick: scrollScreen }, "Learn About Me!"))));
}
exports.default = Header;
