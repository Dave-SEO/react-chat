import React from 'react';
import ReactDOM from 'react-dom';
import {Link,Route,BrowserRouter,Redirect} from 'react-router-dom';
import {compose,applyMiddleware,createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import login from './login';
import reducer from './reducers';
const store = createStore(reducer,compose(
        applyMiddleware(thunk),
        window.devToolsExtension?window.devToolsExtension():()=>{}
));
ReactDOM.render((
        <Provider store={store}>
                <BrowserRouter>
                        <div>
                        <Route path='/login' exact component={login}></Route>
                        <Redirect to='/login'></Redirect>
                        </div>
                </BrowserRouter> 
        </Provider>), document.getElementById('root'));
registerServiceWorker();
