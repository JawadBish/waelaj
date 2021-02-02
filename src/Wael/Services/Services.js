
import React, { Component } from 'react';
import '../wael.css';

import {
    FaFacebook,
    FaLinkedin,
    FaGithub
  } from 'react-icons/fa';
  import {
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink,
  } from "../Footer/FooterElemens";


class Services extends Component {

    render() {
        return (
            <div className="wrapper-services">
             
                <div className="contact-info">
                    <h1> ~ Portraits </h1>
                    <h1> ~ Private Sessions</h1>
                    <h1> ~ Parties and Occasions </h1>
                    <h1> ~ Musical and Theater Shows</h1>
                    <a href="/contact"> Contact Me Now!</a>
                    </div>
                    </div>
                      
         
        )
    }
};

export default Services;
