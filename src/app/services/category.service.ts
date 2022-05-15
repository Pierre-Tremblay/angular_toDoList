import {Injectable} from '@angular/core';
import {Category} from "../models/category";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
categorySub: BehaviorSubject<Category> = new BehaviorSubject<Category>({}as Category)
  constructor() {
  }

  addCategory(category: Category) {
    if (localStorage.getItem("categories")) {
      let localCategory = JSON.parse(localStorage.getItem("categories") as string)
      localCategory.push(category)
      localStorage.setItem("categories", JSON.stringify(localCategory))
    } else {
      localStorage.setItem("categories", JSON.stringify([category]))
    }
    this.categorySub.next(category)
  }

  getCategories() {
    return JSON.parse(localStorage.getItem("categories") as string)
  }

}
