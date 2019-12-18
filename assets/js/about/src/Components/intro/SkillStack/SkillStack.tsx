import React, {createRef, RefObject, useEffect} from 'react';
import VisualBlock from '../VisualBlock/VisualBlock';
import './SkillStack.scss';

type SkillStackItemType = {
    name: string,
    score: number
}

type SkillDisplayItem = {
    curRef: RefObject<SVGCircleElement>,
    score: number
}

interface SkillStackProps{
    skills: {
        skills: Array<SkillStackItemType>
    }
}

function increaseChart(refs: Array<SkillDisplayItem>) : any {
    if(window.scrollY >= 630){
        for(const ref of refs){
            const circle = ref.curRef.current;

            if(circle){
                circle.style.strokeDashoffset = ((100 - ref.score) / 100 * 377).toString();
            }
        }
    }

    return false;
}

function SkillStack(props: SkillStackProps){
    const {skills : data} = props;

    const refs : Array<SkillDisplayItem> = [];
    for(let n : number = 0; n < data.skills.length; n++){
        console.log(n);
        refs.push({
            curRef: createRef<SVGCircleElement>(),
            score: data.skills[n].score
        });
    }

    useEffect(() => {
        window.addEventListener('load', function(){
            increaseChart(refs);
        });
        window.addEventListener('scroll', function(){
            increaseChart(refs);
        });

    },[]);

    return (
        <VisualBlock blockHeight={50} blockWidth={50}>
            <h2>기술 스택</h2><br/>
            <div className={'my-skills'}>
                <div className={'skill-list'}>
                {
                    data.skills.map((skill : SkillStackItemType, index : number) => (
                        <div className={'skill-item'} >
                            <svg width={"150"} height={"150"}>
                                <circle cx={"75"} cy={"75"} r={'60'} stroke={'#3fb776'} stroke-width={'15'} fill={'transparent'} ref={refs[index].curRef}></circle>
                            </svg>
                            <div className={'skill-name'}>{skill.name}</div>
                        </div>
                    ))
                }
                </div>
            </div>
        </VisualBlock>
    );
}

export default SkillStack;
