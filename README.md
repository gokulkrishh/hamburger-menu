# Hamburger Menu 🍔

*Creating and auditing a hamburger menu to result in 60fps animation*

![hamburger menu](https://raw.githubusercontent.com/gokulkrishh/hamburger-menu/master/hamburger-menu.gif)

### Why ?

Many popular sites has hamburger menu. But most of them are janky because of the animations are less than 60fps. Instead of CPU to do our heavy rendering, we can make GPU to render a page to do some smooth animations.

## How ?

Just by using CSS for animations

### Example:

```html
<!-- hamburger icon  -->
<div class="menu-icon">
  <svg width="24px" height="24px" viewBox="0 0 48 48">
    <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z"></path>
  </svg>
</div>

<!-- menu  -->
<div class="menu">
  <div class="menu-logo">Hamburger Menu</div>
  <ul class="menu-list">
    <li>Home</li>
    <li>Shop</li>
    <li>Products</li>
    <li>Gallery</li>
    <li>Books</li>
    <li>Contact Us</li>
  <ul>
</div>

<div class="menu-overlay"></div>
```

```css
.menu {
  width: 300px;
  height: 100%;
  position: fixed;
  bottom: 0;
  top: 0;
  transition: all 200ms ease-in; //creates a smooth transition
  transform: translateX(-103%); //to hide menu
  will-change: transform; //hint to browser about upcoming transformation
}

.menu-overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99;
  transform: translateX(-103%);
}
```

```+``` little javascript

### [source code](https://github.com/gokulkrishh/hamburger-menu/blob/master/src)

### [Demo]()

Result is a hamburger menu in 60fps, see the timeline recording done in chrome below.

![Chrome Timeline Recording](https://raw.githubusercontent.com/gokulkrishh/hamburger-menu/master/timeline-recording.png)

#### References

- [CSS-Animations](http://gokulkrishh.github.io/2014/08/28/CSS3-Animations.html)

- [will-change](https://dev.opera.com/articles/css-will-change-property/)

- [How to use the timeline tool](https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/timeline-tool?hl=en)
