import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MonthViewComponent } from './monthview';
import { WeekViewComponent } from './weekview';
import { DayViewComponent } from './dayview';
import { CalendarComponent } from './calendar';
import { initPositionScrollComponent } from './init-position-scroll';
import {register} from 'swiper/element/bundle';
register();
@NgModule({
    declarations: [
        MonthViewComponent, WeekViewComponent, DayViewComponent, CalendarComponent, initPositionScrollComponent
    ],
    imports: [IonicModule, CommonModule],
    exports: [CalendarComponent],
     schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgCalendarModule {}
