import { Component } from '@angular/core';

@Component({
	selector: 'app-noti-config',
	templateUrl: './noti-config.component.html',
	styleUrls: ['./noti-config.component.scss']
})
export class NotiConfigComponent {
	public config = ['SMS ', 'Mobile App', 'Giỏ hàng']

	public btnActive = 0

	public value: Date = new Date();

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
}
