import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-page',
  imports: [],
  template: `
    <section class="flex flex-col items-center gap-5">
      <img src="/assets/mascote.png" alt="mascote" width="300" height="300" />
      <h1 class="text-3xl font-black">Muito Obrigado!</h1>
      <p class="text-zinc-400 -mt-5">
        Sua confirmação é muito importante para nós!
      </p>
    </section>
  `,
})
export class ThankPageComponent {}
