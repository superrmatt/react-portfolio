import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/Form";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";

function Contact() {
  const style = {
    textstyle: {
      textAlign: "center"
    }
  };
  return (
    <div>
      <Jumbotron />
      <Wrapper>
        <Container>
          <Row>
            <Col size="lg-2 sm-12">
              <Navbar />
            </Col>

            <Col size="lg-6 sm-12">
              <h2>Contact Info</h2>
              <hr />
              <Form />
            </Col>
            <Col size="lg-4 sm-12" style={style.textstyle}>
              <h5>Connect with me:</h5>
              <hr />
              <i className="fas fa-mobile-alt"></i> (845) 492-9297 <br />
              <br />
              <i className="far fa-envelope"></i> mpdambra@gmail.com{" "}
              <br />
              <br />
              <a
                href="https://github.com/superrmatt"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github fa-lg white-text mr-md-3 mr-3 fa-2x" />
                Github
              </a>
              <br />
              <br />
              <div
                className="LI-profile-badge"
                data-version="v1"
                data-size="medium"
                data-locale="en_US"
                data-type="horizontal"
                data-theme="dark"
                data-vanity="-palumbo"
              >

                <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="mattdambra">
                  <a class="LI-simple-link" href='https://www.linkedin.com/in/mattdambra?trk=profile-badge' alt="https://linkedin.com/in/mattdambra">Matt Dambra</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Contact;
