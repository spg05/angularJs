import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { appRouting } from "./app.routing";
//import { FormsModule } from "@angular/forms";
//import { HttpClientModule } from "@angular/common/http";
//components
import { AppComponent } from "./app.component";
//import { EmployeesListComponent } from "./employees/components/employees-list.component";
//import { EmployeeDetailsComponent } from "./employees/components/employee-details.component";
//import { EventsListComponent} from "./events/components/events-list.component";
//import { EventsDetailsComponent} from "./events/components/event-details.component";
//import { JphPostsListComponents } from "./jph/components/jph-post-list.component";
//pipes
//import { FirstLetterCapitalPipe } from "./events/pipes/first-letter-capital.pipe";
//import { FilterByPipe } from "./events/pipes/filter-by.pipe";

//services

//import { SepEventsService } from "./events/services/sep-events.service";
//import { JphService } from "./jph/services/jph.service";

import { EmployeesModule } from "./employees/employees.module";
import { EventsModule } from "./events/events.module";
import { JphModule } from "./jph/jph.module";
import { SepNavbarModule } from "./navigation/navigation.module";
import { HomeModule } from "./home/home.module";

@NgModule({
    imports: [
        BrowserModule, 
        HomeModule,
        EmployeesModule,
        EventsModule,
        JphModule,
        SepNavbarModule,
        appRouting
        //FormsModule, HttpClientModule
    ],
    exports: [],
    declarations: [
        AppComponent, 
        //EmployeesListComponent, 
        //EmployeeDetailsComponent,
        //EventsListComponent,
       // EventsDetailsComponent,
       // JphPostsListComponents,
       // FirstLetterCapitalPipe,
       // FilterByPipe
    ],
    providers: [
        //SepEventsService,
        //JphService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}