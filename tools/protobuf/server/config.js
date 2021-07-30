let config = {


    //-----------以下为服务端共有proto文件的配置

    protoFilesRoot: '../../../proto/',                    //proto文件所在目录

    noCreate: false,
    noConvert:false,
    
    jsTarget: '../../../server/',//proto 生成的js目标地址
    tsTarget: '../../../server/',   //通过生成的js 生成ts的目标地址
    jsName: 'common_proto.js',
    tsName: 'common_proto.d.ts',

    isJsMin: true,//是否生成压缩过的js

    commonFiles: [
        'login.proto',
		'hall.proto',
		'sys_cmd.proto',
    ],


    //------------以下为服务端独立游戏的proto文件配置
    gameProtoJsTarget: './',
    gameProtoFiles: [
       // { id: 5044, protoName: 'room_mahjong_5044_pto.proto' },
    ]


}


// let config ={
//   5015: {protoName:"room_5015_pto.proto","game_server/games/"},
//   5016: {protoName:"room_5015_pto.proto","game_server/games/"}

// }

module.exports = config;