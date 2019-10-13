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

var precacheConfig = [["/static/css/admin.75b6d1e.css","f795c847ccdbc13d5f484d658e69029e"],["/static/img/401.089007e.gif","089007e721e1f22809c0313b670a36f1"],["/static/img/404.a57b6f3.png","a57b6f31fa77c50f14d756711dea4158"],["/static/img/element-icons.535877f.woff","535877f50039c0cb49a6196a5b7517cd"],["/static/img/element-icons.732389d.ttf","732389ded34cb9c52dd88271f1345af9"],["/static/js/0.942e9a4.js","51f5c31bf3373bff0ad55750b01b0661"],["/static/js/1.253c0d7.js","2eddd21a29ea97c7556b95b21986e851"],["/static/js/10.dbfd78d.js","c3fb2a98bfde028f443b18b3332e76a5"],["/static/js/11.0890dde.js","fe592eb628218009baf6462690444903"],["/static/js/12.4453aea.js","67eeb5f4f3aa1583fe0f3020df7c70dd"],["/static/js/13.b31839b.js","86af3731932ecad89f014662ff661513"],["/static/js/14.5bde209.js","7e00857aa1ead224178520d185d1af9a"],["/static/js/15.16c975c.js","5745f11d391984b83608e40a81974d2a"],["/static/js/16.b2776f9.js","5908c19d8c28b9370b90c956a8baf546"],["/static/js/17.df642c3.js","268163fb6abd0491ebaee88b2b7d666c"],["/static/js/18.54c061f.js","7371f4b7ba2ba92b1f3055994c343288"],["/static/js/19.235b591.js","68919aa9938430bc717501e44a670d65"],["/static/js/2.b30a819.js","6bc4da360b4c61fbde803042311378e4"],["/static/js/20.f85cab7.js","1905a330b2a792321153809fbc1fa50e"],["/static/js/21.91728e1.js","9ea5bf5cf1abd9593b41e171cfaa3b9c"],["/static/js/22.74c5e74.js","d33582f8852c4092b30dea03f4a527d5"],["/static/js/23.731e90e.js","99bbc5ba3825f625316d42ff3f3be407"],["/static/js/24.024630e.js","3e694cdcf9e903649de48efb6e793770"],["/static/js/25.d9b7428.js","53980c0a47dae1fed86ab4a2a6f20749"],["/static/js/26.bed19b0.js","256053de82b203bf6dd2e3610a2ab702"],["/static/js/27.c8bdecc.js","9dd65679fc3be3085988ad822c9191a8"],["/static/js/28.6615c9b.js","55914a86a95f1fff9148f80c1f49bb31"],["/static/js/29.7f45f17.js","28436d74670bd3383947d7ecac4440c7"],["/static/js/3.1a1c4ec.js","6cf0188805456e751cc5486e205ecf58"],["/static/js/30.45a2d81.js","72be1ad06684fdb8fb8d8c88043bd4a8"],["/static/js/31.fe6ca9c.js","a415a20ca4edbc2a26d33441fe67be44"],["/static/js/32.5d8f4e5.js","c44dccc065ff9178272745ac43272fc9"],["/static/js/33.362dce9.js","00b74fe47bf8b26f2dc86ed32496ac73"],["/static/js/34.d05abee.js","239674fb22a8f0562f528008672c7c8d"],["/static/js/35.a3ab972.js","257662814f80d30463172eb84b42e49f"],["/static/js/36.6c84806.js","681ea7d38d0fbc980890f74a81c4187e"],["/static/js/37.0e9caaf.js","509206474740a2c9fd4a146927c81c52"],["/static/js/38.4a6eadd.js","a7f3c9bc70774aaf2981b294c79b238c"],["/static/js/39.eb653ce.js","d8915ae8cae7d3f2a7df0816cd07933a"],["/static/js/4.3795e36.js","e305f9d489378bb5f4f48791901a5e90"],["/static/js/40.c608aca.js","6ec62578ef9762c5f5cfdfde6a3d7e9e"],["/static/js/41.8146b1d.js","b4ac0eb092cdf04aff75acf70331ec9a"],["/static/js/42.81c0f33.js","ae5617be0356bb38ab93a27db65928cb"],["/static/js/43.fcd1231.js","a3fe5d0500344338d04fb19e475f1593"],["/static/js/44.6a2831f.js","97b627f0300efcb48b13564cb98d45b7"],["/static/js/45.cccbc22.js","77c46d82bc68caf6308f5c3501493004"],["/static/js/46.2b28b38.js","2a05b98f896d3dede7cc09c4b2f4dd23"],["/static/js/47.242505e.js","cf7a86b34c6827aa86a7ec485d5d446b"],["/static/js/48.68c9b6e.js","9e546329d6ccc33b57917169bfe3035d"],["/static/js/49.44f351b.js","78f7a2cb7a681f403d43971dbc593c4d"],["/static/js/5.825d330.js","d554ee4192296bf8c594b8531307d8c2"],["/static/js/50.6f60d24.js","b89261a170385ace676b5aab74d88805"],["/static/js/51.ba50ee8.js","0808519ab37fe24acb497acbd94718ca"],["/static/js/52.71d99a2.js","8fa6ace239a645fde25fa997e86fe85a"],["/static/js/53.46d5ce2.js","3927fa2b4a5abf1ba40fbcdb177f9e96"],["/static/js/54.31ef4dd.js","193a24b50898922627b0dc36f7dbff90"],["/static/js/55.dd5c4b1.js","ec4e4b2b2ecbae197e9971cd06e77743"],["/static/js/56.9da679a.js","5dc13542f4353d5f3c3828767eea52c5"],["/static/js/57.a2c6f57.js","5084640f9d6252fa656e434291d635f2"],["/static/js/58.f3d0e5f.js","a231e77271f89254583a5d958f90b98f"],["/static/js/59.9ac8df4.js","5fd840ae3688ff464565de93a73221a6"],["/static/js/6.74c31a7.js","c02eb9135fcb99a6e75eca59524bfe44"],["/static/js/60.9d691f5.js","74da6d61bb0e840dde3dbbc8514b5fd4"],["/static/js/61.7858f50.js","0daa854e500b1f3d1ac64b6b1b0db995"],["/static/js/62.3b195a2.js","21ac15443e7cd2a27b67e290cf9cf81c"],["/static/js/63.d5ac2d4.js","b650137d56829dd72a191e385b1d6132"],["/static/js/64.5ccf594.js","389b6683f24e7bcb853b4088dc4eeb7a"],["/static/js/65.6da60ad.js","4ff166e078e52b0f08e5314085b6fec8"],["/static/js/66.65b131c.js","5395d18d9e48c929c6c379207455d6cb"],["/static/js/67.1fbeeaf.js","0f0ac2166dd290d2cff742f51fd56aa8"],["/static/js/68.bed6fc5.js","0dc7cc27c4c572f9ecb7ca1d1fc36ede"],["/static/js/7.392c479.js","6eeb089cdd472cfde07b6599cf61fd70"],["/static/js/8.cf368e5.js","eba8fc39f14767bf8a37620b5b49403f"],["/static/js/9.0d7c650.js","7bd5816cc9d2eac0333f0132e8c53473"],["/static/js/admin.d5cf426.js","5464b1ec6cbf94d4255c81a09bbda060"],["/static/js/manifest.a2cabdc.js","a540b115aa2f4f480ffe8ef160116370"]];
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







