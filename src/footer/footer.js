import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import './footer.css';

export default class Footer extends React.Component{

    render(){
        return(
            <section className="footer">
               <div className="footer-section-one">
                    <div className="icon-bunch">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </div>
                    <div className="business-stuff">
                        <FontAwesomeIcon icon={['fab', 'google-plus']}/>
                        <p>&#169; Solaris LLC 2019 &#8482;Reserved</p>
                    </div>
               </div>
                <div className="bottom-nav">
                    <ul>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/">Work</Link></li>
                        <li><Link to="/About">About</Link></li>
                    </ul>
                </div>

               <div className="search-section">
                    <form>
                        <input 
                        type="email" 
                        placeholder="subscribe to our news letter"
                        id="news-letter"/>
                        <button type="submit">Sign Up</button>
                    </form>
                    <h1>SOLARIS</h1>
                    <a href="meilto:solaris@gmail.com">Solaris@gmail.com</a>

               </div>
            </section>
        );
    }
}