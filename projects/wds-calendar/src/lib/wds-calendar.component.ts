import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-wds-calendar',
  templateUrl: 'wds-calendar.component.html',
  styleUrls: ['wds-calendar.component.css']
})
export class WdsCalendarComponent implements OnInit {

    constructor() { }

    @Input() selectedDate: Date | undefined | null;
    @Output() selectedDateChange = new EventEmitter();
    @Input() error: string | boolean = false;

    public calendarDate: Date = new Date();
    public today: Date = new Date();
  //  public selectedDate: Date = new Date();

    public days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sa', 'Dim'];
    public daysFull = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    public months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    public firstDayIsInitiate = false;
    public lastDayIsPassed = false;
    public countDay = 1;

    public isCalendarOpen = false;
    public modelSelectedDate = '';

    public fullDayMonth: any;

    public events: Array<any> = [];


    public ngOnInit() {
        if (this.selectedDate == null || this.selectedDate == undefined){
           this.selectedDate = null;
        }
        else{
            this.selectedDate = new Date(this.selectedDate); 
            this.calendarDate = new Date(this.selectedDate.getTime());
            this.modelSelectedDate = this.setModel();
        }
        this.setFullDayMonth();

        this.events.push({
            date: '20220113',
            title: 'test',
            color: 'blue'
        })
        this.events.push({
            date: '20220113',
            title: 'test2',
            color: 'red'
        })
    }

    public getEvent(day: number, month = this.calendarDate.getMonth(), year = this.calendarDate.getFullYear()): any {
        return this.events.filter(e => e.date == `${year}${this.getString(month, 'month')}${this.getString(day)}`);
    }

    public setFullDayMonth() {
        this.fullDayMonth = [];
        this.countDay = 1;
        this.firstDayIsInitiate = false;
        this.lastDayIsPassed = false;
        for (const week of this.weekArray()) {
            if (this.fullDayMonth == undefined) {
                this.fullDayMonth = [];
            }

            this.fullDayMonth.push([]);
            for (let day = 1; day <= 7; day++) {
                this.fullDayMonth[week].push([]);
                if (this.firstDayIsInitiate && !this.lastDayIsPassed) {
                    this.fullDayMonth[week][day] = this.countDay++;
                    if (this.countDay - 1 == this.getNumberOfDaysInMonth()) {
                        this.lastDayIsPassed = true;
                    }
                }
                else if (this.lastDayIsPassed) {
                    this.fullDayMonth[week][day] = '';
                }
                else {
                    var tempFirstDayOfMonth = this.getFirstDayOfMonth();
                    if (tempFirstDayOfMonth == day || (day == 7 && tempFirstDayOfMonth == 0)) {
                        this.fullDayMonth[week][day] = this.countDay++;
                        this.firstDayIsInitiate = true;
                    }
                    else {
                        this.fullDayMonth[week][day] = '';
                    }
                }
            }
        }
    }

    public weeksCount(date: Date): Number {
        const year = date.getFullYear();
        const month_number = date.getMonth() + 1;
        const firstOfMonth = new Date(year, month_number - 1, 0);
        const lastOfMonth = new Date(year, month_number, 0);

        const used = firstOfMonth.getDay() + lastOfMonth.getDate();

        return Math.ceil(used / 7);
    }

    public weekArray(): Array<any> {
        const size = this.weeksCount(this.calendarDate);
        const ar = [];
        for (let n = 0; n < size; n++) {
            ar.push(n);
        }
        return ar;
    }

    public setYear(i: number): void {
        this.calendarDate.setFullYear(+i);
        this.setFullDayMonth();
    }

    public setMonth(i: number): void {
        this.calendarDate.setMonth(+i);
        this.setFullDayMonth();
    }

    public changeYear(i: number): void {
        this.calendarDate.setFullYear(this.calendarDate.getFullYear() + i);
        this.setFullDayMonth();
    }
    public changeMonth(i: number): void {
        this.calendarDate.setMonth(this.calendarDate.getMonth() + i);
        this.setFullDayMonth();
    }

    public getFirstDayOfMonth(): Number {
        return new Date(this.calendarDate.getFullYear(), this.calendarDate.getMonth(), 1).getDay();
    }
    public getNumberOfDaysInMonth(): Number {
        return new Date(this.calendarDate.getFullYear(), this.calendarDate.getMonth() + 1, 0).getDate();
    }

    public setDay(): void {

    }
    public isDateSelected(day: number): boolean {
        if (this.selectedDate != undefined && this.selectedDate != null ) {
            if (this.calendarDate.getFullYear() == this.selectedDate.getFullYear() && this.calendarDate.getMonth() == this.selectedDate.getMonth() && day == this.selectedDate.getDate()) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    }

    public selectDate(day: number): void {
        if (this.selectedDate == null) {
            this.selectedDate = new Date();
        }
        this.selectedDate.setFullYear(this.calendarDate.getFullYear());
        this.selectedDate.setMonth(this.calendarDate.getMonth());
        this.selectedDate.setDate(day);
        this.modelSelectedDate = this.setModel();
        this.selectedDateChange.emit(this.selectedDate);
    }

    public changeTextDate(value: any): void {
        if (value != null && value != ''){
            if (this.selectedDate == null) {
                this.selectedDate = new Date();
            }
           // Logger.log("this.selectedDate");
            // Logger.log(this.selectedDate);
            // Logger.log("this.value");
            // Logger.log(value);
            let splitDate = value.split('/');
            // Logger.log(splitDate);
            if (splitDate.length == 1)
                splitDate = value.split('-');

            const day = splitDate[0];
            // Logger.log("this.day");
            // Logger.log(day);
            const month = splitDate[1];
            // Logger.log("this.month");
            // Logger.log(month);
            const year = splitDate[2];
            // Logger.log("this.year");
            // Logger.log(year);
            const date = new Date();
            date.setFullYear(year, month - 1, day);
            if ((date.getFullYear() == year) && (date.getMonth() == month - 1) && (date.getDate() == day) && year > 1001 && year < 2091) {
                this.selectedDate = new Date(year, month - 1, day);
                this.calendarDate = new Date(year, month - 1, day);
                this.selectedDateChange.emit(this.selectedDate);
            }
            else {
                this.modelSelectedDate = this.setModel();
                this.selectedDateChange.emit(this.selectedDate);
            }
            this.setFullDayMonth();
        }
    }

    public getString(value: any, type: any = 'day'): string {
        if (type == 'month') {
            value += 1;
        }
        let s: string;
        if (value < 10) {
            s = 0 + value.toString();
        }
        else {
            s = value.toString();
        }
        if (s == '0') {
            s = '';
        }
        return s;
    }

    // public today(): void {
    //     this.selectedDate = new Date();
    //     this.calendarDate = new Date();
    //     this.modelSelectedDate = this.setModel();
    //     this.setFullDayMonth();
    //     this.selectedDateChange.emit(this.selectedDate);
    // }

    public setModel(): string {
        return this.getString(this.selectedDate?.getDate(), 'day') + '/' + this.getString(this.selectedDate?.getMonth(), 'month') + '/' + this.selectedDate?.getFullYear();
    }

    public clear(): void {
        this.selectedDate = null;
        this.modelSelectedDate = '';
    }

    public getCurrentMonth(): number {
       return this.calendarDate.getMonth();
    }

    public getCurrentYear(): number {
        return this.calendarDate.getFullYear();
    }

}
