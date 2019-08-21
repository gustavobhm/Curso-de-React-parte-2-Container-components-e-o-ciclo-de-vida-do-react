import { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Logout extends Component {

    UNSAFE_componentWillMount() {
        localStorage.removeItem('auth-token');
        browserHistory.push('/');
    }

    render() {
        return null;
    }
}