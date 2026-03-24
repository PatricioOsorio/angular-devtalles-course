// import { Injectable } from '@angular/core';
// import { Notyf } from 'notyf';

// @Injectable({
//   providedIn: 'root',
// })
// export class ToastService {
//   private readonly notyf = new Notyf({
//     duration: 3000,
//     dismissible: true,
//     position: {
//       x: 'center',
//       y: 'top',
//     },
//     types: [
//       {
//         type: 'success',
//         className: 'bg-green-500 text-white',
//         icon: false,
//       },
//       {
//         type: 'error',
//         className: 'bg-red-500 text-white',
//         icon: false,
//       },
//       {
//         type: 'info',
//         className: 'bg-blue-500 text-white',
//         icon: false,
//       },
//       {
//         type: 'warning',
//         className: 'bg-yellow-400 text-black',
//         icon: false,
//       },
//     ],
//   });

//   success(message: string) {
//     this.notyf.success(message);
//   }

//   error(message: string) {
//     this.notyf.error(message);
//   }

//   info(message: string) {
//     this.notyf.open({
//       type: 'info',
//       message,
//     });
//   }

//   warning(message: string) {
//     this.notyf.open({
//       type: 'warning',
//       message,
//     });
//   }

//   dismissAll() {
//     this.notyf.dismissAll();
//   }
// }

import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly notyf = new Notyf({
    duration: 3600,
    dismissible: true,
    ripple: false,
    position: {
      x: 'right',
      y: 'top',
    },
    types: [
      {
        type: 'success',
        className: 'app-toast app-toast--success',
        icon: false,
      },
      {
        type: 'error',
        className: 'app-toast app-toast--error',
        icon: false,
      },
      {
        type: 'info',
        className: 'app-toast app-toast--info',
        icon: false,
      },
      {
        type: 'warning',
        className: 'app-toast app-toast--warning',
        icon: false,
      },
    ],
  });

  success(message: string): void {
    this.notyf.open({
      type: 'success',
      message,
    });
  }

  error(message: string): void {
    this.notyf.open({
      type: 'error',
      message,
    });
  }

  info(message: string): void {
    this.notyf.open({
      type: 'info',
      message,
    });
  }

  warning(message: string): void {
    this.notyf.open({
      type: 'warning',
      message,
    });
  }

  dismissAll(): void {
    this.notyf.dismissAll();
  }
}
