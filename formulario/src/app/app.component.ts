import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cursos = [
    { value: 'curso-0', viewValue: 'Sistemas de Informação' },
    { value: 'curso-1', viewValue: 'História' },
    { value: 'curso-2', viewValue: 'Letras' },
    { value: 'curso-3', viewValue: 'Enfermagem' }
  ];
  municipios = [
    { value: 'municipio-0', viewValue: 'Coxim' },
    { value: 'municipio-1', viewValue: 'Campo Grande' },
    { value: 'municipio-2', viewValue: 'São Gabriel do Oeste' },
    { value: 'municipio-3', viewValue: 'Bandeirantes' },
    { value: 'municipio-4', viewValue: 'Pedro Gomes' },
    { value: 'municipio-5', viewValue: 'Três Lagoas' },
    { value: 'municipio-6', viewValue: 'Belo Horizonte' },
    { value: 'municipio-7', viewValue: 'Rio de Janeiro' },
    { value: 'municipio-8', viewValue: 'São Paulo' }
  ];
  ufs = [
    { value: 'uf-0', viewValue: 'MS' },
    { value: 'uf-1', viewValue: 'MT' },
    { value: 'uf-2', viewValue: 'SP' },
    { value: 'uf-3', viewValue: 'RJ' },
    { value: 'uf-4', viewValue: 'BH' },
    { value: 'uf-5', viewValue: 'MG' },
    { value: 'uf-3', viewValue: 'GO' },
    { value: 'uf-4', viewValue: 'AM' },
    { value: 'uf-5', viewValue: 'PR' }
  ];
  operadoras = [
    { value: 'operadora-0', viewValue: 'VIVO' },
    { value: 'operadora-1', viewValue: 'TIM' },
    { value: 'operadora-2', viewValue: 'Claro' },
    { value: 'operadora-3', viewValue: 'OI' },
  ];
  prioridades = [
    { value: 'prioridade-0', viewValue: 'BAIXA' },
    { value: 'prioridade-1', viewValue: 'NORMAL' },
    { value: 'prioridade-2', viewValue: 'ALTA' },
    { value: 'prioridade-3', viewValue: 'URGENTE' },
  ];
  startDate = new Date(1990, 0, 1);
  mask1: any[] = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  mask2: any[] = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  mask3: any[] = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  mask4: any[] = ['+', '1', ' ', '(', /[1-9]/, /\d/, ')', ' ', '9', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  mask5: any[] = ['R', '$', ' ', /\d/, /\d/, /\d/, ',', /\d/, /\d/];
  mask6: any[] = ['R', '$', ' ', /\d/, /\d/, /\d/, ',', /\d/, /\d/];
}
