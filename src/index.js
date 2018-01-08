import React from 'react';
import ReactDOM from 'react-dom';
import {Link,Route,BrowserRouter,Redirect} from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import login from './login';

ReactDOM.render((
        <BrowserRouter>
                <div>
                    <Route path='/login' exact component={login}></Route>
                    <Redirect to='/login'></Redirect>
                </div>
        </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
