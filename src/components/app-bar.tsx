import * as React from 'react';
import './app-bar.css';
import { Link } from 'react-router-dom';

class AppBar extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="ibm__app-bar">
                <div className="ibm__app-bar-row">
                    <div className="ibm__app-bar-section">
                        <a href="https://www.ibm.com/au-en/?lnk=m" target="_blank" className="ibm__ibm-logo-link" />
                    </div>
                </div>
                <div className="ibm__app-bar-row">
                    <Link to="/" className="ibm__app-bar-section ibm__flex-150">
                        <div className="ibm__type-header">
                            <b>IBM Cloud</b> Garage Melbourne
                    </div>
                        <div className="ibm__hover-border" />
                    </Link>
                    {/**<div className="ibm__app-bar-section">
                        <div className="ibm__type-header">
                            Future Workshop
                    </div>
                        <div className="ibm__hover-border" />
                    </div>
                    <Link to="/" className="ibm__app-bar-section">
                        <div className="ibm__type-header">
                            Future Exhibition
                    </div>
                        <div className="ibm__hover-border" />
                    </Link>
        **/}
                    <div className="ibm__app-bar-section ibm__align-self-right">
                        <Link to="/register" className="ibm__primary-button ibm__type-button">
                            Register
                    </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppBar;
