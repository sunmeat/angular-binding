# Bindings

![Results](https://github.com/sunmeat/angular-resume/blob/master/results.png?raw=true)

Механизм привязки, позволяет различным частям шаблона привязаться к некоторым значениям, определенным в компоненте.

<div class="header">
    <!-- привязка свойств элементов html --> 
    <img [src]="currentPhoto" alt="Profile Photo" class="profile-photo" (click)="testEvent()">
    <h1>{{name}}</h1> <!-- использование интерполяции (односторонней привязки), имя берётся из поля класса в ts-файле -->
</div>
