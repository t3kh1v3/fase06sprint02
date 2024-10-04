import './layout.css';

import { Col, Container, Row } from 'react-bootstrap';

import React from 'react';
import { useLocation } from 'react-router-dom';

export const Layout = ({ children }) => {
  const path = useLocation().pathname;

  return (
    <Container fluid className='layout-container' style={{ height: '100%' }}>
      <Row style={{ height: '125px', borderRadius: '0 0 20px 20px', zIndex: 2, position: 'relative', background: 'transparent' }}>
        <Col xs='12'>
          HEADER
        </Col>
      </Row>

      <Row style={{ minHeight: 'calc(100% - 150px)' }}>
        <Col className='backgroud-pag'>
          {children}
        </Col>
      </Row>

      <Row style={{ height: '75px', zIndex: 2, position: 'relative' }}>
        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          FOOTER
        </Col>
      </Row>
    </Container>
  )
};
