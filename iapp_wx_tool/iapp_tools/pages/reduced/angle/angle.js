// pages/length/length.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    srcInput : "",
    src: "",
    dest : "",  
    show: false,
    getInitValue: {},
    getDestValue: {},
    getdata: {},
    selectSrc: [
    {
      key: 'skm',
      text: '圆周'
    }, {
      key: 'gq',
      text: '直角'
    }, {
      key: 'gm',
      text: '百分度'
    }, {
      key: 'sm',
      text: '度'
    }, {
      key: 'sdm',
      text: '分'
    }, {
      key: 'scm',
      text: '秒'
    }, {
      key: 'smm',
      text: '弧度'
    }, {
      key: 'ym',
      text: '毫弧度'
    }
    ],
    
    selectDest:  [
      {
        key: 'skm',
        text: '圆周'
      }, {
        key: 'gq',
        text: '直角'
      }, {
        key: 'gm',
        text: '百分度'
      }, {
        key: 'sm',
        text: '度'
      }, {
        key: 'sdm',
        text: '分'
      }, {
        key: 'scm',
        text: '秒'
      }, {
        key: 'smm',
        text: '弧度'
      }, {
        key: 'ym',
        text: '毫弧度'
      }
      ],
      init_ : {
        "圆周": "(x*360)_度",
        "直角": "(x*90)_度",
        "百分度": "(x*900)/1000_度",
        "度": "(x*1)_度",
        "分": "(x*16.666667)/1000_度",
        "秒": "(x*0.2777778)/1000_度",
        "弧度": "(x*57.295780)_度",
        "毫弧度": "(x*57.295780)/1000_度"
      },
      //长度计算
      calc_ : {
        "圆周": "(x*2.777778)/1000_圆周",
        "直角": "(x*11.111111)/1000_直角",
        "百分度": "(x*1.111111)_百分度(gon)",
        "度": "(x*1)_度(°)",
        "分": "(x*60)_分(′)",
        "秒": "(x*3600)_秒",
        "弧度": "(x*17.453293)/1000_弧度(rad)",
        "毫弧度": "(x*17.453293)_毫弧度(mrad)" 
      },
    selected: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      init_ : this.data.init_,
      calc_: this.data.calc_
    })
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
   * 获取用户输入 
   */
  srcInput : function (e) {
    this.setData({
      srcInput: e.detail.value
    })
  },
  /**
   * 获取用户选择事件 
   */
  clickItemSrc: function (e) {
    this.setData({
      src: { ...e.detail }
    })
  },
  clickItemDest: function (e) {
    this.setData({
      dest: { ...e.detail }
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
    var number = that.data.srcInput;
    var src = that.data.src.text;
    var dest = that.data.dest.text;
    var reg = /^[0-9]*$/;
    if (src == '' || dest == '') {
      wx.showToast({
        title: '请选择换算单位',
        icon: 'none',
        image: '../../../images/error.png',
        duration: 2000
      })
      return false;
    }

    if (reg.test(number) === false || number == '' || number.length > 10) {
      wx.showToast({
        title: '请矫正输入',
        icon: 'none',
        image: '../../../images/error.png',
        duration: 2000
      })
      return false;
    }
//开始计算 获取公式，将源转为米， 然后将米转为目标。
    var expressionInit = that.data.init_[src];
    var expressionCalc = that.data.calc_[dest];

    var srcExp = expressionInit.split("_")[0];
    var unitSrc = expressionInit.split("_")[1];
    var destExp = expressionCalc.split("_")[0];
    var unitDest = expressionCalc.split("_")[1];

    var result;

    // 请求数据
    wx.request({
      url : "https://www.shijinzhengqian.cn/tool/getResultByExp/",
      method: "POST",
      data: {
        srcExp : srcExp,
        destExp : destExp,
        number : number
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
              getdata: res.data.data + unitDest
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