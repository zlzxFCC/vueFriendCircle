(function(doc, win) {
  var ua = navigator.userAgent.toLowerCase();
  var isMobile = ua.match(/mobile/i) == "mobile";
  if (!isMobile) {
    (window.__setFontSize__ = function() {
      doc.documentElement.style.fontSize = Math.min(640, document.documentElement.clientWidth) / 375 * 14 + 'px'
    })();
  } else {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 20 * (clientWidth / 320)-7.031199999999998 + 'px';
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  }
})(document, window);
