import { Component, KeyValueDiffers, NgModule, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  formularioPersona;
  sexo!: string;
  arraysexo: string[] = ['Femenino', 'Masculino', 'Otro'];
  nombre!: string
  apellidos?: string
  DNI: any = /^[A-Va-w][0-9]{8}[A-Z]$|^[0-9]{7}[0-9A-Ja]$/;
  arrayPersonas: FormGroup[] = [];
  modif: boolean = false;
  i: any = 0;

  constructor(fb: FormBuilder) {
    this.formularioPersona = fb.group({
      nombre: [''],
      apellidos: [''],
      edad: [''],
      DNI: [''],
      cumple: [''],
      color: [''],
      sexo: ['']
    });

  }

  ngOnInit(): void {
  }
  public getArrayPersonas(): FormGroup[] {

    return this.arrayPersonas;
  }

  RegistrarPersonas(usuario: FormGroup) {
    console.log(this.modif)
    console.log(this.i)
    if (this.modif == false){
      this.arrayPersonas.push(usuario.value);
    }else{
      this.arrayPersonas[this.i] = usuario.value;
    }
    this.formularioPersona.reset();
  }

  Eliminar(i: number) {
    console.log(i)
    this.getArrayPersonas().splice(i, 1);
  }

  onKeyUp(i: number, usuario: FormGroup): void {
    
    this.formularioPersona.setValue(usuario)
    this.modif = true
    this.i = i
    console.log(this.modif)
    console.log(i)
  }

  mostrarvalores() {
    for (let i = 0; i < this.arrayPersonas.length; i++) {
      console.log(this.arrayPersonas[i]);
    }

  }
}
