// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: null,
    othersList: [],
    commentData: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId = Number(options.id) + 1
    this.getCurrentVideo(videoId);
    this.getCurrentOthers();
    this.getCommentList();
  },


  /**
   * 根据id获取视频详情
   */
  getCurrentVideo(videoId) {
    let that = this
    wx.request({
      url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/videoDetail?id=' + videoId,
      success: (result) => {
        if (result.data.code == 0) {
          that.setData({
            videoInfo: result.data.videoInfo.video
          })
        }
      },
    });
  },
  getCurrentOthers() {
    let that = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/othersList',
      success(res) {
        // console.log(res);
        if (res.data.code == 0) {
          that.setData({
            othersList: res.data.data.othersList
          })
        }
      }
    })
  },
  // 获取评论
  getCommentList() {
    let that = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/commentsList',
      success(res) {
        // console.log(res);
        if (res.data.code == 0) {
          that.setData({
            commentData: res.data.data.commentData
          })
        }
      }
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

  }
})