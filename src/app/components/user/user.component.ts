import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  users: User[] = []
  user: User = {id: 0, name: ""}

  constructor(private userService: UserService) {

  }

  //A la création de mon components on fait appel à la fonction getUsers
  ngOnInit(): void {
    //on écoute et on attend une réception de l'observable userSub, à chaque fois qu'un élément est reçu on fait appel à getUser()
    this.userService.userSub.subscribe((user) => {
      this.getUsers()
    })
  }



  //récupère l'ensemble des users et on l'ajoute dans le tableau users
  getUsers() {
    this.users = this.userService.getUsers();
  }

  ngOnDestroy(): void {
    // A la destruction du component l'écoute du canal est interrompu
    this.userService.userSub.unsubscribe()
  }
}
