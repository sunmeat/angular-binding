import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit, OnDestroy {

  photos: string[] = [
    'https://sunmeat-angular.000webhostapp.com/my_photos/1.jpg',
    'https://sunmeat-angular.000webhostapp.com/my_photos/2.jpg',
    'https://sunmeat-angular.000webhostapp.com/my_photos/3.jpg',
    'https://sunmeat-angular.000webhostapp.com/my_photos/4.jpg',
    'https://sunmeat-angular.000webhostapp.com/my_photos/5.jpg',
    'https://sunmeat-angular.000webhostapp.com/my_photos/6.jpg',
    'https://sunmeat-angular.000webhostapp.com/my_photos/7.jpg',
    'https://sunmeat-angular.000webhostapp.com/my_photos/8.jpg'
  ];

  name: string = 'Oleksandr Zahoruiko';
  position: string = 'junior angular developer';
  period: number = 500;
  photoIndex: number = 0;
  currentPhoto: string = '';
  timer: any;

  // изначально была кнопка, при нажатии на которую всё равботало как положено
  // из чего я сделал вывод - что ngOnInit или конструктор компонента - не то место,
  // откуда нужно запускать анимацию (проблема с графическим потоком ангуляра)
  handleClick() {
    // alert("handleClick"); // алерт срабатывает
    // console.log("handleClick"); // а консоль лог - не срабатывает :))
    this.timer = setInterval(this.interval.bind(this), this.period);
  }

  testEvent() {
    alert("проверка привязки к событию!");
  }

  interval() : void {
    // alert("interval");
    this.photoIndex++;
    if (this.photoIndex >= this.photos.length)
      this.photoIndex = 0;
    this.currentPhoto = this.photos[this.photoIndex];
  }

  ngOnInit() : void {
    // если инициализировать поле сразу при объялении - не понимает, не грузит страницу
    // пришлось сделать в онИните (либо в конструкторе) 
    this.currentPhoto = this.photos[this.photoIndex];
    // alert("on init");
  }

  /*
  вызов setTimeout(this.handleClick.bind(this), 1000); в методе ngOnInit()
  может привести к зацикливанию или блокировке интерфейса пользователя из-за специфики работы Angular
  и жизненного цикла компонентов.

когда Angular инициализирует компонент с помощью ngOnInit(), он ожидает, что этот метод завершится
достаточно быстро, чтобы не блокировать основной поток выполнения. вызывать setTimeout напрямую
в ngOnInit() может привести к тому, что функция handleClick будет вызываться слишком часто
или в непредсказуемые моменты, что может вызвать проблемы с производительностью или поведением
вашего приложения.
*/

  // решение проблемы:
  // используем директиву @HostListener для реагирования на события на хост-элементе компонента
  @HostListener('window:DOMContentLoaded', ['$event'])
  handleDomContentLoaded(event: Event): void {
    this.handleClick();
  }

  ngOnDestroy() : void {
    console.log("ngOnDestroy");
    clearInterval(this.timer);
  }

}