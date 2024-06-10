import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const movieCard = ({title, desc, posterUrl, rating}) => {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary">{rating}</Button>
      </Card.Body>
    </Card>
    )
}

export default movieCard;




