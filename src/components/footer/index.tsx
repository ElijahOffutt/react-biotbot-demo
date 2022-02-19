import React, { useState } from "react";
import Link from 'next/link';
import colors from '@public/colors.json';
import content from '@public/content.json'
import { Input, Button, Row, Col } from "antd";
import { TwitterCircleFilled, LinkedinFilled, RocketFilled } from "@ant-design/icons";
import styles from './index.module.scss';

export const Footer: React.FC = () => {
  const [textValue, setTextValue] = useState();
  let changeText = (input: any) => { setTextValue(input.target.value) }
  let links = require('@components/header/links.json');
  return (
    <div style={{backgroundColor: colors.primary, paddingTop: '75px'}}>
      <div style={{width: '1125px', margin: '0 auto'}}>
        <Row>
          <Col span={8}>
            <img src="https://biobot.io/wp-content/themes/biobot/assets/img/logo.svg" alt="logo" /> <br />
            <p style={{color: 'white', padding: '15px 30px 10px 0', fontSize: '1.15em'}}>Wastewater contains valuable information about the health of communities. We collect it. We analyze it. We tell you how to leverage it to make your city better.</p>
            <a className={styles.footerLink} style={{fontSize: '1.3em', fontFamily: content.font}} href="mailto:hello@biobot.io">hello@biobot.io</a> <br />
            <a className={styles.footerLink} style={{fontSize: '1.3em', fontFamily: content.font}} href="mailto:press@biobot.io">press@biobot.io</a>
          </Col>
          <Col span={6}>
            <h4 style={{fontFamily: content.font, color: 'white', fontSize: '1.5em'}}>Quick Links</h4>
            {links.map( (link:any) => ( 
              <Link href={link.path}>
                <a className={styles.footerLink} style={{textTransform: 'capitalize', marginBottom: '5px', fontSize: '1.35em', width: '100%', display: 'inline-block'}}>{link.text}</a>
              </Link>
             ))}
          </Col>
          <Col span={6}>
              <h4 style={{fontFamily: content.font, color: 'white', fontSize: '1.5em'}}>Social</h4>
              <Button size="large" type="text" shape="circle" style={{height: '40px', width: '40px'}} icon={<TwitterCircleFilled style={{color: '#00acee '}} />} />
              <Button size="large" type="text" shape="circle" style={{height: '40px', width: '40px'}} icon={<LinkedinFilled style={{color: '#0e76a8'}} />} />
          </Col>
          <Col span={4}>
              <h4 style={{fontFamily: content.font, color: 'white', fontSize: '1.5em'}}>Newsletter</h4>
              <Row>
                <Col>
                  <Input onChange={changeText} />
                  {textValue}
                </Col>
                <Col>
                  <Button size="large" shape="square" style={{height: '40px', width: '40px'}} icon={<RocketFilled style={{color: '#0e76a8'}} />} />
                </Col>
              </Row>
          </Col>
        </Row>
        <div style={{height: '1px', backgroundColor: 'white', marginTop: '20px', opacity: '.2', width: '100%'}} />
        <Row justify="space-between">
          <Col>
              <p style={{color: 'white', lineHeight: '30px', paddingTop: '7px', textTransform: 'uppercase', fontSize: '.8em'}}><b>&copy; 2021 Biobot Analytics, Inc. | Cambridge, MA </b></p>
          </Col>
          <Col shrink="true">
              <a style={{fontFamily: content.font, lineHeight: '40px', marginTop: '15px', marginRight: '10px', textTransform: 'uppercase', fontSize: '.8em'}} className={styles.footerLink} href="">TERMS OF SERVICE</a>
              <a style={{fontFamily: content.font, lineHeight: '40px', marginTop: '15px', textTransform: 'uppercase', fontSize: '.8em'}} className={styles.footerLink} href="">PRIVACY POLICY</a>
          </Col>
        </Row>
      </div>
    </div>
  );
};
