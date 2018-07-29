import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeesListComponent } from "./components/employees-list.component";
import { EmployeeDetailsComponent } from "./components/employee-details.component";

@NgModule({
    imports: [CommonModule],
    exports: [EmployeesListComponent],
    declarations: [       
        EmployeesListComponent, 
        EmployeeDetailsComponent       
    ],
    providers:[]
})

export class EmployeesModule {

}