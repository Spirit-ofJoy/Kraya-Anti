import React from 'react';
import { Component } from 'react';

import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="display-container">
                <div className='light x1'></div>
                <div className='light x2'></div>
                <div className='light x3'></div>
                <div className='light x4'></div>
                <div className='light x5'></div>
                <div className='light x6'></div>
                <div className='light x7'></div>
                <div className='light x8'></div>
                <div className='light x9'></div>

                <div className="content-container">
                    <div className="home-container">
                        <div className="home-content">
                            <div className="home-card">
                                <div className="home-subcard-1">
                                    <div className="details">
                                        <div className="center">
                                            <h1>Sign-In with an existing account<br /></h1>
                                            <button type="button" class="btn btn-outline-dark"  id="home-login-btn">Proceed to Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-card">
                                <h6>Hi click this shit.</h6>
                                
                            </div>
                        </div>

                        <div className="home-flap"></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;

