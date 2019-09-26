/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/static/css/admin.3c98f61.css","d96a4cb6b900d5413752e78467fdc526"],["/static/img/401.089007e.gif","089007e721e1f22809c0313b670a36f1"],["/static/img/404.a57b6f3.png","a57b6f31fa77c50f14d756711dea4158"],["/static/img/element-icons.535877f.woff","535877f50039c0cb49a6196a5b7517cd"],["/static/img/element-icons.732389d.ttf","732389ded34cb9c52dd88271f1345af9"],["/static/js/0.23c12ea.js","e14463d3541ed2c6d7be2d3e4bb833fb"],["/static/js/1.be1dae6.js","75ce9b89ac666549bdc32d37009701eb"],["/static/js/10.cfe9614.js","c2cbc5f27e65f82cb920e62c6a9ac272"],["/static/js/11.c042f33.js","6f153ece727553b41791789b32a729c3"],["/static/js/12.81178f8.js","986ff4ca3f35f21c20f8049ad7049417"],["/static/js/13.182d425.js","1f1c8c926ebd70053325949021c01a32"],["/static/js/14.b145a0a.js","4cb0bcb10a349a0f514cc1add838768b"],["/static/js/15.66cab8f.js","5564d78bd92c5e6095744f39adb26cf3"],["/static/js/16.17cabd2.js","502dcc671040cf8f0c2d83246ff52449"],["/static/js/17.c9c66d7.js","440eb2dfcec8b10ca13117bbad822749"],["/static/js/18.da6799f.js","d8ea03ae19305dfa9fd8817311dadb57"],["/static/js/19.3fea489.js","f7fffc3afd5d50d9030fae5db185f685"],["/static/js/2.7c331ea.js","e5ea4c89e57f6f40a8a79861a787d591"],["/static/js/20.38fc680.js","0fd75b4adb258f54a263228f0fd95790"],["/static/js/21.3e82807.js","c64b73b1673f19fc299f54466270c90e"],["/static/js/22.eb81cad.js","ca56f3ffce8c93c8dc63eab5b483ea2d"],["/static/js/23.b7e524a.js","8f2b032cee3933611ead46f3aeb20c2e"],["/static/js/24.a9185cc.js","37831d8664c5abaa08610841e5d17041"],["/static/js/25.92c04d9.js","81c7fa582d1631b0e3b7543d2f7b429f"],["/static/js/26.c9f527e.js","2fc3243cbeb629e836010b3bb212376b"],["/static/js/27.e17d602.js","8507641c6d0011de5bc5878eca81c4bc"],["/static/js/28.111913c.js","5031f964ede8e410039974f3939a5269"],["/static/js/29.f21c826.js","d1db441d9cdfdcb5257aeccb9c5eae5e"],["/static/js/3.c313a9b.js","cb64dc4f0fa8aa0591f10e30436b45f1"],["/static/js/30.5927464.js","e6fccd4ca428c2aa50f43d4d0e816f56"],["/static/js/31.a30a16a.js","0ccfc2dbc1412d20e3599e66e8481cd5"],["/static/js/32.870f05e.js","b2ccd26eaa7ce51f8f266d9e675de7b7"],["/static/js/33.ba901c1.js","0779ed9fb9c2be5d5698f96a2e15aed1"],["/static/js/34.1cc7c69.js","84acbee8eefc9e03588eae02ebf91691"],["/static/js/35.725b723.js","dbd6817f61de31f39da96de3060858ab"],["/static/js/36.40ac12e.js","f4f626a5ade18bdf9c0df490be650f6a"],["/static/js/37.54306ed.js","cf302cc7c08ad3018058539d3b1cf8fd"],["/static/js/38.727634b.js","e5316db35c06a02c4b9627c2509b4263"],["/static/js/39.64c58a4.js","c9aaf046da13c9e1ae9187d0e55a4cbc"],["/static/js/4.a483152.js","c78a4433c44aa923d9742d513b056464"],["/static/js/40.f457ed4.js","28cce7f37d1dd2f1ec567dd596931d82"],["/static/js/41.2a45e7b.js","314b201e66f13b7cf6ab96fa4112cf61"],["/static/js/42.73292e0.js","265c24c7c2ff6c8fba43893458715b8c"],["/static/js/43.db093bf.js","2ba6d4ac3f449f1afa42161f9383fe64"],["/static/js/44.767d270.js","9384e52c09a2c015032f51ad0f1bb1af"],["/static/js/45.0e21adf.js","76c1717836b70d94a17075c081706478"],["/static/js/46.d9ac0fc.js","d62fc9963145e2301c2d66262a35effd"],["/static/js/47.2b3b32e.js","18cd1618f20ab04ceb14cbeb7b418e8f"],["/static/js/48.720c61e.js","4ab1cd92ac3b754f7bb6cc3d85d48a83"],["/static/js/49.b83ee58.js","b44f71bf4b868d1111c76ac577a0dbaa"],["/static/js/5.8a2809c.js","6b5ac999a9b419b815906a4f8134878c"],["/static/js/50.937dd74.js","1679bcba2461a57763ae1c05fe69a3a6"],["/static/js/51.68bceaf.js","19db4c26404840943e966965ecb23ebe"],["/static/js/52.47c19df.js","b785052ba9a9c71c6090977bcc852acc"],["/static/js/53.eaf4ce7.js","40c05a428489a588adaeca48c67561ac"],["/static/js/54.2db9ec5.js","184556408262811ee9e15cb14621728b"],["/static/js/55.f3298e5.js","b58ca99b6e0b79e7653ba4a0d1a51255"],["/static/js/56.f405061.js","022485a61e1703b88047e2dc97cbdd6e"],["/static/js/57.13bb216.js","1c8d27730d51a64b65427a4629034ba9"],["/static/js/58.8edbd8e.js","0c6232dad9991da9157050410cb8d78e"],["/static/js/59.56eff65.js","3998064c869848381f9205a1d9d606b4"],["/static/js/6.5707be8.js","ed47eb63b420f9c25e86d46305b91151"],["/static/js/60.8f5a4e9.js","d12dd9ff86c853ba96e3bb581ec59e5e"],["/static/js/61.5541d22.js","c2ecb2769166331d237efd16534b0709"],["/static/js/62.0bd717e.js","3212a5c46822576e251a98dac80fff7b"],["/static/js/63.2f48a3a.js","b1fab06f187bea282cbfdaddfe1161f2"],["/static/js/64.7d15121.js","ee7c8aa3611ccc116b0051d52e6f4ff4"],["/static/js/65.2e6cf48.js","2b4292780a2fbc2cec70a1044288d9a5"],["/static/js/66.668ef01.js","f256ee31812b70c6eb9f0909567a91e2"],["/static/js/67.73a00fd.js","3caf8c2868e5a5c96aac09319db8bcad"],["/static/js/68.578137c.js","2c6b39e93cb765e05a15d607c062f059"],["/static/js/7.87cbcb5.js","d0cc4d9989307ef85e1125094e555c52"],["/static/js/8.c4dea60.js","263fe1151cfb92569c7424d86cbcb5cb"],["/static/js/9.bd416c9.js","5ab407176dcd00cda37de02a72cd576e"],["/static/js/admin.53b9cff.js","1a186b5fe7d5dd1a3ce207fed705fdca"],["/static/js/manifest.9e0c010.js","72f23d8391d6b4ab80c9e4c1f891a5c3"]];
var cacheName = 'sw-precache-v3-doracms-vue2-ssr-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







