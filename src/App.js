import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import RecruiterForm from './components/forms/RecruiterForm';
import TalentForm from './components/forms/TalentForm';
import SignInForm from './components/forms/SignInForm';
import ResumeDisplay from './components/resume-display/ResumeDisplay';
import Profile from './components/profile/Profile';
import HowItWorks from './components/home/HowItWorks';

function App() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/recruitersignup' component={RecruiterForm} />
            <Route exact path='/talentsignup' component={TalentForm} />
            <Route exact path='/signin' component={SignInForm} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/howitworks' component={HowItWorks} />
            <Route exact path='/resume-display' component={ResumeDisplay} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;
