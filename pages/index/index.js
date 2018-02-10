//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    //向模板传入数据
    // 轮播
    index_index_scroll_tmpl: {
      images: [
        'https://t10.baidu.com/it/u=2718916326,698554023&fm=173&s=008B9755004749550898302F0300C044&w=400&h=294&img.JPEG',
        'https://t12.baidu.com/it/u=300835994,1745894088&fm=173&s=12A3DD071E2166135CA458E90300A01B&w=428&h=218&img.JPEG'
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200
    },
    // nav
    index_index_navs_tmpl: {
      navs: [
        {
          image: 'https://m.youcai.xin/static/img/gravida.png',
          text: '猫咪'
        }, {
          image: 'https://m.youcai.xin/static/img/confinement.png',
          text: '狗狗'
        }, {
          image: 'https://m.youcai.xin/static/img/baby.png',
          text: '花花'
        }, {
          image: 'https://m.youcai.xin/static/img/old.png',
          text: '公公'
        }
      ]
    },

    // item
    index_index_items_tmpl: {
      items: [
        { image: 'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg' },
        { image: 'https://hamlet.b0.upaiyun.com/1609/22111/84439174cad04497beda3a076663beb4.jpg' },
        { image: 'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg' }
      ]
    }

  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  swiperchange: function (e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  go: function (event) {
    wx.navigateTo({
      url: '../list/index?type=' + event.currentTarget.dataset.type
    })
  }
})
