import React from "react";

function Footer() {
    return (
        <footer className="footer bg-light fixed-bottom">
            <div className="text-center">
                <a href="mailto:cam.sachse1@gmail.com">
                    <img
                        src="https://img.icons8.com/ios/50/000000/apple-mail.png"
                        alt="email"
                        className="btn-floating btn-lg"
                    />
                </a>
                <a href="https://www.linkedin.com/in/cameron-sachse-33148a222/">
                    <img
                        src="https://img.icons8.com/ios/50/000000/linkedin.png"
                        alt="LinkedIn"
                        className="btn-floating btn-lg"
                    />
                </a>
                <a href="https://github.com/Csachse74">
                    <img
                        src="https://img.icons8.com/ios/50/000000/github--v1.png"
                        alt="Github"
                        className="btn-floating btn-lg"
                    />
                </a>
            </div>
        </footer>
    );
}

export default Footer;