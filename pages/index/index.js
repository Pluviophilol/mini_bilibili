// import {formatNumber} from "../../utils/util"

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 首页导航数据
    navList: [],
    // 被点击的首页导航的菜单的索引
    currentIndexNav: 0,
    // 轮播图数据
    swiperList: [],
    // 视频列表数据
    videoList: [],
  },

  // 点击首页导航数据
  activeNav(e) {
    this.setData({
      currentIndexNav: e.target.dataset.index,
    });
  },

  /**
   * 获取首页导航数据
   */
  getNavList() {
    // 利用小程序内置发送请求的方法
    wx.request({
      url:
        'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/navList',
      success: (res) => {
        // console.log(res);
        if (res.data.code === 0) {
          this.setData({
            navList: res.data.data.navList,
          });
        }
      },
    });
  },

  /**
   * 获取轮播图数据
   */
  getSwiperList() {
    // 利用小程序内置发送请求的方法
    wx.request({
      url:
        'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/swiperList',
      success: (res) => {
        // console.log(res);
        if (res.data.code === 0) {
          this.setData({
            swiperList: res.data.data.swiperList,
          });
        }
      },
    });
  },

  /**
   * 获取视频数据
   */
  getVideoList() {
    // 利用小程序内置发送请求的方法
    wx.request({
      url: 'https://www.bilibili.com/index/ding.json',
      success: (res) => {
        console.log(res);
        if (res.statusCode === 200) {
          this.setData({
            videoList: res.data.movie,
          });
        }
      },
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1 获取首页导航数据
    this.getNavList();
    // 2 获取轮播图数据
    this.getSwiperList();
    // 3 获取视频数据
    this.getVideoList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
