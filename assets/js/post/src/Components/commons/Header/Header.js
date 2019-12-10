import {createRef} from 'react';
import './Header.css';


function Header(){
    const headerRef = createRef();

    const minimizeHeader = () => {
        const scrollTop = window.scrollY;
        const _style = headerRef.current.style;
        console.log(scrollTop);

        if(scrollTop >= 40) {
            _style.height = '60px';
            _style.backgroundColor = 'rgba(235,235,235, 1)';
        }else{
            _style.height = '120px';
            _style.backgroundColor = 'rgba(235,235,235, 0.5)';
        }
    };

    window.addEventListener('scroll', minimizeHeader);

    return (
      <header>
          <div className="header-wrap" ref={headerRef}>
              <div className="title">
                  <h1>SproutSeed의 정신나간 기록</h1>
              </div>
              <div className="header-menu">
                  <input type="checkbox" id={"header-menu-toggle"}/>
                  <label htmlFor="header-menu-toggle">

                  </label>
                  <div className="header-menu-wrap">
                      <div className="header-menus">
                          <a href="/post" className="item"><span>포스팅 목록 보기</span></a>
                          <a href="/" className="item"><span>홈 화면으로</span></a>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    );
}

export default Header;
