/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | System Config Data
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2016-03-23 12:25:27
 * @version 0.1 | 2016-03-23  // Initial version.
 * @version 0.2 | 2017-12-15  // add many banner images.
 * @version 0.3 | 2018-06-10  // add env split.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-08-25 13:59:16
*/
// dev or online
import { isProd, isMobile } from 'utils';

// Date
const nowYear = new Date().getFullYear();
const version = '3.x';

// Media
const mePai = isMobile()
  ? 'https://m.mepai.me/photographyer/u_592e418fe4a53.html'
  : 'https://www.mepai.me/user/u_592e418fe4a53';

export default {
  prefix: 'mux',
  version: `${version}/`,
  title: `${version} mukuashi@PhotoArtLife Blog 🦊`,
  content: {},
  footer: {
    logo: {
      img: '',
      content: '一只拍片码稿、画图写代码的创作者',
    },
    block: [],
    copyright: {
      number: '备案号：鲁ICP备15022927号 ',
      reserved: `Copyright © 2015-${nowYear} mukuashi Inc. All Rights Reserved. `,
    },
  },
};
