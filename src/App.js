import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import RecruiterForm from './components/forms/RecruiterForm';
import TalentForm from './components/forms/TalentForm';
import SignInForm from './components/forms/SignInForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: 'PRESENT FOR BACKEND DEVS', 
            recruiter: {},
            talent: {},
        };
    }

    render() {
        return (
          <Router>
            <div>
              <Route exact path='/' render={(props) => <Home {...props} />} />
              <Route exact path='/recruitersignup' render={(props) => <RecruiterForm {...props} />  } />
              <Route exact path='/talentsignup' render={(props) => <TalentForm {...props} />  } />
              <Route exact path='/signin' render={(props) => <SignInForm {...props} button={<button>sign in/out</button>} />  } />
            </div>
          </Router>
        );
    }
  }

export default App;
