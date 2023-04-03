import { Component } from '@angular/core';
import { CheckableSettings } from "@progress/kendo-angular-treeview";
import { of, Observable } from "rxjs";

@Component({
	selector: 'app-conditions-apply',
	templateUrl: './conditons-apply.component.html',
	styleUrls: ['./conditons-apply.component.scss']
})
export class ConditonsApplyComponent {
	public checkedKeys: any[] = ["2"];

	public enableCheck = true;
	public checkChildren = true;
	public checkDisabledChildren = false;
	public checkParents = true;
	public checkOnClick = false;
	public checkMode: any = "multiple";
	public selectionMode: any = "single";

	public get checkableSettings(): CheckableSettings {
		return {
			checkChildren: this.checkChildren,
			checkDisabledChildren: this.checkDisabledChildren,
			checkParents: this.checkParents,
			enabled: this.enableCheck,
			mode: this.checkMode,
			checkOnClick: this.checkOnClick,
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
}
