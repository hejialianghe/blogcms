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

var precacheConfig = [["/static/css/admin.724794e.css","7420efc561cd6b4f61b7364e3d3d8826"],["/static/img/401.089007e.gif","089007e721e1f22809c0313b670a36f1"],["/static/img/404.a57b6f3.png","a57b6f31fa77c50f14d756711dea4158"],["/static/img/element-icons.535877f.woff","535877f50039c0cb49a6196a5b7517cd"],["/static/img/element-icons.732389d.ttf","732389ded34cb9c52dd88271f1345af9"],["/static/js/0.e575dee.js","e700f434796bfb5b492a9e2c9c5b024f"],["/static/js/1.b704898.js","9aa538b2bddcb61de0c54edeb80d898b"],["/static/js/10.ec96933.js","31850307907f98b5a196316bcbea980d"],["/static/js/11.b8e17e8.js","0266742653fded9fc328f83874ed0cd7"],["/static/js/12.21d5dff.js","735572b1e071885cc5e7d527b875509d"],["/static/js/13.56fe609.js","1fd884d026e3fc87bc565105442f63fa"],["/static/js/14.d0164e7.js","f8ce768d2d479735257711f96a9f881e"],["/static/js/15.6f6ce00.js","e598e95bb0ee615acd902da830fb2f14"],["/static/js/16.f6a2943.js","3bc76b973a8214beccc7e8a8d631ab13"],["/static/js/17.c6d13b1.js","241a388df3dfb131e07ce4618ae3106f"],["/static/js/18.c3b705d.js","3db7541ce599c363a53100920bdd9337"],["/static/js/19.c654dd2.js","c575c7294f9211b4129aeb5c427a4567"],["/static/js/2.73ba6d4.js","eced8fe13bf7dc2e0878a990409aa3f6"],["/static/js/20.7642cb0.js","1047de022b188588448a20988a81d940"],["/static/js/21.e227eeb.js","0f7a6ed3a9f50e51d31beb6bd71afc6d"],["/static/js/22.247d3a9.js","0a26fe485f511e1c1f6948cfeef00902"],["/static/js/23.5f4c6cc.js","2d4d1a1a5d8200ef00f1069e8b92db06"],["/static/js/24.2e649e2.js","f0f0ea1ae9af47daf1537ce49b9e1ecd"],["/static/js/25.349a4f0.js","ac23ff18e79903c1dc495dd04b844630"],["/static/js/26.a5ff5fa.js","df8efc688ea9ce801c6f8131518b97df"],["/static/js/27.64cb8bc.js","1a9f2cce5c484fb77fabc38ec232814f"],["/static/js/28.68ada2b.js","3d53fe5f372ab89e1959416b1418e53e"],["/static/js/29.f15ad22.js","ae4f8a0ab0e35938debd41db6bee5216"],["/static/js/3.c313a9b.js","cb64dc4f0fa8aa0591f10e30436b45f1"],["/static/js/30.d1b69c6.js","6e5895c34f30db7e9d127e7c5a20ea50"],["/static/js/31.90ddb47.js","e0f4c4aab09c80fc7ece784d537f3a48"],["/static/js/32.339ba61.js","a131bfb96d54817858ac601de1ede78d"],["/static/js/33.f71cb1d.js","88657365d9d1f609ad60df97f68b4162"],["/static/js/34.4df43cb.js","84acbee8eefc9e03588eae02ebf91691"],["/static/js/35.5cbbe85.js","e2b9a29c1a3c052163b7240954e77234"],["/static/js/36.7c61b38.js","31f34701628c7aac8848ab7ebc1872bb"],["/static/js/37.61af936.js","546954beb69a27cc2c6de7deabe561f8"],["/static/js/38.19e8ee2.js","724fe7831a55105d41f081ec30a87013"],["/static/js/39.937f23d.js","40120277c503cf012bb9c6cc4b0abad8"],["/static/js/4.a483152.js","c78a4433c44aa923d9742d513b056464"],["/static/js/40.888ff05.js","3241817323c32aab1f37b49357af7e5d"],["/static/js/41.5f08548.js","0ae78844b952e4a761ef34b54b9439a3"],["/static/js/42.5a1f4bb.js","9e0209726b58dafaf5945712376d7e76"],["/static/js/43.7de391c.js","6062e5e04fa2e2da7b44ae8deacf5173"],["/static/js/44.92c9b69.js","6bd74b5a91a43b628b9de01875ff88eb"],["/static/js/45.1808ee7.js","c9fb56d9e6df9442073b2b657fc230fb"],["/static/js/46.539f124.js","bdf22208831e39250d793243f9f7726d"],["/static/js/47.333ef75.js","49e892f6620df24d284f1c5a44de161f"],["/static/js/48.981b8d8.js","cf36b52b946958045a5e003758f3c793"],["/static/js/49.afb4a14.js","2b0f9f163bd0a46f98d1d45e50e41698"],["/static/js/5.57d28eb.js","82854ed0e6094bd85377af8b38122ead"],["/static/js/50.61da70c.js","c40e6e90695ddc198b550b00a9dcdd0a"],["/static/js/51.debd900.js","b7b1d69626bee6e7f8a5f76d2d4d617c"],["/static/js/52.f499207.js","cad2e2b50705acb806cb3ac193e98663"],["/static/js/53.a3ed00f.js","0f3e6d0750d16c57848772b419e49cc5"],["/static/js/54.a8ad364.js","9360127c90d15addcbb4105fab35ec52"],["/static/js/55.7446359.js","24d54837727590df71fbe044b0f2a63e"],["/static/js/56.27ce76a.js","022485a61e1703b88047e2dc97cbdd6e"],["/static/js/57.807495d.js","911a5b56fef90c254c59dd81c20322a9"],["/static/js/58.ac88465.js","d033ac0f8c40bf5655352836d61cd7d9"],["/static/js/59.7782173.js","f12e342c9f6eeaa4dd3b019069486be0"],["/static/js/6.9c7c231.js","285ead87b968dbd1c490b83f88a0b533"],["/static/js/60.03f56ec.js","98e6d16e9a46305f9b2407ac65a2e1e3"],["/static/js/61.3918b4c.js","5a1370c85305519fe6bff5b8c156e414"],["/static/js/62.3a6dd4c.js","fd25549dd7d977e2e046d1dd7361a093"],["/static/js/63.d122002.js","d537cbb61fbc3545a89dc27eaff409d8"],["/static/js/64.c62ee0c.js","5880f77ec9df18acd5be4b2faa7dbc45"],["/static/js/65.e2eb30b.js","9ec7db20c6129fdd4d6436cd6a27bada"],["/static/js/66.476a2e6.js","16d3fb282194e2e0aa8d63fa51b20a8f"],["/static/js/67.9e28abe.js","5eb8579c1bfb0dd031a8b25714885ac7"],["/static/js/68.9b84322.js","5423e51717db039446d4884a50327783"],["/static/js/7.e336667.js","5dff78c21a1fffbcdaacae437778c611"],["/static/js/8.8214af8.js","913084ee0c9e27e25fc207bc705799ac"],["/static/js/9.50ebebb.js","38d6946713497116610a834ebde106ab"],["/static/js/admin.f365161.js","ff5f126e7a1f201f664a205a5dfaed16"],["/static/js/manifest.89fc29b.js","f74cf67006abe4b90260c1dedc953568"]];
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







