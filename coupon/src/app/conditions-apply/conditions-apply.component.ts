import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckableSettings } from '@progress/kendo-angular-treeview';
import { Observable, of } from 'rxjs';

@Component({
	selector: 'app-conditions-apply',
	templateUrl: './conditions-apply.component.html',
	styleUrls: ['./conditions-apply.component.scss']
})
export class ConditionsApplyComponent {
	public checkChildren = true;
	public checkDisabledChildren = false;
	public checkParents = true;

	public get checkableSettings(): CheckableSettings {
		return {
			checkChildren: this.checkChildren,
			checkDisabledChildren: this.checkDisabledChildren,
			checkParents: this.checkParents,
		};
	}

	public data: any[] = [
		{ text: "Website hachihachi.com.vn" },
		{
			text: "Tất cả cửa hàng",
			items: [
				{ text: "CH Hachi Hachi ĐVH" },
				{ text: "CH Hachi Hachi QT" },
				{ text: "CH Hachi Hachi NVT" },
				{ text: "CH Hachi Hachi PMH" },
				{ text: "CH Hachi Hachi Pastuer" },
				{ text: "CH Hachi Hachi CMT8" },
				{ text: "CH Hachi Hachi PVT" }
			],
		},
	];

	public children = (dataItem: any): Observable<any[]> => of(dataItem.items);
	public hasChildren = (dataItem: any): boolean => !!dataItem.items;

	public checkType = true

	public typeCoupon = (typeB: boolean): void => {
		this.checkType = typeB
	};
}
