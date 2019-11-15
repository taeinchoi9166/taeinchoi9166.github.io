"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./VisualBlock.scss");
function VisualBlock(props) {
    var blockWidth = props.blockWidth, blockHeight = props.blockHeight, children = props.children;
    var blockStyle = {
        width: (blockWidth - 2) + '%',
        height: blockHeight - 2 + '%',
        margin: '1%',
        display: 'inline-block'
    };
    return (react_1.default.createElement("div", { className: "visual-block", style: blockStyle }, children));
}
exports.default = VisualBlock;
