import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { EmpleadosComponent } from './empleados/empleados.component';
import { FrutaComponent }  from './fruta/fruta.component';
import { HomeComponent }     from './home/home.component';
import { ContactoComponent }     from './contacto/contacto.component';
import { CochesComponent }     from './coches/coches.component';
import { PlantillasComponent }     from './plantillas/plantillas.component';

const appRoutes: Routes = [
  {path: '',                 component: HomeComponent},
  {path: 'pagina-principal', component: HomeComponent},
  {path: 'empleados',        component: EmpleadosComponent},
  {path: 'contacto',         component: ContactoComponent},
  {path: 'contacto/:page',   component: ContactoComponent},
  {path: 'fruta',            component: FrutaComponent},
  {path: 'coches',           component: CochesComponent},
  {path: 'plantillas',       component: PlantillasComponent},
  {path: '**',               component: HomeComponent} //Ruta por defecto cuando se produce error
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);