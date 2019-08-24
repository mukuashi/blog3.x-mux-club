/*
 * Copyright (c) 2018-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | 首页 - Home Component，Canvas + Animate
 * @Author: mukuashi@PhotoArtLife | mukuashi@icloud.com
 * @Date: 2016-01-18 17:19:07
 * @version 0.1 | 2017-02-28 // Initial version.
 * @version 0.2 | 2018-09-01 // update svg logo.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2019-08-23 01:00:45
 */
import React, { PureComponent } from 'react';
import { Avatar } from 'antd';
import { connect } from 'dva';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import fireworks from './components/fireworks';
import * as animate from './components/animate';
import systemData from '@/locales/zh-CN';
import './index.scss';

const { footer } = systemData;

class HomePageComponent extends PureComponent {
  componentDidMount() {
    const canvasDom = fireworks(document.querySelector('.fireworks'));
    const tap = 'ontouchstart' in window || navigator.msMaxTouchPoints ? 'touchstart' : 'mousedown';
    document.addEventListener(
      tap,
      e => {
        canvasDom.render.play();
        const placeData = canvasDom.updateCoords(e);
        canvasDom.animateParticules(placeData.pointerX, placeData.pointerY);
      },
      false,
    );
    window.addEventListener('resize', canvasDom.setCanvasSize(), false);
    // logo动画
    const logoEl = document.querySelector('.home-logo-animation');
    const pathEls = document.querySelectorAll('.home-logo-animation path:not(.icon-curve)');
    animate.logoAnimation(logoEl, pathEls).init();
    // 功能按钮特效
    const buttonEls = document.querySelectorAll('.navigation');
    animate.createBouncyButtons(buttonEls);
  }

  componentWillUnmount() {
    const canvasDom = fireworks(document.querySelector('.fireworks'));
    window.removeEventListener('resize', canvasDom.setCanvasSize(), false);
  }

  render() {
    const { language, interaction, ismobile } = this.props.global;
    return (
      <article className="home">
        <canvas className="fireworks" />
        <section className="home-logo-animation">
          <ul className="letters">
            {/* Logo Canvas */}
            <li className="dot dot-i">
              <svg viewBox="0 0 42 42">
                <g fill="none" fillRule="evenodd">
                  <rect width="40" height="40" x="1" y="1" fill="#17F28C" rx="20" />
                </g>
              </svg>
            </li>
            <li className="logo-icon">
              <div className="icon">
                <svg viewBox="0 0 62 62">
                  <g fill="none" fillRule="evenodd" strokeWidth="2" transform="translate(1 1)">
                    <path
                      className="icon-curve"
                      stroke="#FF1554"
                      d="M0 16a80.88 80.88 0 0 1 44 44"
                    />
                    <path
                      className="icon-line"
                      stroke="#5E89FB"
                      d="M4 0h54a2 2 0 0 1 2 2.01V58A2 2 0 0 1 58 60H2a2 2 0 0 1-2-2.01V2A2 2 0 0 1 2 0h2z"
                    />
                    <rect width="40" height="40" x="10" y="10" stroke="#18FF92" rx="20" />
                  </g>
                </svg>
              </div>
              <div className="avatar">
                <Avatar src="//kquanr.com/images/header-avatar.png" />
              </div>
              <div className="icon-text">
                <Texty
                  type="bounce"
                  mode="smooth"
                  delay={4500}
                  component={TweenOne}
                  componentProps={{
                    animation: [
                      { x: 160, type: 'set' },
                      { x: 100, delay: 4000, duration: 2000 },
                      {
                        ease: 'easeOutQuart',
                        duration: 4000,
                        x: 0,
                      },
                      {
                        letterSpacing: 0,
                        delay: -500,
                        rotateX: 360,
                        scale: 1.05,
                        ease: 'easeInOutQuint',
                        duration: 3000,
                      },
                      {
                        scale: 1,
                        width: '100%',
                        delay: -300,
                        duration: 3000,
                        ease: 'easeInOutQuint',
                      },
                    ],
                  }}
                >
                  PhotoArtLife
                </Texty>
              </div>
            </li>
          </ul>
        </section>
        <footer className="home-footer-info">
          {language && (
            <Texty
              delay={interaction ? 0 : 6000}
              mode="smooth"
              type="scale"
              className="description"
              style={ismobile ? { marginBottom: '1rem' } : { maxWidth: 1120 }}
            >
              {language && footer.description.English}
            </Texty>
          )}
          {!language && (
            <Texty
              mode="smooth"
              type="left"
              className="description description-chinese"
              style={ismobile ? { marginBottom: '1rem' } : { maxWidth: 1120 }}
            >
              {!language && footer.description.Chinese}
            </Texty>
          )}
          <ul className="links">
            {footer.mains.buttons.map(row => (
              <li key={row.id}>
                <a
                  href={row.path}
                  className={`${row.color} navigation`}
                  target={row.target}
                  rel="noopener noreferrer nofollow"
                >
                  <svg viewBox="0 0 180 60">
                    <path d={footer.mains.btnSvgPath} />
                  </svg>
                  <span>{row.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </article>
    );
  }
}

export default connect(({ global }) => ({ global }))(HomePageComponent);
