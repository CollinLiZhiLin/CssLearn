import  Mock  from "mockjs";

const data = Mock.mock({
    'list|11':[{
        'id|+1':Array
    }],
    // 'string|10':'@cword()',//@cword:随机生成10个中文字符  @word：随机生成英文字符
    string : '@cword(1,10)',
    title: "@ctitle(8)",
    sentence:'@csentence(50)',
    content:'@cparagraph(6)',
    // id:'@increment(100)',
    name:'@cname()',
    idCard:'@id()',
    address:'@city(true)',
    img_url:"@image('250x250','#FFC0CB','#FF1493','png','400X400')"
});
console.log(data);