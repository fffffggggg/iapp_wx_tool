// pages/pinyin/pinyin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word: "",
    show: false,
    getdata: {}
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

   /**
   *  一键复制功能
   */
  copydata : function(e){
    var that = this;
    wx.setClipboardData({
      data: that.data.getdata,
      success : function(res){
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  },

  /**
   * 获取用户输入 
   */
  word: function (e) {
    this.setData({
      word: e.detail.value
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
    var word = this.data.word;
    //var reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/;
    // var reg = /^\d{6,18}$/;
    if (word == '') {
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
      //url: "https://www.zhaotool.com/v1/api/lt/e10adc3949ba59abbe56e057f20f883e/" + IDCard,url : "https://www.shijinzhengqian.cn/query/getLocationByIdCard";
      url : "https://www.shijinzhengqian.cn/tool/getPy/",
      method: "POST",
      data: {
        word : word
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