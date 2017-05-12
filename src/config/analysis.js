// 添加统计代码
(function AddAnalysis(){

    var addScript = function( src ){
        var script = document.createElement("script");
        script.type = 'text/javascript';
        script.async = true;
        script.src = src;
        var s = document.head || document.getElementsByTagName("head")[0];
        s.appendChild(script);
    };

    // baidu
    var _hmt = _hmt || [];
    addScript("//hm.baidu.com/hm.js?b7644745bc16bb3843c74c4a8a01df1b");

})();
