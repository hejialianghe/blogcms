
    /*
    * @param  {[string]} server_api   [restful api 主路径]
    * @param  {[string]} server_admin_api   [后台 api 主路径]
    */
    



'use strict';

const urlConfigsDev =require('./urlConfigs.dev') 

const urlConfigsProd = {
    "server_api": "http://122.51.11.29:8080/api/v0",
  "server_admin_api": "http://122.51.11.29:8080"
}
console.log('process.env.NODE_ENV',process.env.NODE_ENV)
 const APIURL=process.env.NODE_ENV==='development'?urlConfigsDev:urlConfigsProd
 module.exports = APIURL