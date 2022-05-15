import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {UserService} from "../../services/user.service";
import {Task} from "../../models/task";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  category: Category = {id: 0, name: ''};
  @Output() idCategory: EventEmitter<number> = new EventEmitter();
  idUser: number = 0;

  tasks: Task[] = [];


  constructor(private categoryService: CategoryService, private userService: UserService, private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.categoryService.categorySub.subscribe((category) => {
      this.getCategories()
    })
    this.userService.idUser.subscribe((id) => {
        this.idUser = id;
        let cat = this.categoryService.getCategories()
        if (this.idUser > 0)
          this.category.id = 0;
          this.categories = []
        this.tasks = this.taskService.getTasksByIdUser(this.idUser)
        for (let i = 0; i < this.tasks.length; i++) {
          for (let j = 0; j < cat.length; j++) {
            if (
              this.tasks[i].idCategory == cat[j].id &&
              this.tasks[i].idUser == this.idUser &&
              this.categories.indexOf(cat[j]) === -1
            ) {
              this.categories.push(cat[j]);
            }
          }

        }

      }
    )

  }


  getCategories() {
    this.categories = this.categoryService.getCategories()
  }

  onCategoryChanges(category: Category) {
    this.idCategory.emit(category.id)
  }

}
