import React from 'react';

const Footer = (props) => {
    return (
        <React.Fragment>
            <div className="position-relative" style={{marginTop: '5rem'}}>
                <div className="shape shape-bottom shape-fluid-x svg-shim text-gray-200">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="#f1f4f8"></path>
                    </svg>
                </div>
            </div>
            <footer className="py-7" style={{backgroundColor: "#f1f4f8"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-3">
                            <h4 className="text-primary font-weight-bold">Sitecore JSS.</h4>
                            <p className="mb-2 text-muted">
                                Use the latest JavaScript <br/> 
                                frameworks combined with the <br />
                                power of an enterprise backend.
                            </p>
                        </div>
                        
                        <div className="col-6 col-md-4 col-lg-2">
                            <h6 className="footer-title">Getting Started</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2 mb-lg-2">
                                    <a className="text-500 text-decoration-none" href="https://jss.sitecore.com/docs/getting-started/quick-start">
                                        Quick Start
                                    </a>
                                </li>
                                <li className="mb-2 mb-lg-2">
                                    <a className="text-500 text-decoration-none" href="https://jss.sitecore.com/docs/getting-started/first-component">
                                        Your first component
                                    </a>
                                </li>
                                <li className="mb-2 mb-lg-2">
                                    <a className="text-500 text-decoration-none" href="https://jss.sitecore.com/docs/getting-started/jss-server-install">
                                        JSS Server Setup
                                    </a>
                                </li>
                                <li className="mb-2 mb-lg-2">
                                    <a className="text-500 text-decoration-none" href="https://jss.sitecore.com/docs/getting-started/app-deployment">
                                        Deployment
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <h6 className="footer-title">Fundamentals</h6>
                            <ul className="list-unstyled mb-6 mb-md-4 mb-lg-0">
                                <li className="mb-2 mb-lg-2">
                                    <a className="text-500 text-decoration-none" href="https://jss.sitecore.com/docs/fundamentals/architecture">
                                        Architecture
                                    </a>
                                </li>
                                <li className="mb-2 mb-lg-2">
                                    <a className="text-500 text-decoration-none" href="https://jss.sitecore.com/docs/fundamentals/understanding-layout">
                                        Understanding Layout
                                    </a>
                                </li>
                                <li className="mb-2 mb-lg-2">
                                    <a className="text-500 text-decoration-none" href="https://jss.sitecore.com/docs/fundamentals/personalization">
                                        Personalization
                                    </a>
                                </li>
                                <li className="mb-2 mb-lg-2">
                                    <a className="text-500 text-decoration-none" href="https://jss.sitecore.com/docs/fundamentals/application-modes">
                                        Application Modes
                                    </a>
                                </li>
                                <li>
                                    <a className="text-500 text-decoration-none" href="https://jss.sitecore.com/docs/fundamentals/cli">
                                        JSS CLI
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <h6 className="footer-title">Advanced</h6>
                            <ul className="list-unstyled mb-6 mb-md-4 mb-lg-0">
                                <li className="mb-2 mb-lg-2">
                                    <a className="text-500 text-decoration-none" href="https://jss.sitecore.com/docs/techniques/mvc-integration/javascript-rendering">
                                        MVC Integration
                                    </a>
                                </li>
                                <li className="mb-2 mb-lg-2">
                                    <a className="text-500 text-decoration-none" href="https://jss.sitecore.com/docs/techniques/content-translation">
                                        Translations
                                    </a>
                                </li>
                                <li className="mb-2 mb-lg-2">
                                    <a className="text-500 text-decoration-none" href="https://jss.sitecore.com/docs/techniques/forms">
                                        Sitecore Forms
                                    </a>
                                </li>
                                <li>
                                    <a className="text-500 text-decoration-none" href="https://jss.sitecore.com/docs/techniques/dynamic-placeholders">
                                        Dynamic Placeholders
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment >
    );
}

export default Footer;