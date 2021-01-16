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
      text: '平方千米'
    }, {
      key: 'gq',
      text: '公顷'
    }, {
      key: 'gm',
      text: '公亩'
    }, {
      key: 'sm',
      text: '平方米'
    }, {
      key: 'sdm',
      text: '平方分米'
    }, {
      key: 'scm',
      text: '平方厘米'
    }, {
      key: 'smm',
      text: '平方毫米'
    }, {
      key: 'ym',
      text: '英亩'
    }, {
      key: 'smile',
      text: '平方英里'
    }, {
      key: 'syard',
      text: '平方码'
    }, {
      key: 'sfeet',
      text: '平方英尺'
    }, {
      key: 'sinches',
      text: '平方英寸'
    }, {
      key: 'sg',
      text: '平方竿'
    }, {
      key: 'q',
      text: '顷'
    }, {
      key: 'm',
      text: '亩'
    }, {
      key: 'fen',
      text: '分'
    }, {
      key: 'schi',
      text: '平方尺'
    }, {
      key: 'scun',
      text: '平方寸'
    }
    ],
    
    selectDest:  [
      {
        key: 'skm',
        text: '平方千米'
      }, {
        key: 'gq',
        text: '公顷'
      }, {
        key: 'gm',
        text: '公亩'
      }, {
        key: 'sm',
        text: '平方米'
      }, {
        key: 'sdm',
        text: '平方分米'
      }, {
        key: 'scm',
        text: '平方厘米'
      }, {
        key: 'smm',
        text: '平方毫米'
      }, {
        key: 'ym',
        text: '英亩'
      }, {
        key: 'smile',
        text: '平方英里'
      }, {
        key: 'syard',
        text: '平方码'
      }, {
        key: 'sfeet',
        text: '平方英尺'
      }, {
        key: 'sinches',
        text: '平方英寸'
      }, {
        key: 'sg',
        text: '平方竿'
      }, {
        key: 'q',
        text: '顷'
      }, {
        key: 'm',
        text: '亩'
      }, {
        key: 'fen',
        text: '分'
      }, {
        key: 'schi',
        text: '平方尺'
      }, {
        key: 'scun',
        text: '平方寸'
      }
      ],
      init_ : {
        "平方千米": "(x*1000000)/1_平方米",
        "公顷": "(x*10000)/1_平方米",
        "公亩": "(x*100)/1_平方米",
        "平方米": "(x*1)/1_平方米",
        "平方分米": "(x/100)/1_平方米",
        "平方厘米": "(x/10000)/1_平方米",
        "平方毫米": "(x/1000000)/1_平方米",
        // "英亩": "(x*(Math.pow(0.3048,2)*Math.pow(16.5,2)*160))/1_平方米",
        "英亩": "(x*(0.09290304*272.25*160))/1_平方米",
        // "平方英里": "(x*Math.pow((0.3048*3*1760),2))/1_平方米",
        "平方英里": "(x*2589988.110336001)/1_平方米",
        // "平方码": "(x*(Math.pow(0.3048,2)*9))/1_平方米",
        "平方码": "(x*0.8361273600000001)/1_平方米",
        // "平方英尺": "(x*(Math.pow(0.3048,2)))/1_平方米",
        "平方英尺": "(x*0.09290304)/1_平方米",
        // "平方英寸": "(x*(Math.pow(0.3048,2)/144))/1_平方米",
        "平方英寸": "(x*0.0006451600000000001)/1_平方米",
        // "平方竿": "(x*(Math.pow(0.3048,2)*Math.pow(16.5,2)))/1_平方米",
        "平方竿": "(x*(0.09290304*272.25))/1_平方米",
        "顷": "(x*(100/0.0015))/1_平方米",
        "亩": "(x*(1/0.0015))/1_平方米",
        "分": "(x*(1/0.015))/1_平方米",
        "平方尺": "(x*(1/9))/1_平方米",
        "平方寸": "(x*(0.01/9))/1_平方米"
      },
      //长度计算
      calc_ : {
        "平方千米": "(x*1)/1000000_平方千米(km²)",
        "公顷": "(x*1)/10000_公顷(ha)",
        "公亩": "(x*1)/100_公亩(are)",
        "平方米": "(x*1)/1_平方米(㎡)",
        "平方分米": "(x*1)*100_平方分米(dm²)",
        "平方厘米": "(x*1)*10000_平方厘米(cm²)",
        "平方毫米": "(x*1)*1000000_平方毫米(mm²)",
        // "英亩": "(x*1)/(Math.pow(0.3048,2)*Math.pow(16.5,2)*160)_英亩(acre)",
        "英亩": "(x*1)/(0.09290304*272.25*160)_英亩(acre)",
        // "平方英里": "(x*1)/Math.pow((0.3048*3*1760),2)_平方英里(sq.mi)",
        "平方英里": "(x*1)/2589988.110336001_平方英里(sq.mi)",
        // "平方码": "(x*1)/(Math.pow(0.3048,2)*9)_平方码(sq.yd)",
        "平方码": "(x*1)/(0.8361273600000001)_平方码(sq.yd)",
        // "平方英尺": "(x*1)/Math.pow(0.3048,2)_平方英尺(sq.ft)",
        "平方英尺": "(x*1)/0.09290304_平方英尺(sq.ft)",
        // "平方英寸": "(x*1)/(Math.pow(0.3048,2)/144)_平方英寸(sq.in)",
        "平方英寸": "(x*1)/(0.0006451600000000001)_平方英寸(sq.in)",
        // "平方竿": "(x*1)/(Math.pow(0.3048,2)*Math.pow(16.5,2))_平方竿(sq.rd)",
        "平方竿": "(x*1)/(0.09290304*272.25)_平方竿(sq.rd)",
        "顷": "(x*1)/(100/0.0015)_顷",
        "亩": "(x*1)/(1/0.0015)_亩",
        "分": "(x*1)/(1/0.015)_分",
        "平方尺": "(x*1)/(1/9)_平方尺",
        "平方寸": "(x*1)/(0.01/9)_平方寸"
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