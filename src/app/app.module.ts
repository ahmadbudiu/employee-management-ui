import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppHttpInterceptor} from './interceptors';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'employee',
        pathMatch: 'full',
    },
    {
        path: 'employee',
        loadChildren: () => import('./pages/employee/employee.module').then(m => m.EmployeeModule),
    }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FlexLayoutModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppHttpInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
