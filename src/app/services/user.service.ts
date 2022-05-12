import {Injectable} from '@angular/core';
import {User} from "../models/user";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Cela créer un observable qui permet de transférer les données en temps réel entre les composants (principe d'émission ou/et de réception)
  userSub: BehaviorSubject<User> = new BehaviorSubject<User>({} as User);

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
    //Permet d'envoyer en temps réel l'user que l'on a ajouté
    this.userSub.next(user);
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users") as string)
  }
}
