/*!
 * Viewport Events.js
 *
 * MIT licensed
 * Copyright (C) 2015 Leonardo Lima, http://llaraujo.com
 */

var ViewportEvents = (function(){

  "use strict";

  var _events = {};
  var _vps = {};
  var _matchMedias = {};
  var _listeners = {};
  var _opts = {
    'out-vp': 'outside'
  };

  /**
   * Represents a main.
   * @constructor
   * @param {object} events - The events controller.
   */
  function main (events) {

    // Check if first argument is a control events
    if (  (events.hasOwnProperty('on') && events.hasOwnProperty('trigger')) ||
          (Object.getPrototypeOf(events).hasOwnProperty('on') && Object.getPrototypeOf(events).hasOwnProperty('trigger'))) {

      _events = events;

      return this;

    } else{
      console.log('[Viewport Events] Sorry, yours Events lib fail');
      return false;
    }

  }

  /**
   * Register ViewPort in lib
   * @constructor
   * @param {string} name - name for viewport events.
   * @param {string} media - string media querie for api.
   */
  function registerVP(name, media) {

    if (!_vps.hasOwnProperty(name)) {
      _vps[name] = media;
      _matchMedias[name] = window.matchMedia(media);

      _listeners[name] = function(){

        if (_matchMedias[name].matches) {
          _events.trigger(name);
        } else{
          _events.trigger(name + '-' + _opts['out-vp']);
        }

      };

      _matchMedias[name].addListener(_listeners[name]);

    } else {
      console.log('[Viewport Events] Not possible to register: \'%s\' , because there is already.', name);
    }

    return true;
  }

  /**
   * Register ViewPort's events in lib
   * @constructor
   * @param {object} vps - viewport events and media queries
   */

  main.prototype.add = function(vps){

    for (var vp in vps) {
      if (vps.hasOwnProperty(vp)) {
        registerVP(vp, vps[vp]);
      }
    }

  };

  /**
   * Remove ViewPort's events in lib
   * @constructor
   * @param {string} name of event to remove from listeners
   */

  main.prototype.rm = function(name){

    if(_vps.hasOwnProperty(name)){
      _matchMedias[name].removeListener(_listeners[name]);
      delete _matchMedias[name];
      delete _vps[name];
    }

    return true;
  };

  return main;

})();

