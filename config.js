module.exports = {

  // 博客首页 slogon
  slogon: 'No fate but what you make',
  slogonCN: '歌声就在彩虹的下面',

  // 社交链接，为空则不显示
  social: {
    github: 'https://github.com/ChrisCindy',
    weibo: '',
    zhihu: 'https://www.zhihu.com/people/yin-xian-yong/activities',
    twitter: ''
  },

  // 微信分享缩率图
  // 请将图片存放于 assets/images 文件夹中，此处填入 assets 文件夹下的相对路径
  // e.g. images/wechat.jpg
  wechatShareThumbnail: '',

  // 谷歌网站验证
  googleSiteVerification: '',

  // 谷歌统计
  googleAnalytics: '',

  // 百度统计
  baiduAnalytics: '',

  // 打赏设置
  reward: {
    enable: true,
    comment: '坚持原创技术分享，您的支持将鼓励我继续创作！',
    wechatpay: 'images/wechatpay.jpg',
    alipay: 'images/alipay.jpg'
  },

  // 卜算子统计
  busuanziCount: {
    enable: true,

    site_uv_header: '本站访客数',
    site_uv_footer: '人次',

    site_pv_header: '本站总访问量',
    site_pv_footer: '次'
  },

  // 页面底部信息
  footer: {
    name: '逆葵',
    ICP: '京ICP备17007359号'
  },

  // 评论系统
  // 可选：搜狐畅言(sohu) / gitalk(gitalk)
  comment: 'gitalk',

  // 搜狐畅言配置
  sohu: {
    appid: '',
    conf: ''
  },
  // gitalk 配置
  gitalk: {
    clientID: '',
    clientSecret: '',
    repo: '',
    owner: ''
  }

}
