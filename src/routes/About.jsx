import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

const divStyle = {
    color:'white'
};

class About extends React.Component {
    
    render() {
        return (
            <div>
                <h2>About Page</h2>
                <main>
                    <p>This section contains information about...</p>
                    <Link to="/">voltar a home</Link>
                </main>
            </div>
        )
    }
}



export default About;