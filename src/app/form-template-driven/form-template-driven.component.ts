import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent implements OnInit {

  titulo: string= 'Cadastro de Cursos';
  data: Date = new Date();

  curso: any = {
    nome: null,
    id: null
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(Form){
    console.log(Form);
  }

}
