// pages/index/index.js
Page({
    data: {
        item: 0,
        tab: 0,
        playlist: [{
            id: 1, title: '钢琴协奏曲',singer: '肖邦',
            src: 'http://localhost.1mp3',coverImgUrl:'/images/cover (1).jpg'
    }, {
            id: 2,title: '奏鸣曲123', singer: '莫扎特',
            src: 'http://localhost.1mp3',coverImgUrl:'/images/cover (1).jpg'
        }, {
            id: 2,title: '欢乐颂', singer: '贝多芬',
            src: 'http://localhost.1mp3',coverImgUrl:'/images/cover (1).jpg'
        }, {
            id: 2,title: '爱之梦', singer: '奈斯特',
            src: 'http://localhost.1mp3',coverImgUrl:'/images/cover (1).jpg'
        }],
        state: 'pause',
        playIndex: 0,
        play: {
            currentTime: '00:00',
            duration: '00:00',
            percent: 0,
            title: '',
            singer: '',
            coverImgUrl:'/images/cover (1).jpg',
        }
    },
    play:function() {
        this.audioCtx.play()
        this.setData({state:'running'})
    },
    pause: function() {
        this.audioCtx.pause()
        this.setData({ state: 'pause'})
    },
    audioCtx: null,
    onReady: function() {
        this.audioCtx = wx.createInnerAudioContext()
        this.setMusic(0)
    },
    setMusic: function(index) {
        var music = this.data.playlist[index]
        this.audioCtx.src = music.src
        this.setData({
        playIndex: index,
        'play.title': music.title,
        'play.singer': music.singer,
        'play.coverImgUrl': music.coverImgUrl,
        'play.currentTime': '00:00',
        'play.percent': 0
        })
    },
    changeItem: function (e)  {
        this.setData ({
            item:  e.target.dataset.item
        })
    },
    changeTab: function (e)  {
        this.setData ({
            tab:  e.detail.current
        })
    },
    next: function(){
        var index =this.data.playIndex >= this.data.playlist.length - 1?
                   0  :this.data.playIndex + 1
        this.setMusic(index)
        if (this.data.state === 'running') {
            this.play()
        }
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