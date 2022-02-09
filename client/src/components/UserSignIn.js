import React from 'react';
import { Link } from 'react-router-dom';
//import Form from './Form';

const UserSignIn = () => {
  return (
    <div id="root">
        <div className="form--centered">
        <h2>Sign In</h2>        
        {/* <Form 
            cancel={this.cancel}
            errors={'errors'}
            submit={this.submit}
            submitButtonText="Sign In"
            elements={() => (
              <React.Fragment>
                <input 
                  id="username" 
                  name="username" 
                  type="text"
                  value={''} 
                  onChange={this.change} 
                  placeholder="User Name" />
                <input 
                  id="password" 
                  name="password"
                  type="password"
                  value={''} 
                  onChange={this.change} 
                  placeholder="Password" />                
              </React.Fragment>
        )} /> */}
          <p>
            Don't have a user account? <Link to="/signup">Click here</Link> to sign up!
          </p>
    </div>
</div>     
   

  );
}

export default UserSignIn