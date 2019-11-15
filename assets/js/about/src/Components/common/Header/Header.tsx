import React, {createRef} from 'react';
import './Header.scss';

function Header(){
    const bRef : React.RefObject<HTMLDivElement> = createRef();
    const scrollScreen = () => {
        const header : HTMLDivElement | null = bRef.current;

        if(header){
            const h : number = header.offsetHeight;
            window.scrollTo({
                top: h,
                behavior: 'smooth'
            });
        }
    }
    return(
        <div className={'header'} ref={bRef}>
            <div className={'welcome-box'}>
                <div className={'welcome-msg'}> Welcome to Sproutseed!</div>
                <div className={'seed-round'}>
                    <i className="fas fa-seedling"></i>
                </div>
            </div>

            <div className={'jump-btn-wrap'}>
                <div className={'jump-btn'} onClick={scrollScreen}>
                    Learn About Me!
                </div>
            </div>
        </div>
    );
}

export default Header;
