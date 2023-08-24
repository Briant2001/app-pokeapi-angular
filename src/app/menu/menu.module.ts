import { NgModule } from "@angular/core";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@NgModule({
    declarations:[
        SidebarComponent
    ]
    ,exports:[
        SidebarComponent
    ]
})
export class MenuModule{

}