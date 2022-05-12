import {Injectable} from '@angular/core';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  addUser(user: User) {
    if (localStorage.getItem("users")) {
      // On sauvegarde le tableau d'utilisateurs déjà existant dans localUsers
      let localUsers = JSON.parse(localStorage.getItem("users") as string)
      // On ajoute dans localUsers le nouvel Utilisateur
      localUsers.push(user)
      // On ajoute le tableau contenant localUsers et user dans le localStorage par le biais de la clé users
      localStorage.setItem("users", JSON.stringify(localUsers));
    } else {
      //Si le localStorage n'a pas la clé users on envoi le user dans ce dernier avec la clé users
      localStorage.setItem("users", JSON.stringify([user]));
    }


  }
}
