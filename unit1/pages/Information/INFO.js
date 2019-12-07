// pages/Information/INFO.js
Page({
	data: {
		/**
		  * 页面配置
		  */
		winWidth: 0,
		winHeight: 0,
		// tab切换
		currentTab: 0,
	},
	onLoad: function (options) {},
	onReady: function () {},
	onShow: function () {},
	onHide: function () {},
	onUnload: function () {},
	onPullDownRefresh: function () {},
	onReachBottom: function () {},
	onShareAppMessage: function () {},
	cancle:function(){
		wx.navigateBack({delta:delta})
	},
	bindDateChange: function (e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
			date: e.detail.value
		})
	},
	bindTimeChange: function (e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
			time: e.detail.value
		})
	},

	onLoad: function () {
		var that = this;
		/**
		 * 获取系统信息
		 */
		wx.getSystemInfo({
			success: function (res) {
				that.setData({
					winWidth: res.windowWidth,
					winHeight: res.windowHeight
				});
			}
		});
	},
	/**
	  * 滑动切换tab
	  */
	bindChange: function (e) {
		var that = this;
		that.setData({ currentTab: e.detail.current });
	},
	swichNav: function (e) {
		var that = this;
		if (this.data.currentTab === e.target.dataset.current) {
			return false;
		} else {
			that.setData({
				currentTab: e.target.dataset.current
			})
		}
	}


})