import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private readonly snack: MatSnackBar) {}

  private showMessage(type: 'success' | 'error', text: string): void {
    this.snack.open(
      type === 'success' ? text :`Oops, algo deu errado! ${text}`,
      'Close',
      {
        duration: 5000,
        panelClass: type === 'success' ? 'toast-success' : 'toast-error',
        horizontalPosition: 'right',
        verticalPosition: 'top',
      },
    );
  }

  success(text: string): void {
    this.showMessage('success', text);
  }

  error(text: string): void {
    this.showMessage('error', text);
  }
}
