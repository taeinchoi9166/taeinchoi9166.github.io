import React from 'react';
import './Prizex.scss';
import VisualBlock from '../VisualBlock/VisualBlock';

interface PrizeType{
    des: string;
    year: number;
}

interface PrizePropType {
    prizes: {
        prizes: Array<PrizeType>
    }
}

function Prizes(props: PrizePropType){
    const {prizes} = props.prizes;
    return (
        <VisualBlock blockWidth={50} blockHeight={25}>
            <div className={'prizes'}>
                <h2>수상 경력</h2><br/>

                <ul className={'prize-list'}>
                    {
                        prizes.map(prize => (
                            <li>
                                <i className="fas fa-medal"></i> <b>{prize.year}</b>&nbsp;<span>{prize.des}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </VisualBlock>
    );
}

export default Prizes;

