import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import ImageSelect from '../pages/ImageSelect';
import Success from '../pages/Success';

const Routes = (props) => {
  const prepped = () => {
    return (
      <ImageSelect handler={props.handler.bind(this)} />
    );
  };

  return (
    <Router>
      <div>
        <Route exact path="/" component={prepped} />
        <Route path="/sent" component={Success} />
      </div>
    </Router>
  );
};

export default Routes
