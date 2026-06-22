import { Component } from '@angular/core';

@Component({
  selector: 'app-corner-card',
  imports: [],
  template: `
    <div class="fixed bottom-6 left-6 z-50 w-40 md:w-50">
  <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300">
    <!-- Card Header -->
    <div class="p-4 bg-blue-600 dark:bg-blue-700 text-white flex justify-between items-center">
      <h3 class="font-bold text-l">Admin account</h3>
    </div>

    <!-- Card Body -->
    <div class="p-4 text-slate-700 dark:text-slate-300 text-sm">
      <p>test1@google.com</p>
      <p>Abc123</p>
    </div>
  </div>
</div>
  `,
})
export class CornerCard { }
