import "./about.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <div className="about page">
      <h1>About The Developers</h1>
      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./images/Eric.jpg" />
          <Card.Body>
            <Card.Title className="card">Eric Wells</Card.Title>
            <Card.Text className="card">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">
              <a href="https://github.com/dewdaddy35">Go To GitHub</a>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title className="card">Neil Tejada</Card.Title>
            <Card.Text className="card">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">
              <a href="https://github.com/NeilTejada">Go To GitHub</a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default About;
