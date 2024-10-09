import './layout.css';

import { Button, Col, Container, Image, Row } from 'react-bootstrap';

import React from 'react';
import { useLocation } from 'react-router-dom';

export const Layout = ({ children }) => {
  const path = useLocation().pathname;

  return (
    <Container fluid className='layout-container' style={{ height: '100%' }}>
      <Row className='justify-content-center' style={{ height: '125px', borderRadius: '0 0 20px 20px', zIndex: 2, position: 'relative', background: 'transparent' }}>
        <Col className='d-flex justify-content-start align-items-center' xs='4' style={{ position: 'relative' }}>
          {path !== '/' && (
            <>
              <Image style={{ height: '3em', marginTop: '-.75em', marginRight: '.5em' }} src={require('../assets/logo.png')} />
              <h6 style={{ color: '#0d522c' }}>Sabor da Terra</h6>
            </>
          )}
        </Col>
        <Col className='d-flex justify-content-end align-items-center' xs='2'>
          <Button className='button-effect' style={{ background: 'transparent', border: 'transparent' }}>
            <Image style={{ height: '2em'}} src={require('../assets/hamburg-icon.png')} />
          </Button>
        </Col>
      </Row>

      <Row className='justify-content-center' style={{ minHeight: 'calc(100% - 75px)' }}>
        <Col xs='6' className='backgroud-pag'>
          {children}
        </Col>
      </Row>
    </Container>
  )
};
