<template>
<div>
  <div class="loading" style="display: none;">
    <div class="loader rotate360"></div>
  </div>

  <div class="circle rotate360"></div>

  <div id="content" class="view">
    <div class="container">
      <div class="top">
        <img class="my-bg lazy" :src="header.backdrop">
        <div class="my-name" v-text="header.nickname"></div>
        <div class="my-avatar" v-if="header.avatar"><img class="lazy" :src="header.avatar"></div>
      </div>
      <div class="new-w" v-if="header.message">
        <div class="new-message">
          <img class="portrait lazy" :src="header.message_portrait">
          <p><span v-text="header.message_number"></span>条新信息</p>
          <i class="gt"></i>
        </div>
      </div>
      <div v-else class="no-message"></div>
      <div class="box">
        <div class="friend" v-for="item in trendsList">
          <div class="avatar">
            <div class="avatar-img lazy" data-original="http://img2.hd3p.com/attachment/1/4a2cdf7ee81493029496714.jpg?x-oss-process=style/w100" style="background-image: url(&quot;http://img2.hd3p.com/attachment/1/4a2cdf7ee81493029496714.jpg?x-oss-process=style/w100&quot;);"></div>
          </div>
          <div class="r-message">
            <p class="friend-name">
              n
            </p>
          <div v-if="!item.isad">
            <div v-if="item.type===1">
              <div class="friend-message" v-text="item.content.text">
              </div>
              <div class="all-message">全文</div>
            </div>
            <div v-else-if="item.type===2">
              <div class="friend-message" v-text="item.content.text">
              </div>
              <div class="all-message">全文</div>
             <div class="friend-img ad-qr" data-widget="img_prev_view" v-if="item.content.picture.length==1">
               <img class="lazy" :src="item.content.picture[0]">
             </div>
              <ul class="nine-img" data-widget="img_prev_view" v-if="item.content.picture.length>1">
                <li v-for="picture in item.content.picture"><img class="lazy" :src="picture"></li>
              </ul>

            </div>
            <div v-else-if="item.type===3">
              <div class="friend-message" v-text="item.content.text">
              </div>
              <div class="all-message">全文</div>
              <div class="friend-video">
                <img class="lazy video-img" :src="item.content.preview_pic">
                <i></i>
              </div>
            </div>
            <div v-else-if="item.type===4">
              <div class="friend-message" v-text="item.content.text">
              </div>
              <div class="all-message">全文</div>
              <div class="article article_link">
                <img class="lazy" :src="item.content.share_pic">
                <span class="article-message" v-text="item.content.title"></span>
              </div>
            </div>
          </div>
          <!-- 广告 -->
          <div v-else>
            <div class="ad-sign">
              <i class="ad" v-if="item.location"></i>
              <span>广告</span>
              <i class="down"></i>
            </div>
            <div class="friend-message" v-text="item.content.text">
            </div>
            <div class="all-message">全文</div>

            <div class="ad-img">
               <!-- <div class="ad-video lazy" data-link="<%=videoLink%>" data-original="<%=imgUrl(img,360)%>" style='background-image: url(<%=imgUrl(img,100)%>)'></div> -->
               <div class="friend-img ad-qr" data-widget="img_prev_view" v-if="item.content.picture.length">
                 <img class="lazy" :src="item.content.picture[0]">
               </div>
                <ul class="nine-img" v-if="item.content.picture.length>1">
                  <li v-for="picture in item.content.picture"><img class="lazy" :src="picture"></li>
                </ul>
            </div>

            <div class="see-details" v-if="item.content">
              <a href="" v-text="item.content.adlink_tips"><i></i></a>
            </div>
          </div>


          </div>
        </div>
      </div>



    </div>
  </div>




</div>
</template>

