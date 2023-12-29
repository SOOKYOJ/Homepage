import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <Card style={{ width: '13vw', marginTop: '15px' }}>
      <Card.Img variant="top" src={props.img} style={{ height: '25vh' }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">Go Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
