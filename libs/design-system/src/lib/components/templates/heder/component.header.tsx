import React from 'react';
import {Home, MapPin, Tool, Phone} from "react-feather";
import {Container, Row, Col, Grid, Box, Logo, FormSearch, InputSwitch, Tabs, Link} from './../../../components';
import {HeaderComponent} from './component.header.style';

export const Header = () => {

  return (
    <HeaderComponent>
      <Container>
        <Row>
          <Col xs={12} style={{padding: "1.5rem"}}>
            <Grid
              container
              gridGap="1.5rem"
              gridTemplateRows={{
                x: "1fr 1fr",
                s: "1fr"
              }}
              gridTemplateColumns={{
                x: "1fr 200px",
                s: "212px 200px calc(100% - (212px + 200px + 3rem))",
                m: "212px 500px calc(100% - (212px + 500px + 3rem))"
              }}
            >
              <Link href="/" title="wTrasie" style={{alignItems: "center", display: "flex"}}>
                <Logo type="wTrasie" height={{x: "2rem", s: "3rem"}}/>
              </Link>
              <FormSearch/>
              <Box display="flex" style={{justifyContent: "flex-end", display: "flex"}}>
                <InputSwitch/>
              </Box>
            </Grid>
          </Col>
          <Col xs={12}>
            <Tabs
              style={{bottom: "-1px"}}
              tabs={[
                {title: 'Wiadomości', value: '/', icon: <Home/>, active: true},
                {title: 'Miasta', value: "/", icon: <MapPin/>, active: false},
                {title: 'Warsztaty', value: '/firmy', icon: <Tool/>, active: false},
                {title: 'Kontakt', value: '/kontakt', icon: <Phone/>, active: false},
              ]}/>
          </Col>
        </Row>
      </Container>
    </HeaderComponent>
  );
};


