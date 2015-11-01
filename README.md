# Dom
�� ������� ���� ��� ������ � dom api. � ������� ������� �������� ���� �������� ���� ����. Version 0.0.1
#### �������
#
###### ����� �� id
#
```sh
Dom.getById('link');
```

###### �������� ��������� ������� ���� � ������� ����������
#

```sh
Dom.getById('link').click(function(e){
   e.preventDefault();
   console.log(this); // ������� ������ (Dom.getById('link'))
   this.unClick(); // ������� ���������� �����
});

Dom.getById('link').unClick(); // ��� ��� ����� ������� ���������� �����
```

###### ��������� �������� � ��������� �������:
#
###### style
#
```sh
// ��� ���������� ���������� ������ �� �������� style �������
var linkStyle = Dom.getById('link').style();
linkStyle.background = 'red';

// � �������� ��������� ����� ��������� ����� (��������: ��������)

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
// ������� �������� �� ������� �� ���������
this.getParent('div'); // �� ����� ����
this.getParent('.test'); // �� ����� �����
this.getParent('#test'); // �� id
 // ����� � this �������� ��������� ��������
console.log(this.parent);
```