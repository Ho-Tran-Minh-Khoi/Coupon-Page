import { publishFacade } from '@angular/compiler';
import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'app-noti-config',
	templateUrl: './noti-config.component.html',
	styleUrls: ['./noti-config.component.scss']
})
export class NotiConfigComponent {
	public config = ['SMS ', 'Mobile App', 'Giỏ hàng']

	public btnActive = 0

	public value: Date = new Date();
	public value1: Date = new Date(2023, 4, 14, 23, 30);


	public disabledDates = (date: Date): boolean => {
		if (date.getDate() == this.value.getDate() && date.getMonth() == this.value.getMonth() && date.getFullYear() == this.value.getFullYear()) return false
		if (date < this.value) return true
		return false
	};

	public isNone(date: Date, strMonth: string) {
		var m = Number(strMonth.split(' ')[1])
		if (m == 12) return date.getMonth() == 0 ? 'd-none' : '';
		return date.getMonth() == m ? 'd-none' : '';
	}

	public cbox = false

	public ngAfterViewInit() {
		var that = this
		var dtpkBtn = $('#kdatetimepicker button')
		dtpkBtn.click(function () {
			$('.k-calendar-classic').append($('.timePicker'))
			var dt = $('.k-calendar-tr .k-calendar-td')
			dt.click(function () {
				var titleTime = this.getAttribute('title')
				if (titleTime != undefined) {
					var arrTime = titleTime.split(', ')
					var yyyy = Number(arrTime[2])
					var mm = Number(arrTime[1].replace('tháng', ' , ').split(',')[1])
					var dd = Number(arrTime[1].replace('tháng', ' , ').split(',')[0])
					if (that.cbox) {
						that.value1 = new Date(yyyy, mm - 1, dd)
					} else {
						that.value1 = new Date(yyyy, mm - 1, dd, new Date().getHours(), new Date().getMinutes())
					}
				}
			})
		})
	}

	public allDateClick(): void {
		var that = this
		var td = $('.k-calendar-tr .k-calendar-td.k-selected')
		var titleTime = td.attr('title')
		if (titleTime != undefined && !that.cbox) {
			var arrTime = titleTime.split(', ')
			var yyyy = Number(arrTime[2])
			var mm = Number(arrTime[1].replace('tháng', ' , ').split(',')[1])
			var dd = Number(arrTime[1].replace('tháng', ' , ').split(',')[0])
			that.value1 = new Date(yyyy, mm - 1, dd)
		}
	}

	public onClose(): void {
		$('.temp').append($('.timePicker'))
	}

	public moa: Number = 0

	public changeMoa(value: Number): void {
		this.moa = value
	}

	public listItems: Array<string> = [
		"00 : 00", "00 : 30", "01 : 00", "01 : 30", "02 : 00", "02 : 30", "03 : 00", "03 : 30", "04 : 00",
		"04 : 30", "05 : 00", "05 : 30", "06 : 00", "06 : 30", "07 : 00", "07 : 30", "08 : 00",
		"08 : 30", "09 : 00", "09 : 30", "10 : 00", "10 : 30", "11 : 00", "11 : 30"];

	public valueChange(value: any): void {
		var arrVal = value.split(' : ')
		var hh = Number(arrVal[0])
		var mi = Number(arrVal[1])
		var that = this
		var td = $('.k-calendar-tr .k-calendar-td.k-selected')
		var titleTime = td.attr('title')
		if (this.moa == 1) hh += 12
		if (titleTime != undefined && !that.cbox) {
			var arrTime = titleTime.split(', ')
			var yyyy = Number(arrTime[2])
			var mm = Number(arrTime[1].replace('tháng', ' , ').split(',')[1])
			var dd = Number(arrTime[1].replace('tháng', ' , ').split(',')[0])
			that.value1 = new Date(yyyy, mm - 1, dd, hh, mi)
		}
	}

	public titleLB = 'hh : mm'

	public buttons = [{ text: "AM", selected: true }, { text: "PM" }]
}
