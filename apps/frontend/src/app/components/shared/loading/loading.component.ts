import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <figure class="flex-1 flex justify-center items-center h-96">
      <div class="spinner"></div>
    </figure>
  `,
  styles: [
    `
      .spinner {
        width: 3rem;
        height: 3rem;
        border: 0.4rem solid transparent;
        border-top-color: #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class LoadingComponent {}
