/*
 * Copyright (c) 2018-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | 3.x contact me components
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:  2018-09-1012:25:27
 * @version 0.1 | 2018-09-10 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-10-24 01:17:41
*/
import anime from 'animejs';

const contact = messagesEl => {
  const typingSpeed = 20;
  const loadingText = '<b>•</b><b>•</b><b>•</b>';
  let messageIndex = 0;

  const getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const current = hours + minutes * 0.01;
    if (current >= 5 && current < 19) return 'Have a nice day';
    if (current >= 19 && current < 22) return 'Have a nice evening';
    if (current >= 22 || current < 5) return 'Have a good night';
  };
  const messages = [
    'Hey there 👋',
    "I'm mukuashi@PhotoArtLife",
    'I design and code things on the web',
    'I\'m currently accepting freelance work.<br> You can contact me at <a href="mailto:hello@julian.gr">hello@julian.gr</a>',
    '<a target="_blank" href="https://twitter.com/juliangarnier">twitter.com/juliangarnier</a><br><a target="_blank" href="https://codepen.io/juliangarnier">codepen.io/juliangarnier</a><br><a target="_blank" href="https://github.com/juliangarnier">github.com/juliangarnier</a>',
    getCurrentTime(),
    '👀 M.',
  ];

  const getFontSize = () => {
    return parseInt(getComputedStyle(document.body).getPropertyValue('font-size'));
  };

  const pxToRem = px => {
    return px / getFontSize() + 'rem';
  };

  const createBubbleElements = (message, position) => {
    const bubbleEl = document.createElement('div');
    const messageEl = document.createElement('span');
    const loadingEl = document.createElement('span');
    bubbleEl.classList.add('bubble');
    bubbleEl.classList.add('is-loading');
    bubbleEl.classList.add('cornered');
    bubbleEl.classList.add(position === 'right' ? 'right' : 'left');
    messageEl.classList.add('message');
    loadingEl.classList.add('loading');
    messageEl.innerHTML = message;
    loadingEl.innerHTML = loadingText;
    bubbleEl.appendChild(loadingEl);
    bubbleEl.appendChild(messageEl);
    bubbleEl.style.opacity = 0;
    return {
      bubble: bubbleEl,
      message: messageEl,
      loading: loadingEl,
    };
  };

  const getDimentions = elements => {
    return {
      loading: {
        w: '4rem',
        h: '2.25rem',
      },
      bubble: {
        w: pxToRem(elements.bubble.offsetWidth + 4),
        h: pxToRem(elements.bubble.offsetHeight),
      },
      message: {
        w: pxToRem(elements.message.offsetWidth + 4),
        h: pxToRem(elements.message.offsetHeight),
      },
    };
  };

  const sendMessage = (message, position) => {
    const loadingDuration = message.replace(/<(?:.|\n)*?>/gm, '').length * typingSpeed + 500;
    const elements = createBubbleElements(message, position);
    messagesEl.appendChild(elements.bubble);
    messagesEl.appendChild(document.createElement('br'));
    const dimensions = getDimentions(elements);
    elements.bubble.style.width = '0rem';
    elements.bubble.style.height = dimensions.loading.h;
    elements.message.style.width = dimensions.message.w;
    elements.message.style.height = dimensions.message.h;
    elements.bubble.style.opacity = 1;
    const bubbleOffset = elements.bubble.offsetTop + elements.bubble.offsetHeight;
    if (bubbleOffset > messagesEl.offsetHeight) {
      const scrollMessages = anime({
        targets: messagesEl,
        scrollTop: bubbleOffset,
        duration: 750,
      });
    }
    const bubbleSize = anime({
      targets: elements.bubble,
      width: ['0rem', dimensions.loading.w],
      marginTop: ['2.5rem', 0],
      marginLeft: ['-2.5rem', 0],
      duration: 800,
      easing: 'easeOutElastic',
    });
    const loadingLoop = anime({
      targets: elements.bubble,
      scale: [1.05, 0.95],
      duration: 1100,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutQuad',
    });
    const dotsStart = anime({
      targets: elements.loading,
      translateX: ['-2rem', '0rem'],
      scale: [0.5, 1],
      duration: 400,
      delay: 25,
      easing: 'easeOutElastic',
    });
    const dotsPulse = anime({
      targets: elements.bubble.querySelectorAll('b'),
      scale: [1, 1.25],
      opacity: [0.5, 1],
      duration: 300,
      loop: true,
      direction: 'alternate',
      delay: i => i * 100 + 50,
    });
    setTimeout(() => {
      loadingLoop.pause();
      dotsPulse.restart({
        opacity: 0,
        scale: 0,
        loop: false,
        direction: 'forwards',
        update: a => {
          if (a.progress >= 65 && elements.bubble.classList.contains('is-loading')) {
            elements.bubble.classList.remove('is-loading');
            anime({
              targets: elements.message,
              opacity: [0, 1],
              duration: 300,
            });
          }
        },
      });
      bubbleSize.restart({
        scale: 1,
        width: [dimensions.loading.w, dimensions.bubble.w],
        height: [dimensions.loading.h, dimensions.bubble.h],
        marginTop: 0,
        marginLeft: 0,
        begin: () => {
          if (messageIndex < messages.length) elements.bubble.classList.remove('cornered');
        },
      });
    }, loadingDuration - 50);
  };

  const sendMessages = () => {
    const message = messages[messageIndex];
    if (!message) return;
    sendMessage(message);
    ++messageIndex;
    setTimeout(
      sendMessages,
      message.replace(/<(?:.|\n)*?>/gm, '').length * typingSpeed + anime.random(900, 1200)
    );
  };

  sendMessages();
};

export default contact;
