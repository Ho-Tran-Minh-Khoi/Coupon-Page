import { Component } from '@angular/core';
import { BreadCrumbItem } from "@progress/kendo-angular-navigation";

const defaultItems: BreadCrumbItem[] = [{ text: "CHÍNH SÁCH", }, { text: "COUPON" }, { text: "CHI TIẾT ĐỢT PHÁT HÀNH" }];

@Component({
	selector: 'app-function-bar',
	templateUrl: './function-bar.component.html',
	styleUrls: ['./function-bar.component.scss']
})
export class FunctionBarComponent {
	public items: BreadCrumbItem[] = [...defaultItems];
}
