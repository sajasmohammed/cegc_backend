'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "875bd36b125dc2bffa5cad53cc421ba8",
".git/config": "30899c46643ae6820f11edb52b22ed72",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "ca28b22b51cf17b9a977bb2503e4d5a7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a089b631deadd4ef834486ce419a7a0d",
".git/logs/refs/heads/master": "a089b631deadd4ef834486ce419a7a0d",
".git/logs/refs/remotes/origin/master": "813123c780a4f033695d5f22755c0076",
".git/objects/0a/fbdea378fe8aa0f4eb3a58724247df01ae0bbd": "7a24d1629f73cf2a5e3341adfcbcc9a0",
".git/objects/0d/7a3c21391c8255e8805a72bb21bd2ee14f663e": "fbd6a8e1fa374a59d45df7e28f27c68d",
".git/objects/26/ad706ed90370bf9c4d532db87cee5a62b6c9f2": "57c0e38d57134ee54e25628025600644",
".git/objects/31/253efbce40477ecf812bdaca9eaeb972f148b9": "200e32ff4e5756a4c895b643e9daeff5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/499d086dda68bec6103d738648d5f64bd255cd": "26760675427eb45a5d9e95c10a03bf23",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/51/4d68ad86307ad2a921c1ab3b8a8878238e561b": "8a5d53002f2e2ccebe55300dfb4a04b1",
".git/objects/58/bb41f1701059763af393edced2417f470d7e44": "e49a2f77da35d442f186150c1eb8a13f",
".git/objects/5a/05916a9387904ecf81437f155b62f85d45c84c": "1ab0dd732be9ba2a117b78e2a3cace85",
".git/objects/6c/aadfd35a85b1634253a8602ed9d1f7110f353f": "0a5d59309f52706173a295edffb6ff77",
".git/objects/74/18b62cc27216920fd13d06e8227b941e2e902b": "4d97d197a68286f30b9006c1ddf94afe",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "291ac00ff0c237db97c1a1add0551ba8",
".git/objects/78/5ec81370a169fae21ddb64f6e00592640ec34a": "efacc3e3e1e10543d06ba23f81d47bc7",
".git/objects/82/4ec6d53be791db02e488cbe03d9ab4d0e023bc": "b3b21c561188016a02ee4f51a34f5af5",
".git/objects/88/5ae9bff5f3eadb5f3f9481e98a2ac56dd4ccc7": "845ee378c6c4adebd8bc0405b1674621",
".git/objects/94/4faa5c1561d361626e69218e5cce55ca9ce341": "11b6772239efada50adf2a21d7d7ad43",
".git/objects/9c/b1aadd0da278b3c9e84d7debd33f15633e838b": "5ab50b44bbb13672308cd4a9aee4c7da",
".git/objects/9f/185a790b5dd41234ff4e7362267f03800f13bf": "876b78519921320e8a5741639aebb893",
".git/objects/a5/cdfe7e7fcdb49f9d4ce1872badbee40e074701": "04ebc9b2fb44135f40733e8e4ed5141c",
".git/objects/a6/a0bdb90a1df35c1c43cbbed11f170349d95656": "4eed60945758e32364244aa36f5532fc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b6/d0959252b359dbed1b3254c6891de8828c9661": "67f6424b449ee7dbd70e2c0281bad7be",
".git/objects/cf/f6fda30e05063512d93b0d4e7ab9a7a61bc9be": "6c5172ccfb04817bab20c400d4264fc2",
".git/objects/d2/1439855cac3d8838e7abbbc276145b7eeb0ec9": "4351d0adc8082522540135fab219b59a",
".git/objects/d4/395f659af8c43bb2fda8c18573f004fc539ddc": "e5330d26efcaa352346ff5ba2746d65b",
".git/objects/d7/d81bdd8a6b36e9dc0b66c7c3a4b0f0e590f098": "e8ee7d63e39c8c0edb14bcf099925f80",
".git/objects/eb/4952a2978cef9b633f301c239e048773a65902": "86b80b464d1ae8b400f02b110cbadaae",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/refs/heads/master": "b6c45c23b35f7e2bbc074e27ca551ad6",
".git/refs/remotes/origin/master": "b6c45c23b35f7e2bbc074e27ca551ad6",
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
"index.html": "72969d899392764efcd4268f050d0586",
"/": "72969d899392764efcd4268f050d0586",
"main.dart.js": "a5ece6ba3d9dedac3b6ac97cc385d17f",
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
