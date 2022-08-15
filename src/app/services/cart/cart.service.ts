import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "src/app/products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(item: Product) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  removeItem(item: Product) {
    this.items = this.items.filter((currentItem) => currentItem.id !== item.id);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "../../assets/shipping.json"
    );
  }
}
