///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
    'dojo/_base/declare',
    'jimu/BaseWidgetSetting',
    'dijit/_WidgetsInTemplateMixin',
    'dijit/form/ValidationTextBox'
  ],
  function(
    declare,
    BaseWidgetSetting,
    _WidgetsInTemplateMixin) {
    return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {

      baseClass: 'widget-iFramePowerBI-setting',

      startup: function() {
        this.inherited(arguments);
        this.setConfig(this.config);
      },

      setConfig: function(config) {
        this.config = config;
        this.FrameURi.set('value', this.config.PowerBIsrc.FrameURL);
        if (this.config.PowerBIsrc.FrameOSA == "&autoAuth=true"){
          this.FrameOSi.set('value', "true")
          console.log('console: setConfig(FrameOSA is true)');
          }else{
          this.FrameOSi.set('value', "false")
          console.log('console: setConfig(FrameOSA is false)');
          }
        if (this.config.PowerBIsrc.FrameFilter == "&filterPaneEnabled=false"){
          this.FrameFilti.set('value', "false")
          console.log('console: setConfig(FrameFilter is false)');
          }else{
          this.FrameFilti.set('value', "true")
          console.log('console: setConfig(FrameFilter is true)');
          }
        if (this.config.PowerBIsrc.FrameNavPage == "&navContentPaneEnabled=false"){
          this.FrameNavPagi.set('value', "false")
          console.log('console: setConfig(FrameNavPage is false)');
          }else{
          this.FrameNavPagi.set('value', "true")
          console.log('console: setConfig(FrameNavPage is true)');
          }
        this.FrameWidthi.set('value', this.config.FrameWidth);
        this.FrameHeighti.set('value', this.config.FrameHeight);
        this.FullScreeni.set('value', this.config.FullScreen);
      },

      getConfig: function() {
        this.config.PowerBIsrc.FrameURL = this.FrameURi.get('value');
        if (this.FrameOSi.get('value') == "true"){
          this.config.PowerBIsrc.FrameOSA = "&autoAuth=true"
          console.log('console: getConfig(FrameOSA is true)');
          }else{
          this.config.PowerBIsrc.FrameOSA = "&autoAuth=false"
          console.log('console: getConfig(FrameOSA is false)');
          }
        if (this.FrameFilti.get('value') == "false"){
          this.config.PowerBIsrc.FrameFilter = "&filterPaneEnabled=false"
          console.log('console: getConfig(FrameFilter is false)');
          }else{
          this.config.PowerBIsrc.FrameFilter = "&filterPaneEnabled=true"
          console.log('console: getConfig(FrameFilter is true)');
          }
        if (this.FrameNavPagi.get('value') == "false"){
          this.config.PowerBIsrc.FrameNavPage = "&navContentPaneEnabled=false"
          console.log('console: getConfig(FrameNavPage is false)');
          }else{
          this.config.PowerBIsrc.FrameNavPage = "&navContentPaneEnabled=true"
          console.log('console: getConfig(FrameNavPage is true)');
          }
        this.config.FrameWidth = this.FrameWidthi.get('value');
        this.config.FrameHeight = this.FrameHeighti.get('value');
        this.config.FullScreen = this.FullScreeni.get('value');
        return this.config;
      }
    });
  });
