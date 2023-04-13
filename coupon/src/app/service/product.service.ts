import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product_list } from '../obj/product-list';
import { Observable } from 'rxjs';
import { DataSourceRequestState, toDataSourceRequest } from '@progress/kendo-data-query';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private apiUrl = 'http://test.lapson.vn/api/product/GetListProduct';

	// gridState: DataSourceRequestState = {
	// 	skip: 0,
	// 	take: 50,
	// 	filter: {
	// 		logic: 'and',
	// 		filters: [{
	// 			field: 'barcode', operator: 'contains', value: '123'
	// 		}]
	// 	},
	// }

	constructor(private http: HttpClient) { }

	public getListProduct(page: Number, pageSize: Number) {


		return new Observable<any>(obs => {
			this.http.post<product_list>(this.apiUrl, {
				page: page,
				pageSize: pageSize
			}).subscribe((data) => {
				console.log(data)
				obs.next(data)
				obs.complete()
			});
		})
	}
}

