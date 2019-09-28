import React, { Component } from 'react';
import { Grid, Cell, Textfield, Button } from 'react-mdl';


class Contact extends Component {
    render() {
        return(
            <Grid className="contact-grid">
                <Cell col={12}>

                    <div>

                        <h1>Contact Me</h1>

                    </div>

                    <div>
                        <div>
                            {/* Name textfield */}
                            <Textfield
                                onChange={() => {}}
                                label="Name..."
                                style={{width: '400px'}}
                            />
                        </div>

                        <div>
                            {/* Email textfield */}
                            <Textfield
                                onChange={() => {}}
                                label="Email..."
                                style={{width: '400px'}}
                            />
                        </div>

                        <div>
                            {/* Message textfield */}
                            <Textfield
                                onChange={() => {}}
                                label="Message..."
                                style={{width: '800px', opacity: '.9'}}
                                rows={10}
                            />
                        </div>

                        <div>
                            {/* Raised button with ripple */}
                            <Button raised ripple>Send</Button>
                        </div>

                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Contact;