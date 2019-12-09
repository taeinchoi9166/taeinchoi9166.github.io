import React from 'react';

function App(){
    if(react_mode){
        if(react_mode === "list") return (
            <div>
                list
            </div>
        );
        if(react_mode === "item") return (
            <div>
                <h1>{title}</h1>
                <p>
                    {content}
                </p>
            </div>
        );
    }else return (
        <div>
            404.
        </div>
    );
}

export default App;
