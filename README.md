# Dom
Не большая либа для работы с dom api. В большей степени написана ради усвоения этой темы. Version 0.0.1
#### Примеры
#
###### Поиск по id
#
```sh
Dom.getById('link');
```

###### Добавить оброботку события клик и удалить обработчик
#

```sh
Dom.getById('link').click(function(e){
   e.preventDefault();
   console.log(this); // текущий обьект (Dom.getById('link'))
   this.unClick(); // Удалить оброботчик клика
});

Dom.getById('link').unClick(); // Или так можно удалить обработчик клика
```

###### Доступные свойства в выбронном обьекте:
#
###### style
#
```sh
// Без параметров возвращает ссылку на свойство style обьекта
var linkStyle = Dom.getById('link').style();
linkStyle.background = 'red';

// В качестве параметра может принимать оъект (свойство: значение)

Dom.getById('link').click(function(e){
      e.preventDefault();
     this.style({
         background: 'red',
         color: 'rgba(255,255,255,0.7)'
     });
});
```

###### parent
#
```sh
// Вертает родителя по заданно му параметру
this.getParent('div'); // по имени тега
this.getParent('.test'); // по имени класа
this.getParent('#test'); // по id
 // также в this доступен ближайшый родитель
console.log(this.parent);
```