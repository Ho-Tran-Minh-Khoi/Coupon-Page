import { Component } from '@angular/core';
import { DrawerItem, DrawerItemExpandedFn, DrawerSelectEvent, } from '@progress/kendo-angular-layout';

@Component({
	selector: 'app-side-bar',
	templateUrl: './side-bar.component.html',
	styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
	public items: Array<DrawerItem> = [{ text: "KHUYẾN MÃI", icon: "k-i-percent", id: 0 },
	{ text: "NỘI DUNG WEBSITE", icon: "k-i-image-map-editor", id: 1 },
	{ text: "QUẢN LÝ BANNER", icon: "k-i-aggregate-fields", id: 2 },
	{ text: "CHÍNH SÁCH", icon: "k-i-file-txt", id: 3 },
	{ text: "Coupon", icon: "k-i-js", id: 4, parentId: 3 },
	{ text: "Sự kiện", icon: "k-i-star-outline", id: 5, parentId: 3 },
	{ text: "Khách hàng thân thiết", icon: "k-i-myspace-box", id: 6, parentId: 3 },
	{ text: "Flash sale", icon: "k-i-parameter-date-time", id: 7, parentId: 3 },
	{ text: "BÁO CÁO EXCEL", icon: "k-i-excel", id: 8 }]

	public expandedIndices = [3];

	public isItemExpanded: DrawerItemExpandedFn = (item): boolean => {
		return this.expandedIndices.indexOf(item.id) >= 0;
	};

	public onSelect(ev: DrawerSelectEvent): void {
		const current = ev.item.id;
		if (this.expandedIndices.indexOf(current) >= 0) {
			this.expandedIndices = this.expandedIndices.filter(
				(id) => id !== current
			);
		} else {
			this.expandedIndices.push(current);
		}
	}
}
