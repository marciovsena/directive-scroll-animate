directive-scroll-animate
===

This is a [AngularJS](http://angularjs.org/) directive

Requirement
---

- [angular.js](https://github.com/angular/angular.js) 1.2.6

Usage
---

app.js:

```javascript
var app = angular.module('app', [
  'directives.scroll-animate'
]);
```

Example
---

```html
<header scroll-animate, scroll-animate-property="height", scroll-animate-init="190", scroll-animate-property-end="64px", scroll-animate-property-init="192px"></header>
```

or

```html
<header scroll-animate="toggle", scroll-animate-toggle-class="show", scroll-animate-init="190"></header>
```
