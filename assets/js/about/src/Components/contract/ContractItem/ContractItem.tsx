import React, {createRef, RefObject} from 'react';
import './ContractItem.scss';

interface ContractItemType {
    des: string,
    name: string,
    icon: string,
    url?: string
}

function ContractItem(props: ContractItemType){
    const {des, name, icon, url} = props;
    const bRef : RefObject<HTMLDivElement> = createRef<HTMLDivElement>();

    const showBalloon = () : void => {
        const target : HTMLDivElement | null = bRef.current;
        if(target){
            target.style.transform = 'scale(0.9)';
        }
    };

    const hideBalloon = () : void => {
        const target : HTMLDivElement | null = bRef.current;
        if(target){
            target.style.transform = 'scale(0)';
        }
    };

    return (
        <div className={'contract-item'}>
            <div className={'contract-balloon'} ref={bRef}>
                {des}
            </div>
            <a href={url || '#'} onMouseOver={showBalloon} onMouseOut={hideBalloon}>
                <div className={'contract-icon'}>
                    <i className={icon}/>
                </div>
                <div className={'contract-name'}>
                    {name}
                </div>
            </a>

        </div>
    );
}

export default ContractItem;
