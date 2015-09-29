/*!
 * utils.js - helper methods
 * by Sébastien Robillard
 *
 *
 * version : 1.0
 * September 24th, 2015
 *
 */


'use strict';

var UTILS = (function(){
  var utils = {};

  /* *******
   *  Nodes
     ******* */

  /**
   * utils.getById( id:string ) : object
   *
   * Get node by his ID
   */
  utils.getById = function(id) {
    return document.getElementById(id);
  };

  /**
   * utils.getByNode( node:string [, element:object ] ) : object
   *
   * Get node by selector
   */
  utils.getByNode = function(node, element) {
    element = (element) ? element : document;
    return element.querySelectorAll(node);
  };

  /**
   * utils.getByClass( class:string [, element:object ] ) : object
   *
   * Get node by class
   */
  utils.getByClass = function(cssClass, element) {
    element = (element) ? element : document;
    return element.getElementsByClassName(cssClass);
  };

  /**
   * utils.getParentByName( element:object, name:string [, returnBody:boolean ] ) : object
   *
   * Get node parent by his name
   */
  utils.getParentByName = function(element, name, returnBody) {
    var parentNode = element.parentNode;
    if (parentNode.tagName.toLowerCase() != "body") {
      if (name) {
        if (parentNode.getAttribute('name') == name)
          return parentNode;
        else
          return this.getParentByNode(parentNode, name, returnBody);
      }
    } else {
      if (returnBody)
        return document.getElementsByTagName("body")[0];
    }
    return null;
  };

  /**
   * utils.getParentByName( element:object, cssClass:string [, returnBody:boolean ] ) : object
   *
   * Get node parent by class
   */
  utils.getParentByClass = function(element, cssClass, returnBody) {
    var parentNode = element.parentNode;
    if (parentNode.tagName.toLowerCase() != "body") {
      if (cssClass) {
        if (this.hasClass(parentNode, cssClass))
          return parentNode;
        else
          return this.getParentByClass(parentNode, cssClass, returnBody);
      }
    } else {
      if (returnBody)
        return document.getElementsByTagName("body")[0];
    }
    return null;
  };

  /**
   * utils.addEventMultiListener( element:object, events:string, fn:object ) : void
   *
   * Create multiple listeners on an element
   */
  utils.addEventMultiListener = function(element, events, fn) {
    var arrayEvents = events.split(' ');
    for (var i = 0; i < arrayEvents.length; i++) {
      element.addEventListener(arrayEvents[i], fn, false);
    }
  };


  /* *********
   *  Classes
     ********* */

  /**
   * utils.hasClass( element:object, cssClass:string ) : boolean
   *
   * Check if an element has a class
   */
  utils.hasClass = function(element, cssClass) {
    return element.className.match(new RegExp('(\\s|^)'+cssClass+'(\\s|$)'));
  };

  /**
   * utils.addClass( element:object, cssClass:string [, removeOldClasses:boolean ] ) : void
   *
   * Add a class on an element
   * Possibility to erase all classes
   */
  utils.addClass = function(element, cssClass, removeOldClasses) {
    if (!this.hasClass(element, cssClass)) {
      if (removeOldClasses)
        element.className = cssClass;
      else
        element.className += " "+cssClass;
    }
  };

  /**
   * utils.removeClass( element:object, cssClass:string ) : void
   *
   * Remove a class on an element
   */
  utils.removeClass = function(element, cssClass) {
    element.className = element.className.replace(new RegExp('(?:^|\\s)'+cssClass+'(?!\\S)'), '');
  };

  /**
   * utils.removeClasses( element:object ) : void
   *
   * Remove all classes on an element
   */
  utils.removeClasses = function(element) {
    element.className = '';
  };

  /**
   * utils.toggleClass( element:object, cssClass:string ) : void
   *
   * Switch a class on an element
   */
  utils.toggleClass = function(element, cssClass) {
    var fn = this.hasClass(element, cssClass) ? this.removeClass : this.addClass;
    fn(element, cssClass);
  };


  /* *****
   *  CSS
     ***** */

  /**
   * utils.removeScroll( hide:boolean ) : void
   *
   * Enable or disable the scroll on a page
   */
  utils.removeScroll = function(hide) {
    var overflow = (hide) ? 'hidden' : 'visible';
    document.getElementsByTagName('html')[0].style.overflow = overflow;
    document.getElementsByTagName('body')[0].style.overflow = overflow;
  };

  /**
   * utils.isVisible( element:object ) : boolean
   *
   * Check if an element has a positive width or height
   */
  utils.isVisible = function(element) { // A renommer
    return (element.offsetWidth > 0 || element.offsetHeight > 0);
  };


  /* *******
   *  Array
     ******* */

  /**
   * utils.inArray( array:array, value:sring ) : boolean
   *
   * Check if an array has a value
   */
  utils.inArray = function(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == value)
        return true;
    }
    return false;
  };


  /* **************
   *  LocalStorage
     ************** */

  /**
   * utils.localStorageAvailable( ) : void
   *
   * Check if localStorage is available
   */
  utils.localStorageAvailable = function() {
    return (typeof localStorage != 'undefined');
  };

  /**
   * utils.localStorageGetItem( key:string ) : string
   *
   * Get an item from localStorage
   */
  utils.localStorageGetItem = function(key) {
    if (this.localStorageAvailable())
      return localStorage.getItem(key);
  };

  /**
   * utils.localStorageSetItem( key:string, value;string ) : ?????
   *
   * Set an item to localStorage
   */
  utils.localStorageSetItem = function(key, value) {
    if (this.localStorageAvailable())
      return localStorage.setItem(key, value);
  };

  /**
   * utils.localStorageRemoveItem( key:string ) : ?????
   *
   * Remove an item from localStorage
   */
  utils.localStorageRemoveItem = function(key) {
    if (this.localStorageAvailable())
      return localStorage.removeItem(k);
  };

  return utils;
}(UTILS || {}));

