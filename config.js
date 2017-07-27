/****************************
 * 配置文件
 ****************************/

exports.configInfo = {

  /*** 服务器配置 ***/
  server : {
    ip          : "http://127.0.0.1",    //Ip地址
    port        : 3200,                  //端口号
    name        : "api_server",          //服务器名称
    crossOrigin : true,                  //是否接收跨域请求
    imageDir    : "files"                //图片存放目录
  },

  /*** mysql配置 ***/
  mysql : {
    host      : "120.27.4.237",
    user     	: "root",
    password 	: "123.com",
    port			: 3306,
    database	: "musicutopia"
  },
  
  /*** redis缓存数据库配置 ***/
  redisConfig : {
    port             : 6379,
    address          : "127.0.0.1",
    dbName           : 1
  },

  mongodb : {
		dbName : "musicUtopia",
		uri : "mongodb://localhost:27017/musicUtopia"
	},

  /*** 日志配置 ***/
  log4 : {
    appenders : [
      {
        type       : "dateFile",           //文件输出
        filename   : "logs/system.log",    //日志存放位置
        maxLogSize : 1024,                 //文件大小上限
        backups    : 3                     //日志备份
      }
    ]
  },

  /*** 服务器基本配置 ***/
  base : {
    isCrossOrigin     : true,         //是否开启跨域处理
    isClusterStart    : false,        //是否以集群方式启动
    isGetMemoryCache  : false,        //是否读取内存缓存
    isMemoryCache     : false,        //是否进行内存缓存
    cacheExpiration   : 86400,        //缓存生效时间
  },

  /*** 公共参数配置 ***/
  publicConfig : {
    LIMIT : 20     //默认每页显示数据量
  },

  /*** 融云相关配置 ***/
  rongCloudConfig : {
    app_key    : "pvxdm17jpgk8r",
    app_secret : "olvrCHuVteqys"
  }

};