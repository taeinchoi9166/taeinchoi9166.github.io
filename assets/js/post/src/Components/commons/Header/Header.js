import {createRef} from 'react';
import './Header.css';


function Header(){
    const headerRef = createRef();

    const minimizeHeader = () => {
        const scrollTop = window.scrollY;
        const _style = headerRef.current.style;

        if(scrollTop >= 50) {
            _style.height = '70px';
          //  _style.backgroundColor = 'rgba(235,235,235, 0.5)';
        }else{
            _style.height = '150px';
          //  _style.backgroundColor = 'rgba(235,235,235, 0.5)';
        }
    };

    window.addEventListener('scroll', minimizeHeader);

    return (
      <header>
          <div className="header-wrap" ref={headerRef}>
              <div className="title">
                  <a href="/post">
                    <h1>SproutSeed's Blog</h1>
                  </a>
              </div>
          </div>
      </header>
    );
}

export default Header;
