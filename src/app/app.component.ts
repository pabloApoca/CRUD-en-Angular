import { Component } from '@angular/core';
import { Empleado } from './modelos/Empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  EmpleadoArray : Empleado[] = [
    {id: 1, nombre: "Pablo", pais: "Argentina"},
    {id: 2, nombre: "Mariana", pais: "Costa Rica"},
    {id: 3, nombre: "Juanito", pais: "Mexico"},
  ];

  seleccionEmpleado: Empleado = new Empleado();

  editarEmpleado(empleado : Empleado){
    this.seleccionEmpleado = empleado;
  }

  agregarOEditar(){
    if(this.seleccionEmpleado.id===0){
      this.seleccionEmpleado.id = this.EmpleadoArray.length +1;
      this.EmpleadoArray.push(this.seleccionEmpleado);
    }

    this.seleccionEmpleado = new Empleado();
  }

  eliminar(){
    if(confirm('¿Estas seguro de querer eliminar a '+ this.seleccionEmpleado.nombre+ ' ?' )){
      this.EmpleadoArray = this.EmpleadoArray.filter(x => x != this.seleccionEmpleado);
      this.seleccionEmpleado = new Empleado();
    }
    
  
  }

}
