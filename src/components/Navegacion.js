import React from 'react';
import logo from '../logo.svg';

class Navegacion extends React.Component {
    render() {
        return (
            <div className="Navegacion">
                <nav className="navbar navbar-dark bg-dark">
                    <a href="" className="text-white">
                        {this.props.title}
                    </a>
                </nav>
            </div>
        );
    }
}

/*function Navegacion() {
    return (
        <div className="Navegacion">
            <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">
                    {this.props.title}
                </a>
            </nav>
        </div>
    );
}*/

export default Navegacion;