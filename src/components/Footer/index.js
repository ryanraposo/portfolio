function Footer() {
    return (
        <footer className="footer">
            <div className="footer-copyright text-center py-3">
                <a href="https://github.com/ryanraposo" className="github social">
                    <svg width="30" height="30">       
                        <image href={require("../../assets/images/github.svg").default} height="30" width="30"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/ryan-raposo/" className="linkedin social">
                    <svg width="30" height="30">       
                        <image href={require("../../assets/images/linkedin.svg").default} height="30" width="30"/>
                    </svg>
                </a>
                <a href="https://stackoverflow.com/users/10915493/ryan-raposo" className="stackoverflow social">
                    <svg width="30" height="30">       
                        <image href={require("../../assets/images/stackoverflow.svg").default} height="30" width="30"/>
                    </svg>
                </a>
            </div>
        </footer>
    )
}


export default Footer;