(function(win) {
  //异步加载微信api
  // var jq = "//code.jquery.com/jquery-2.1.1.min.js";
  var wxapi = "//res.wx.qq.com/open/js/jweixin-1.2.0.js";
  var requires = function(url, onload) {
    var doc = document;
    var head = doc.head || (doc.getElementsByTagName("head")[0] || doc.documentElement);
    var node = doc.createElement("script");
    node.onload = onload;
    node.onerror = function() {};
    node.async = true;
    node.src = url[0];
    head.appendChild(node)
  }
  requires([wxapi], function(params) {

  });

  win.addShare = function(shareData) {
    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    try {
      if (WeixinJSBridge != undefined) {
        onBridgeReady();
      }
    } catch (e) {

    }

    function onBridgeReady() {

      // 发送给好友
      WeixinJSBridge.on('menu:share:appmessage', function(argv) {
        WeixinJSBridge.invoke('sendAppMessage', {
          "img_url": shareData.imgUrl,
          "img_width": "200",
          "img_height": "200",
          "link": shareData.link,
          "desc": shareData.desc,
          "title": shareData.title
        }, function(res) {
          validateShare(res);
        });
      });
      // 分享到朋友圈
      WeixinJSBridge.on('menu:share:timeline', function(argv) {
        WeixinJSBridge.invoke('shareTimeline', {
          "img_url": shareData.imgUrl,
          "img_width": "200",
          "img_height": "200",
          "link": shareData.link,
          "desc": shareData.desc,
          "title": shareData.title
        }, function(res) {
          validateShare(res);
        });
      });

    }

    function validateShare(res, num) {
      if (res.err_msg != 'send_app_msg:cancel' && res.err_msg != 'share_timeline:cancel') {
        app.shareAnalysis();
        //分享完毕回调
        //window.diandata.elementid="share";
        //window.diandata.eventtype="share";
        //if(num==0){
        //    window.diandata.pagename=pagename;
        //}else{
        //    window.diandata.pagename=pagename;
        //}
        //dadian.inite(window.urldian,window.diandata);
        //if (fun != undefined) {
        //    fun();
        //}
      }
    }
  };

})(window);
