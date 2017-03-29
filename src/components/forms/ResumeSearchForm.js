import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleInput from './SingleInput';
import { sendLogIn } from '../../actions/auth-actions';

class ResumeSearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitleToFill: '', 
            jobCompanyToFill: '',
            // THESE TWO^^ ALSO HAPPEN IN RecruiterForm.js
            jobSkills: [],
        };

        this.handleFormResumeSearch = this.handleFormResumeSearch.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFormResumeSearch(e) {
        e.preventDefault();
    /***** 
    Needs to take keyword inputs, transition to resume viewer 
    (Route to new component), and tell resume viewer what resumes
    to populate based on keywords
    *****/

        // const formPayload = {

        // };

        // this.props.signIn({ method: 'POST', path: '/signin', body: formPayload });
        this.handleFormClear(e);
    }

    handleFormClear(e) {
        e.preventDefault();
        this.setState({
            jobTitleToFill: '',
            jobCompanyToFill: '',
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
 
    render() {
        return (
            <form onSubmit={this.handleFormResumeSearch}>
                <h1>THIS IS THE RESUME SEARCH FORM</h1>
                <SingleInput
                    title={'What\'s the job?'}
                    name={'jobTitleToFill'}
                    inputType={'text'}
                    content={this.state.jobTitleToFill}
                    controlFunc={this.handleChange}
                    placeholder={'Job title'} />
                <SingleInput
                    title={'Which company?'}
                    name={'jobCompanyToFill'}
                    inputType={'text'}
                    content={this.state.jobCompanyToFill}
                    controlFunc={this.handleChange}
                    placeholder={'Company name'} />
                <SingleInput
                    title={'What skills for this job?'}
                    name={'jobSkills'}
                    inputType={'text'}
                    content={this.state.jobSkills}
                    controlFunc={this.handleChange}
                    placeholder={'Job skills'} />
                <button onClick={this.handleFormClear}>
                    Clear Form
                    </button>
                <input
                    type='submit'
                    value='submit' />
            </form>
        );
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signIn: (options) => dispatch(sendLogIn(options))
    };
}

export default connect(null, mapDispatchToProps)(ResumeSearchForm);

ResumeSearchForm.propTypes = {
    button: React.PropTypes.element,
    signIn: React.PropTypes.func
};