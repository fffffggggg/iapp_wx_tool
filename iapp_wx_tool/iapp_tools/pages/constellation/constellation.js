// pages/constellation/constellation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    constellation: "",
    show: false,
    getdata: {},
    arrowSelectArray: [
    {
      key: 'Capricorn',
      text: '摩羯座'
    }, {
      key: 'Aquarius',
      text: '水瓶座'
    }, {
      key: 'Pisces',
      text: '双鱼座'
    }, {
      key: 'Aries',
      text: '白羊座'
    }, {
      key: 'Taurus',
      text: '金牛座'
    }, {
      key: 'Gemini',
      text: '双子座'
    }, {
      key: 'Cancer',
      text: '巨蟹座'
    }, {
      key: 'Leo',
      text: '狮子座'
    }, {
      key: 'Virgo',
      text: '处女座'
    }, {
      key: 'Libra',
      text: '天秤座'
    }, {
      key: 'Scorpio',
      text: '天蝎座'
    }, {
      key: 'Sagittarius',
      text: '射手座'
    }
    ],
    arrowSelectTypeArray: [
      {
        key: 'today',
        text: '今日运势'
      },{
        key: 'tomorrow',
        text: '明日运势'
      }
      // {
      //   type_id: 'week',
      //   type_name: '本周运势'
      // },{
      //   type_id: 'month',
      //   type_name: '本月运势'
      // },{
      //   type_id: 'year',
      //   type_name: '本年运势'
      // }
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
      constellation: { ...e.detail }
    })
  },
  clickItemType: function (e) {
    this.setData({
      type: { ...e.detail }
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
    var constellation = this.data.constellation.key;
    var type = this.data.type.key;
    if (constellation == '' || type == '') {
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
      url : "https://www.shijinzhengqian.cn/query/getFortuneByConstellation/",
      method: "POST",
      data: {
        constellation : constellation,
        type : type
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