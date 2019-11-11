import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Contact extends Component {
    render() {
        return(
            <Grid className="contact-grid">
                <Cell className="contact-left-col" col={6}>
                    <br/><br/>
                    <h1>Contact on any platform</h1>
                    <br/>
                    <h5>I am current seeking an internship in software development. I and extremely excited to work on a team that will challenge me 
                        to learn new technologies and increase my knowledge.
                    </h5>
                </Cell>

                <Cell className="contact-right-col" col={6}>

                </Cell>
            </Grid>
        )
    }
}

export default Contact;