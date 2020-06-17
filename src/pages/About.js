import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Headshot from "../images/headshot.png";
import grad from "../images/grad.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";

function About() {
  const style = {
    fontColor: {
      color: "#a79b43"
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
            <Col size="lg-10 sm-12">
              <h2>Bio</h2>
              <hr />

              <p>
                <img src={Headshot} className="bio-imgs" alt="headshot" />
                &nbsp;&nbsp; &nbsp;&nbsp; As a software developer, I love few things more than finding elegant, algorithmic solutions to complex problems.
              </p>
              <p>
                &nbsp;&nbsp; &nbsp;&nbsp; As a professional with a background in cyberseucrity, I strive to ensure the inteigrity, privacy, and security of data, applications, and their users.
              </p>
              <p>
                &nbsp;&nbsp; &nbsp;&nbsp; As an avid outdoorsman, I spend most weekends away pursuing the next outdoor thrill; be it kayaking the many rivers and lakes, or pitching a tent at a local campsite with some friends.
              </p>
              <p>
                &nbsp;&nbsp; &nbsp;&nbsp;As an amateur historian, I love revealing bits and pieces of the story we all collectively share to others around me.
              </p>
              <p>
                &nbsp;&nbsp; &nbsp;&nbsp;As a musician, I enjoy bringing people together to revel in what we love most: the little things.
              </p>
              <p>
                &nbsp;&nbsp; &nbsp;&nbsp;My programming career started at the age of fifteen, in highschool, when I decided to take a c++ programming course offered through SUNY Albany. I instantly fell in love. I have since pursued a degree in computer science at the University at Buffalo. In 2015 I transferred to SUNY Plattsburgh, with the goal to further hone my CS degree into a computer security degree. In May, 2017 I graduated from SUNY Plattsburgh with a BS in Computer Security, with concentrations in intrusion detection, and cyber threat analysis modeling, with honors.
                <img className="grad" src={grad} alt="Graduation" />
              </p>
              <p>
                {" "}
                &nbsp;&nbsp; &nbsp;&nbsp; In 2019, I decided to pursue a web development based coding bootcamp. The original draw was to vary my skillset from algorithmic, software solutions to add some web solutions as well. As time went on, I learned to love web development, just as I learned to love c++, all those years ago in 2010. I graduated in May, 2020, during the COVID-19 pandemic, with a whole host of new tools & technologies at my disposal.
              </p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default About;
