import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './producto-list/producto-list.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';
import { ProductoCreateComponent } from './producto-create/producto-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MisionVisionComponent,
    IniciarSesionComponent,
    RegistroComponent,
    ProductListComponent,
    ProductoEditComponent,
    ProductoCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }