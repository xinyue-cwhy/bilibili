Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点中的导航索引
    currentIndex: 0,
    navList: [],
    swiperList: [],
    videoList: []
  },
  //导航栏获取点击的索引
  activeNav(event) {
    console.log(event.target.dataset.index);
    this.setData({
      currentIndex: event.target.dataset.index
    })
  },
  /**
   * 获取数据的方法
   */
  // 获取导航栏数据
  getnavList() {
    let that = this
    wx.request({
      url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/navList',
      success: (result) => {
        if (result.data.code == 0) {
          that.setData({
            navList: result.data.data.navList
          })
        }
      },
    });
  },

  //获取轮播图数据
  getswiperList() {
    let that = this
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/swiperList',
      success: (result) => {
        if (result.data.code == 0) {
          that.setData({
            swiperList: result.data.data.swiperList
          })
        }
      },
    });
  },
  //获取视频数据
  getvideoList() {
    let that = this
    wx.request({
      url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/videosList',
      success: (result) => {
        if (result.data.code == 0) {
          that.setData({
            videoList: result.data.data.videosList
          })
        }
      },
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getnavList();
    this.getswiperList();
    this.getvideoList();
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