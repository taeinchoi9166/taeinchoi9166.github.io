import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function ReactTemplate({children}){
    window.addEventListener('click',function (e) {
        //e.preventDefault();
        let _ = e.target;
        for(;!_.matches('body'); _ = _.parentNode){
            console.log(_);
            if(_.classList.contains('header-menu')){
                return;
            }
        }
        console.log(document.body.querySelector('#header-menu-toggle').checked);
        document.body.querySelector('#header-menu-toggle').checked = false;
    });

    return (
        <>
            <Header/>
            <div className={"container"}>
                {children}
            </div>
            <Footer/>
        </>
    );
}

export default ReactTemplate;
