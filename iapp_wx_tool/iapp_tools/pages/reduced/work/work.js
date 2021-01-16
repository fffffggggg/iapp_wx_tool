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
      key: 'J',
      text: '焦耳'
    }, {
      key: 'kg·m',
      text: '公斤·米'
    }, {
      key: 'ps·h',
      text: '米制马力·时'
    }, {
      key: 'hp·h',
      text: '英制马力·时'
    }, {
      key: 'kW·h',
      text: '千瓦·时'
    }, {
      key: 'kW·h',
      text: '度'
    }, {
      key: 'cal',
      text: '卡'
    }, {
      key: 'kcal',
      text: '千卡'
    }, {
      key: 'btu',
      text: '英热单位'
    }, {
      key: 'ft·lb',
      text: '英尺·磅'
    }, {
      key: 'kJ',
      text: '千焦'
    }
    ],
    
    selectDest:  [
      {
        key: 'J',
        text: '焦耳'
      }, {
        key: 'kg·m',
        text: '公斤·米'
      }, {
        key: 'ps·h',
        text: '米制马力·时'
      }, {
        key: 'hp·h',
        text: '英制马力·时'
      }, {
        key: 'kW·h',
        text: '千瓦·时'
      }, {
        key: 'kW·h',
        text: '度'
      }, {
        key: 'cal',
        text: '卡'
      }, {
        key: 'kcal',
        text: '千卡'
      }, {
        key: 'btu',
        text: '英热单位'
      }, {
        key: 'ft·lb',
        text: '英尺·磅'
      }, {
        key: 'kJ',
        text: '千焦'
      }
      ],
      init_ : {
        "焦耳": "(x*1)/1_焦耳",
        "公斤·米": "(x*9.80392157)/1_焦耳",
        "米制马力·时": "(x*(9.80665*75*3600))/1_焦耳",
        "英制马力·时": "(x*(745.699872*3600))/1_焦耳",
        "千瓦·时": "(x*3600000)/1_焦耳",
        "度": "(x*3600000)/1_焦耳",
        "卡": "(x*4.185851820846)/1_焦耳",
        "千卡": "(x*4185.851820846)/1_焦耳",
        "英热单位": "(x*1055.05585262)/1_焦耳",
        "英尺·磅": "(x*1.3557483731)/1_焦耳",
        "千焦": "(x*1000)/1_焦耳"
      },
      //长度计算
      calc_ : {
        "焦耳": "(x*1)/1_焦耳(J)",
                "公斤·米": "(x*1)/9.80392157_公斤·米(kg·m)",
                "米制马力·时": "(x*1)/(9.80665*75*3600)_米制马力·时(ps·h)",
                "英制马力·时": "(x*1)/(745.699872*3600)_英制马力·时(hp·h)",
                "千瓦·时": "(x*1)/3600000_千瓦·时(kW·h)",
                "度": "(x*1)/3600000_度(kW·h)",
                "卡": "(x*1)/4.185851820846_卡(cal)",
                "千卡": "(x*1)/4185.851820846_千卡(kcal)",
                "英热单位": "(x*1)/1055.05585262_英热单位(btu)",
                "英尺·磅": "(x*1)/1.3557483731_英尺·磅(ft·lb)",
                "千焦": "(x*1)/1000_千焦(kJ)"
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