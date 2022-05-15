import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {CategoryService} from "../../../services/category.service";
import {FormGroup, FormBuilder} from "@angular/forms";
import {Output, EventEmitter} from '@angular/core';
import {Category} from "../../../models/category";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup = this.formBuilder.group({
    id: Math.floor(Math.random() * 1000),
    name: ''
  })
  isAdding: boolean = false
  @Output() idCategory: EventEmitter<number> = new EventEmitter();


  constructor(private categoryService: CategoryService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  addCategory() {
    this.categoryService.addCategory(this.categoryForm.value)

    this.categoryForm = this.formBuilder.group({
      id: Math.floor(Math.random() * 1000),
      name: ''
    })
  }

  categorySwitch(category: Category){
    this.idCategory.emit(category.id)
  }
}

