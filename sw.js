const workboxVersion = "6.4.2";

importScripts(
  `https://cdn.jsdelivr.net/npm/workbox-sw@${workboxVersion}/build/workbox-sw.min.js`
);

workbox.core.setCacheNameDetails({
  prefix: "noname",
});
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a12f83c653cc465ed631f0bac5c10fbc","url":"./assets/exit-android.html"},{"revision":"1072dc7a3569ef2e5a840b94cfc673da","url":"./assets/exit-ios.html"},{"revision":"c8fba31e2d35da902cde7d535a87ee0f","url":"./card/extra.js"},{"revision":"72ec3aebaaba67761f30a9feca2e1dc2","url":"./card/gujian.js"},{"revision":"a0b07f78ccdf1d39c57eb549b507e122","url":"./card/guozhan.js"},{"revision":"c5616f52fd5e8b29e4451b5326f62936","url":"./card/gwent.js"},{"revision":"41f541b2391640e9457ef2117c612fb3","url":"./card/hearth.js"},{"revision":"3e3b9890bd3543ed47d4c21824e2d31c","url":"./card/huanlekapai.js"},{"revision":"c3d399c1ee437c38fdae8546f8ee7bfd","url":"./card/mtg.js"},{"revision":"45667d18d14e866038bcb59ff8b5ed95","url":"./card/sp.js"},{"revision":"ff475bbaea148c3b7ae4450dc5d6b1d0","url":"./card/standard.js"},{"revision":"814d8383c70112a5a698c169b281aeda","url":"./card/swd.js"},{"revision":"1f145392141c2cd82850130acd2eeba9","url":"./card/yingbian.js"},{"revision":"f3efd1915e12ca3828de39430192f394","url":"./card/yongjian.js"},{"revision":"602641c1e44a206a013e41d16ae12b93","url":"./card/yunchou.js"},{"revision":"53a88c8e41f07c4b1e9a9d6a20139fa9","url":"./card/zhenfa.js"},{"revision":"6290cbbf5d63b00ca97a6ca83f5297cf","url":"./card/zhulu.js"},{"revision":"45cce7bea5b1581afc2a03bbbc314b77","url":"./character/diy.js"},{"revision":"af59f68e384b7322463e07fa5263fec1","url":"./character/extra.js"},{"revision":"f0e20d5de94fef8882738f41e587ca3a","url":"./character/gujian.js"},{"revision":"a144a5f9986ab1a893d96549ebfaa621","url":"./character/gwent.js"},{"revision":"100d4592b7fe5470712771c7bf792370","url":"./character/hearth.js"},{"revision":"b9114698b74a0d1f6e38e318fb2f438c","url":"./character/jiange.js"},{"revision":"6d55fbf65ae7df79af37c19179215d25","url":"./character/mobile.js"},{"revision":"99f43408336ab14221a1a8fb3dd7d209","url":"./character/mtg.js"},{"revision":"d334839b6bf62532162da2c6756fdbff","url":"./character/offline.js"},{"revision":"432dd3fe9a5f95c6ff7b9ab31475da8e","url":"./character/old.js"},{"revision":"b80ce534cc350c931f4b675dcb220c39","url":"./character/ow.js"},{"revision":"a8ad59fe418acbc87358533779ca81ca","url":"./character/rank.js"},{"revision":"4f459a2a21bb53263563bd2507124550","url":"./character/refresh.js"},{"revision":"b42f81b89249ea39a32b86462ec9e846","url":"./character/shenhua.js"},{"revision":"66d5637c4f102ef9e6681c3a1309c9ee","url":"./character/sp.js"},{"revision":"58c5ed525443b567ae162639768b11d4","url":"./character/sp2.js"},{"revision":"78c06b14e1f0c6300539e99ce12a6de8","url":"./character/standard.js"},{"revision":"92dfc097a28bff1076f2ec8b720b1309","url":"./character/swd.js"},{"revision":"7d77fe9a95838104faf9679b258d2fb7","url":"./character/tw.js"},{"revision":"5eba4d891249c0523093bb4bcb2d3983","url":"./character/xiake.js"},{"revision":"1f90e1a571700d3f534c3743d604025c","url":"./character/xianjian.js"},{"revision":"7e9a46b6f2d9b7cfcb5ad66afe5e763a","url":"./character/xinghuoliaoyuan.js"},{"revision":"7d240eedd8d91f149d02730212c0a904","url":"./character/yijiang.js"},{"revision":"c682fcab9986a699cfb6e8931f69bd87","url":"./character/yingbian.js"},{"revision":"df0022ae9b9e74d3e9010e13ec3115d8","url":"./character/yxs.js"},{"revision":"d126053354198ecd6d56d403c0dfb2fb","url":"./character/zhuogui.js"},{"revision":"4c64d591790f80a783e77c82370cd6a8","url":"./extension/boss/extension.js"},{"revision":"3c075dd1f653ca1bdf78fb705a0a49cc","url":"./extension/cardpile/extension.js"},{"revision":"ee5c349cec87305f10f4bd7dc0b55132","url":"./extension/coin/extension.js"},{"revision":"2408c9274f6bda0a397327a007e78d6f","url":"./extension/wuxing/extension.js"},{"revision":"8bb7b248c2668d9e3c4f38e795cf42e8","url":"./game/asset.js"},{"revision":"ce80119d052063a53c1df04a05388ca5","url":"./game/codemirror.js"},{"revision":"6dc3132b253d75efc060174794526b3e","url":"./game/config.js"},{"revision":"b590a1f648601613d10773f27b5be5e6","url":"./game/directory.js"},{"revision":"8d67e8565a550d0cc5357e5e2258dd74","url":"./game/game.js"},{"revision":"d8c7cc74da60735a4f68dd966002b7ac","url":"./game/http.js"},{"revision":"174e1b1ec1cf43a2de83771bbf437aa9","url":"./game/jszip.js"},{"revision":"d9fd005b560a34afa95e626ed955f010","url":"./game/keyWords.js"},{"revision":"326e7e882284e868573710d4c3eba008","url":"./game/NoSleep.js"},{"revision":"eb12d263b08d4ed2c09841e822077e1e","url":"./game/package.js"},{"revision":"87c986c596d0e878ff7a4d7012782d40","url":"./game/phantom.js"},{"revision":"fb3255f5ab39ebd17141db3c358da422","url":"./game/pressure.js"},{"revision":"7e9688b251ea0f8f63f8b5a98ac2b352","url":"./game/server.js"},{"revision":"e941371d9104feb7a93361a4787083dd","url":"./game/source.js"},{"revision":"a0f56c592d0ef361ec5cfd8af9dd4004","url":"./game/update.js"},{"revision":"d11bf6a2eecdaf68d66d6ff9ea35acce","url":"./index.html"},{"revision":"6caaf33727ec2f3b33aecd0e4aaee190","url":"./layout/default/codemirror.css"},{"revision":"90dc638b1f5b19ca897721f77d87e4b1","url":"./layout/default/layout.css"},{"revision":"1ee8b606e71b0638e0dd5c7d978b0de0","url":"./layout/default/menu.css"},{"revision":"af88dcc8690d2301481e86d223deae56","url":"./layout/default/phone.css"},{"revision":"dfd9c3b96bfac314fb37cb43f0c4a9d4","url":"./layout/layout.css"},{"revision":"43eab0bd132272f6de9910fb3269fcec","url":"./layout/long/layout.css"},{"revision":"3616042b8e835aa07630457191c43348","url":"./layout/long2/layout.css"},{"revision":"2f410a410db075839dd0d8c819732679","url":"./layout/mobile/equip.css"},{"revision":"b7bb809384b5311baf67c631e9e756d5","url":"./layout/mobile/layout.css"},{"revision":"f753d55b2ab47ca7db85369ada778233","url":"./layout/mode/boss.css"},{"revision":"532352088f90f95cca331d5972e46367","url":"./layout/mode/chess.css"},{"revision":"609929ebbbd2cba318ac8dbc50842617","url":"./layout/mode/stone.css"},{"revision":"6f89b72edfe8e39e58b8be63db36a953","url":"./layout/mode/story.css"},{"revision":"e33a22320c230a31eb6d021f454b7b35","url":"./layout/mode/tafang.css"},{"revision":"c4b216c2dc8b157f897b30b1b0a1b9f3","url":"./layout/newlayout/equip.css"},{"revision":"8c182a6d7cf4ab87e54a1915acb93262","url":"./layout/newlayout/global.css"},{"revision":"91b4e8e98aa1d78decf5c1da97ec1e5b","url":"./layout/newlayout/layout.css"},{"revision":"266b37e3bf767d53372ff8392c70a117","url":"./layout/nova/layout.css"},{"revision":"197dcd1fa2620390fbc5466e21517f5c","url":"./manifest.json"},{"revision":"14b5cbbcaf7e76b4f180ebc56edae407","url":"./mode/asset.js"},{"revision":"cb28eca561f412f64de1a559da69eb99","url":"./mode/boss.js"},{"revision":"04ca36ab4c78640222c71d0b8afcfe1a","url":"./mode/brawl.js"},{"revision":"f42f9c881f3aedc2e8536e2518c0a77f","url":"./mode/chess.js"},{"revision":"3d6819bf4a2fdf244b33a3c88a6fd5ae","url":"./mode/connect.js"},{"revision":"e8743bf58d7e3d2074b9599cc51e2919","url":"./mode/doudizhu.js"},{"revision":"3146218a3ebcf355bcdefa975612acfc","url":"./mode/guozhan.js"},{"revision":"45279d704ee76d35fbe7318c67901d7a","url":"./mode/identity.js"},{"revision":"9263025e018f6c52ab82e20aedd7a403","url":"./mode/realtime.js"},{"revision":"beb73b56655dcfb16593c35b122997c7","url":"./mode/single.js"},{"revision":"06777b8d14ea7dff254842431836943f","url":"./mode/stone.js"},{"revision":"130f2366674da9e20acf27710a33a0e3","url":"./mode/tafang.js"},{"revision":"2758939cf080ab0d9a7c673a52c52743","url":"./mode/update.js"},{"revision":"36822d3727b35ae9d885ea6ac2e3f7ee","url":"./mode/versus.js"},{"revision":"edb3f9f49b11face8130a85e4c70ab5c","url":"./pwa.js"},{"revision":"0ec224f84344777c2a5e8c2b830f739e","url":"./theme/music/style.css"},{"revision":"d8917ea443183d938c42057397afd33e","url":"./theme/simple/style.css"},{"revision":"7f4cb54c9b52ad1b87843eabf75f70ae","url":"./theme/style/card/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/card/default.css"},{"revision":"3d09c017674d531255b8d5d3a46c4a4d","url":"./theme/style/card/music.css"},{"revision":"f24a64e49a3eae1262ef5d0025f4f416","url":"./theme/style/card/new.css"},{"revision":"8b0acf307e0e20907a6139c135a983bf","url":"./theme/style/card/ol.css"},{"revision":"13dd1eb1d38db6ea29f8381a979a4502","url":"./theme/style/card/simple.css"},{"revision":"872481406234c8de5bdcc07847bf11a0","url":"./theme/style/card/wood.css"},{"revision":"6de3498da566d7c3daf828aa0e127cd6","url":"./theme/style/cardback/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/cardback/default.css"},{"revision":"cd171fde522ce2d1b0d303fd8f5ee70b","url":"./theme/style/cardback/feicheng.css"},{"revision":"9652f6a6fff706c25f4ecca80f6a3ac8","url":"./theme/style/cardback/liusha.css"},{"revision":"929d2741f832e774d7b9db7cf0882760","url":"./theme/style/cardback/music.css"},{"revision":"5c67d2e6b25fce8a11ef2d97c5d39ad1","url":"./theme/style/cardback/new.css"},{"revision":"80ed8cc3f3e80bf70b60eaf4e8afd939","url":"./theme/style/cardback/official.css"},{"revision":"bce60d8ee0af66eed08b2bf60ec2b059","url":"./theme/style/cardback/ol.css"},{"revision":"1845003824488776c167814024f61973","url":"./theme/style/cardback/wood.css"},{"revision":"c843a1c67cfc143f6b7feab625821dae","url":"./theme/style/hp/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/hp/default.css"},{"revision":"21b61481516a270c19fbe5c43b136730","url":"./theme/style/hp/emotion.css"},{"revision":"8281d0359c41ee7777b5342ef8055bec","url":"./theme/style/hp/glass.css"},{"revision":"1b45e6c40e90850ce604b99b0a364cbe","url":"./theme/style/hp/official.css"},{"revision":"efed52293dec54caf5061841b66205d2","url":"./theme/style/hp/ol.css"},{"revision":"68de705f81faf300190a686c5a0667cf","url":"./theme/style/hp/round.css"},{"revision":"984a1cc9c122fd72b5675b4c2cc8b7e9","url":"./theme/style/hp/xinglass.css"},{"revision":"63e7d55fa656b9c9dc8a1e32126e0502","url":"./theme/style/hp/xinround.css"},{"revision":"bb138117965a83b75cc8b1e2d528781a","url":"./theme/woodden/style.css"}]);
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
        maxAgeSeconds: 60 * 60 * 24 * 360,
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
