import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClinicasListComponent } from './clinicas-list/clinicas-list.component';
import { AddClinicaComponent } from './add-clinica/add-clinica.component';
import { EditClinicaComponent } from './edit-clinica/edit-clinica.component';
import { ClinicasFormComponent } from './clinica-form/clinica-form.component';
import { PrimengAppComponent } from './clinica-form/primeng-tree';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ClinicasListComponent },
        { path: 'nuevo', component: AddClinicaComponent }, 
        { path: 'editar/:id', component: EditClinicaComponent },
        { path: 'formulario', component: ClinicasFormComponent },
        { path: 'tree', component: PrimengAppComponent },
       ])],
    exports: [RouterModule]
})
export class ClinicasRoutingModule { }
