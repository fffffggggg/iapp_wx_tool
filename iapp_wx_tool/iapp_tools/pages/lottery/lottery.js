// pages/lottery/lottery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lottery: "",
    show: false,
    getdata: {},
    arrowSelectArray: [
    {
      key: 'ssq',
      text: '双色球'
    }, {
      key: 'dlt',
      text: '超级大乐透'
    }, {
      key: 'qlc',
      text: '七乐彩'
    }, {
      key: 'fcsd',
      text: '福彩3D'
    }, {
      key: 'qxc',
      text: '七星彩'
    }, {
      key: 'pls',
      text: '排列3'
    }, {
      key: 'plw',
      text: '排列5'
    }
    ],
    selected: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  clickItem: function (e) {
    this.setData({
      lottery: { ...e.detail }
    })
  },

  /**
   *用户点击获取数据事件 
   */
  getdata: function (e) {
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    var lottery = this.data.lottery.key;
    if (lottery == '' || lottery == undefined) {
      wx.showToast({
        title: '输入不合法',
        icon: 'none',
        image: '../../images/error.png',
        duration: 2000
      })
      return false;
    }
    // 请求数据
    wx.request({
      url : "https://www.shijinzhengqian.cn/query/getLottery/",
      method: "POST",
      data: {
        type : lottery
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)
        wx.hideLoading();
        if (res.data.code == "000000") {
          if (res.data.data == "" || res.data.data == "null" || res.data.data == null || res.data.data == "undefined" || res.data.data == undefined) {
            wx.showModal({
              title: '提示',
              content: "暂无数据",
              success: function (res) {
                that.setData({
                  show: false
                })
              }
            })
          } else {
            that.setData({
              show: true,
              getdata: res.data.data
            })
          }

        } else {
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            success: function (res) {
              that.setData({
                show: false
              })
            }
          })
        }
      }
    })
  }
})