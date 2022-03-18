import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ArticuloComponent } from './articulo/articulo.component';


=======
import { ClientesComponent } from './clientes/clientes.component';
>>>>>>> feba75241d2267599d8d380d9f4937e98b0558b7

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ArticuloComponent,

=======
    ClientesComponent
  ],
  exports:[
    ClientesComponent
>>>>>>> feba75241d2267599d8d380d9f4937e98b0558b7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
