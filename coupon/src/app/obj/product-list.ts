import { Product } from "./product"

export interface product_list {
        "StatusCode": number,
        "ErrorString": number,
        "ObjectReturn": {
                "Data": Product[]
                "Total": number,
                "AggregateResults": number,
                "Errors": number
        }
}