// Import CSS
// --------------------

require('../scss/main.scss');

// Import external libs
// --------------------

//import BootstrapCookieConsent from 'bootstrap-cookie-consent';

import baguetteBox from 'baguettebox.js';

import { tns } from 'tiny-slider/src/tiny-slider';

import Macy from 'macy';
//import '@babel/polyfill';

// todo clean helper.js
import { toggleOnScrollTop } from './helpers.js';

// Initialize few libs
// -------------------

var sliderOptions = {
  container: '.tns',
  controls: false,
  autoWidth: true,
  loop: true,
  mouseDrag: true,
  slideBy: 'page',
  swipeAngle: false,
  items: 1,
  center: true,
};

var gallery = function () {
  baguetteBox.run('.mimg', {
    captions: function (element) {
      return element.getElementsByTagName('img')[0].alt;
    },
  });
};

function applyOnDomChanged() {
  gallery();
  if (document.querySelector('.tns')) tns(sliderOptions);
}

function applyOnDomLoaded() {
  applyOnDomChanged();
  toggleOnScrollTop('#main-navbar');
  /**
  var masonry = new Macy({
    container: '.masonry',
    columns: 3,
    margin: {
      y: 16,
      x: '2%',
    },
    breakAt: {
      992: 2,
      768: 1,
    },
  });/**/
  /**
  new BootstrapCookieConsent({
    services: ['StatistiquesAnonymes', 'YouTube'],
    services_descr: {
      StatistiquesAnonymes:
        "Nous permet d'améliorer le site en fonction de son utilisation",
      YouTube: 'Affiche les vidéos du service youtube.com',
    },
    method: 'bsn',
  });
  /**/
}

document.addEventListener('DOMContentLoaded', applyOnDomLoaded);

document.addEventListener('DOMChanged', applyOnDomChanged);
