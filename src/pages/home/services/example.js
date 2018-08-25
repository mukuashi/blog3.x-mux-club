import request from 'utils/request';
import config from 'utils';

export async function query(params) {
  return request({
    url: '/test',
    method: 'get',
    data: params,
  });
}
