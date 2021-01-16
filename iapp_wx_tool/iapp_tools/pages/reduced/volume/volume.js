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
      key: 'km',
      text: '立方千米'
    }, {
      key: 'm',
      text: '立方米'
    }, {
      key: 'dm',
      text: '立方分米'
    }, {
      key: 'cm',
      text: '立方厘米'
    }, {
      key: 'mm',
      text: '立方毫米'
    }, {
      key: 'l',
      text: '升'
    }, {
      key: 'dl',
      text: '分升'
    }, {
      key: 'cl',
      text: '厘升'
    }, {
      key: 'ml',
      text: '毫升'
    },{
      key: 'ul',
      text: '微升'
    }, {
      key: 'hl',
      text: '公石'
    }, {
      key: 'inch',
      text: '立方英尺'
    }, {
      key: 'yard',
      text: '立方码'
    }, {
      key: 'minch',
      text: '亩英尺'
    }, {
      key: 'ukgal',
      text: '英制加仑'
    }, {
      key: 'usgal',
      text: '美制加仑'
    }, {
      key: 'ukoz',
      text: '英制液体盎司'
    }, {
      key: 'usoz',
      text: '美制液体盎司'
    }
    ],
    
    selectDest:  [
      {
        key: 'km',
        text: '立方千米'
      }, {
        key: 'm',
        text: '立方米'
      }, {
        key: 'dm',
        text: '立方分米'
      }, {
        key: 'cm',
        text: '立方厘米'
      }, {
        key: 'mm',
        text: '立方毫米'
      }, {
        key: 'l',
        text: '升'
      }, {
        key: 'dl',
        text: '分升'
      }, {
        key: 'cl',
        text: '厘升'
      }, {
        key: 'ml',
        text: '毫升'
      },{
        key: 'ul',
        text: '微升'
      }, {
        key: 'hl',
        text: '公石'
      }, {
        key: 'inch',
        text: '立方英尺'
      }, {
        key: 'yard',
        text: '立方码'
      }, {
        key: 'minch',
        text: '亩英尺'
      }, {
        key: 'ukgal',
        text: '英制加仑'
      }, {
        key: 'usgal',
        text: '美制加仑'
      }, {
        key: 'ukoz',
        text: '英制液体盎司'
      }, {
        key: 'usoz',
        text: '美制液体盎司'
      }
      ],
      init_ : {
        "立方千米": "(x*1000000000)/1_立方米",
        "立方米": "(x*1)/1_立方米",
        "立方分米": "(x/1000)/1_立方米",
        "立方厘米": "(x/1000000)/1_立方米",
        "立方毫米": "(x/1000000000)/1_立方米",
        "升": "(x/1000)/1_立方米",
        "分升": "(x/10000)/1_立方米",
        "毫升": "(x/1000000)/1_立方米",
        "厘升": "(x/100000)/1_立方米",
        "公石": "(x/10)/1_立方米",
        "立方英尺": "(x*0.0283168)/1_立方米",
        "立方英寸": "(x*(0.0283168/1728))/1_立方米",
        "立方码": "(x*(0.0283168*27))/1_立方米",
        "亩英尺": "(x*(43560*1728*0.016387064/1000))/1_立方米",
        "英制加仑": "(x*0.00454609188)/1_立方米",
        "美制加仑": "(x*(231*0.016387064/1000))/1_立方米",
        "微升": "(x/1000000000)/1_立方米",
        "英制液体盎司": "(x/1000000*28.41)/1_立方米",
        "美制液体盎司": "(x/1000000*29.57)/1_立方米"
      },
      //长度计算
      calc_ : {
        "立方千米": "(x*1)/1000000000_立方千米(km³)",
        "立方米": "(x*1)/1_立方米(m³)",
        "立方分米": "(x*1)*1000_立方分米(dm³)",
        "立方厘米": "(x*1)*1000000_立方厘米(cm³)",
        "立方毫米": "(x*1)*1000000000_立方毫米(mm³)",
        "升": "(x*1)*1000_升(l)",
        "分升": "(x*1)*10000_分升(dl)",
        "毫升": "(x*1)*1000000_毫升(ml)",
        "厘升": "(x*1)*100000_厘升(cl)",
        "公石": "(x*1)*10_公石(hl)",
        "立方英尺": "(x*1)/0.0283168_立方英尺(cu ft)",
        "立方英寸": "(x*1)/(0.0283168/1728)_立方英寸(cu in)",
        "立方码": "(x*1)/(0.0283168*27)_立方码(cu yd)",
        "亩英尺": "(x*1)/(43560*1728*0.016387064/1000)_亩英尺",
        "英制加仑": "(x*1)/0.00454609188_英制加仑(uk gal)",
        "美制加仑": "(x*1)/(231*0.016387064/1000)_美制加仑(us gal)",
        "微升": "(x*1)/0.000000001_微升(ul)",
        "英制液体盎司": "(x*1)/(0.000001*28.41)_英制液体盎司(oz)",
        "美制液体盎司": "(x*1)/(0.000001*29.57)_美制液体盎司(oz)"
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