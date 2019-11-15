"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var VisualBlock_1 = __importDefault(require("../VisualBlock/VisualBlock"));
require("./SkillStack.scss");
function SkillStack(props) {
    var data = props.skills;
    var refs = [];
    for (var n = 0; n < data.skills.length; n++) {
        console.log(n);
        refs.push({
            curRef: react_1.createRef(),
            score: data.skills[n].score
        });
    }
    react_1.useEffect(function () {
        console.log(refs);
        for (var _i = 0, refs_1 = refs; _i < refs_1.length; _i++) {
            var ref = refs_1[_i];
            var circle = ref.curRef.current;
            if (circle) {
                console.log(circle.style.strokeDashoffset);
                circle.style.strokeDashoffset = ((100 - ref.score) / 100 * 377).toString();
            }
        }
    }, []);
    return (react_1.default.createElement(VisualBlock_1.default, { blockHeight: 50, blockWidth: 50 },
        react_1.default.createElement("h2", null, "\uAE30\uC220 \uC2A4\uD0DD"),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", { className: 'my-skills' },
            react_1.default.createElement("div", { className: 'skill-list' }, data.skills.map(function (skill, index) { return (react_1.default.createElement("div", { className: 'skill-item' },
                react_1.default.createElement("svg", { width: "150", height: "150" },
                    react_1.default.createElement("circle", { cx: "75", cy: "75", r: '60', stroke: '#3fb776', "stroke-width": '15', fill: 'transparent', ref: refs[index].curRef })),
                react_1.default.createElement("div", { className: 'skill-name' }, skill.name))); })))));
}
exports.default = SkillStack;
