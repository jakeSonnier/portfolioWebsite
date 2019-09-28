import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Contact extends Component {
    render() {
        return(
            <Grid className="contact-grid">
                <Cell col={12}>
                    <div><h1>Contact Page</h1></div>
                </Cell>
            </Grid>
        )
    }
}

export default Contact;