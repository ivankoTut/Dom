# Dom
Не большая либа для работы с dom api. В большей степени написана ради усвоения этой темы. Version 0.0.2

### Что нового:

 - Переделан способ выбора узла()
 - добавлен метод each принимает два аргумента : текущие узел и индекс
 - добавлен метод log , он тупо высерает в консоль текущий обьект

#### Примеры
#
###### Поиск по id
#
```sh
Dom('#link');
```

###### Добавить оброботку события клик и удалить обработчик
#

```sh
Dom('#link').click(function(e){
   e.preventDefault();
   console.log(this); // текущий обьект (Dom.getById('link'))
   this.unClick(); // Удалить оброботчик клика
});

Dom('#link').unClick(); // Или так можно удалить обработчик клика
```

###### Доступные свойства в выбронном обьекте:
#
###### style
#
```sh
// Без параметров возвращает ссылку на свойство style обьекта
var linkStyle = Dom('#link').style();
linkStyle.background = 'red';

// В качестве параметра может принимать оъект (свойство: значение)

Dom('#link').click(function(e){
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

###### each
#
```sh
Dom('.class-name').each(function(el,index){
   Dom(el).style({
       color: 'white', background: '#333'
   });
});
```

###### log
#
```sh
Dom('.class-name').each(function(el,index){
   Dom(el).log(); // обычный html узел
});

// если передать в each второй парметер true то el будет обьект типа Dom
Dom('.class-name').each(function(el,index){
   el.log(); // обьект типа Dom
},true);
```