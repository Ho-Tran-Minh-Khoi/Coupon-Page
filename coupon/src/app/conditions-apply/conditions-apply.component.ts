import { Component } from '@angular/core';

@Component({
	selector: 'app-conditions-apply',
	templateUrl: './conditions-apply.component.html',
	styleUrls: ['./conditions-apply.component.scss']
})
export class ConditionsApplyComponent {
	public language = ['Tiếng Việt', '日本語', 'English']

	public btnActive = 'Tiếng Việt'

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
