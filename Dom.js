/**
 * Created by ivankotut on 27.10.2015.
 */

if( typeof Dom !== 'undefined'){
    throw new Error('Нужная переменная занята!');
}


var Dom = (function(){
    'use strict';

    var AddProperty; // прототип с доп свойствами для нашего обьекта

    function errorLog(mess){
        throw new Error(mess);
    }

    AddProperty = function(obj){
        this.el = obj;
        this.parent = obj.parentNode;
    };

    AddProperty.prototype = {
        author: 'ivankotut',
        version: '0.0.1',
        constructor: AddProperty,
        events: {},
        style: function(property){
            var style = this.el.style;

            if(property === undefined){
                return style;
            }

            if(typeof property !== 'object'){
                throw new Error('Нужен обьект!');
            }

            for(var i in property) if(property.hasOwnProperty(i)){
                style[i] = property[i];
            }
            return this;
        },
        click: function(callback){
            var self = this;
            this.events.click = function(){
                callback.apply(self,arguments);
            };
            this.el.addEventListener('click', self.events.click);
        },
        unClick: function(){
            var self = this;
            this.el.removeEventListener('click',self.events.click);
        },
        getParent: function(search){
            var parent = this.el.parentNode;

            // ищем ближайшего родителя по названию тега
            if(typeof search !== 'string'){
                return this.parent;
            }

            var query = search.split('').slice(1).join('');

            switch (search.trim()[0]){
                case '.':
                    return this.getParentByClass(query,parent);
                    break;
                case '#':
                    return this.getParentById(query,parent);
                    break;
                default :
                    return this.getParentByTag(search,parent);
            }
        },
        getParentByTag: function(tag){
            var parent = arguments[1];

            if(typeof parent !== 'object'){
                this.getParentByTag(tag,this.parent);
            }

            if(!parent.tagName){
                errorLog('Не найден такой родитель');
            }

            if(parent.tagName === tag.toUpperCase()){
                return parent;
            } else{
                return this.getParentByTag(tag,parent.parentNode)
            }
        },
        getParentByClass: function(className){
            var parent = arguments[1];

            if(typeof parent !== 'object'){
                this.getParentByClass(className,this.parent);
            }

            if(parent.className === 'undefined'){
                errorLog('Не найден такой родитель');
            }

            if(parent.className.toLowerCase() === className.toLowerCase()){
                return parent;
            }

            return this.getParentByClass(className,parent.parentNode)
        },
        getParentById: function(id){
            var parent = arguments[1];

            if(typeof parent !== 'object'){
                this.getParentById(id,this.parent);
            }

            if(parent.id === 'undefined'){
                errorLog('Не найден такой родитель');
            }

            if(parent.id.toLowerCase() === id.toLowerCase()){
                return parent;
            }

            return this.getParentById(id,parent.parentNode)
        }
    };

    return {
        getById: function(id){
            return new AddProperty(document.getElementById(id));
        }
    };

}());