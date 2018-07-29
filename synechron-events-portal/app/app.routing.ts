import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SepHomeComponent } from "./home/components/sep-home.component";
import { EventsListComponent } from "./events/components/events-list.component";
import { EventsDetailsComponent } from "./events/components/event-details.component";
import { EmployeesListComponent } from "./employees/components/employees-list.component";
import { EmployeeDetailsComponent } from "./employees/components/employee-details.component";
import { JphPostsListComponents } from "./jph/components/jph-post-list.component";

const appRoutes: Routes = [
    {
        path: "",
        component:SepHomeComponent
    },
    {
        path: "home",
        component:SepHomeComponent
    },
    {
        path: "events",
        component:EventsListComponent
    },
    {
        path: "events/:id",
        component:EventsDetailsComponent
    },
    {
        path: "employees",
        component:EmployeesListComponent
    },
    {
        path: "employees/:employeeId",
        component:EmployeeDetailsComponent
    },
    {
        path: "jph/posts",
        component:JphPostsListComponents
    }
];


export const appRouting:ModuleWithProviders = RouterModule.forRoot(appRoutes);