import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Style.scss';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const responseGoogle = (response) => {
  console.log(response);
}

const responseFacebook = (response) => {
  console.log(response);
}



function App() {
  return  <div className='wrapper'>
    
    <div className='signupform'>
    <img src="/images/download.png" alt=""/>
      <form>
         <h1>SIGN UP</h1>
        <h2>Create your account</h2>


      {/*Google Login Authentication*/}
       <div> <GoogleLogin
    clientId="934092587415-6cssadt362nsb39m7jholf2ll7rg3grt.apps.googleusercontent.com"
    buttonText="Sign Up with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  /></div>

    {/*Facebook Login Authentication*/}
    <div>
  <FacebookLogin
    appId="334321184501517"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    buttonText="Sign Up with Facebook"
    icon="fa-facebook"
    

  />

  {/*SignUp form data fields*/}
  </div>
  <text>--------------------------------------------------OR-------------------------------------------------</text>
        <div> 
          <input type='firstname' placeholder='First Name'/>
        </div>
        <div>
        <input type='lastname' placeholder='Last Name'/>
        </div>
        <div>
          <input type='email' placeholder='Email Address'/>
        </div>
        <div>
          <input
           type='password' 
           placeholder='Password'></input></div>
           
       <text>By clicking Sign Up, you agree to our <a href='0'>Terms of Use</a> and our <a href='0'>Privacy Policy</a>. </text>
       
       
       {/*Signup Button*/} 
       <div>
          <button>SIGN UP</button>
        </div>


        
      </form>
    </div>
  </div>;
}

export default App;
