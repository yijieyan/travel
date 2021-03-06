import Http from 'axios';
//请求类
class ApiService {
  constructor() {
    this.interceptorsOfReq();
    this.interceptorsOfRes();
  }

  get(url, params) {
    url = 'https://yijieyan.github.io/travel' + url
    if(params) {
      return Http.get(url, {params}).then(res => res.data);
    }
    return Http.get(url).then(res => res.data);
  }

  post(url, params = {}) {
    url = 'https://yijieyan.github.io/travel' + url
    return Http.post(url, params).then(res => res.data);
  }


  interceptorsOfReq() {
    return Http.interceptors.request.use(
      config => {
        return config;
      },
      err => {
        return Promise.reject(err);
      });
  }

  interceptorsOfRes() {
    Http.interceptors.response.use(function(response) {
      // console.log('响应数据', response.data);
      return response;
    }, function(error) {
      return Promise.reject(error);
    });
  }
}

//导出一个对象
export default new ApiService();
