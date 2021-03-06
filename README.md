<p align="center"><a href="https://dev.piedweb.com">
<img src="https://raw.githubusercontent.com/PiedWeb/piedweb-devoluix-theme/master/src/img/logo_title.png" width="200" height="200" alt="Open Source Package" />
</a></p>

<p>
    <a href="https://www.npmjs.com/package/@piedweb/bootstrap5-extended"><img src="https://img.shields.io/npm/dt/@piedweb/bootstrap5-extended.svg" alt="Total Downloads"></a>
    <a href="https://github.com/piedweb/bootstrap5-extended/releases"><img src="https://img.shields.io/npm/v/@piedweb/bootstrap5-extended.svg" alt="Latest Release"></a>
    <a href="https://github.com/piedweb/bootstrap5-extended/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@piedweb/bootstrap5-extended.svg" alt="License"></a>
</p>

# Bootstrap 5 Extended

**Demo** [piedvert.com (Mountain Guide Website in Vercors)](https://piedvert.com)

## Theme and UI Kit functionnal without Javascript

- Bootstrap _working without_ [javascript](src/js/app.js) (except a few enhancement like navbar transparent background before scroll)
- Add few utilities
  - `.bg-{color}` (blue, green, yellow, [etc.](https://github.com/twbs/bootstrap/blob/master/scss/_variables.scss#L46))
  - `.icon-{color}`
  - `.text-{color}`
  - `.a` (text looks like a link), `.link-text` (link looks like text), `.ninja` (link invisible)
  - `.fullwidth`
  - `.container-txt` (default max-width 720px)
  - `.border-transparent` (useful for overriding default form)
  - `.mw-{breakpoint}` (max-width)
- Add few component
  - TinySlider Gallery
  - Inline Gallery
  - Unordered masonry (gallery)
  - Pure CSS Navbar Toggler ([bootstrap issue](https://github.com/twbs/bootstrap/issues/17540))
  - Intro-Sidebar (Right or Left)-Content

## Installation

```
npm i @piedweb/bootstrap5-extended
```

Then see [app.scss](src/scss/app.scss) to import what you need.

## Documentation

#### Usage

See [demo/index.html](demo/index.html) [app.js](src/js/app.js) and [app.css](src/scss/app.scss).

### Bootstrap 5 Navbar toggler without javascript

```
@import 'bs5-extended/component/navbar-css-toggler.scss';
```

Integration:

- Via [PiedWeb/ThemeComponent](https://github.com/PiedWeb/ThemeComponentBundle) for [PiedWeb/CMS](<[https://d](https://github.com/PiedWeb/CMS)>)

## Credits

Inspired by [bootstrap ecosystem](https://getbootstrap.com). Initially built by [Pied Web](https://piedweb.com)
