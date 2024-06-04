import { Col, Container, Row } from "react-bootstrap";
import { NavBar } from "../components/NavBar";

import jsicon from "../assets/img/icons8-javascript-48.png";
import tsicon from "../assets/img/icons8-typescript-64.png";
import htmlicon from "../assets/img/icons8-html-64.png";
import bootstrapicon from "../assets/img/icons8-bootstrap-48.png";
import pythonicon from "../assets/img/icons8-python-48.png";
import javaicon from "../assets/img/icons8-java-48.png";
import csicon from "../assets/img/icons8-cs-64.png";
import viteicon from "../assets/img/icons8-vite-48.png";

export default function SkillsPage() {
  return (
    <>
      <NavBar />
      <section>
        <Container className="banner">
          <Row>
            <h1>My skills</h1>
            <h4 className="mb-5">
              Although I'm still only a beginner I already had a chance to tried
              my hand at some popular programming languages and technologies.
              For example:
            </h4>
          </Row>

          <Row>
            <Col>
              <h2>
                <img className="icon" src={jsicon} alt="cos" />
                JavaScript
              </h2>
              <h2>
                <img className="icon" src={tsicon} alt="cos" />
                TypeScript
              </h2>
              <h2>
                <img className="icon" src={htmlicon} alt="cos" />
                HTML
              </h2>
              <h2>
                <img className="icon" src={bootstrapicon} alt="cos" />
                Bootstrap
              </h2>
            </Col>
            <Col>
              <h2>
                <img className="icon" src={viteicon} alt="cos" />
                Vite
              </h2>
              <h2>
                <img className="icon" src={pythonicon} alt="cos" />
                Python
              </h2>

              <h2>
                <img className="icon" src={javaicon} alt="cos" />
                Java
              </h2>
              <h2>
                <img className="icon" src={csicon} alt="cos" />
                C#
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
