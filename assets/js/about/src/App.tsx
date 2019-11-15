import './index';
import './App.scss';
import React from 'react';
import Header from './Components/common/Header/Header';
import IntroWrap from './Components/intro/IntroWrap/IntroWrap';
import SkillStack from './Components/intro/SkillStack/SkillStack';
import Prizes from './Components/intro/Prizes/Prizes';
import Licenses from './Components/intro/Licenses/Licenses';
import ContractBar from './Components/contract/ContractBar/ContractBar';
import Footer from './Components/common/Footer/Footer';

// @ts-ignore
import spring from './assets/images/skill_stack/spring.png';
// @ts-ignore
import java from './assets/images/skill_stack/java.png';
// @ts-ignore
import nodejs from './assets/images/skill_stack/nodejs.png';

// @ts-ignore
import react from './assets/images/skill_stack/react.png';
// @ts-ignore
import arduino from './assets/images/skill_stack/arduino.jpg'
// @ts-ignore
import android from './assets/images/skill_stack/android.png';

export default function App(){
    const skills = {
        skills: [
            {name:'spring', score: 70},
            {name:'java', score: 80},
            {name:'node.js', score: 85},
            {name:'react', score: 90},
            {name:'c', score: 60 },
            {name:'android', score: 70}
        ]
    };
    const prizes = {
        prizes : [
            {year: 2017, des: '교내 해커톤 대회 3위'},
            {year: 2019, des: '교내 창의 알고리즘 대회 1위'}
        ]
    };
    const licenses = {
        licenses: [
            '리눅스 마스터 2급',
            '정보처리 산업기사',
            '컴퓨터 활용능력 2급',
            '웹디자인 기능사',
            'GTQ 2급'
        ]
    };


    return (
        <>
            <Header/>
            <div className="container">
                <IntroWrap>
                    <SkillStack skills={skills}/>
                    <Prizes prizes={prizes}/>
                    <Licenses licenses={licenses}/>
                </IntroWrap>
                <ContractBar/>
            </div>
            <Footer/>
        </>
    );
};
