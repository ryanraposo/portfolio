function Footer() {
    return (
        <footer className="footer">
            <div className="footer-copyright text-center py-3">
                <a href="https://github.com/ryanraposo" className="github social">
                    <svg width="30" height="30">       
                        <image href="/assets/images/github.svg" height="30" width="30"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/ryan-raposo/" className="linkedin social">
                    <svg width="30" height="30">       
                        <image href="/assets/images/linkedin.svg" height="30" width="30"/>
                    </svg>
                </a>
                <a href="https://stackoverflow.com/users/10915493/ryan-raposo" className="stackoverflow social">
                    <svg width="30" height="30">       
                        <image href="/assets/images/stackoverflow.svg" height="30" width="30"/>
                    </svg>
                </a>
            </div>
        </footer>
    )
}


export default Footer;