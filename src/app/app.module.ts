import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { AreaFillChartComponent } from './components/area-fill-chart/area-fill-chart.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DashboardEffects } from './store/dashboard.effects';
import { dashboardReducer } from './store/dashboard.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    TableComponent,
    RightSidebarComponent,
    AreaFillChartComponent,
    DonutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ dashboard: dashboardReducer }),
    EffectsModule.forRoot([DashboardEffects])
  ],
  providers: [DashboardEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