<script>
export default {
  data() {
    return {
      $el: {
        "view": $(".view"),
        "lazy": $(".lazy"),
        "loading": $(".loading"),
        "container": $(".container"),
        "tplFriend": $("#tpl_friend"),
        "allMessage": $(".all-message"),
        "friendVideo": $(".friend-video"),
        "videoPlay": $("#videoPlay")[0],
      },
      loading:true,
      title: '',
      header: {
        "message": true,
        "backdrop": "http://img2.hd3p.com/attachment/1/fd805cfb3f1492594824609.jpg",
        "nickname": "慕容雪",
        "avatar": "http://img2.hd3p.com/attachment/1/68f52a23aa1492594820014.jpg",
        "message_number": "3",
        "message_portrait": "http://img2.hd3p.com/attachment/1/b370269af71492594834771.png"
      },
      trendsList: [{
          "id": 2,
          "tid": 2,
          "mid": null,
          "avatar": "http://img2.hd3p.com/attachment/1/5fb4e33a0f1492594830591.jpg",
          "nickname": "类型：文字",
          "type": 1,
          "location": "死星.炮塔的厕所里面",
          "content": {
            "text": "老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。",
            "picture": null,
            "preview_pic": null,
            "video": null,
            "share_pic": null,
            "title": null,
            "link": null
          },
          "comment": [{
            "commentator": null,
            "type": null,
            "replyer": null,
            "content": null
          }],
          "publishUn": "s",
          "publishAt": 3,
          "likes": null,
          "sort": null,
          "isad": null,
          "custom": false,
          "createdAt": "2017-04-19T08:00:05.596Z",
          "updatedAt": "2017-04-19T08:00:05.596Z",
          "deletedAt": null
        },
        {
          "id": 2,
          "tid": 2,
          "mid": null,
          "avatar": "http://img2.hd3p.com/attachment/1/5fb4e33a0f1492594830591.jpg",
          "nickname": "类型：图文",
          "type": 2,
          "location": "死星.炮塔的厕所里面",
          "content": {
            "text": "老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。",
            "picture": ["http://statichome.weimob.com/img/product_show1.jpg"],
            "preview_pic": null,
            "video": null,
            "share_pic": null,
            "title": null,
            "link": null
          },
          "comment": [{
            "commentator": "西斯",
            "type": null,
            "replyer": "西斯",
            "content": "人民的名义人民的名义人民的名义人民的名义人民的名义人民的名义人民的名义人民的名义人民的名义"
          }, {
            "commentator": "西斯",
            "type": null,
            "replyer": "西斯",
            "content": "人民的名义人民的名义人民的名义人民的名义人民的名义人民的名义人民的名义人民的名义人民的名义"
          }],
          "publishUn": "s",
          "publishAt": 3,
          "likes": "西斯，欧比旺，达斯魔，绝地武士，jia-jia，白兵，伯爵",
          "sort": null,
          "isad": null,
          "custom": false,
          "createdAt": "2017-04-19T08:00:05.596Z",
          "updatedAt": "2017-04-19T08:00:05.596Z",
          "deletedAt": null
        },
        {
          "id": 2,
          "tid": 2,
          "mid": null,
          "avatar": "http://img2.hd3p.com/attachment/1/5fb4e33a0f1492594830591.jpg",
          "nickname": "类型：多图",
          "type": 2,
          "location": "死星.炮塔的厕所里面",
          "content": {
            "text": "老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。",
            "picture": ["http://statichome.weimob.com/img/product_show1.jpg", "http://statichome.weimob.com/img/product_show1.jpg", "http://statichome.weimob.com/img/product_show1.jpg", "http://statichome.weimob.com/img/product_show1.jpg",
              "http://statichome.weimob.com/img/product_show1.jpg", "http://statichome.weimob.com/img/product_show1.jpg", "http://statichome.weimob.com/img/product_show1.jpg", "http://statichome.weimob.com/img/product_show1.jpg",
              "http://statichome.weimob.com/img/product_show1.jpg"
            ],
            "preview_pic": null,
            "video": null,
            "share_pic": null,
            "title": null,
            "link": null
          },
          "comment": [{
            "commentator": null,
            "type": null,
            "replyer": null,
            "content": null
          }],
          "publishUn": "m",
          "publishAt": 6,
          "likes": null,
          "sort": null,
          "isad": null,
          "custom": false,
          "createdAt": "2017-04-19T08:00:05.596Z",
          "updatedAt": "2017-04-19T08:00:05.596Z",
          "deletedAt": null
        },
        {
          "id": 2,
          "tid": 2,
          "mid": null,
          "avatar": "http://img2.hd3p.com/attachment/1/5fb4e33a0f1492594830591.jpg",
          "nickname": "类型：广告图文",
          "type": 5,
          "location": "死星.炮塔的厕所里面",
          "content": {
            "text": "老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。",
            "picture": ["http://statichome.weimob.com/img/product_show1.jpg"],
            "preview_pic": null,
            "video": null,
            "share_pic": null,
            "title": null,
            "link": "http://weimob.com/"
          },
          "comment": [{
            "commentator": null,
            "type": null,
            "replyer": null,
            "content": null
          }],
          "publishUn": "m",
          "publishAt": 6,
          "likes": null,
          "sort": null,
          "isad": true,
          "custom": false,
          "createdAt": "2017-04-19T08:00:05.596Z",
          "updatedAt": "2017-04-19T08:00:05.596Z",
          "deletedAt": null
        },
        {
          "id": 2,
          "tid": 2,
          "mid": null,
          "avatar": "http://img2.hd3p.com/attachment/1/5fb4e33a0f1492594830591.jpg",
          "nickname": "类型：广告",
          "type": 5,
          "location": "死星.炮塔的厕所里面",
          "content": {
            "text": "老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。",
            "picture": ["http://statichome.weimob.com/img/product_show1.jpg"],
            "preview_pic": null,
            "video": null,
            "share_pic": null,
            "title": "自定义",
            "link": "http://weimob.com/"
          },
          "comment": [{
            "commentator": null,
            "type": null,
            "replyer": null,
            "content": null
          }],
          "publishUn": "m",
          "publishAt": 6,
          "likes": null,
          "sort": null,
          "isad": false,
          "custom": true,
          "createdAt": "2017-04-19T08:00:05.596Z",
          "updatedAt": "2017-04-19T08:00:05.596Z",
          "deletedAt": null
        },
        {
          "id": 2,
          "tid": 2,
          "mid": null,
          "avatar": "http://img2.hd3p.com/attachment/1/5fb4e33a0f1492594830591.jpg",
          "nickname": "类型：视频",
          "type": 3,
          "location": "死星.炮塔的厕所里面",
          "content": {
            "text": "老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。",
            "picture": null,
            "preview_pic": "http://statichome.weimob.com/img/product_show1.jpg",
            "video": "http://www.w3school.com.cn/example/html5/mov_bbb.mp4",
            "share_pic": null,
            "title": null,
            "link": null
          },
          "comment": [{
            "commentator": null,
            "type": null,
            "replyer": null,
            "content": null
          }],
          "publishUn": "d",
          "publishAt": 9,
          "likes": null,
          "sort": null,
          "isad": null,
          "custom": false,
          "createdAt": "2017-04-19T08:00:05.596Z",
          "updatedAt": "2017-04-19T08:00:05.596Z",
          "deletedAt": null
        },
        {
          "id": 2,
          "tid": 2,
          "mid": null,
          "avatar": "http://img2.hd3p.com/attachment/1/5fb4e33a0f1492594830591.jpg",
          "nickname": "类型：分享",
          "type": 4,
          "location": "死星.炮塔的厕所里面",
          "content": {
            "text": "老板又要我们做苦力了，怎么办，好忧桑，感觉死星分分钟会被秒掉啊诶。。。",
            "picture": null,
            "preview_pic": "http://statichome.weimob.com/img/product_show1.jpg",
            "video": null,
            "share_pic": null,
            "title": null,
            "link": null
          },
          "comment": [{
            "commentator": null,
            "type": null,
            "replyer": null,
            "content": null
          }],
          "publishUn": "d",
          "publishAt": 9,
          "likes": null,
          "sort": null,
          "isad": null,
          "custom": false,
          "createdAt": "2017-04-19T08:00:05.596Z",
          "updatedAt": "2017-04-19T08:00:05.596Z",
          "deletedAt": null
        }

      ],

    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init: function() {
      this.size()
      this.getData()
      self.loading=false
    },
    imgUrl(url, size) {
      return url + '?x-oss-process=style/w' + size
    },
    render: function(res) {
      // let res=this.res
      var self = this
      // var _timer = parseInt(Date.now() + 1e11 * Math.random())
      // var data = res.data
      // var share = data.share
      // if (share) {
      //   var shareData = {
      //     title: share.title,
      //     desc: share.content,
      //     imgUrl: share.pic,
      //     link: location.href + "?timer=" + _timer,
      //   }
      //   window.addShare(shareData)
      // }

      this.header = this.res.data.header
      this.trendsList = this.res.data.trends
      // this.message=this.header.message

      // this.hash = data.hash
      // this.id = data.id
      // let adLink
      // if (pageData.dot) {
      //   adLink = pageData.prefix + "/tap/ad?hash=" + hash + "&id=" + id + "&url="
      // } else {
      //   adLink = ''
      // }
      // window.adLink=adLink

      // if (trendsList) {
      //   var tpl = self.$el.tplFriend.html()
      //   var html = _.template(tpl, trendsList)
      //   self.$el.container.append(html)
      // } else {
      //   $(".container").append("<div class='error'></div>")
      // }

      // $(".lazy").lazyload()

      self.imgPrevView()
      self.initEvent()

    },
    initEvent: function() {
      var self = this
      var tap = (!!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch)) ? "touchstart" : "click"

      $(".all-message").on("click", function(e) {
        if ($(e.target).text() == "全文") {
          $(e.target).text("收起").parent().find(".friend-message").css({
            "max-height": "100%",
            "-webkit-line-clamp": "100000"
          })
        } else {
          $(e.target).text("全文").parent().find(".friend-message").css("-webkit-line-clamp", "7")
        }
      })

      $(".friend-video").on("click", function(e) {
        var link = $(e.currentTarget).attr("data-src")
        location.href = link
      })

      $(".article_link,.ad-video").on("click", function(e) {
        var link = $(e.currentTarget).attr("data-link")
        location.href = link
      })

    },
    imgPrevView: function() {
      var imgsObj = {},
        groupObj = {},
        groupId = 1000,
        et = null
      $('*[data-widget="img_prev_view"]').each(function(idx, dw) {
        groupObj = {}
        groupId += 1
        imgsObj[groupId] = []
        (function(groupId) {
          $(dw).on("click", function(evt) {
            et = evt.target
            if ("IMG" == et.tagName) {

              if ("A" == et.parentNode.tagName && et.parentNode.href != "") {
                //location.href=et.parentNode.href
                return true
              } else {
                if (typeof window.WeixinJSBridge != 'undefined') {
                  imgsObj[groupId].length && WeixinJSBridge.invoke('imagePreview', {
                    'current': $(et).data("original"),
                    'urls': imgsObj[groupId]
                  })
                } else {
                  alert("请使用微信预览")
                }
              }
            }
          }).find("img").each(function(jdx, v) {
            groupObj[$(v).data("original")] = $(v).data("original")
          })
          //数组去重复
          imgsObj[groupId] = Object.keys(groupObj)
          console.log(imgsObj)
        })(groupId)

      })
    },
    size: function() {
      var self = this
      var ua = navigator.userAgent.toLowerCase()
      var isMobile = ua.match(/mobile/i) == "mobile"
      if (!isMobile) {
        self.$el.view.css({
          "max-width": " 750px",
          "margin": "0 auto"
        })
      }
    },
    getData: function(callback) {
      var self = this
      self.loading=true
      // $.ajax({
      //   type: "GET",
      //   url: pageData.prefix + "/" + pageData.apimoments,
      //   cache: false,
      //   data: {
      //     hash: pageData.hash
      //   },
      //   success: function(res) {

      // self.$el.loading.hide()
      // if (res.code.errcode == "0") {
      // self.render(self.res)
      //   self.analysis()
      // } else {
      //   $(".view").html("<div class='error'>" + res.code.errmsg + "</div>")
      //   console.log("数据获取异常")
      // }
      //   },
      //   error: function(res) {
      //     $(".view").html("<div class='error'>页面出错啦～</div>")
      //   }
      // })
    },
    shareAnalysis: function() {
      return
      if (pageData.dot) {
        $.ajax({
          type: "GET",
          url: pageData.prefix + "/wx/share",
          cache: false,
          data: {
            hash: hash,
            id: id
          },
          success: function(res) {
            if (res.code.errcode == "0") {

            } else {
              console.log("数据获取异常")
            }
          },
          error: function(res) {}
        })
      }
    },
    analysis: function() {
      if (pageData.dot) {
        $.ajax({
          type: "GET",
          url: pageData.prefix + "/tap",
          cache: false,
          data: {
            hash: hash,
            id: id
          },
          success: function(res) {
            if (res.code.errcode == "0") {

            } else {
              console.log("数据获取异常")
            }
          },
          error: function(res) {}
        })
      }
    },


  }
}
</script>

<style lang="scss" scoped>@import 'src/style/case';
@import 'src/style/firend'</style>
