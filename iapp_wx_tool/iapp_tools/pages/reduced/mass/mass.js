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
      key: 'kg',
      text: '千克'
    }, {
      key: 'g',
      text: '克'
    }, {
      key: 'mg',
      text: '毫克'
    }, {
      key: 'ug',
      text: '微克'
    }, {
      key: 't',
      text: '吨'
    }, {
      key: 'q',
      text: '公担'
    }, {
      key: 'lb',
      text: '磅'
    }, {
      key: 'oz',
      text: '盎司'
    }, {
      key: 'ct',
      text: '克拉'
    }, {
      key: 'gr',
      text: '格令'
    }, {
      key: 'lt',
      text: '长吨'
    }, {
      key: 'st',
      text: '短吨'
    }, {
      key: 'yd',
      text: '英担'
    }, {
      key: 'md',
      text: '美担'
    }, {
      key: 'st',
      text: '英石'
    }, {
      key: 'dr',
      text: '打兰'
    }, {
      key: 'dan',
      text: '担'
    }, {
      key: 'jin',
      text: '斤'
    }, {
      key: 'liang',
      text: '两'
    }, {
      key: 'qian',
      text: '钱'
    }, {
      key: 'fen',
      text: '分'
    }
    ],
    
    selectDest:  [
      {
        key: 'kg',
        text: '千克'
      }, {
        key: 'g',
        text: '克'
      }, {
        key: 'mg',
        text: '毫克'
      }, {
        key: 'ug',
        text: '微克'
      }, {
        key: 't',
        text: '吨'
      }, {
        key: 'q',
        text: '公担'
      }, {
        key: 'lb',
        text: '磅'
      }, {
        key: 'oz',
        text: '盎司'
      }, {
        key: 'ct',
        text: '克拉'
      }, {
        key: 'gr',
        text: '格令'
      }, {
        key: 'lt',
        text: '长吨'
      }, {
        key: 'st',
        text: '短吨'
      }, {
        key: 'yd',
        text: '英担'
      }, {
        key: 'md',
        text: '美担'
      }, {
        key: 'st',
        text: '英石'
      }, {
        key: 'dr',
        text: '打兰'
      }, {
        key: 'dan',
        text: '担'
      }, {
        key: 'jin',
        text: '斤'
      }, {
        key: 'liang',
        text: '两'
      }, {
        key: 'qian',
        text: '钱'
      }, {
        key: 'fen',
        text: '分'
      }
      ],
      init_ : {
        "千克": "(x*1)/1_千克",
        "克": "(x/1000)/1_千克",
        "毫克": "(x/1000000)/1_千克",
        "微克": "(x/1000000000)/1_千克",
        "吨": "(x*1000)/1_千克",
        "公担": "(x*100)/1_千克",
        "磅": "(x*0.45359237)/1_千克",
        "盎司": "(x*(0.45359237/16))/1_千克",
        "克拉": "(x*0.0002)/1_千克",
        "格令": "(x*(0.45359237/7000))/1_千克",
        "长吨": "(x*(0.45359237*2240))/1_千克",
        "短吨": "(x*(0.45359237*2000))/1_千克",
        "英担": "(x*(0.45359237*112))/1_千克",
        "美担": "(x*(0.45359237*100))/1_千克",
        "英石": "(x*(0.45359237*14))/1_千克",
        "打兰": "(x*(0.45359237/256))/1_千克",
        "担": "(x*50)/1_千克",
        "斤": "(x*0.5)/1_千克",
        "两": "(x*0.05)/1_千克",
        "钱": "(x*0.005)/1_千克",
        "分": "(x*0.000002)/1_千克"
      },
      //长度计算
      calc_ : {
        "千克": "(x*1)/1_千克(kg)",
        "克": "(x*1)*1000_克(g)",
        "毫克": "(x*1)*1000000_毫克(mg)",
        "微克": "(x*1)*1000000000_微克(μg)",
        "吨": "(x*1)/1000_吨(t)",
        "公担": "(x*1)/100_公担(q)",
        "磅": "(x*1)/0.45359237_磅(lb)",
        "盎司": "(x*1)/(0.45359237/16)_盎司(oz)",
        "克拉": "(x*1)/0.0002_克拉(ct)",
        "格令": "(x*1)/(0.45359237/7000)_格令(gr)",
        "长吨": "(x*1)/(0.45359237*2240)_长吨(lt)",
        "短吨": "(x*1)/(0.45359237*2000)_短吨(st)",
        "英担": "(x*1)/(0.45359237*112)_英担",
        "美担": "(x*1)/(0.45359237*100)_美担",
        "英石": "(x*1)/(0.45359237*14)_英石(st)",
        "打兰": "(x*1)/(0.45359237/256)_打兰(dr)",
        "担": "(x*1)/50_担",
        "斤": "(x*1)/0.5_斤",
        "两": "(x*1)/0.05_两",
        "钱": "(x*1)/0.005_钱",
        "分": "(x*1)/0.000002_分"
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