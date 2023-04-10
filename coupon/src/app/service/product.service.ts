import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product_list } from '../obj/product-list';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private apiUrl = 'http://test.lapson.vn/api/product/GetListProduct';

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

