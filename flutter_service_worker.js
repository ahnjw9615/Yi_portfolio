'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1c378e3741d7689116370cfabb9a9ffb",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "f905494e5594db3891fa83fd04c1d79f",
"/": "f905494e5594db3891fa83fd04c1d79f",
"main.dart.js": "05e8618624bbb5505eb5292bcae56b83",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f588d96eea4c577608083366e2641c7f",
".git/config": "cbaf1397d069d9b003d061d7c1214416",
".git/objects/0d/c104b1793db54d8f707df810c1f71d5e6e8911": "547790434873acde46fbb8fb008e00cb",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/225514d8a1a1eaaa2f361888d748795aeb67c7": "cab8c613489c489189e85fb8506ac9e6",
".git/objects/59/46f4c8507fedd857241ee4d71ccf0425980170": "9632059f9b5b0aafbaf076100c81096e",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/33a9486945677ea8e57c7a1bd0e665a5c0c077": "9ae3fc38ed3d4f9ab30c354d5f6d3281",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/56/e7db7dcca8d77a6d3f5304b742cb39b6ba2d84": "c87399813269c33e168bb9a63f8aaebf",
".git/objects/94/3dd1fe1fae5e0e3f7bb0b2f40d5fdf2f2f0486": "fc0bcbf9707564b8b7eb33ebc55907e9",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9d/8949203c188a76f8785a3b00581538ce8dd897": "a2b0dc5af514cd9ee7f26e32d06ee17c",
".git/objects/9c/c36ec7076b458e27caade5a6429e2b5c0656f3": "adfce32b9c1dd6cb1a39d4a88830b678",
".git/objects/02/ff6fff07885b50373c35a6f59819b68e3ca8f3": "5da2ce61fd26311760edfa680b6dd662",
".git/objects/a4/7c3fe566b7e78209e65698d2f5bfbd657a0eea": "3bef492b246f66b5864baf5a292c6603",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/df/bcfe4f25b6754e907e8e51c87c386baa377d1d": "64c9fdbbfce14cea20331b6a91b0e50c",
".git/objects/a2/2a9aa636454bdb4206515effc440c6bf2a57ba": "f640310c6c9823c59d0eebf369d22624",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/06c9ccd81690c11fc769a1d909e8caef413cb1": "83eec4cb4eb2ed6c585007dd14617107",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/05196b857a30672f43aef6d423610f9d1777fc": "0686ae8c91befa6882cb4dd02b94a96a",
".git/objects/fb/75072d87cd07ec19d5a9e05df64ed26f430fe9": "76ee6bbd7d2a65c262605843ab99ce1e",
".git/objects/c6/40fd93f3ba1d6f913e65784acfcdc436a97d45": "889927d5d18e7209711b04207891d714",
".git/objects/27/809d60fd95d851caf6b7d2c5c84b3d6502d343": "044b6240f047e2eb1062207811d959d9",
".git/objects/16/57f5abb14092a5a9420750096d50fe0c8cda51": "1fc7db7ad73e090dc104b16f4e8904ff",
".git/objects/1f/5840ecf88329e90e620236a51b74b74435bd6c": "65558a09661858db92ee683dabfe6093",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/b60064f1d65aa84b04f7a4b53b64578b24ba9f": "6a9ef339aa727ad187696489cb1a9688",
".git/objects/86/5f08ca7339c25dfc2f8d74ca125c3910fcd0fb": "65163f27372eadcbb24b05da893880ea",
".git/objects/86/c0655659b51e1b8fa9625bb1410b2880aef556": "1ef424bb14f2efbde493cbdb4f51d4a4",
".git/objects/44/fc8e025ccd545f1c602f489383b2d6bdfad7cf": "720dc311c0be976e2c8280599e1d4bbc",
".git/objects/44/291592489d5da76cce982e40394138d1ebf007": "50740dc9651d2863f87287885568b509",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/1ab275ab678a9c02d1090569317f4525e2febc": "5fcf0be70393e3a32cc5beef65285504",
".git/objects/6e/0e511a1dc21f8ec69a434b0143956fa7079557": "aa4dc9793e5fd0418ae077d3ec064c0c",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/54/44cbe91833a6042b67664cb761c1056f09eda6": "f120edebc63dfbcebb099327872fc54d",
".git/objects/98/3ae4b7bc1ebf83ab7b75402c86979680a5ab15": "402144ac535830e77f46fc9849c18ac5",
".git/objects/5b/0410c47c0a0673d1dae03ccc16f782f299e505": "46d87c9c053a0e4400c21b9bff77df8c",
".git/objects/06/359fa1a95f12be589dd43441113a5af1311356": "e7c14d4610a7cf0016f2851549068f66",
".git/objects/55/3373b459f9d416f5df75b07292727ce9400648": "f0d5a25aa924fb69c8f096fcb876bb08",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/c9c33a61e324f2ff580e08acfe01a22bc9d3b6": "753452ef85627fba37a270ff6a6889c3",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/a9/35bf923986853b523e3d21466b46c166937fd0": "bb1ca18eccb94b716701ce29601d697a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/cc5a1df4dbb55c58b808a5fcf335c0670f9952": "a0f52e05f8015b296c2fbf53a32cf7f2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c4/7a71a95f94129365d2892fdb00504ceb6510c9": "8a4b2d73ba33b12664c88c2c8fdea5d9",
".git/objects/ea/6a460fb65756e14a06d9f532c90babfff37e4d": "980e91d8626480dc5a73278bb4b11bde",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/46/f52c4811d2af50de516c849f0e7898c9dc091e": "1ce9038f7347af11ed99f354c5f0714b",
".git/objects/83/3f55db2ddb3cc550704883b52212e70e437190": "2ad52985967e97b29c6d7bc77ccf4719",
".git/objects/23/431ef74f5dd20c684b0d9170e3dd6284b57801": "779c9af015869b9ab0e72abc2f9a0bbf",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/15/96ec7d1b32d4cf522ecbc443d76f1804d21783": "92c85259d87762e6382824bf40aeade5",
".git/objects/71/1f37f0639536e2d8df82c8745e967ad3cb8d8a": "a1c4eeb56794a7f466786932b5167127",
".git/objects/76/a3051c82f135376b458ea4dc51423493b04fdf": "abcdac2ba7807e239a57a5a73b33e48f",
".git/objects/1c/8848f47b3b461ec8ac0e80d1af4689cb6d17ac": "20f55ee03dad3ea2c10ff8c4aaba32a4",
".git/objects/49/4c7f9e43ccafce4078e9a981c7556feb7ba688": "6cc29ba3dcc401a2cb5c47b681bc10a9",
".git/objects/49/1c6ec57985724e65942c2c00093a56e1df2bd8": "2f0b2e8ccf479a6bf9b22a8c9bb16240",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2b/118460ec3cde2dfa6f28bb4bfe18ac3b888280": "5f2666d22a4750dbf146bb5d8f9dfeda",
".git/objects/25/8c10a96a9c949899883aa2f6b2794f8d1391ad": "a86774ee14b2882329b0f9253883631b",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "077fd54f63fb5c42e1aadd7b8a852be5",
".git/logs/refs/heads/gh-pages": "077fd54f63fb5c42e1aadd7b8a852be5",
".git/logs/refs/remotes/origin/gh-pages": "7080a60d27eddf295ea75738c78d4b4f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "ef116114da62b2930a16e54539423732",
".git/refs/remotes/origin/gh-pages": "ef116114da62b2930a16e54539423732",
".git/index": "f1850e6ad5abf62ddc09d30c57e4792b",
".git/COMMIT_EDITMSG": "8833bf75a3c54f38944e60fa31f80634",
"assets/AssetManifest.json": "84dc2e1562b2cb378704a5481fe29ed8",
"assets/NOTICES": "551ce93fcab748997b23c31337f5682e",
"assets/FontManifest.json": "124490559c161e689fa1598ccb164afb",
"assets/AssetManifest.bin.json": "e867dc38334a30fa35da0e22157c5c79",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "482d2a6767abd72ce95e0f908602d4d4",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/evolution.png": "36c7fa779760b56eee16dcbc4b763684",
"assets/assets/images/pen.png": "7a354bde0a7141a69596b57b5eeea8c9",
"assets/assets/images/wind_generator.png": "73eb9f3f1a7d807069401bf41efbec39",
"assets/assets/images/apple.png": "968bd9f04db3ece89908ab52a76a1ce0",
"assets/assets/images/switch.png": "71d165ec09400e450380fdeb030804a1",
"assets/assets/images/money.png": "6b102602d7ac034d8077366d3b2f9260",
"assets/assets/fonts/Montserrat-Medium.ttf": "ee130b491bf120cdb261d27ec29e2805",
"assets/assets/fonts/IBMPlexSans-Medium.ttf": "d68c561bec0bcba82f4077af34396997",
"assets/assets/fonts/Montserrat-Light.ttf": "e1d9d4d7fc9ff0f24b901292a900ef66",
"assets/assets/fonts/Montserrat-ExtraLight.ttf": "432be4a65a340e38f31651576ec58487",
"assets/assets/fonts/Montserrat-Bold.ttf": "354dc625a35bef1b6ec00a79c6cfc0c8",
"assets/assets/fonts/Montserrat-ExtraBold.ttf": "1497e6fee4dd060b35f6b49e4241cb3f",
"assets/assets/fonts/IBMPlexSans-ExtraLight.ttf": "b60f8c163f73360e2c3995f745c790f6",
"assets/assets/fonts/IBMPlexSans-Light.ttf": "9fdb7fe1c6114fac5ce771d33f5b95dc",
"assets/assets/fonts/IBMPlexSans-Bold.ttf": "42fb882132e7b91a2d4c6e192b97308f",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
