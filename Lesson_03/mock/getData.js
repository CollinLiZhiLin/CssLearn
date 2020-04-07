const Mock = require('mockjs');

var random = Mock.Random ;
function Data(){
    const data=Mock.mock({
        img_url:'@image("100X100","#FFC0CB","#FF1493","png","100X100")'
    });
    return data;
}
Mock.mock(RegExp('/api/getData'),'get',Data());