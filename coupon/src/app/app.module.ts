import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FunctionBarComponent } from './function-bar/function-bar.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { MainViewsComponent } from './main-views/main-views.component';
import { CouponInfoComponent } from './coupon-info/coupon-info.component';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import "@progress/kendo-angular-intl/locales/vi/all";
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ConditionsApplyComponent } from './conditions-apply/conditions-apply.component';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    FunctionBarComponent,
    MainViewsComponent,
    CouponInfoComponent,
    ConditionsApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    BrowserAnimationsModule,
    ButtonsModule,
    IconsModule,
    LayoutModule,
    IndicatorsModule,
    LabelModule,
    InputsModule,
    DateInputsModule,
    FormsModule,
    ReactiveFormsModule,
    TreeViewModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "vi-VI" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
