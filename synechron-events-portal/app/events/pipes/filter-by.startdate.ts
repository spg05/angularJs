import { Pipe, PipeTransform} from "@angular/core";


@Pipe({
    name:"startDate"
})

export class StartDatePipe implements PipeTransform{
    transform(value: string, ...args: any[]): string {

        if(!value)       return value;
        
        return value.replace(/\w\S*/g, (txt )=> txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

    }

}