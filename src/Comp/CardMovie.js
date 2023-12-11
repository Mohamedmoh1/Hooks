import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardMovie=({el})=>{
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.posterURL} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          {el.description}
        </Card.Text>
        <Button variant="primary">Watch Movie</Button>
      </Card.Body>
    </Card>
    )
}

export default CardMovie