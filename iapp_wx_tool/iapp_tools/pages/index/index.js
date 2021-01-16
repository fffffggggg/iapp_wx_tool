// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [{
      img: "../../images/EmptyBanner.jpg",
      // openpath: "../../pages/figure/figure"
    },{
        img: "../../images/EmptyBanner1.jpg",
        // openpath: "../../pages/bankQuery/bankQuery"
    },{
        img: "../../images/EmptyBanner2.jpg",
        // openpath: "../../pages/IDCard/IDCard"
    },{
        img: "../../images/EmptyBanner3.jpg",
        // openpath: "../../pages/MobileHome/MobileHome"
    }],
    server: [
      {
        img: "../../images/gsd.png",
        openpath: "../../pages/MobileHome/MobileHome",
        text: "手机归属地"
      },
      {
        img: "../../images/zip.png",
        openpath: "../../pages/getzip/getzip",
        text: "邮政编码"
      },
      {
        img: "../../images/ip.png",
        openpath: "../../pages/IP/IP",
        text: "IP查询"
      },
      {
        img: "../../images/lottery.png",
        openpath: "../../pages/lottery/lottery",
        text: "彩票查询"
      },
      {
        img: "../../images/tyfy.png",
        openpath: "../../pages/tyfy/tyfy",
        text: "近义反义"
      },
      {
        img: "../../images/chengyu.png",
        openpath: "../../pages/chengyu/chengyu",
        text: "成语解释"
      },
      {
        img: "../../images/xhzd.png",
        openpath: "../../pages/xhzd/xhzd",
        text: "新华字典"
      },
      {
        img: "../../images/xz.png",
        openpath: "../../pages/constellation/constellation",
        text: "星座运势"
      },
      {
        img: "../../images/sc.png",
        openpath: "../../pages/figure/figure",
        text: "身材计算"
      },
      {
        img: "../../images/wsyt.png",
        openpath: "../../pages/gojuuonn/gojuuonn",
        text: "五十音图"
      },
      {
        img: "../../images/hl.png",
        openpath: "../../pages/cand/index",
        text: "程序员黄历"
      },
      {
        img: "../../images/gz.png",
        openpath: "../../pages/game/game",
        text: "摇骰子"
      }  
    ],
    tool: [
      {
        img: "../../images/garbage.png",
        openpath: "../../pages/garbage/garbage",
        text: "垃圾分类"
      },
      {
        img: "../../images/calorie.png",
        openpath: "../../pages/calorie/calorie",
        text: "食物卡路里"
      },
      {
        img: "../../images/cha.png",
        openpath: "../../pages/pinyin/pinyin",
        text: "查拼音"
      },
      {
        img: "../../images/number.png",
        openpath: "../../pages/number/number",
        text: "大写数字"
      },
      {
        img: "../../images/exchange.png",
        openpath: "../../pages/exchange/exchange",
        text: "汇率换算"
      },
      {
        img: "../../images/rainbow.png",
        openpath: "../../pages/rainbow/rainbow",
        text: "彩虹屁"
      },
      {
        img: "../../images/pyq.png",
        openpath: "../../pages/pyq/pyq",
        text: "朋友圈文案"
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})