import { Component } from '@angular/core';

@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
	items = ['cấu hình ', 'mua hàng', 'kho hàng', 'điều phối', 'marketing', 'e-commerce', 'kinh doanh', 'nhân sự', 'báo cáo']
}
