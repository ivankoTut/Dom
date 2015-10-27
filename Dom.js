/**
 * Created by ivankotut on 27.10.2015.
 */

(function(window){
    'use strict';

    var Dom = window.Dom = {},
        addProperty;

    addProperty = function(obj){
        return {
            el    : obj,
            style : obj.style,
            hide  : function( fn ){
                var callback = fn || function(){};
                obj.style.display = 'none';
                callback.apply(this,arguments);
                return Dom;
            },
            show  : function( fn ){
                var callback = fn || function(){};
                obj.style.display = 'block';
                callback.apply(this,arguments);
                return Dom;
            },
            callback: function( fn ){
                var callback = fn || function(){};
                callback.apply(this,arguments);
                return Dom;
            }
        }
    };

    Dom.getById = function(id){
        return addProperty(document.getElementById(id));
    };

}(this));