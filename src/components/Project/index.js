import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Project({ name, description, image, link }) {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="primary" href={link}>GitHub</Button>
          </Card.Body>
        </Card>
    );
}


export default Project;