import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user: User = {id: 0, name: ''};
  userForm: FormGroup = this.formBuilder.group({
    id: Math.floor(Math.random() * 1000),
    name: ''
  })

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  addUser() {
    // Par userService nous avons accès à l'ensemble des fonctions contenu dans user.service.ts
    this.userService.addUser(this.userForm.value);

    // On régénère le formulaire d'ajout d'un utilisateur en reconfigurant l'id et le name de l'user
    this.userForm = this.formBuilder.group({
      id: Math.floor(Math.random() * 1000),
      name: ''
    })

  }
}
