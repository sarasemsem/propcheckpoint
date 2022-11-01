import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Profile({ name,profession,bio,image}) 
{
      const handleClick= e =>{
        e.preventDefault();
        alert("my name is",{name});
      };

    return (
<Card style={{ width: '18rem',alignItems: 'center' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Nom & prénom</Card.Title>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {profession} {bio}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Click me</Button>
      </Card.Body>
</Card>



    )
}


