import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="position-sticky">
        <span>
          &#169; 2019-2020 Matt Dambra &nbsp; &nbsp; &nbsp;
          <a
            className="li-ic"
            href="https://www.linkedin.com/in/mattdambra/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin-in fa-lg black-text mr-md-3 mr-3 fa-2x">
              {" "}
            </i>
          </a>
          <a
            className="ins-ic"
            href="https://github.com/superrmatt"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github fa-lg white-text mr-md-3 mr-3 fa-2x">
              {" "}
            </i>
          </a>
         
        </span>
      </div>
    </footer>
  );
}

export default Footer;
