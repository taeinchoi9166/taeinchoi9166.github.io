import React, {ReactChildren} from 'react';
import './IntroWrap.scss';

function IntroWrap(props: { children: any; }){
    const c = props.children;
    return(
        <div className="intro-wrap">
            {c}
        </div>
    );
}

export default IntroWrap;
