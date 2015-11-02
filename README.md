# Dom
�� ������� ���� ��� ������ � dom api. � ������� ������� �������� ���� �������� ���� ����. Version 0.0.2

### ��� ������:

 - ��������� ������ ������ ����()
 - �������� ����� each ��������� ��� ��������� : ������� ���� � ������
 - �������� ����� log , �� ���� �������� � ������� ������� ������

#### �������
#
###### ����� �� id
#
```sh
Dom('#link');
```

###### �������� ��������� ������� ���� � ������� ����������
#

```sh
Dom('#link').click(function(e){
   e.preventDefault();
   console.log(this); // ������� ������ (Dom.getById('link'))
   this.unClick(); // ������� ���������� �����
});

Dom('#link').unClick(); // ��� ��� ����� ������� ���������� �����
```

###### ��������� �������� � ��������� �������:
#
###### style
#
```sh
// ��� ���������� ���������� ������ �� �������� style �������
var linkStyle = Dom('#link').style();
linkStyle.background = 'red';

// � �������� ��������� ����� ��������� ����� (��������: ��������)

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
// ������� �������� �� ������� �� ���������
this.getParent('div'); // �� ����� ����
this.getParent('.test'); // �� ����� �����
this.getParent('#test'); // �� id
 // ����� � this �������� ��������� ��������
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
   Dom(el).log(); // ������� html ����
});

// ���� �������� � each ������ �������� true �� el ����� ������ ���� Dom
Dom('.class-name').each(function(el,index){
   el.log(); // ������ ���� Dom
},true);
```