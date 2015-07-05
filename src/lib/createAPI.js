import Promise from 'bluebird';
import _ from 'lodash';
import qs from 'qs';
import URL from 'url';

export default function createAPI(createRequest) {
  return async function api(path, method = 'GET', params = {}) {
    var { pathname, query: queryStr } = URL.parse(path);
    var query, headers, body;

    if (_.isObject(method)) {
      params = method;
      method = 'GET';
    }

    query = qs.parse(queryStr);

    if (method === 'GET') {
      if (_.isObject(params)) {
        _.assign(query, params);
      }

    } else {
      body = params;
    }

    return await new Promise((resolve, reject) => {
      createRequest({ method, headers, pathname, query, body })
        .then((res) => {
          return resolve(res);
        });
    });
  };
}
