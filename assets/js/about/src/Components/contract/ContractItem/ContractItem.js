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
require("./ContractItem.scss");
function ContractItem(props) {
    var des = props.des, name = props.name, icon = props.icon;
    var bRef = react_1.createRef();
    var showBalloon = function () {
        var target = bRef.current;
        if (target) {
            target.style.transform = 'scale(0.9)';
        }
    };
    var hideBalloon = function () {
        var target = bRef.current;
        if (target) {
            target.style.transform = 'scale(0)';
        }
    };
    return (react_1.default.createElement("div", { className: 'contract-item' },
        react_1.default.createElement("div", { className: 'contract-balloon', ref: bRef }, des),
        react_1.default.createElement("div", { onMouseOver: showBalloon, onMouseOut: hideBalloon },
            react_1.default.createElement("div", { className: 'contract-icon' },
                react_1.default.createElement("i", { className: icon })),
            react_1.default.createElement("div", { className: 'contract-name' }, name))));
}
exports.default = ContractItem;
