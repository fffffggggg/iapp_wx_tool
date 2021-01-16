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
      key: 'Pa',
      text: '帕斯卡'
    }, {
      key: 'kpa',
      text: '千帕'
    }, {
      key: 'hpa',
      text: '百帕'
    }, {
      key: 'atm',
      text: '标准大气压'
    }, {
      key: 'mmHg',
      text: '毫米汞柱'
    }, {
      key: 'inHg',
      text: '英寸汞柱'
    }, {
      key: 'bar',
      text: '巴'
    }, {
      key: 'mbar',
      text: '毫巴'
    }, {
      key: 'psf',
      text: '磅力/平方英尺'
    }, {
      key: 'psi',
      text: '磅力/平方英寸'
    }, {
      key: 'mmwg',
      text: '毫米水柱'
    }, {
      key: 'kgf/cm²',
      text: '公斤力/平方厘米'
    }, {
      key: 'kgf/㎡',
      text: '公斤力/平方米'
    }, {
      key: 'MPa',
      text: '兆帕'
    }
    ],
    
    selectDest:  [
      {
        key: 'Pa',
        text: '帕斯卡'
      }, {
        key: 'kpa',
        text: '千帕'
      }, {
        key: 'hpa',
        text: '百帕'
      }, {
        key: 'atm',
        text: '标准大气压'
      }, {
        key: 'mmHg',
        text: '毫米汞柱'
      }, {
        key: 'inHg',
        text: '英寸汞柱'
      }, {
        key: 'bar',
        text: '巴'
      }, {
        key: 'mbar',
        text: '毫巴'
      }, {
        key: 'psf',
        text: '磅力/平方英尺'
      }, {
        key: 'psi',
        text: '磅力/平方英寸'
      }, {
        key: 'mmwg',
        text: '毫米水柱'
      }, {
        key: 'kgf/cm²',
        text: '公斤力/平方厘米'
      }, {
        key: 'kgf/㎡',
        text: '公斤力/平方米'
      }, {
        key: 'MPa',
        text: '兆帕'
      }
      ],
      init_ : {
        "帕斯卡": "(x*1)/1_帕斯卡",
        "千帕": "(x*1000)/1_帕斯卡",
        "百帕": "(x*100)/1_帕斯卡",
        "标准大气压": "(x*101325)/1_帕斯卡",
        "毫米汞柱": "(x*(101325/760))/1_帕斯卡",
        "英寸汞柱": "(x*(101325/760*25.4))/1_帕斯卡",
        "巴": "(x*100000)/1_帕斯卡",
        "毫巴": "(x*100)/1_帕斯卡",
        "磅力/平方英尺": "(x*(6894.757/144))/1_帕斯卡",
        "磅力/平方英寸": "(x*6894.757)/1_帕斯卡",
        "毫米水柱": "(x*(1/0.101972))/1_帕斯卡",
        "公斤力/平方厘米": "(x*98066.5)/1_帕斯卡",
        "公斤力/平方米": "(x*9.80665)/1_帕斯卡",
        "兆帕": "(x*1000000)/1_兆帕"
      },
      //长度计算
      calc_ : {
        "帕斯卡": "(x*1)/1_帕斯卡(Pa)",
        "千帕": "(x*1)/1000_千帕(kpa)",
        "百帕": "(x*1)/100_百帕(hpa)",
        "标准大气压": "(x*1)/101325_标准大气压(atm)",
        "毫米汞柱": "(x*1)/(101325/760)_毫米汞柱(mmHg)",
        "英寸汞柱": "(x*1)/(101325/760*25.4)_英寸汞柱(in Hg)",
        "巴": "(x*1)/100000_巴(bar)",
        "毫巴": "(x*1)/100_毫巴(mbar)",
        "磅力/平方英尺": "(x*1)/(6894.757/144)_磅力/平方英尺(psf)",
        "磅力/平方英寸": "(x*1)/6894.757_磅力/平方英寸(psi)",
        "毫米水柱": "(x*1)/(1/0.101972)_毫米水柱",
        "公斤力/平方厘米": "(x*1)/98066.5_公斤力/平方厘米(kgf/cm²)",
        "公斤力/平方米": "(x*1)/9.80665_公斤力/平方米(kgf/㎡)",
        "兆帕": "(x*1)/1000000_兆帕(MPa)"
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