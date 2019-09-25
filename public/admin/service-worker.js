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

var precacheConfig = [["/static/css/admin.eaa1f9d.css","d96a4cb6b900d5413752e78467fdc526"],["/static/img/401.089007e.gif","089007e721e1f22809c0313b670a36f1"],["/static/img/404.a57b6f3.png","a57b6f31fa77c50f14d756711dea4158"],["/static/img/element-icons.535877f.woff","535877f50039c0cb49a6196a5b7517cd"],["/static/img/element-icons.732389d.ttf","732389ded34cb9c52dd88271f1345af9"],["/static/js/0.eaee435.js","0570e84951ba05e56ea69650c827acc5"],["/static/js/1.ab7ad7a.js","24eaba2a9d77b4f48fac959f5667a3fe"],["/static/js/10.15e0ebd.js","15637368dff90d4b6aa258d6a87ad9d9"],["/static/js/11.7f70fa7.js","f508a100a1788d305fbbedb8b9b36af8"],["/static/js/12.38db81c.js","73e4052ed740d7fe04bef5aea4da7779"],["/static/js/13.1b684fe.js","8dd39249e19404519174be9a5f27f4d3"],["/static/js/14.1f0c6c5.js","c2fe05e718e37bd292b8d15e5076bf44"],["/static/js/15.6a913d4.js","b3034e19b74b43ace3742b62ddbe3c27"],["/static/js/16.daa83c2.js","818f009779cc281694c32205ba1db4ee"],["/static/js/17.6b97cd2.js","779c9a8412eb9d5c762a4f125d637953"],["/static/js/18.3d4e461.js","60fdbb3c52aea5635a9be3cc54a2a281"],["/static/js/19.bb8acb3.js","b811489a2507ba37010f34112ac80e33"],["/static/js/2.5a432e8.js","ab5498e1fa23942fb6bbac59efa77952"],["/static/js/20.d2fa101.js","7b3fb25ebad4d309bb8f598b6ab5dfca"],["/static/js/21.67bce8b.js","45c2d4ae5f9921f3f06b3be284b5ae6a"],["/static/js/22.458ce36.js","1dcfffc2981b518810c0dd0d72f7849e"],["/static/js/23.45937e8.js","79d653af7a5c028b2181679bd1a087d1"],["/static/js/24.2e43468.js","a9086e741a974fc4e8c0ffe5ddfc5855"],["/static/js/25.08c8ce8.js","fa01e11090003ed702f8350b1e6e5a10"],["/static/js/26.343a12d.js","b5433452092f6e7f1dee69671d654079"],["/static/js/27.b68c40f.js","2d030c427921ffeedaf983778d0a11c8"],["/static/js/28.6120c13.js","4613643deb0acf061912fa80c23a6c27"],["/static/js/29.a04cfa1.js","6dd11758df3e3afd9d05116c2cac38cd"],["/static/js/3.1a1c4ec.js","6cf0188805456e751cc5486e205ecf58"],["/static/js/30.cd6760b.js","130ed5a85e82ef313784fb8aea7a5e78"],["/static/js/31.8202b76.js","8515b3c98d60c485f07a8bd8ad6f2d58"],["/static/js/32.4f8c78f.js","b22858e755cbd78f9f92cfe09eb8cdb6"],["/static/js/33.9692e51.js","6b9cfd1c028d74b261b79b18b90f9f09"],["/static/js/34.b11025c.js","239674fb22a8f0562f528008672c7c8d"],["/static/js/35.7c593bb.js","04debf3c1ed28d764de0af25f186a725"],["/static/js/36.ebc3d35.js","e7b6b613c66bdb3871ab8e653896032b"],["/static/js/37.f54faf6.js","daa084c569aa34ae19d8a2b9b09c6c1e"],["/static/js/38.ebd7149.js","e6e83c7f6d0ddfcf7c766bce9b818c03"],["/static/js/39.3e5fd6c.js","df459c206aa6132798f5018e4a150af6"],["/static/js/4.3795e36.js","e305f9d489378bb5f4f48791901a5e90"],["/static/js/40.587ccf9.js","c9de5728675dc19e2c9375957ed6ff43"],["/static/js/41.c43af35.js","0cbdb03d2aa5e52c5c10aef2b7ac6b39"],["/static/js/42.0b8ccd4.js","b235aad3a94d38778200e374b3d3f9b0"],["/static/js/43.7317e2e.js","46ffd477899120b00c0c71329ac4f426"],["/static/js/44.fe19e97.js","ecb5a96089eaea1aa383dcffe1643d47"],["/static/js/45.69beccf.js","c022dd79b2523ed21e2084912bb99c74"],["/static/js/46.779f380.js","49d4444531b4f7b86b55f7225bfeb0c6"],["/static/js/47.83c98a6.js","e6eb8e351318cd64dd0a1a12de031a30"],["/static/js/48.895d38c.js","4d5c12ba1cc1380f537d5456590b528f"],["/static/js/49.7b962be.js","7a3af441e0c7a2869fa45871f8649ad5"],["/static/js/5.ca4ec9c.js","d119681143eb189e6d7ec5dadbd2c442"],["/static/js/50.ca16818.js","6847237863385fbf69d66c6b24db17fb"],["/static/js/51.e756350.js","b90645899edf778f287e7bdbd3eb434f"],["/static/js/52.9dfc70d.js","8b5d3252227ad87dca1f39a08a671453"],["/static/js/53.4be02c2.js","b3fe19890622c46b928d12c7d4eb849f"],["/static/js/54.96879e5.js","96106bff92116f89c84172c63a94a179"],["/static/js/55.503b10a.js","e293fe33c96d2168d3ef0045ddfcf23f"],["/static/js/56.8afa3be.js","5dc13542f4353d5f3c3828767eea52c5"],["/static/js/57.1fcf445.js","83554ec614c45b83883e5ea03f983aa4"],["/static/js/58.8c1d2ff.js","b0be7de09423a4c65413ec9dfbbe804a"],["/static/js/59.634fc52.js","9d7796eb0248520a0caa0f8ecd8249a2"],["/static/js/6.83c9e7d.js","9179fd5aa6de8c118620087963ed678d"],["/static/js/60.bd5f576.js","94acd6bd8688bd139f877440c30397d2"],["/static/js/61.36cb6ca.js","2fe5debe10576a91846676a765c59ef6"],["/static/js/62.9c3a81f.js","231c875f97530ed46f3cd6aebee51326"],["/static/js/63.eb04994.js","081637db9a8232783a46bafcb972ddac"],["/static/js/64.8b641cb.js","d1f47e211f9404d11a1efa14b2115f89"],["/static/js/65.4d3b184.js","bfb1d7f400d796a17758b13f8f71301b"],["/static/js/66.fcb4541.js","130927ae4b96ccaf942eb2f1b6e36fc7"],["/static/js/67.7f9b6b3.js","88a84339295ae1c1346874b5f3e16fa9"],["/static/js/68.7d2d29c.js","8d8cf42b78818e121d55b27d6b83eff4"],["/static/js/7.2ad3c76.js","3e73efffe61186526bed208dd5ec9d10"],["/static/js/8.6039e58.js","7b48545b1a5ef32d7ef98867a0a4b53e"],["/static/js/9.d043135.js","784c3f8adbb7642a9df0943f6cefc376"],["/static/js/admin.7743396.js","2b8c845d92031a8c46377293e232c5e3"],["/static/js/manifest.13cfa29.js","469aae3aceb869b6ae9b4eec8ca1ac74"]];
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







