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
      text: '千米'
    }, {
      key: 'm',
      text: '米'
    }, {
      key: 'dm',
      text: '分米'
    }, {
      key: 'cm',
      text: '厘米'
    }, {
      key: 'mm',
      text: '毫米'
    }, {
      key: 'um',
      text: '微米'
    }, {
      key: 'nm',
      text: '纳米'
    }, {
      key: 'pm',
      text: '皮米'
    }, {
      key: 'gn',
      text: '光年'
    }, {
      key: 'twdw',
      text: '天文单位'
    }, {
      key: 'feet',
      text: '英尺'
    }, {
      key: 'inches',
      text: '英寸'
    }, {
      key: 'yard',
      text: '码'
    }, {
      key: 'mile',
      text: '英里'
    }, {
      key: 'nmail',
      text: '海里'
    }, {
      key: 'fm',
      text: '英寻'
    }, 
    {
      key: 'dm',
      text: '弗隆'
    }, {
      key: 'dm',
      text: '密耳'
    }, 
    {
      key: 'li',
      text: '里'
    }, {
      key: 'zhang',
      text: '丈'
    }, {
      key: 'chi',
      text: '尺'
    }, {
      key: 'cun',
      text: '寸'
    }, {
      key: 'fen',
      text: '分'
    }, {
      key: 'li2',
      text: '厘'
    }, {
      key: 'hao',
      text: '毫'
    }
    ],
    
    selectDest: [
      {
        key: 'km',
        text: '千米'
      }, {
        key: 'm',
        text: '米'
      }, {
        key: 'dm',
        text: '分米'
      }, {
        key: 'cm',
        text: '厘米'
      }, {
        key: 'mm',
        text: '毫米'
      }, {
        key: 'um',
        text: '微米'
      }, {
        key: 'nm',
        text: '纳米'
      }, {
        key: 'pm',
        text: '皮米'
      }, {
        key: 'gn',
        text: '光年'
      }, {
        key: 'twdw',
        text: '天文单位'
      }, {
        key: 'feet',
        text: '英尺'
      }, {
        key: 'inches',
        text: '英寸'
      }, {
        key: 'yard',
        text: '码'
      }, {
        key: 'mile',
        text: '英里'
      }, {
        key: 'nmail',
        text: '海里'
      }, {
        key: 'fm',
        text: '英寻'
      }, 
      {
        key: 'dm',
        text: '弗隆'
      }, {
        key: 'dm',
        text: '密耳'
      }, 
      {
        key: 'li',
        text: '里'
      }, {
        key: 'zhang',
        text: '丈'
      }, {
        key: 'chi',
        text: '尺'
      }, {
        key: 'cun',
        text: '寸'
      }, {
        key: 'fen',
        text: '分'
      }, {
        key: 'li2',
        text: '厘'
      }, {
        key: 'hao',
        text: '毫'
      }
      ],
      init_ : {
        "千米": "(x*1000)/1_米",
        "米": "(x*1)/1_米",
        "分米": "(x*1/10)/1_米",
        "厘米": "(x*1/100)/1_米",
        "毫米": "(x*1/1000)/1_米",
        "微米": "(x*1/1000000)/1_米",
        "纳米": "(x*1/1000000000)/1_米",
        "皮米": "(x*1/1000000000000)/1_米",
        "光年": "(x*9460730472580800)/1_米",
        "天文单位": "(x*149600000000)/1_米",
        "英寸": "(x*(0.3048/12))/1_米",
        "英尺": "(x*0.3048)/1_米",
        "码": "(x*(0.3048*3))/1_米",
        "英里": "(x*(0.3048*3*1760))/1_米",
        "海里": "(x*1852)/1_米",
        "英寻": "(x*1.8288)/1_米",
        "弗隆": "(x*201.168)/1_米",
        "密耳": "(x*(0.3048/12))/1/1000_米",
        "里": "(x*500)/1_米",
        "丈": "(x*(10/3))/1_米",
        "尺": "(x*(1/3))/1_米",
        "寸": "(x*(1/10/3))/1_米",
        "分": "(x*(1/100/3))/1_米",
        "厘": "(x*(1/1000/3))/1_米",
        "毫": "(x*(1/10000/3))/1_米"
      },
      //长度计算
      calc_ : {
        "千米": "(x*1)/1000_千米(km)",
        "米": "(x*1)/1_米(m)",
        "分米": "(x*1)*10_分米(dm)",
        "厘米": "(x*1)*100_厘米(cm)",
        "毫米": "(x*1)*1000_毫米(mm)",
        "微米": "(x*1)*1000000_微米(um)",
        "纳米": "(x*1)*1000000000_纳米(nm)",
        "皮米": "(x*1)*1000000000000_皮米(pm)",
        "光年": "(x*1)/9460730472580800_光年(ly)",
        "天文单位": "(x*1)/149597870700_天文单位(AU)",
        "英寸": "(x*1)/(0.3048/12)_英寸(in)",
        "英尺": "(x*1)/0.3048_英尺(ft)",
        "码": "(x*1)/(0.3048*3)_码(yd)",
        "英里": "(x*1)/(0.3048*3*1760)_英里(mi)",
        "海里": "(x*1)/1852_海里(nmi)",
        "英寻": "(x*1)/1.8288_英寻(fm)",
        "弗隆": "(x*1)/201.168_弗隆(fur)",
        "密耳": "(x*1)/(0.3048/12)*1000_密耳(mil)",
        "里": "(x*1)/500_里",
        "丈": "(x*1)/(10/3)_丈",
        "尺": "(x*1)/(1/3)_尺",
        "寸": "(x*1)/(1/10/3)_寸",
        "分": "(x*1)/(1/100/3)_分",
        "厘": "(x*1)/(1/1000/3)_厘",
        "毫": "(x*1)/(1/10000/3)_毫"
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

    if (reg.test(number) === false || number == '' || number.length > 20) {
      wx.showToast({
        title: '请输入数值,不大于20位',
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