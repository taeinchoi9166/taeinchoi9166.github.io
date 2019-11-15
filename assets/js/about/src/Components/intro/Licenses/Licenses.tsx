import React from 'react';
import './Licenses.scss';
import VisualBlock from '../VisualBlock/VisualBlock';

interface LicensesPropType {
    licenses:{
        licenses: Array<string>
    }
}

function Licenses(props: LicensesPropType){
    const {licenses} = props.licenses;
    return (
        <VisualBlock blockWidth={50} blockHeight={33}>
            <div className={'licenses'}>
                <h2>자격증</h2>
                <ul>
                    {
                        licenses.map(license => (
                            <li>{license}</li>
                        ))
                    }
                </ul>
            </div>
        </VisualBlock>
    );
}

export default Licenses;
