import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { PageChangeEvent } from '@progress/kendo-angular-pager';
import { product_list } from '../obj/product-list';

@Component({
	selector: 'app-detail-program',
	templateUrl: './detail-program.component.html',
	styleUrls: ['./detail-program.component.scss']
})
export class DetailProgramComponent {

	constructor(private productService: ProductService) { }

	public gridData: any
	public contentId = 'content-1';
	public pageSize = 20;
	public sizes = [10, 20, 50];
	public total: any
	public skip = 0;

	public onPageChange(e: PageChangeEvent): void {
		this.skip = e.skip;
		this.pageSize = e.take;
		this.pageData((this.skip / this.pageSize) + 1, this.pageSize);
	}

	private pageData(page: number, pageSize: number) {
		this.productService.getListProduct(page, pageSize).subscribe(data => {
			this.gridData = data.ObjectReturn.Data
			this.total = data.ObjectReturn.Total
		})
	}

	public ngOnInit() {
		this.pageData(1, 10)
	}
}
