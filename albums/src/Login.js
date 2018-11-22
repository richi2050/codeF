import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import firebase from './initializer/firebase';

class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login(){

        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');
        firebase.auth().signInWithPopup(provider).then(result => {
            let token = result.credential.accessToken;
        }).catch( (err)=>{
            console.log(err);
        });
    }
    render() {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.login}>
                    Login
                </Button>
            </div>
        );
    }
}

export default Login;