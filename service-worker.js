/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7e167d90faf153450d55f62176d2bd4d"
  },
  {
    "url": "assets/css/0.styles.723c6548.css",
    "revision": "33e7bb1fe8d831cff2a39fac8a97a740"
  },
  {
    "url": "assets/img/create-user-wag.6c82238a.png",
    "revision": "6c82238aa59a716d25704dd1ea078f4b"
  },
  {
    "url": "assets/img/create-user.6b36d092.png",
    "revision": "6b36d092d41ec2cb579fe21f695fb086"
  },
  {
    "url": "assets/img/delete-user-id.36b94a56.png",
    "revision": "36b94a56bd9ed57fdb87c2b4294240d6"
  },
  {
    "url": "assets/img/delete-users.54981f76.png",
    "revision": "54981f76c2beafefc1ef73f8ca03e29b"
  },
  {
    "url": "assets/img/get-user-id.98819100.png",
    "revision": "988191007bd06f4cf7d74d0e05bf693b"
  },
  {
    "url": "assets/img/get-users.4fffe283.png",
    "revision": "4fffe283b7cc50a159814417a34eeb5e"
  },
  {
    "url": "assets/img/logo.21fcc4f4.svg",
    "revision": "21fcc4f485f8d8cd95ab594fcdc39a0e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start-server.ee7bd41f.png",
    "revision": "ee7bd41fff0d0b9004dd2824975f18cc"
  },
  {
    "url": "assets/img/update-user-a.f03494fe.png",
    "revision": "f03494fe0b0fee129d254f7fbe318cd6"
  },
  {
    "url": "assets/img/update-user.a591d3ae.png",
    "revision": "a591d3aebb2fb4b25d5d25fb8b533429"
  },
  {
    "url": "assets/js/10.4f9dcece.js",
    "revision": "044fbbe5fa3629fd1462efc080394c1d"
  },
  {
    "url": "assets/js/11.3ef95339.js",
    "revision": "5c1a5e44a92ea9fcdc8a43ef0f74dab7"
  },
  {
    "url": "assets/js/12.7af6f1fb.js",
    "revision": "0018e9ad2aa782ac88dcbc8d03feb676"
  },
  {
    "url": "assets/js/13.4092852d.js",
    "revision": "f775fbf858fe71204200230363f85b73"
  },
  {
    "url": "assets/js/14.82b0bc53.js",
    "revision": "630e959d9f1bec10e7ad5d11b34fd4d5"
  },
  {
    "url": "assets/js/15.65813135.js",
    "revision": "e549b130b1db4f16ceedf0f36f0e6467"
  },
  {
    "url": "assets/js/16.f7b85732.js",
    "revision": "0104261ecf4e0f21c092dc1104448532"
  },
  {
    "url": "assets/js/17.b7d90798.js",
    "revision": "79e767ef0e5be012ffbcd75a119dc778"
  },
  {
    "url": "assets/js/18.aaae0e45.js",
    "revision": "bdd56039ea7261b47299912846d24e7f"
  },
  {
    "url": "assets/js/19.6d6e3708.js",
    "revision": "b861ee23d7d775872a4c7e1476449e34"
  },
  {
    "url": "assets/js/2.34b7503e.js",
    "revision": "aa6fe3dcfc573a6474566605081f04be"
  },
  {
    "url": "assets/js/20.fb08fd1f.js",
    "revision": "7c6db5f456645820cd742ff2ffb8abe8"
  },
  {
    "url": "assets/js/21.86b0154b.js",
    "revision": "067e499df0aad5de5189730f2fc6f526"
  },
  {
    "url": "assets/js/22.32638f7b.js",
    "revision": "c65afef5239c1d5152f8907566f260a9"
  },
  {
    "url": "assets/js/23.c6e253fa.js",
    "revision": "b1741243d440b7383d8b5c49f740ab1e"
  },
  {
    "url": "assets/js/24.7b46e91b.js",
    "revision": "54b903042f745350f2a9c98b5ad9e900"
  },
  {
    "url": "assets/js/26.6d52418c.js",
    "revision": "f119f42f31b145fdd016c40aadeab537"
  },
  {
    "url": "assets/js/3.9fae8aea.js",
    "revision": "04ab02dd338397ffe5fea48b0263e5ca"
  },
  {
    "url": "assets/js/4.88f26a93.js",
    "revision": "b86fb27ebbc57eac9a5a160b56807c51"
  },
  {
    "url": "assets/js/5.7bbcf190.js",
    "revision": "aed10e58c032a8a2fbae97806c5eedc4"
  },
  {
    "url": "assets/js/6.37ffbbe9.js",
    "revision": "30802658554190c6dabbfa86c8251bd7"
  },
  {
    "url": "assets/js/7.b773cc6c.js",
    "revision": "af89f93ca69d258697e69a1e97c5d675"
  },
  {
    "url": "assets/js/8.79a8cc53.js",
    "revision": "b095015251fd458aabfd36dba5b72291"
  },
  {
    "url": "assets/js/9.06a604d1.js",
    "revision": "d440ccdf5d18e2a8bcef51c081450e6d"
  },
  {
    "url": "assets/js/app.ebcb57a3.js",
    "revision": "7ea5f4382af5255593f83beb7f92ecbd"
  },
  {
    "url": "conclusion/index.html",
    "revision": "2c046212854987da0bc8047f8f30e055"
  },
  {
    "url": "design/index.html",
    "revision": "6ca2ae3677c4281dff2bec0303c31938"
  },
  {
    "url": "index.html",
    "revision": "2ead201a9d304a5f53460b184f63d62c"
  },
  {
    "url": "intro/index.html",
    "revision": "0d60c68d8c7473c1c66c12a1e8a6ccb0"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "19786a7add09569b7aad5a07cbef117f"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "b260b2f83e77714d44447d99b61c872f"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "6342943d92f3ab0dd4df58663a8c8bae"
  },
  {
    "url": "software/index.html",
    "revision": "01dbefa60f1c4a520f6ea1f11220e4fd"
  },
  {
    "url": "test/index.html",
    "revision": "58892827a21ee7e65a3cf76f1f3ce6d1"
  },
  {
    "url": "use cases/index.html",
    "revision": "bc2fe94919df1a68a21cb8170062c291"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
