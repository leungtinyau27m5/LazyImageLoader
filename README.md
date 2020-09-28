# LazyImageLoader

## Demo

## Getting Started

**important elements**
- lazy.js
- lazy.css

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

## Hints

for chrome or firefox img tag attribute loading="lazy" is supported, so you can use something like without using JavaScript to perform lazy load!!
```html
<img src="{{path to image}}" loading="lazy" />
```
