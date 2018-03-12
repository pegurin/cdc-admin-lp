import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AutorBox from './Autor';
import LivroBox from './Livro';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

ReactDOM.render(
    (<Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/autor" component={AutorBox}/>
                <Route exact path="/livro" component={LivroBox}/>
            </Switch>
        </App>
    </Router>),
    document.getElementById('root')
);
