/*
 * Copyright (c) 2018-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | 3.x button create plugins
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2018-01-23 12:25:27
 * @version 0.1 | 2018-01-23 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-12-01 20:53:33
*/
import anime from 'animejs';
import defaultSettings from '../../../../config/settings.config';
//
const createBouncyButtons = buttonEls => {
  function createButton(el) {
    const pathEl = el.querySelector('path');
    const spanEl = el.querySelector('span');
    function hover() {
      anime.remove([pathEl, spanEl]);
      anime({
        targets: pathEl,
        d:
          'M10,10 C10,10 50,7 90,7 C130,7 170,10 170,10 C170,10 172,20 172,30 C172,40 170,50 170,50 C170,50 130,53 90,53 C50,53 10,50 10,50 C10,50 8,40 8,30 C8,20 10,10 10,10 Z',
        elasticity: 700,
        offset: 0,
      });
      anime({
        targets: spanEl,
        scale: 1.15,
        duration: 800,
        offset: 0,
      });
    }
    function down() {
      anime.remove([pathEl, spanEl]);
      anime({
        targets: pathEl,
        d:
          'M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z',
        elasticity: 700,
        offset: 0,
      });
      anime({
        targets: spanEl,
        scale: 1,
        duration: 800,
        offset: 0,
      });
    }
    el.onmouseenter = hover;
    el.onmousedown = down;
    el.onmouseleave = down;
  }
  for (let row of buttonEls) {
    createButton(row);
  }
};
const logoAnimation = (logoEl, pathEls) => {
  const innerWidth = window.innerWidth;
  const maxWidth = 740;
  const version = defaultSettings.version.replace('/', '') || '3.x';
  const logoTimeline = anime.timeline({ autoplay: false });
  let logoScale = innerWidth <= maxWidth ? innerWidth / maxWidth : 1;

  logoEl.style.transform = 'translateY(50px) scale(' + logoScale + ')';
  for (let row of pathEls) {
    row.setAttribute('stroke-dashoffset', anime.setDashoffset(row));
  }

  logoTimeline

    .add({
      targets: '.dot-i',
      translateY: { value: [-200, 0], duration: 500, elasticity: 400 },
      scale: [
        { value: [0, 1], duration: 100, easing: 'easeOutQuart' },
        { value: 0, duration: 400, delay: 1400, easing: 'easeInBack' },
      ],
      delay: 1200,
      offset: 0,
    })
    .add({
      targets: '.icon',
      opacity: { value: 1, duration: 10, delay: 2800, easing: 'linear' },
      translateY: { value: 60, duration: 800 },
      delay: 4000,
      offset: 0,
    })
    .add({
      targets: '.icon-line',
      strokeDashoffset: [
        { value: [anime.setDashoffset, anime.setDashoffset], duration: 3000 },
        { value: 0, duration: 1200, easing: 'easeInOutQuart' },
      ],
      strokeWidth: {
        value: [8, 2],
        delay: 3000,
        duration: 800,
        easing: 'easeInQuad',
      },
      stroke: {
        value: ['#FFF', el => anime.getValue(el, 'stroke')],
        duration: 800,
        delay: 3400,
        easing: 'easeInQuad',
      },
      offset: 0,
    })
    .add({
      targets: ['.icon-text path', '.icon-text polygon'],
      translateY: [50, 0],
      opacity: { value: [0, 1], duration: 100, easing: 'linear' },
      delay: (el, i, t) => 4200 + i * 20,
      offset: 0,
    })
    .add({
      targets: ['.home-logo-animation', '.description', '.navigation', '.copyright'],
      translateY: [50, 0],
      scale: 1,
      opacity: 1,
      easing: 'easeOutExpo',
      delay: (el, i, l) => i * 80,
      offset: '-=250',
    })
    .add({
      targets: '.date',
      innerHTML: () => {
        const d = new Date();
        return d.getFullYear();
      },
      round: 1,
      duration: 4000,
      easing: 'easeOutCubic',
      begin: a => a.animatables[0].target.classList.add('highlighted'),
      complete: a => a.animatables[0].target.classList.remove('highlighted'),
      offset: '-=2000',
    })
    .add({
      targets: '.version',
      innerHTML: parseFloat(version, 10),
      duration: 7000,
      easing: 'easeOutCubic',
      begin: a => a.animatables[0].target.classList.add('highlighted'),
      update: a => {
        let value = a.animatables[0].target.innerHTML;
        value = parseFloat(value).toFixed(1);
        a.animatables[0].target.innerHTML = value;
      },
      complete: a => a.animatables[0].target.classList.remove('highlighted'),
      offset: '-=500',
    })
    .add({
      targets: '.icon',
      rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine',
      },
      scale: {
        value: 0.001,
        duration: 2500,
        easing: 'easeInOutQuart',
      },
      translateX: {
        value: 0,
        duration: 800,
      },
    })
    .add({
      targets: '.avatar',
      opacity: { value: 1, duration: 100, delay: 0, easing: 'linear' },
      translateX: {
        value: '100vw',
        duration: 4000,
      },
      rotate: {
        value: 360,
        duration: 4000,
        easing: 'easeInOutSine',
      },
      scale: {
        value: 2,
        duration: 4000,
        easing: 'easeInOutQuart',
      },
    });

  function init() {
    document.querySelector('.home').classList.add('ready');
    // logoTimeline.seek(4700);
    logoTimeline.play();
  }
  return {
    init,
  };
};
export { logoAnimation, createBouncyButtons };
