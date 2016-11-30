/**
 * Copyright (C) 2005-2016 Alfresco Software Limited.
 *
 * This file is part of Alfresco
 *
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * 
 * 
 * @module aikau/vue/Test
 * @extends external:dijit/_WidgetBase
 * @mixes module:alfresco/core/Core
 * @author Dave Draper
 */
define(["dojo/_base/declare",
        "dijit/_WidgetBase", 
        "dojo/text!./templates/Test3.html",
        "alfresco/core/Core",
        "vue"], 
        function(declare, _WidgetBase, template, Core, Vue) {
   


   // Only declare this once...
   Vue.component("aikau-vue-test3", {
      template: template
   });

   return declare([_WidgetBase, Core], {

      /**
       * @instance
       */
      postMixInProperties: function aikau_vue_Test__postMixInProperties() {
         
      },

      buildRendering: function aikau_vue_Test__buildRendering() {
         this.domNode = document.createElement("aikau-vue-test3");

         


      },

      postCreate: function aikau_vue_Test__postCreate() {

         // this.widgets && this.widgets.forEach(function(widget) {

         //    var widgetEl = document.createElement(widget.name.replace("/", "-").toLowerCase());
         //    this.domNode.appendChild(widgetEl);

         // }, this);

      }
   });
});