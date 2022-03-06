import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  users: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  constructor() {}

  addUser(user: string): void {
    const current = this.users.value;
    current.push(user);
    this.users.next(current);
  }
  getUsers(): string[] {
    return this.users.value;
  }
}
