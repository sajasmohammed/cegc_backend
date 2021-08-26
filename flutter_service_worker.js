'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f2f43598425351e9f8ad38fef569861d",
".git/config": "30899c46643ae6820f11edb52b22ed72",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6413ce5711974fa6518731d13ba393ed",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "84c65397feba472b06a558d9a3782102",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cc08bfed28aa65be07f6d8fa97113ed6",
".git/logs/refs/heads/master": "cc08bfed28aa65be07f6d8fa97113ed6",
".git/logs/refs/remotes/origin/master": "f6946dfa11a9bfd0372379977af73672",
".git/objects/02/aefb629a72c3ca225fa70533120fcc81bf9524": "d62b5ba89f450c854852b908935d98eb",
".git/objects/09/8635936b965649a2fd3467bdd168d32ac1e996": "b5781ff554c328169d81892264807623",
".git/objects/0a/056a9cc6c00327761c7f64e02ec55225183c17": "3ca142b3ddff3a625a3a2da0caba4921",
".git/objects/0a/9ac07aa5c4d2573f0a227a0c2f36edd824b84d": "7577432888eb73df75c5104df7efe287",
".git/objects/0a/fbdea378fe8aa0f4eb3a58724247df01ae0bbd": "7a24d1629f73cf2a5e3341adfcbcc9a0",
".git/objects/0d/7a3c21391c8255e8805a72bb21bd2ee14f663e": "fbd6a8e1fa374a59d45df7e28f27c68d",
".git/objects/0d/a92a0f97b66a99070b17d572f299ef1534a224": "3fd657ae2d6c1edee1b5fb8ec5d34ff0",
".git/objects/18/63c3001e5e3018f36640bdb98d09c2dd50639d": "5cbeebe5714f8ec9bdb177e1398eccfa",
".git/objects/18/7d196df85e7660a62656c4851b8a8744adfb67": "0dcfd6bf8ff56aa4607d4c538a724df9",
".git/objects/18/df574554e97b01791350660f08a277e490dc9a": "95e9e961f0810054ec294130ee0068f4",
".git/objects/24/61b7be77a868c9b32677958f8941ed53d691a1": "721b1aa81eafbaf9a5d63060cd5377a9",
".git/objects/26/ad706ed90370bf9c4d532db87cee5a62b6c9f2": "57c0e38d57134ee54e25628025600644",
".git/objects/2b/26808e9e3a705e800a211dc4b39a31a4c84fee": "94de2d47cbcc8f0023c9b56ccebd25fe",
".git/objects/2b/86b61fcbd90f2a0098428ef8d3dfa366ab9ed3": "c9cfab1c81eb4bd0fc73baa471b8de43",
".git/objects/2f/ee2eabd39b5f38e739711cb35b090862913532": "ab232c26173e2b083f80c737cc49bd94",
".git/objects/31/253efbce40477ecf812bdaca9eaeb972f148b9": "200e32ff4e5756a4c895b643e9daeff5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/499d086dda68bec6103d738648d5f64bd255cd": "26760675427eb45a5d9e95c10a03bf23",
".git/objects/34/f42e6be2bf74bc5f34997a5cc5af8016046645": "f5b1113a0a8849a2f7ef70e5671e36a5",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3d/614e4812cd62ba6e2cbf7ea01b34f1e4d2fa84": "573e616c7b8f89b9d602cfbb54c8b4ea",
".git/objects/3d/7fa650354328a567ce147383087e329c7f6265": "7c97880e241caee0ad537cd79afaae85",
".git/objects/3e/7093c213b0298b90905f23670f1832130388bb": "0af6ac300020a0080541e111e443c7d4",
".git/objects/41/d55883fd8d6b6c415f9075f93954bcea9c08bc": "56f78d241d0effd31b979ef6ab9d0edf",
".git/objects/42/c7cd2c9dd436f566b0240ee441cf619c60ba94": "b39f97ed7c109271e49b0f4ccf0a909d",
".git/objects/4b/5dd9a308a7035951320448f04345275457c338": "5e82d344752352f87aed3e2e598cfc96",
".git/objects/4b/8d7fe6aa08f0354dc031aaefbddfc396b63e47": "860367f8dbe85cf3c7708492d09f349c",
".git/objects/4f/acd0bf64f5f36f58c9e7278e927ba2ec5d9467": "69f0c4aec242bb9e17a471677c23a3f1",
".git/objects/51/4d68ad86307ad2a921c1ab3b8a8878238e561b": "8a5d53002f2e2ccebe55300dfb4a04b1",
".git/objects/58/bb41f1701059763af393edced2417f470d7e44": "e49a2f77da35d442f186150c1eb8a13f",
".git/objects/58/dea8c95b9632afef0cb46d09b31d9e921555b2": "ab33b41a7c32b4955bf78422a0f5c386",
".git/objects/5a/05916a9387904ecf81437f155b62f85d45c84c": "1ab0dd732be9ba2a117b78e2a3cace85",
".git/objects/5f/11fdf82416971b29c73c39848b1891ec3e8841": "1cd352b1528bd0f5edebace19a2cc56d",
".git/objects/5f/d245097fcadd66c729f662f87ae8c9dfd31906": "a00ee43d7b1ebb77909d3b7c182960a2",
".git/objects/61/35ba8b658879a1575721d3e27e8139e2b20602": "4a0d337948d819684be73ea935ffb864",
".git/objects/65/66258eb150eb078ed5bbfcaddbf384a4b084b5": "5499813fc452f15acb7e2f1ab3bbebce",
".git/objects/68/35be49805052c9c09ccc13e20bc061cd989479": "c735149bd43466d8a1138d582a6e1945",
".git/objects/69/ef879c83e1a609606ae2fd39642d2978476a7c": "e8f9c9c5c73b615bf984e9153deec808",
".git/objects/6a/462f4e84f037e599ce67fc05149e48777a62b3": "82ef0d19240dd3c31443d6806d3fb6ae",
".git/objects/6c/aadfd35a85b1634253a8602ed9d1f7110f353f": "0a5d59309f52706173a295edffb6ff77",
".git/objects/74/18b62cc27216920fd13d06e8227b941e2e902b": "4d97d197a68286f30b9006c1ddf94afe",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "291ac00ff0c237db97c1a1add0551ba8",
".git/objects/75/31632b062d06bba74ff48a98690477ccb26a5b": "90094b0d895e3c643f6aee8ec547c509",
".git/objects/78/5ec81370a169fae21ddb64f6e00592640ec34a": "efacc3e3e1e10543d06ba23f81d47bc7",
".git/objects/82/4ec6d53be791db02e488cbe03d9ab4d0e023bc": "b3b21c561188016a02ee4f51a34f5af5",
".git/objects/84/5d4b08b9d1d3b408e54d7d30c4cbc26f663c2f": "1a2ecb65e41dc5dad9eefd0db6308dad",
".git/objects/84/d563bb7d8d1254810b5c60e0cc40891fe1bc94": "e52698cb0f67d9d8e809348754ae50e0",
".git/objects/88/5ae9bff5f3eadb5f3f9481e98a2ac56dd4ccc7": "845ee378c6c4adebd8bc0405b1674621",
".git/objects/8e/38e6383bee8d04af258674a2964b6a83be4924": "17c1266d642dcbe4c09c40121208271a",
".git/objects/90/2c9669ed498605887845b6bc2f1cb6fd31a2d5": "13b347b98aeec6c50f4457bee6a8829a",
".git/objects/94/4faa5c1561d361626e69218e5cce55ca9ce341": "11b6772239efada50adf2a21d7d7ad43",
".git/objects/97/c61c2e04756336dc317c114c2d3e13ceb3f70e": "63997365f6dad1ef4404ab71a743e42b",
".git/objects/9a/d56349506cd28e619da15857ff26fb3b5f94b8": "7f7ecb981d6973e302c8bb96645cd863",
".git/objects/9c/b1aadd0da278b3c9e84d7debd33f15633e838b": "5ab50b44bbb13672308cd4a9aee4c7da",
".git/objects/9f/185a790b5dd41234ff4e7362267f03800f13bf": "876b78519921320e8a5741639aebb893",
".git/objects/a0/53d158c9b34a23ee1bb281d590fb60af2ecd74": "704f55bbf0ed847abe8773db8aafc406",
".git/objects/a5/1e58089373d27ce7da0ad3a3d1a505c9b6db1b": "aaffb4d0b30d37d32d54bf2829e87072",
".git/objects/a5/92b383c41b803c500f809471308cb32575593d": "c79eae00a289a6b309f2a31237d1d159",
".git/objects/a5/9c60f519accd1abc35cc774b8eac8785c95eff": "5bef1beb1df94d41655b5c1daeeb8a99",
".git/objects/a5/cdfe7e7fcdb49f9d4ce1872badbee40e074701": "04ebc9b2fb44135f40733e8e4ed5141c",
".git/objects/a6/a0bdb90a1df35c1c43cbbed11f170349d95656": "4eed60945758e32364244aa36f5532fc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/6d94da63153b13375cc9b5dc887bd82a03039b": "8a5235a6aaf1eb9c3ddaa968371b6b40",
".git/objects/a9/ada23b2519f8b21b8d23c5d8ee6d2cfb60fea8": "57697a739ebc00a2d13f870857a0ea30",
".git/objects/ab/118a7bec16fd747ef307e4336a6350f4565a5f": "5e4a098092f7ca0a9124dc08ff87cd10",
".git/objects/ab/86a2f5b19da0582d717bfef5882fb9907242b4": "ceae4f8d1c08e10a37e77c8a3024e63e",
".git/objects/b2/ab7481a2af66435bb0d60d12e9fa1a3dd2cc3b": "12eb3bb23e705ba2a2cbef2721cc7658",
".git/objects/b3/c9e2ff058a9088c0976b7fc6133a6247d4ebb8": "301a55c0d59816d3692d1f72e7ea0169",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b6/2c5d869b11acb98a1c835db5d44758f07a7908": "77b92bade43b13e62f1a0b2bca8696fd",
".git/objects/b6/97f3f1ed80a4795e990a1a004edbd8b1a25c7e": "e195fc1eb765acf8d108764245458921",
".git/objects/b6/d0959252b359dbed1b3254c6891de8828c9661": "67f6424b449ee7dbd70e2c0281bad7be",
".git/objects/b6/fbeedbba00fc91dbc0969648fe9895c7a5eede": "d50b33b77e6b0c9d3efc6081ac18cb35",
".git/objects/b8/13aa8e21232f85e383b23f817de811430d24d4": "b534b224f4df537b425c223bc4c2d2cb",
".git/objects/c6/86911c00bbe7c88a0434aee4620351463158c9": "06bfa217a4b62a68d69a60748b4f5b3f",
".git/objects/cf/f6fda30e05063512d93b0d4e7ab9a7a61bc9be": "6c5172ccfb04817bab20c400d4264fc2",
".git/objects/d2/1439855cac3d8838e7abbbc276145b7eeb0ec9": "4351d0adc8082522540135fab219b59a",
".git/objects/d4/395f659af8c43bb2fda8c18573f004fc539ddc": "e5330d26efcaa352346ff5ba2746d65b",
".git/objects/d7/d81bdd8a6b36e9dc0b66c7c3a4b0f0e590f098": "e8ee7d63e39c8c0edb14bcf099925f80",
".git/objects/eb/4952a2978cef9b633f301c239e048773a65902": "86b80b464d1ae8b400f02b110cbadaae",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f5/cdfc56b46da38c5ba80c56c6a9901466725db6": "cbcd9557fef26e3681f28a31765bf4e8",
".git/objects/f7/d9db10a31c94ca172ba8f61e0c5b7dec991a2b": "5ed53a663175f8f440e1b0cea7c2fb51",
".git/objects/f9/6c443126ac7913d915691fc45d3ade152e5912": "6bd0fae3b6b28375bb31eb012313c37b",
".git/objects/fb/bad597100bf875a35f207b6a15774d6c9166d3": "45ae95cb302735e0cd3cfd0bdc3de8d2",
".git/ORIG_HEAD": "66723389df95650db1c5a601feff011a",
".git/refs/heads/master": "2d36eb170fba49dd917429f8b086ce0c",
".git/refs/remotes/origin/master": "48695f77c2533f148b0b95704a168eed",
"assets/AssetManifest.json": "9229ec142ceaef66dcccdd67b6eb85ea",
"assets/assets/icons/career.svg": "358e94d8bcc085d95c0d9fbac3fa7de8",
"assets/assets/icons/clients.svg": "f49095303bec8663e801bedf3fcbdca6",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/project.svg": "8cfbd38d2fd9f76c71385145c5d105ec",
"assets/assets/icons/team.svg": "b6ef4458cbafaf8366b592df2e800b35",
"assets/assets/images/logo.png": "fac4558cd864cb2a75b481c0f87dd038",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/slider3.png": "3cbf9796438eda93e166cee25a557e5d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "fe02c33dd68d74609a9d5c6e3b8121e8",
"favicon.ico": "6a4b0fcb18af19dd9091d87a695c4835",
"icons/Icon-192.png": "4365b2382e5ad6f6566eb03bfc7a54c7",
"icons/Icon-512.png": "c74a638bee0d584d7b50e021a2328c94",
"index.html": "e42dd9a4aeca2f5dcd6d12d3d103a3d6",
"/": "e42dd9a4aeca2f5dcd6d12d3d103a3d6",
"main.dart.js": "a78fb86b828da0fb1e5860bca6b9e2a3",
"manifest.json": "65392f55e56809057260c0807f4f0268",
"version.json": "45c732c5e93bc32ffe5269d307a38c1a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
