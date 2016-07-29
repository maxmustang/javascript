define(function() {
  'use strict';

  function loadCss(url){
      $('<link>', {type: 'text/css', rel:'stylesheet', href:url}).appendTo('head');
  }

  const api = {
    render(container, view, css) {
      loadCss('chap004/mymodules.css')
      $(view).text('Hello, World').appendTo(container)
    }
  }
  return api
})
