import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchForm from '../../common/searchForm/search-form.component';
import Games from '../../common/games/games.component';
import Container from 'react-bootstrap/Container';

const HomePage = () => {
    return (
        <Container style={{ backgroundColor: '#292929' }}>
            <Row>
                <Col className='my-lg-4'>
                    <SearchForm />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Games />
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;