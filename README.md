# LazyImageLoader

## Demo

## Getting Started

**important elements**
- lazy.js 
- lazy.css

```Javascript
  //window must have 'IntersectionObserver'!!!! Otherwise, lazy.js doest nothing
  if (window.IntersectionObserver) { // to check if exits
    console.log('IntersectionObserver is On') } 
  else { //append polyfill to window to init IntersectionObserver
    const polyfillUrl = 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver'
    const polyfillScript = document.createElement('script')
    polyfillScript.setAttribute('src', polyfillUrl)
    document.body.appendChild(polyfillScript)
  }
```
**Alternatives**
for chrome or firefox img tag attribute loading="lazy" is supported, so you can use something like that without using JavaScript to perform lazy load!!
```html
<img src="{{path to image}}" loading="lazy" />
```
Loading="lazy" For Your Reference Here
web.dev: https://web.dev/browser-level-image-lazy-loading/
can I Use:  https://caniuse.com/loading-lazy-attr

## usage
```html
<head>
  <link rel="stylesheet" href="/css/lazy.css" />
  <script src="/js/lazy.js"></script>
</head>
```

```html
<picture class="lazy-load"> <!-- width and height is default 250px, lazy-load class is a must -->
  <img data-src="./images/3vv.jpg" /> <!-- should be data-src not src!!! -->
</picture>
```
