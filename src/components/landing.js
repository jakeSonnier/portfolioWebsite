import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Computer Science Student</h1>

                            <hr/>

                            <p>INSERT SOME STUFF HERE</p>

                            <div className="social-links">
                                
                                {/* Linkedin */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* GitHub */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-github-square" aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;