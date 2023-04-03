import { Component } from '@angular/core';

@Component({
	selector: 'app-coupon-info',
	templateUrl: './coupon-info.component.html',
	styleUrls: ['./coupon-info.component.scss']
})
export class CouponInfoComponent {
	public language = ['Tiếng Việt', '日本語', 'English']

	public btnActive = 0

	public change_language(language: number) {
		this.btnActive = language
		this.couponName = ''
		this.description = ''
		this.explain = ''
	}

	public arrLanguage = [['Tên coupon', 'Mô tả điều kiện áp dụng', 'Diễn giải'],
	['クーポン名', '適用条件の説明 ', '説明'],
	['Coupon name', 'Description of conditions apply', 'Explain']]

	public couponName = 'Giảm 100K'
	public description = 'Áp dụng cho đơn hàng có giá trị trên 600.00 đ'
	public explain = 'KMGBL22-Voucher lịch 100k HĐ 600k-NGÀY KÍNH LÃO-HSD 30/9/22'

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
