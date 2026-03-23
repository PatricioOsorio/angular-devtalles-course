import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private notyf = new Notyf({
    duration: 300000,
    position: {
      x: 'center',
      y: 'top',
    },
    dismissible: true,
  });

  succes(message: string) {
    this.notyf.success(message);
  }

  error(message: string) {
    this.notyf.error(message);
  }

  info(message: string) {
    this.notyf.open({
      type: 'info',
      message,
    });
  }
}
