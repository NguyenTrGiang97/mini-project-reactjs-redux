import React from 'react';
import PropTypes from 'prop-types';
import NotFound from '../../components/NotFound';
import AddEditPage from './pages/AddEdit';
import MainPage from './pages/Main';
import {Route, Link, useRouteMatch, Switch} from 'react-router-dom';


Photo.propTypes = {
    
};

function Photo(props) {
    const match = useRouteMatch();
    console.log(match);
    
    return (        
        <Switch>
            <Route exact path={match.url} component={MainPage} />  
        
            <Route path={`${match.url}/add`} component={AddEditPage} />   
            <Route path={`${match.url}/:photoId`} component={AddEditPage} />

            <Route component={NotFound} />   
        </Switch>
    );
}

export default Photo;