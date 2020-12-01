define([
    'dojo/_base/declare',
    'jimu/BaseWidget',
    'dijit/_WidgetsInTemplateMixin'],
function(declare, BaseWidget, _WidgetsInTemplateMixin) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget,_WidgetsInTemplateMixin], {
    // Custom widget code goes here 
    baseClass: 'jimu-widget-iFramePowerBI',

    startup: function() {
     this.inherited(arguments);
      console.log('console: startup(jimu-widget-iFramePowerBI)');
    },

    onOpen: function(){
      console.log('console: onOpen(jimu-widget-iFramePowerBI)');
      this.getPanel().resize({w:1125,h:668});
    },

    onClose: function(){
      console.log('console: onClose(jimu-widget-iFramePowerBI)');
    },

    onMinimize: function(){
      console.log('console: onMinimize(jimu-widget-iFramePowerBI)');
    }
  });
});