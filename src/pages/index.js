/*
 * Copyright (c) 2018-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | 首页 - Home Component，Canvas + Animate
 * @Author: mukuashi@PhotoArtLife | mukuashi@icloud.com
 * @Date: 2016-01-18 17:19:07
 * @version 0.1 | 2017-02-28 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-09-04 02:10:47
*/
import { PureComponent } from 'react';
import fireworks from '@/utils/fireworks';
import * as animate from '@/utils/animate';
import systemData from '@/config/data.config';
import './index.scss';

const { footer } = systemData;
export default class BrandPageComponent extends PureComponent {
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
    const logoEl = document.querySelector('.logo-animation');
    const pathEls = document.querySelectorAll('.logo-animation path:not(.icon-curve)');
    animate.logoAnimation(logoEl, pathEls).init();
    //功能按钮特效
    const buttonEls = document.querySelectorAll('.button');
    animate.createBouncyButtons(buttonEls);
  }

  componentWillUnmount() {
    const canvasDom = fireworks(document.querySelector('.fireworks'));
    window.removeEventListener('resize', canvasDom.setCanvasSize(), false);
  }

  render() {
    return (
      <article className="home">
        <canvas className="fireworks" />
        <section className="logo-animation">
          <ul className="letters">
            <li className="letter letter-a">
              <svg viewBox="0 0 162 162">
                <g fill="none" fillRule="evenodd" stroke="#5E89FB">
                  <path
                    className="fill in"
                    strokeWidth="40"
                    d="M101 141H81a60 60 0 1 1 0-120c33.14 0 59 26.86 60 60v80"
                  />
                  <path
                    className="fill out"
                    strokeWidth="40"
                    d="M141 161V81c-1-33.14-26.86-60-60-60a60 60 0 1 0 0 120h20"
                  />
                  <path
                    className="line out"
                    strokeWidth="2"
                    d="M121 161V81.33C120.18 58.59 102.7 41 81 41a40 40 0 1 0 0 80h20v40H81A80 80 0 1 1 81 1c43.8 0 78.66 35.27 80 79.7V161h-40z"
                  />
                </g>
              </svg>
            </li>
            <li className="letter letter-n">
              <svg viewBox="0 0 162 162">
                <g fill="none" fillRule="evenodd" stroke="#FB155A">
                  <path className="fill in" strokeWidth="40" d="M21 161V1" />
                  <path className="fill out" strokeWidth="40" d="M21 1v160" />
                  <path
                    className="fill in"
                    strokeWidth="40"
                    d="M21 161V81c1-33.14 26.86-60 60-60a60 60 0 0 1 60 60v80"
                  />
                  <path
                    className="fill out"
                    strokeWidth="40"
                    d="M141 161V81a60 60 0 0 0-60-60c-33.14 0-59 26.86-60 60v80"
                  />
                  <path className="line out" strokeWidth="2" d="M41 161V1H1v160h40z" />
                  <path
                    className="line out"
                    strokeWidth="2"
                    d="M1 161V80.4C2.35 36.27 37.2 1 81 1a80 80 0 0 1 80 80v80h-40V81a40 40 0 0 0-40-40c-21.7 0-39.18 17.59-40 40.33V161H1z"
                  />
                </g>
              </svg>
            </li>
            <li className="letter letter-i">
              <svg viewBox="0 0 82 162">
                <g fill="none" fillRule="evenodd" stroke="#18FF92">
                  <path className="fill in" strokeWidth="40" d="M21 61v20a60 60 0 0 0 60 60" />
                  <path className="fill out" strokeWidth="40" d="M81 141a60 60 0 0 1-60-60V61" />
                  <path
                    className="line out"
                    strokeWidth="2"
                    d="M81 121a40 40 0 0 1-40-40V61H1v20a80 80 0 0 0 80 80v-40z"
                  />
                </g>
              </svg>
            </li>
            <li className="letter letter-m-1">
              <svg viewBox="0 0 162 162">
                <g fill="none" fillRule="evenodd" stroke="#5E89FB">
                  <path className="fill in" strokeWidth="40" d="M21 161V1" />
                  <path className="fill out" strokeWidth="40" d="M21 1v160" />
                  <path
                    className="fill in"
                    strokeWidth="40"
                    d="M21 161V81c1-33.14 26.86-60 60-60a60 60 0 0 1 60 60v80"
                  />
                  <path
                    className="fill out"
                    strokeWidth="40"
                    d="M141 161V81a60 60 0 0 0-60-60c-33.14 0-59 26.86-60 60v80"
                  />
                  <path className="line out" strokeWidth="2" d="M41 161V1H1v160h40z" />
                  <path
                    className="line out"
                    strokeWidth="2"
                    d="M1 161V80.4C2.35 36.27 37.2 1 81 1a80 80 0 0 1 80 80v80h-40V81a40 40 0 0 0-40-40c-21.7 0-39.18 17.59-40 40.33V161H1z"
                  />
                </g>
              </svg>
            </li>
            <li className="letter letter-m-2">
              <svg viewBox="0 0 162 162">
                <g fill="none" fillRule="evenodd" stroke="#FB155A">
                  <path
                    className="fill in"
                    strokeWidth="40"
                    d="M21 161V81c1-33.14 26.86-60 60-60a60 60 0 0 1 60 60v80"
                  />
                  <path
                    className="fill out"
                    strokeWidth="40"
                    d="M141 161V81a60 60 0 0 0-60-60c-33.14 0-59 26.86-60 60v80"
                  />
                  <path
                    className="line out"
                    strokeWidth="2"
                    d="M1 161V80.4C2.35 36.27 37.2 1 81 1a80 80 0 0 1 80 80v80h-40V81a40 40 0 0 0-40-40c-21.7 0-39.18 17.59-40 40.33V161H1z"
                  />
                </g>
              </svg>
            </li>
            <li className="letter letter-e">
              <svg viewBox="0 0 162 162">
                <g fill="none" fillRule="evenodd" stroke="#18FF92">
                  <path
                    className="fill in"
                    strokeWidth="40"
                    d="M81 101h60V81c-1-33.14-26.86-60-60-60a60 60 0 1 0 0 120"
                  />
                  <path
                    className="fill out"
                    strokeWidth="40"
                    d="M81 141a60 60 0 1 1 0-120c33.14 0 59 26.86 60 60v20H81"
                  />
                  <path
                    className="line out"
                    strokeWidth="2"
                    d="M81 81v40h80V80.7C159.66 36.27 124.8 1 81 1a80 80 0 1 0 0 160v-40a40 40 0 1 1 0-80c21.6 0 39.01 17.42 39.99 40H81z"
                  />
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
                <svg viewBox="0 0 160 62">
                  <g fill="#FBF3FB" fillRule="evenodd">
                    <path d="M27.33 18h1.73l10.15 25.7h-1.69l-3.24-8.24H21.97l-3.28 8.24H17L27.33 18zm6.45 16.1l-5.51-14.55h-.07l-5.73 14.54h11.3z" />
                    <polygon points="51.334 18 53.314 18 69.55 41.58 69.622 41.58 69.622 18 71.206 18 71.206 43.704 69.334 43.704 52.99 19.944 52.918 19.944 52.918 43.704 51.334 43.704" />
                    <polygon points="86.027 18 87.611 18 87.611 43.704 86.027 43.704" />
                    <polygon points="102.433 18 104.701 18 114.745 41.94 114.817 41.94 124.753 18 127.021 18 127.021 43.704 125.437 43.704 125.437 19.944 125.365 19.944 115.573 43.704 113.989 43.704 104.089 19.944 104.017 19.944 104.017 43.704 102.433 43.704" />
                    <polygon points="141.843 18 159.123 18 159.123 19.368 143.427 19.368 143.427 29.664 158.187 29.664 158.187 31.032 143.427 31.032 143.427 42.336 159.303 42.336 159.303 43.704 141.843 43.704" />
                  </g>
                </svg>
              </div>
            </li>
            <li className="dot dot-i">
              <svg viewBox="0 0 42 42">
                <g fill="none" fillRule="evenodd">
                  <rect width="40" height="40" x="1" y="1" fill="#17F28C" rx="20" />
                </g>
              </svg>
            </li>
            <li className="dot dot-e">
              <svg viewBox="0 0 42 42">
                <g fill="none" fillRule="evenodd">
                  <rect width="40" height="40" x="1" y="1" fill="#FFFFFF" rx="20" />
                </g>
              </svg>
            </li>
          </ul>
        </section>
        <footer className="footer-info">
          <p className="description">{footer.description}</p>
          <div className="links">
            <a className="button blue" href="documentation" target="_blank">
              <svg viewBox="0 0 180 60">
                <path d="M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z" />
              </svg>
              <span>Documentation</span>
            </a>
            <a className="button red" href="https://codepen.io/collection/XLebem/" target="_blank">
              <svg viewBox="0 0 180 60">
                <path d="M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z" />
              </svg>
              <span>CodePen</span>
            </a>
            <a
              className="button green"
              href="https://github.com/juliangarnier/anime"
              target="_blank"
            >
              <svg viewBox="0 0 180 60">
                <path d="M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
          <p className="credits">
            v<span className="version">0.0</span> © <span className="date">2016</span>{' '}
            <a href="http://juliangarnier.com" target="_blank">
              Julian Garnier
            </a>
          </p>
        </footer>
      </article>
    );
  }
}
