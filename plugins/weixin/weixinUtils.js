/**
 * Created by Administrator on 16-7-12.
 */
/********************微信分享工具类*********************/
wxHelp = {
    /**
     * 分享给朋友
     * @param title 标题
     * @param desc 描述
     * @param url URL
     * @param imgUrl 图片URL
     * @param fn_trigger 点击事件
     * @param fn_success 分享成功事件
     * @param fn_cancel 分享取消事件
     * @param fn_fail 分享失败事件
     */
    onMenuShareAppMessage:function(title,desc,url,imgUrl,fn_trigger,fn_success,fn_cancel,fn_fail){
        // 2. 分享接口
        // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareAppMessage({
            title: title,
            desc: desc,
            link: url,
            imgUrl: imgUrl,
            trigger: function (res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                //alert('用户点击发送给朋友');
                fn_trigger(res);
            },
            success: function (res) {
                //alert('已分享');
                fn_success(res);
            },
            cancel: function (res) {
                //alert('已取消');
                fn_cancel(res);
            },
            fail: function (res) {
                // alert(JSON.stringify(res));
                fn_fail(res);
            }
        });
    },
    /**
     * 分享到朋友圈
     * @param title 分享标题
     * @param url 分享URL
     * @param imgUrl 分享图片URL
     * @param fn_trigger 分享事件
     * @param fn_success 分享成功事件
     * @param fn_cancel 分享取消事件
     * @param fn_fail 分享失败事件
     */
    onMenuShareTimeline:function(title,url,imgUrl,fn_trigger,fn_success,fn_cancel,fn_fail){
        // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareTimeline({
            title: title,
            link: url,
            imgUrl: imgUrl,
            trigger: function (res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                //alert('用户点击分享到朋友圈');
                fn_trigger(res);
            },
            success: function (res) {
                //alert('已分享');
                fn_success(res);
            },
            cancel: function (res) {
                //alert('已取消');
                fn_cancel(res);
            },
            fail: function (res) {
                //alert(JSON.stringify(res));
                fn_fail(res);
            }
        });
    },
    onMenuShareQQ:function(title,desc,url,imgUrl,fn_trigger,fn_complete,fn_success,fn_cancel,fn_fail){
        // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareQQ({
            title: title,
            desc: desc,
            link: url,
            imgUrl: imgUrl,
            trigger: function (res) {
                ////alert('用户点击分享到QQ');
                fn_trigger(res);
            },
            complete: function (res) {
                //alert(JSON.stringify(res));
                fn_complete(res);
            },
            success: function (res) {
                //alert('已分享');
                fn_success(res);
            },
            cancel: function (res) {
                //alert('已取消');
                fn_cancel(res);
            },
            fail: function (res) {
                //alert(JSON.stringify(res));
                fn_fail(res);
            }
        });
    },
    getConfig:function(_url){
        var h = location.href.split('#')[0];
        //url:urls.baseUrl+"/api/wx_share!getShareInfo.action
        $.ajax({type:"POST",url:_url,dataType : "json", data:{methods:'config', path: h}, success :function (jsconfig) {
             try{
                 wx.config({
                     debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                     appId: jsconfig.appId, // 必填，公众号的唯一标识
                     timestamp: jsconfig.timestamp, // 必填，生成签名的时间戳
                     nonceStr: jsconfig.nonceStr, // 必填，生成签名的随机串s
                     signature: jsconfig.signature,// 必填，签名，见附录1
                     jsApiList: [
                         'checkJsApi','getLocation','openLocation',
                         'onMenuShareAppMessage','onMenuShareTimeline','#onMenuShareQQ',
                         'translateVoice',
                         'startRecord','stopRecord','onVoiceRecordEnd','playVoice','pauseVoice',
                         'stopVoice','onVoicePlayEnd','uploadVoice','downloadVoice',
                         'chooseImage','previewImage','uploadImage','downloadImage','getNetworkType',
                         'hideOptionMenu','showOptionMenu','hideMenuItems','showMenuItems','showAllNonBaseMenuItem','hideAllNonBaseMenuItem','closeWindow',
                         'scanQRCode'
                     ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                 });
             }catch (e){
             }

        }});
    }
}