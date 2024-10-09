import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';

import React from 'react';

export const Login = () => {
  return (
    <Container fluid='md' >
      <Row>
        <Col className='text-end' xs='4'>
          <Image src={require('../../assets/logo.png')} />
        </Col>

        <Col xs='8' style={{ position: 'relative' }}>
          <h1 style={{ color: '#0d522c' }}>Sabor da Terra</h1>
          <span style={{ position: 'absolute', top: '2.5em', left: '2em' }}>Agro e Tecnologia lado a lado</span>
        </Col>
      </Row>

      <Row className='justify-content-center' style={{ margin: '3em 0' }}>
        <Col className='text-center' xs='12'>
          <h3 style={{ color: '#0d522c' }}>Cadastre-se</h3>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col xs='8' className='d-flex justify-content-center align-items-center'>
          <Form style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '15%' }}>
                <Image style={{ height: '3.5em' }} src={require('../../assets/user-icon.png')} />
              </div>
              <div style={{ width: '85%', background: 'white', color: '#0d522c', borderRadius: '30px', border: '1px solid #49688d', padding: '.75em', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                Usuário
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '2em 0' }}>
              <div style={{ width: '15%' }}>
                <Image style={{ height: '3.5em' }} src={require('../../assets/email-icon.png')} />
              </div>
              <div style={{ width: '85%', background: 'white', color: '#0d522c', borderRadius: '30px', border: '1px solid #49688d', padding: '.75em', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                Email
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '15%' }}>
                <Image style={{ height: '3.5em' }} src={require('../../assets/password-icon.png')} />
              </div>
              <div style={{ width: '85%', background: 'white', color: '#0d522c', borderRadius: '30px', border: '1px solid #49688d', padding: '.75em', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                Senha
              </div>
            </div>
          </Form>
        </Col>
      </Row>

      <Row style={{ marginTop: '3em' }} className='justify-content-center'>
        <Col xs='8' className='d-flex justify-content-center align-items-center'>
          <h3>Agricultor</h3>

          <div style={{ width: '4.5em', height: '2em', borderRadius: '20px', position: 'relative', background: '#0d522c', margin: '0 1em' }}>
            <span style={{ position: 'absolute', borderRadius: '50%', background: 'white', right: '.25em', top: '.25em', width: '1.5em', height: '1.5em' }} />
          </div>

          <h3>Comprador</h3>
        </Col>
      </Row>

      <Row style={{ marginTop: '2em' }} className='justify-content-center'>
        <Col xs='8' className='d-flex justify-content-center align-items-center'>
          <div style={{ width: '2em', height: '2em', borderRadius: '5px', background: 'white', border: '1px solid #737373', marginRight: '1em' }}>
          </div>

          <div style={{ width: 'auto' }}>Aceito o Termo de privacidade e de Uso de serviço.</div>
        </Col>
      </Row>

      <Row style={{ marginTop: '2em' }} className='justify-content-center'>
        <Col xs='8' className='d-flex justify-content-center align-items-center'>
          <Button className='button-effect' style={{ background: '#0d522c', border: 'transparent', width: '8em', height: '2em', fontSize: '2em', borderRadius: '35px' }}>
            Cadastrar
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: '2em' }} className='justify-content-center'>
        <Col xs='8' className='d-flex justify-content-center align-items-center'>
          <div style={{ width: 'auto' }}>Já possuí uma conta?</div>
        </Col>
      </Row>
    </Container>
  );
};
