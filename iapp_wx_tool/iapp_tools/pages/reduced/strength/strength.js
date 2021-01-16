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
      key: 'N',
      text: '牛'
    }, {
      key: 'kN',
      text: '千牛'
    }, {
      key: 'kgf',
      text: '千克力'
    }, {
      key: 'gf',
      text: '克力'
    }, {
      key: 'tf',
      text: '公吨力'
    }, {
      key: 'lbf',
      text: '磅力'
    }, {
      key: 'kip',
      text: '千磅力'
    }, {
      key: 'dyn',
      text: '达因'
    }
    ],
    
    selectDest:  [
      {
        key: 'N',
        text: '牛'
      }, {
        key: 'kN',
        text: '千牛'
      }, {
        key: 'kgf',
        text: '千克力'
      }, {
        key: 'gf',
        text: '克力'
      }, {
        key: 'tf',
        text: '公吨力'
      }, {
        key: 'lbf',
        text: '磅力'
      }, {
        key: 'kip',
        text: '千磅力'
      }, {
        key: 'dyn',
        text: '达因'
      }
      ],
      init_ : {
        "牛": "(x*1)_牛",
        "千牛": "(x*1000)_牛",
        "千克力": "(x*9.806650)_牛",
        "克力": "(x*9.806650)/1000_牛",
        "公吨力": "(x*9806.650000)_牛",
        "磅力": "(x*4.448222)_牛",
        "千磅力": "(x*4448.221615)_牛",
        "达因": "(x*1)/100000_牛"
      },
      //长度计算
      calc_ : {
        "牛": "(x*1)_牛(N)",
        "千牛": "(x*1)/1000_千牛(kN)",
        "千克力": "(x*101.971621)/1000_千克力(kgf)",
        "克力": "(x*101.971621)_克力(gf)",
        // "公吨力": "(x*101.971621)/(Math.pow(10,6))_公吨力(tf)",
        "公吨力": "(x*101.971621)/1000000_公吨力(tf)",
        "磅力": "(x*224.808943)/1000_磅力_(lbf)",
        // "千磅力": "(x*224.808943)/(Math.pow(10,6))_千磅力(kip)",
        "千磅力": "(x*224.808943)/1000000_千磅力(kip)",
        "达因": "(x*100000)/1_达因(dyn)"
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