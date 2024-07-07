# Bindings

![Results](https://github.com/sunmeat/angular-resume/blob/master/results.png?raw=true)

Механизм привязки, позволяет различным частям шаблона привязаться к некоторым значениям, определенным в компоненте.
```
<div class="header">
    <img [src]="currentPhoto" alt="Profile Photo" class="profile-photo" (click)="testEvent()">
    <h1>{{name}}</h1>
</div>
```
