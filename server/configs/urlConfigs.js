
    /*
    * @param  {[string]} server_api   [restful api 主路径]
    * @param  {[string]} server_admin_api   [后台 api 主路径]
    */
    



'use strict';

const urlConfigsDev =require('./urlConfigs.dev') 

const urlConfigsProd = {
  "server_api": "http://youliaowu.com//api/v0",
  "server_admin_api": "http://youliaowu.com"
}
console.log('我的环境环境变量process.env.NODE_ENV',process.env.NODE_ENV)
 const APIURL=process.env.NODE_ENV==='development'?urlConfigsDev:urlConfigsProd
 module.exports = APIURL