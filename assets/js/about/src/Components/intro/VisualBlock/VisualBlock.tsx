import React, {CSSProperties, ComponentProps, ReactElement, Component} from 'react';
import './VisualBlock.scss';


interface VisualBlockType{
    blockWidth: number;
    blockHeight: number;
}

type VisualBlockStyle = {
    width: string;
    height: string;
    margin: string;
    display: string;
}
type VisualBlockPropType = VisualBlockType | ReactElement;

function VisualBlock(props: any){
    const {blockWidth, blockHeight, children} = props;
    const blockStyle : VisualBlockStyle = {
        width: (blockWidth - 2) + '%',
        height: blockHeight - 2 + '%',
        margin: '1%',
        display: 'inline-block'
    };

    return (
        <div className={"visual-block"} style={blockStyle}>
            {children}
        </div>
    )
}

export default VisualBlock;
