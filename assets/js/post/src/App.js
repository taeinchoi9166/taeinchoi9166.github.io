//import {hot} from 'react-hot-loader/root';
import ReactTemplate from './Components/commons/ReactTemplate/ReactTemplate';
import PostItemContainer from './Components/containers/PostItemContainer';
import PostListContainer from './Components/containers/PostListContainer';
import './App.css';
import './common/common.css';

function App(){
    let _app = (
        <div>
            404 not found.
        </div>
    );

    if(react_mode){
        if(react_mode === "list") _app = (
            <ReactTemplate>
                <PostListContainer/>
            </ReactTemplate>
        );
        else if(react_mode === "item") _app = (
            <ReactTemplate>
                <PostItemContainer/>
            </ReactTemplate>
        );
    }

    return _app;
}

export default App;
