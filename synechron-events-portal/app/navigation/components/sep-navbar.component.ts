import { Component } from '@angular/core';

@Component({
    selector: 'sep-navber',
    templateUrl: '../views/sep-navbar.component.html'
})

export class SepNavbarComponent{
    constructor() { }
    menus:string[] = [
        "Synechron Events",
        "Home",
        "Events",
        "Employee",
        "Jph Posts"
    ]

    
}