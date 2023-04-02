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
}
