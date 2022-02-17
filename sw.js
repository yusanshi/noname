const workboxVersion = "6.4.2";

importScripts(
  `https://cdn.jsdelivr.net/npm/workbox-sw@${workboxVersion}/build/workbox-sw.min.js`
);

workbox.core.setCacheNameDetails({
  prefix: "noname",
});
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a12f83c653cc465ed631f0bac5c10fbc","url":"./assets/exit-android.html"},{"revision":"1072dc7a3569ef2e5a840b94cfc673da","url":"./assets/exit-ios.html"},{"revision":"a279b537896d7baabafbc4a55dc5aaf0","url":"./card/extra.js"},{"revision":"72ec3aebaaba67761f30a9feca2e1dc2","url":"./card/gujian.js"},{"revision":"3050de6fe3df460d81101b741bffe482","url":"./card/guozhan.js"},{"revision":"c5616f52fd5e8b29e4451b5326f62936","url":"./card/gwent.js"},{"revision":"41f541b2391640e9457ef2117c612fb3","url":"./card/hearth.js"},{"revision":"3e3b9890bd3543ed47d4c21824e2d31c","url":"./card/huanlekapai.js"},{"revision":"c3d399c1ee437c38fdae8546f8ee7bfd","url":"./card/mtg.js"},{"revision":"51100c32d0a029c6de41526339c46ee2","url":"./card/sp.js"},{"revision":"cf9ef1a862ca6426398c99f12c7124b0","url":"./card/standard.js"},{"revision":"814d8383c70112a5a698c169b281aeda","url":"./card/swd.js"},{"revision":"1f145392141c2cd82850130acd2eeba9","url":"./card/yingbian.js"},{"revision":"f8510b9f67297ba02c1850cd43fed63e","url":"./card/yongjian.js"},{"revision":"594117ca5a43b2d23f7cc4bedb36cec2","url":"./card/yunchou.js"},{"revision":"53a88c8e41f07c4b1e9a9d6a20139fa9","url":"./card/zhenfa.js"},{"revision":"6290cbbf5d63b00ca97a6ca83f5297cf","url":"./card/zhulu.js"},{"revision":"3b75ed82af47467fc502420b1a1a420a","url":"./character/diy.js"},{"revision":"64a8e73ec6559697fb7cad3a4314febb","url":"./character/extra.js"},{"revision":"f0e20d5de94fef8882738f41e587ca3a","url":"./character/gujian.js"},{"revision":"a144a5f9986ab1a893d96549ebfaa621","url":"./character/gwent.js"},{"revision":"80a9ce43855a571cd9651978fe573ec5","url":"./character/hearth.js"},{"revision":"b9114698b74a0d1f6e38e318fb2f438c","url":"./character/jiange.js"},{"revision":"2441b7c821b1781a6361d1c4cf0ed8b4","url":"./character/mobile.js"},{"revision":"99f43408336ab14221a1a8fb3dd7d209","url":"./character/mtg.js"},{"revision":"d334839b6bf62532162da2c6756fdbff","url":"./character/offline.js"},{"revision":"fb5b20c5aa65d58901ab702be18bff35","url":"./character/old.js"},{"revision":"b80ce534cc350c931f4b675dcb220c39","url":"./character/ow.js"},{"revision":"489f85b3dcb428b380356c74e3ee98c1","url":"./character/rank.js"},{"revision":"09cf983446af6621b9eab0c3796e6400","url":"./character/refresh.js"},{"revision":"3352237bd27d2962739c6a21c8d16f39","url":"./character/shenhua.js"},{"revision":"4d3c92d1168cc01bf1459e85f2abb2c5","url":"./character/sp.js"},{"revision":"113230a3e53e4d9a60d1257202007a04","url":"./character/sp2.js"},{"revision":"c839e5213c04edf6fc5096efcd7f7d33","url":"./character/standard.js"},{"revision":"92dfc097a28bff1076f2ec8b720b1309","url":"./character/swd.js"},{"revision":"3d296bef2f4dce3e2aa7d8ae4ca652fa","url":"./character/tw.js"},{"revision":"5eba4d891249c0523093bb4bcb2d3983","url":"./character/xiake.js"},{"revision":"be8c3e6b7abf450416b9c29d68abede7","url":"./character/xianjian.js"},{"revision":"c7fcf77a30bed75d5993ac4166806058","url":"./character/xinghuoliaoyuan.js"},{"revision":"e508e18574823a0319c83844bbadc850","url":"./character/yijiang.js"},{"revision":"0fc3899010d0c33fefdbe08af327739c","url":"./character/yingbian.js"},{"revision":"f2a586df4f0ed6746379a68e3b98bfc0","url":"./character/yxs.js"},{"revision":"d126053354198ecd6d56d403c0dfb2fb","url":"./character/zhuogui.js"},{"revision":"4c64d591790f80a783e77c82370cd6a8","url":"./extension/boss/extension.js"},{"revision":"3c075dd1f653ca1bdf78fb705a0a49cc","url":"./extension/cardpile/extension.js"},{"revision":"ee5c349cec87305f10f4bd7dc0b55132","url":"./extension/coin/extension.js"},{"revision":"2408c9274f6bda0a397327a007e78d6f","url":"./extension/wuxing/extension.js"},{"revision":"b1930f3f6b3f71b8e079b6db061cd2bd","url":"./font/huangcao.woff2"},{"revision":"eb8770d0e80a6b49f9d1ddecfcd1e384","url":"./font/xiaozhuan.woff2"},{"revision":"c0874213e7738d189d8ebd9f249c8d90","url":"./game/asset.js"},{"revision":"ce80119d052063a53c1df04a05388ca5","url":"./game/codemirror.js"},{"revision":"6dc3132b253d75efc060174794526b3e","url":"./game/config.js"},{"revision":"b590a1f648601613d10773f27b5be5e6","url":"./game/directory.js"},{"revision":"6951ded406276f0a07510b9af3e4f968","url":"./game/game.js"},{"revision":"d8c7cc74da60735a4f68dd966002b7ac","url":"./game/http.js"},{"revision":"174e1b1ec1cf43a2de83771bbf437aa9","url":"./game/jszip.js"},{"revision":"d9fd005b560a34afa95e626ed955f010","url":"./game/keyWords.js"},{"revision":"326e7e882284e868573710d4c3eba008","url":"./game/NoSleep.js"},{"revision":"eb12d263b08d4ed2c09841e822077e1e","url":"./game/package.js"},{"revision":"87c986c596d0e878ff7a4d7012782d40","url":"./game/phantom.js"},{"revision":"fb3255f5ab39ebd17141db3c358da422","url":"./game/pressure.js"},{"revision":"826b3519006012e23ebcb79b59506137","url":"./game/server.js"},{"revision":"bf55404c9781c138f1f1a73df67fa6c5","url":"./game/source.js"},{"revision":"09b465965209bbfd0960a2c2cc699f01","url":"./game/update.js"},{"revision":"d11bf6a2eecdaf68d66d6ff9ea35acce","url":"./index.html"},{"revision":"6caaf33727ec2f3b33aecd0e4aaee190","url":"./layout/default/codemirror.css"},{"revision":"dfd9c3b96bfac314fb37cb43f0c4a9d4","url":"./layout/default/layout.css"},{"revision":"1ee8b606e71b0638e0dd5c7d978b0de0","url":"./layout/default/menu.css"},{"revision":"af88dcc8690d2301481e86d223deae56","url":"./layout/default/phone.css"},{"revision":"dfd9c3b96bfac314fb37cb43f0c4a9d4","url":"./layout/layout.css"},{"revision":"43eab0bd132272f6de9910fb3269fcec","url":"./layout/long/layout.css"},{"revision":"3616042b8e835aa07630457191c43348","url":"./layout/long2/layout.css"},{"revision":"2f410a410db075839dd0d8c819732679","url":"./layout/mobile/equip.css"},{"revision":"b7bb809384b5311baf67c631e9e756d5","url":"./layout/mobile/layout.css"},{"revision":"f753d55b2ab47ca7db85369ada778233","url":"./layout/mode/boss.css"},{"revision":"532352088f90f95cca331d5972e46367","url":"./layout/mode/chess.css"},{"revision":"609929ebbbd2cba318ac8dbc50842617","url":"./layout/mode/stone.css"},{"revision":"6f89b72edfe8e39e58b8be63db36a953","url":"./layout/mode/story.css"},{"revision":"e33a22320c230a31eb6d021f454b7b35","url":"./layout/mode/tafang.css"},{"revision":"c4b216c2dc8b157f897b30b1b0a1b9f3","url":"./layout/newlayout/equip.css"},{"revision":"8c182a6d7cf4ab87e54a1915acb93262","url":"./layout/newlayout/global.css"},{"revision":"91b4e8e98aa1d78decf5c1da97ec1e5b","url":"./layout/newlayout/layout.css"},{"revision":"266b37e3bf767d53372ff8392c70a117","url":"./layout/nova/layout.css"},{"revision":"197dcd1fa2620390fbc5466e21517f5c","url":"./manifest.json"},{"revision":"14b5cbbcaf7e76b4f180ebc56edae407","url":"./mode/asset.js"},{"revision":"e0df4dacafe49b4c719cf41696caa778","url":"./mode/boss.js"},{"revision":"3745fdd1db5e3338d59342b586befae3","url":"./mode/brawl.js"},{"revision":"f42f9c881f3aedc2e8536e2518c0a77f","url":"./mode/chess.js"},{"revision":"5b875edf73037e1fda49fc26f359a7f0","url":"./mode/connect.js"},{"revision":"721897833053c97e019cd50d2c661147","url":"./mode/doudizhu.js"},{"revision":"b1a7e0495c0bbe0fed35649aa5a1d9a7","url":"./mode/guozhan.js"},{"revision":"a0d6b425160144825a87a8f274da34e7","url":"./mode/identity.js"},{"revision":"9263025e018f6c52ab82e20aedd7a403","url":"./mode/realtime.js"},{"revision":"d9c003f4050dd0a45aeec5665cf99550","url":"./mode/single.js"},{"revision":"06777b8d14ea7dff254842431836943f","url":"./mode/stone.js"},{"revision":"130f2366674da9e20acf27710a33a0e3","url":"./mode/tafang.js"},{"revision":"2758939cf080ab0d9a7c673a52c52743","url":"./mode/update.js"},{"revision":"6b783d7a99932291e27d0cc1a9113839","url":"./mode/versus.js"},{"revision":"671170a01798f66c5455ac6f80e315c8","url":"./pwa.js"},{"revision":"0ec224f84344777c2a5e8c2b830f739e","url":"./theme/music/style.css"},{"revision":"d8917ea443183d938c42057397afd33e","url":"./theme/simple/style.css"},{"revision":"7f4cb54c9b52ad1b87843eabf75f70ae","url":"./theme/style/card/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/card/default.css"},{"revision":"3d09c017674d531255b8d5d3a46c4a4d","url":"./theme/style/card/music.css"},{"revision":"f24a64e49a3eae1262ef5d0025f4f416","url":"./theme/style/card/new.css"},{"revision":"8b0acf307e0e20907a6139c135a983bf","url":"./theme/style/card/ol.css"},{"revision":"13dd1eb1d38db6ea29f8381a979a4502","url":"./theme/style/card/simple.css"},{"revision":"872481406234c8de5bdcc07847bf11a0","url":"./theme/style/card/wood.css"},{"revision":"6de3498da566d7c3daf828aa0e127cd6","url":"./theme/style/cardback/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/cardback/default.css"},{"revision":"cd171fde522ce2d1b0d303fd8f5ee70b","url":"./theme/style/cardback/feicheng.css"},{"revision":"9652f6a6fff706c25f4ecca80f6a3ac8","url":"./theme/style/cardback/liusha.css"},{"revision":"929d2741f832e774d7b9db7cf0882760","url":"./theme/style/cardback/music.css"},{"revision":"5c67d2e6b25fce8a11ef2d97c5d39ad1","url":"./theme/style/cardback/new.css"},{"revision":"80ed8cc3f3e80bf70b60eaf4e8afd939","url":"./theme/style/cardback/official.css"},{"revision":"bce60d8ee0af66eed08b2bf60ec2b059","url":"./theme/style/cardback/ol.css"},{"revision":"1845003824488776c167814024f61973","url":"./theme/style/cardback/wood.css"},{"revision":"b79821540ee6b503d81e1e85b8b1d0e5","url":"./theme/style/hp/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/hp/default.css"},{"revision":"0f5be5d0737dc28c5d9461e2a44476ac","url":"./theme/style/hp/emotion.css"},{"revision":"2eb1f0e4c4e4e7cb887cf9fe11dc333b","url":"./theme/style/hp/glass.css"},{"revision":"78387fbb776e3faebf6fca485063c287","url":"./theme/style/hp/official.css"},{"revision":"0c5ebcf3e711122ceba3bd7d26befc5f","url":"./theme/style/hp/ol.css"},{"revision":"45e804624052f365577da6866c0c4fa9","url":"./theme/style/hp/round.css"},{"revision":"6745db07b5bdf42d6d9bf538a511ec17","url":"./theme/style/hp/xinglass.css"},{"revision":"c98e28cd09f5234bc91bc00bb853e2a9","url":"./theme/style/hp/xinround.css"},{"revision":"bb138117965a83b75cc8b1e2d528781a","url":"./theme/woodden/style.css"}]);
workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "image",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 10000,
        maxAgeSeconds: 60 * 60 * 24 * 180,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Audios
workbox.routing.registerRoute(
  /\.(?:mp3|m4a|ogg|wav|aac)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "audio",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 10000,
        maxAgeSeconds: 60 * 60 * 24 * 180,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Fonts
workbox.routing.registerRoute(
  /\.(?:eot|ttf|woff|woff2)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "fonts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 180,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Static Libraries
workbox.routing.registerRoute(
  /^https:\/\/cdn\.jsdelivr\.net/,
  new workbox.strategies.CacheFirst({
    cacheName: "static-libs",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 15,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
