<p align="center"><a href="https://dev.piedweb.com">
<img src="https://raw.githubusercontent.com/PiedWeb/piedweb-devoluix-theme/master/src/img/logo_title.png" width="200" height="200" alt="Open Source Package" />
</a></p>

# Bootstrap 5 Extended

**Demo** [piedvert.com (Mountain Leaders Website in Vercors)](https://piedvert.com)

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

Then see [main.scss](src/scss/main.scss) to import what you need.

## Documentation

### Bootstrap 5 Navbar toggler without javascript

```

@import 'theme/navbar-css-toggler.scss';

```

#### Usage

See [demo/index.html](src/demo/html/index.html).

Integration:

- Via [PiedWeb/ThemeComponent](https://github.com/PiedWeb/BootstrapThemeComponent) for [PiedWeb/CMS](<[https://d](https://github.com/PiedWeb/CMS)>)

## Credits

Inspired by [bootstrap ecosystem](https://getbootstrap.com). Initially built by [Pied Web](https://piedweb.com)
