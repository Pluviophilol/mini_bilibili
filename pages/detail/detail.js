// pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detail: null,
    recList: [],
    commentData: null,
  },

  getCurrentVideo(videoId) {
    wx.request({
      url: 'https://www.bilibili.com/index/ding.json',
      success: (res) => {
        if (res.statusCode === 200) {
          let val = Object.values(res.data.movie);
          let info = val.find((item) => item.aid === +videoId);
          // console.log(info);
          this.setData({
            detail: info,
          });
        }
      },
    });
  },

  // getRecommend(videoId) {
  //   wx.request({
  //     url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/othersList?id=' + videoId,
  //     success: (res) => {
  //       console.log(res);
  //       if (res.data.code === 0) {
  //         this.setData({
  //           recList: res.data.data.othersList,
  //         });
  //       }
  //     },
  //   });
  // },

  getRecommend() {
    wx.request({
      url: 'https://www.bilibili.com/index/catalogy/5-3day.json',
      success: (res) => {
        // console.log(res);
        if (res.statusCode === 200) {
          this.setData({
            recList: res.data.hot.list,
          });
        }
      },
    });
  },

  getCommentList(videoId) {
    wx.request({
      url:
        'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/commentsList?id=' +
        videoId,
      success: (res) => {
        // console.log(res);
        if (res.data.code === 0) {
          this.setData({
            commentData: res.data.data.commentData,
          });
        }
      },
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getRecommend();
    this.getCommentList(videoId);
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
