import "./about.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <div className="about page">
      <h1>About Us!</h1>
      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./images/Eric.jpg" />
          <Card.Body>
            <Card.Title>Eric Wells</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="light">Go Somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Neil Tejada</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="light">Go Somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default About;
