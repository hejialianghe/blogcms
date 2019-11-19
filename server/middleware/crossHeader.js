/*
 * @Author: doramart 
 * @Date: 2019-07-15 17:25:08 
 * @Discription 设置跨域访问
 * @Last Modified by:   doramart 
 * @Last Modified time: 2019-07-15 17:25:08 
 */


module.exports = (req, res, next) => {
    var domainName=(req.headers.host.split(':')[0]).toLowerCase()
    var orginList=['http://127.0.0.1','http://122.51.11.29','http://localhost','http://youliaowu.com']
    if(orginList.includes(domainName)){
        res.header('Access-Control-Allow-Origin',domainName);
    }
    res.header('Access-Control-Allow-Headers', 'x-requested-with');
    res.header('Access-Control-Request-Method', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();

}