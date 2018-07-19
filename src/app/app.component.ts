import { APIService } from './services/service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ APIService ]
})
export class AppComponent {
  title = 'Timeline';

  meses: any [] = [{'number': 1, 'month': 'Enero' }, { 'number': 2 , 'month': 'Febrero' },
                   { 'number': 3, 'month': 'Marzo' }, { 'number': 4, 'month': 'Abril' },
                   { 'number': 5, 'month': 'Mayo' }, { 'number': 6 , 'month': 'Junio' },
                   { 'number': 7, 'month': 'Julio' }, { 'number': 8, 'month': 'Agosto' },
                   { 'number': 9, 'month': 'Septiembre' }, { 'number': 10, 'month': 'Octubre' },
                   { 'number': 11, 'month': 'Noviembre' }, { 'number': 12, 'month': 'Diciembre' }];

  calendario: any;
  startDate = new Date('2018-01-02');
  endDate = new Date('2019-01-01');
  formatoDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  public constructor(private apiService: APIService ) {

    this.getDate(this.startDate, this.endDate);
  }

  getDate(start, end) {
    const observer = this.apiService.getDataAPI();

    let calendar: any[] = [];
    let d = new Date(start);
    let calend: any[] = [{}];
    let dia: any;
    let mes: any;
    let año: any;
    let fecha: any;

    while (d <= end) {
      calendar.push(new Date(d));
       d.setDate(d.getDate() + 1);
    }

    calendar.forEach( c => {
     let m: any;
      fecha = c.toString().split(' ');
     m = c.getMonth() + 1;
     calend.push({dia: +fecha[2], mes: fecha[1] = m , año: 2018});

   });

   observer.subscribe(data => {
    calend.forEach( cal => {
        const feriadosMes = data.filter(feriado => feriado.mes === cal.mes && feriado.dia === cal.dia);
        cal['feriado'] = feriadosMes;
        let fech = new Date(Date.UTC(cal.año , cal.mes - 1, cal.dia + 1));
        cal['fecha'] = fech.toLocaleDateString('es-AR', this.formatoDate);
    });

   });

   calend.forEach(c => {
     const meses = this.meses.filter(m => m.number === c.mes);
     c['meses'] = meses[0];
   });
   // console.log('calend -->>> ', calend);
    return this.calendario = calend;
  }
}


