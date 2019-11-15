import React from 'react';
import ContractItem from '../ContractItem/ContractItem';
import './ContractBar.scss';

function ContractBar(){
    return (
        <div className={'contract-bar'}>
            <h1>Contracts</h1>
            <div>
                <ContractItem des={'taeinchoi9166 (Sproutseed)'} name={'Github'} icon={"fab fa-github"} url={'https://github.com/taeinchoi9166'}/>
                <ContractItem des={'최태인'} name={'Facebook'} icon={"fab fa-facebook"} url={'https://www.facebook.com/profile.php?id=100010925316863&ref=bookmarks'}/>
                <ContractItem des={'taein1009@naver.com'} name={'E-Mail'} icon={"fa fa-envelope"}/>
            </div>
        </div>
    );
}

export default ContractBar;
