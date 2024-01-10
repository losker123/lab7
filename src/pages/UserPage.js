import React, { useState } from 'react';
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';

const UserProfile = () => {
  const initialUser = {
    name: 'Анна Смит',
    bio: 'Frontend Developer | Путешественник | Любитель кофе ☕️',
    profileImage: 'https://ladymega.ru/wp-content/uploads/2021/04/5645666.jpg',
    email: 'anna.smith@example.com',
    location: 'Нью-Йорк, США',
  };

  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const [tempImage, setTempImage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setTempImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, profileImage: tempImage || user.profileImage });
    console.log('Обновленные данные пользователя:', user);
    setIsEditing(false);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={4} className="text-center">
          <Image src={tempImage || user.profileImage} alt="Фото профиля" roundedCircle fluid style={{ width: '400px', height: '400px' }} />
          {isEditing && (
            <Form.Group controlId="formImage">
              <Form.Label>Изменить фото профиля</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>
          )}
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              {!isEditing ? (
                <>
                  <Card.Title>
                    <h2>{user.name}</h2>
                  </Card.Title>
                  <Card.Text>{user.bio}</Card.Text>
                  <Card.Text>Email: {user.email}</Card.Text>
                  <Card.Text>Местоположение: {user.location}</Card.Text>
                  <Button variant="primary" onClick={handleEdit}>
                    Изменить
                  </Button>
                </>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type="text" placeholder="Введите имя" name="name" value={user.name} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group controlId="formBio">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Введите описание" name="bio" value={user.bio} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Введите email" name="email" value={user.email} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group controlId="formLocation">
                    <Form.Label>Местоположение</Form.Label>
                    <Form.Control type="text" placeholder="Введите местоположение" name="location" value={user.location} onChange={handleChange} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Сохранить изменения
                  </Button>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
