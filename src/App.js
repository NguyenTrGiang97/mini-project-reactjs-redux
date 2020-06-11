import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import './App.scss';
import NotFound from './components/NotFound';
import Header from './components/Header';

// Lazy load - code splitting
const Photo = React.lazy(() => import('./features/Photo'))

function App() {
   return (
      <div className="photo-app">
         <Suspense fallback={<div>Loading ...</div>}>
            <BrowserRouter>
               <Header />

               <ul>
                  <li><Link to="/photos">Go To Photo Page</Link></li>
                  <li><Link to="/photos/add">Go To Add New Photo Page</Link></li>
                  <li><Link to="/photos/1">Go To Edit Photo Page</Link></li>
               </ul>

               <Switch>
                  <Redirect exact path="/" to="/photos" />

                  <Route path="/photos" component={Photo} />
                  <Route component={NotFound} />
               </Switch>

            </BrowserRouter>
         </Suspense>
      </div>
   );
}

export default App;
