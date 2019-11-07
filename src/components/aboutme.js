import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
    render() {
        return(
            <Grid className="aboutme-grid">
                <Cell className="aboutme-left-col" col={8}>
                    <div>
                        
                        <h3>Hello!</h3>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                            <br/><br/>
                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                            <br/><br/>
                            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                        
                    </div>
                </Cell>

                <Cell className="aboutme-right-col" col={4}>
                        <img
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                </Cell>

            </Grid>
        )
    }
}

export default About;