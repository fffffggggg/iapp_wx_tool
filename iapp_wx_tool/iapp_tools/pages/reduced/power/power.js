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
      key: 'W',
      text: '瓦'
    }, {
      key: 'kW',
      text: '千瓦'
    }, {
      key: 'hp',
      text: '英制马力'
    }, {
      key: 'ps',
      text: '米制马力'
    }, {
      key: 'kg·m/s',
      text: '公斤·米/秒'
    }, {
      key: 'kcal/s',
      text: '千卡/秒'
    }, {
      key: 'Btu/s',
      text: '英热单位/秒'
    }, {
      key: 'ft·lb/s',
      text: '英尺·磅/秒'
    }, {
      key: 'J/s',
      text: '焦耳/秒'
    }, {
      key: '(N·m/s',
      text: '牛顿·米/秒'
    }
    ],
    
    selectDest:  [
      {
        key: 'W',
        text: '瓦'
      }, {
        key: 'kW',
        text: '千瓦'
      }, {
        key: 'hp',
        text: '英制马力'
      }, {
        key: 'ps',
        text: '米制马力'
      }, {
        key: 'kg·m/s',
        text: '公斤·米/秒'
      }, {
        key: 'kcal/s',
        text: '千卡/秒'
      }, {
        key: 'Btu/s',
        text: '英热单位/秒'
      }, {
        key: 'ft·lb/s',
        text: '英尺·磅/秒'
      }, {
        key: 'J/s',
        text: '焦耳/秒'
      }, {
        key: '(N·m/s',
        text: '牛顿·米/秒'
      }
      ],
      init_ : {
        "瓦": "(x*1)/1_瓦",
        "千瓦": "(x*1000)/1_瓦",
        "英制马力": "(x*745.699872)/1_瓦",
        "米制马力": "(x*(9.80665*75))/1_瓦",
        "公斤·米/秒": "(x*9.80665)/1_瓦",
        "千卡/秒": "(x*4184.1004)/1_瓦",
        "英热单位/秒": "(x*1055.05585)/1_瓦",
        "英尺·磅/秒": "(x*(745.699872/550))/1_瓦",
        "焦耳/秒": "(x*1)/1_瓦",
        "牛顿·米/秒": "(x*1)/1_瓦"
      },
      //长度计算
      calc_ : {
        "瓦": "(x*1)/1_瓦(W)",
        "千瓦": "(x*1)/1000_千瓦(kW)",
        "英制马力": "(x*1)/745.699872_英制马力(hp)",
        "米制马力": "(x*1)/(9.80665*75)_米制马力(ps)",
        "公斤·米/秒": "(x*1)/9.80665_公斤·米/秒(kg·m/s)",
        "千卡/秒": "(x*1)/4184.1004_千卡/秒(kcal/s)",
        "英热单位/秒": "(x*1)/1055.05585_英热单位/秒(Btu/s)",
        "英尺·磅/秒": "(x*1)/(745.699872/550)_英尺·磅/秒(ft·lb/s)",
        "焦耳/秒": "(x*1)/1_焦耳/秒(J/s)",
        "牛顿·米/秒": "(x*1)/1_牛顿·米/秒(N·m/s)"
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