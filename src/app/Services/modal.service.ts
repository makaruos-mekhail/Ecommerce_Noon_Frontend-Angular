import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private showModalSource = new Subject<boolean>();
  showModal$ = this.showModalSource.asObservable();

  constructor() { }

  // Method to show the modal
  show() {
    this.showModalSource.next(true);
  }

  // Method to hide the modal
  hide() {
    this.showModalSource.next(false);
  }

}
