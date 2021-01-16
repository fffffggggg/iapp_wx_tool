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
      key: '℃',
      text: '摄氏度'
    }, {
      key: '℉',
      text: '华氏度'
    }, {
      key: 'K',
      text: '开氏度'
    }, {
      key: '°R',
      text: '兰氏度'
    }, {
      key: '°Re',
      text: '列氏度'
    }
    ],
    
    selectDest:  [
      {
        key: '℃',
        text: '摄氏度'
      }, {
        key: '℉',
        text: '华氏度'
      }, {
        key: 'K',
        text: '开氏度'
      }, {
        key: '°R',
        text: '兰氏度'
      }, {
        key: '°Re',
        text: '列氏度'
      }
      ],
      init_ : {
        "摄氏度": "(x*1)+273.15_开氏度",
        "华氏度": "(5*(x-32)/9)+273.15_开氏度",
        "开氏度": "(x-273.15)+273.15_开氏度",
        "兰氏度": "(x/1.8-273.15)+273.15_开氏度",
        "列氏度": "(x*1.25)+273.15_开氏度"
      },
      //长度计算
      calc_ : {
        "摄氏度": "(x-273.15)/1_摄氏度(℃)",
        "华氏度": "32+((x-273.15)*9/5)_华氏度(℉)",
        "开氏度": "(x-273.15)+273.15_开氏度(K)",
        "兰氏度": "((x-273.15)+273.15)*1.8_兰氏度(°R)",
        "列氏度": "(x-273.15)/1.25_列氏度(°Re)"
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