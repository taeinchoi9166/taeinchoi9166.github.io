"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./index");
require("./App.scss");
var react_1 = __importDefault(require("react"));
var Header_1 = __importDefault(require("./Components/common/Header/Header"));
var IntroWrap_1 = __importDefault(require("./Components/intro/IntroWrap/IntroWrap"));
var SkillStack_1 = __importDefault(require("./Components/intro/SkillStack/SkillStack"));
var Prizes_1 = __importDefault(require("./Components/intro/Prizes/Prizes"));
var Licenses_1 = __importDefault(require("./Components/intro/Licenses/Licenses"));
var ContractBar_1 = __importDefault(require("./Components/contract/ContractBar/ContractBar"));
var Footer_1 = __importDefault(require("./Components/common/Footer/Footer"));
// @ts-ignore
var spring_png_1 = __importDefault(require("./assets/images/skill_stack/spring.png"));
// @ts-ignore
var java_png_1 = __importDefault(require("./assets/images/skill_stack/java.png"));
// @ts-ignore
var nodejs_png_1 = __importDefault(require("./assets/images/skill_stack/nodejs.png"));
// @ts-ignore
var react_png_1 = __importDefault(require("./assets/images/skill_stack/react.png"));
// @ts-ignore
var arduino_jpg_1 = __importDefault(require("./assets/images/skill_stack/arduino.jpg"));
// @ts-ignore
var android_png_1 = __importDefault(require("./assets/images/skill_stack/android.png"));
function App() {
    var skills = {
        skills: [
            { name: 'spring', imageURL: spring_png_1.default },
            { name: 'java', imageURL: java_png_1.default },
            { name: 'node.js', imageURL: nodejs_png_1.default },
            { name: 'react', imageURL: react_png_1.default },
            { name: 'arduino', imageURL: arduino_jpg_1.default },
            { name: 'android', imageURL: android_png_1.default }
        ]
    };
    var prizes = {
        prizes: [
            { year: 2017, des: '교내 해커톤 대회 3위' },
            { year: 2019, des: '교내 창의 알고리즘 대회 1위' }
        ]
    };
    var licenses = {
        licenses: [
            '리눅스 마스터 2급',
            '정보처리 산업기사',
            '컴퓨터 활용능력 2급',
            '웹디자인 기능사',
            'GTQ 2급'
        ]
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(IntroWrap_1.default, null,
            react_1.default.createElement(SkillStack_1.default, { skills: skills }),
            react_1.default.createElement(Prizes_1.default, { prizes: prizes }),
            react_1.default.createElement(Licenses_1.default, { licenses: licenses })),
        react_1.default.createElement(ContractBar_1.default, null),
        react_1.default.createElement(Footer_1.default, null)));
}
exports.default = App;
;
