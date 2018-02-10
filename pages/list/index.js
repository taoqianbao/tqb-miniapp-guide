const arrList = require('../../mocks/services').response.data

Page({
  data: {
    title: '',
    //向模板传入数据
    list_index_items_tmpl: {
      items: arrList
    }
  },
  //事件处理函数
  onLoad: function (options) {
    this.title = options.type || '列表'
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.title
    })
  },
})
