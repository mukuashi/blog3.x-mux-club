/*
 * Copyright (c) 2018-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | 首页 - Home Component，Canvas + Animate
 * @Author: mukuashi@PhotoArtLife | mukuashi@icloud.com
 * @Date: 2016-01-18 17:19:07
 * @version 0.1 | 2017-02-28 // Initial version.
 * @version 0.2 | 2018-09-01 // update svg logo.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-09-23 18:28:37
*/
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import fireworks from '@/utils/fireworks';
import * as animate from '@/utils/animate';
import systemData from '@/locales/zh-CN';
import './index.scss';

const { footer } = systemData;

class HomePageComponent extends PureComponent {
  state = {};

  componentDidMount() {
    const canvasDom = fireworks(document.querySelector('.fireworks'));
    const tap = 'ontouchstart' in window || navigator.msMaxTouchPoints ? 'touchstart' : 'mousedown';
    document.addEventListener(
      tap,
      e => {
        canvasDom.render.play();
        let placeData = canvasDom.updateCoords(e);
        canvasDom.animateParticules(placeData.pointerX, placeData.pointerY);
      },
      false
    );
    window.addEventListener('resize', canvasDom.setCanvasSize(), false);
    //logo动画
    const logoEl = document.querySelector('.home-logo-animation');
    const pathEls = document.querySelectorAll('.home-logo-animation path:not(.icon-curve)');
    animate.logoAnimation(logoEl, pathEls).init();
    //功能按钮特效
    const buttonEls = document.querySelectorAll('.navigation');
    animate.createBouncyButtons(buttonEls);
  }

  componentWillUnmount() {
    const canvasDom = fireworks(document.querySelector('.fireworks'));
    window.removeEventListener('resize', canvasDom.setCanvasSize(), false);
  }

  getEnter = e => {
    switch (e.index) {
      case 0:
        return {
          rotate: 90,
          opacity: 0,
          y: -60,
        };
      case 10:
      case 1:
        return {
          y: -60,
          x: -10,
          opacity: 0,
        };
      case 9:
      case 2:
        return {
          y: -60,
          x: 20,
          opacity: 0,
        };
      case 3:
        return {
          y: 60,
          opacity: 0,
        };
      case 8:
      case 4:
        return {
          x: 30,
          opacity: 0,
        };
      case 5:
        return {
          enter: [
            {
              scale: 2,
              opacity: 0,
              type: 'set',
            },
            { scale: 1.2, opacity: 1, duration: 300 },
            { scale: 0.9, duration: 200 },
            { scale: 1.05, duration: 150 },
            { scale: 1, duration: 100 },
          ],
          leave: {
            opacity: 0,
            scale: 0,
          },
        };
      case 6:
        return {
          scale: 0.8,
          x: 30,
          y: -10,
          opacity: 0,
        };
      case 7:
        return {
          scale: 0.8,
          x: 30,
          y: 10,
          opacity: 0,
        };
      default:
        return {
          opacity: 0,
        };
    }
  };

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

            {/*
            <li id="motionPath" className="motion-path">
              <div className="small square el follow-path"></div>
                <svg width="256" height="112" viewBox="0 0 256 112">
                  <path fill="none" stroke="#FFF" d="M8,56 C8,33.90861 25.90861,16 48,16 C70.09139,16 88,33.90861 88,56 C88,78.09139 105.90861,92 128,92 C150.09139,92 160,72 160,56 C160,40 148,24 128,24 C108,24 96,40 96,56 C96,72 105.90861,92 128,92 C154,93 168,78 168,56 C168,33.90861 185.90861,16 208,16 C230.09139,16 248,33.90861 248,56 C248,78.09139 230.09139,96 208,96 L48,96 C25.90861,96 8,78.09139 8,56 Z"/>
              </svg>
            </li>
            */}
          </ul>
        </section>
        <footer className="home-footer-info">
          <Texty
            delay={interaction ? 0 : 5000}
            mode="smooth"
            enter={this.getEnter}
            leave={this.getEnter}
            className={language ? 'description' : 'description description-chinese'}
            style={ismobile ? { marginBottom: '1rem' } : { maxWidth: 1120 }}
          >
            {language ? footer.description.English : footer.description.Chinese}
          </Texty>
          <ul className="links">
            {footer.mains.buttons.map(row => (
              <li key={row.id}>
                <a href={row.path} className={row.color + ' navigation'} target={row.target}>
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
