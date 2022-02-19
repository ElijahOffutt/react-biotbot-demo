import React from "react";
import { Row, Col, Button } from 'antd';
import NavLink from './link';
import content from '@public/content.json';

export const Header: React.FC = (props: any) => {
  let colors = require('@public/colors.json');
  let video = require('@public/content').bgVideo;
  let links = require('./links.json');
  return (
    <>

      <div
        style={{
          backgroundColor: colors.accent,
          textAlign: 'center',
          padding: '7px 0',
          fontSize: '.9em',
        }}>
        <b>
          <span style={{ color: colors.primary }}> Maine DHHS Announces Municipalities Participating in Statewide COVID-19 Wastewater Screening | <a style={{ color: 'white' }} href=""><u>Read press release here</u></a></span>
        </b>
      </div>

      <header style={{ height: props.short ? '40vh' : '97.5vh', position: 'relative', overflow: 'hidden', paddingTop: '20px' }}>

        <video style={{
          position: 'absolute',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minHeight: '100%',
          minWidth: '100%',
          zIndex: '-1'
        }} src={video} autoPlay={true} loop muted />

        <nav style={{ width: '1125px', margin: '0 auto' }}>

          <Row justify="space-between">
            <Col>
              <img src="https://biobot.io/wp-content/themes/biobot/assets/img/logo.svg" alt="logo" />
            </Col>
            <Col>

              {links.map((link: any) => (
                <NavLink meta={link} />
              ))}

              <Button size="large" style={{
                borderRadius: '5px',
                color: colors.primary,
                backgroundColor: colors.highlight,
                border: 'solid 0px rgba(0,0,0,0)'
              }}><b>GET STARTED</b></Button>

            </Col>
          </Row>

        </nav>

        <h1
          style={{
            fontFamily: content.font,
            color: 'white',
            textAlign: 'center',
            fontSize: props.short ? '3em' : '4em',
            lineHeight: '1em',
            marginTop: props.short ? '5vh' : '20vh'
          }}
        >Population health analytics<br />powered by sewage</h1>

        { !props.short && <Row justify="center">
          <Col>
            <Button size="large" className="" style={{
            borderRadius: '5px',
            marginTop: '15px',
            transform: 'scale(1.35)',
            color: colors.primary,
            backgroundColor: colors.highlight,
            border: 'solid 0px rgba(0,0,0,0)',
            }}><b style={{fontSize: '.7em', letterSpacing: '1px'}}>EXPLORE OUR DATA</b></Button>
          </Col>
        </Row>}

        <img
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            float: 'left'
          }}
          src="https://biobot.io/wp-content/themes/biobot/assets/img/frame_white.svg" alt="bottom" />

      </header>

    </>
  );
};
