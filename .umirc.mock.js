import mockjs from 'mockjs';
// // 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';
//支持扩展
const proxy = {
  'GET /api/test1': [
    {
      code: 'success',
      message: '成功'
    },
  ]
};
export default (noProxy ? {} : { ...proxy });
