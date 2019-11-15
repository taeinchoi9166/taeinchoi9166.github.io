"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var VisualBlock_1 = __importDefault(require("../VisualBlock/VisualBlock"));
require("./SkillStack.scss");
var chunk = function (arr, ck) {
    var chunkArr = [];
    while (arr.length !== 0)
        chunkArr.push(arr.splice(0, ck));
    return chunkArr;
};
function SkillStack(props) {
    var data = props.skills;
    return (react_1.default.createElement(VisualBlock_1.default, { blockHeight: 50, blockWidth: 50 },
        react_1.default.createElement("h2", null, "\uAE30\uC220 \uC2A4\uD0DD"),
        react_1.default.createElement("br", null),
        react_1.default.createElement("table", { className: 'my-skills' }, chunk(data.skills, 3).map(function (skills) {
            return react_1.default.createElement("tr", { className: 'skill-list' }, skills.map(function (skill) {
                return react_1.default.createElement("td", { className: 'skill-item' },
                    react_1.default.createElement("img", { src: skill.imageURL }),
                    react_1.default.createElement("div", { className: 'skill-name' }, skill.name));
            }));
        }))));
}
exports.default = SkillStack;
