import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import './Other.css';

function Other(){
    return(
        <section className="other-collabs">
            <h3>Here's a few other brands to make<br/> 
            known intriguing missions.</h3>
            <p>
                <FontAwesomeIcon icon={['fab', 'snapchat']} />
                <FontAwesomeIcon icon={['fab', 'google']} />
                <FontAwesomeIcon icon={['fab', 'xbox']} />
                <FontAwesomeIcon icon={['fab', 'snapchat']} />
                <FontAwesomeIcon icon={['fab', 'google']} />
                <FontAwesomeIcon icon={['fab', 'xbox']} />
                <br/>
                <FontAwesomeIcon icon={['fab', 'snapchat']} />
                <FontAwesomeIcon icon={['fab', 'google']} />
                <FontAwesomeIcon icon={['fab', 'microsoft']} />
                <FontAwesomeIcon icon={['fab', 'apple']} />
            </p>
            <hr/>
            <h2>Let's talk</h2>
            <Link id="drop-message" to="/message">Drop Us A Message</Link>
        </section>
    );
}

export default Other;