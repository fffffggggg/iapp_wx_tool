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
      key: 'm/s',
      text: '米/秒'
    }, {
      key: 'km/s',
      text: '千米/秒'
    }, {
      key: 'km/h',
      text: '千米/时'
    }, {
      key: 'c',
      text: '光速'
    }, {
      key: 'mach',
      text: '马赫'
    }, {
      key: 'mile/h',
      text: '英里/时'
    }, {
      key: 'in/s',
      text: '英寸/秒'
    }
    ],
    
    selectDest:  [
      {
        key: 'm/s',
        text: '米/秒'
      }, {
        key: 'km/s',
        text: '千米/秒'
      }, {
        key: 'km/h',
        text: '千米/时'
      }, {
        key: 'c',
        text: '光速'
      }, {
        key: 'mach',
        text: '马赫'
      }, {
        key: 'mile/h',
        text: '英里/时'
      }, {
        key: 'in/s',
        text: '英寸/秒'
      }
      ],
      init_ : {
        "米/秒": "(x*1)_米/秒",
        "千米/秒": "(x*1000)_米/秒",
        "千米/时": "(x*277.777778)/1000_米/秒",
        "光速": "(x*299792458)_米/秒",
        "马赫": "(x*340.300000)_米/秒",
        "英里/时": "(x*447.040000)/1000_米/秒",
        "英寸/秒": "(x*25.400000)/1000_米/秒"
      },
      //长度计算
      calc_ : {
        "米/秒": "(x*1)_米/秒(m/s)",
        "千米/秒": "(x*1)/1000_千米/秒(km/s)",
        "千米/时": "(x*3.600000)_千米/时(km/h)",
        // "光速": "(x*3.335641)/(Math.pow(10,9))_光速(c)",
        "光速": "(x*3.335641)/1000000000_光速(c)",
        "马赫": "(x*2.938584)/1000_马赫(mach)",
        "英里/时": "(x*2.236936)_英里/时(mile/h)",
        "英寸/秒": "(x*39.370079)_英寸/秒(in/s)"
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