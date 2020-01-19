import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <!-- Footer -->
<footer class="footer font-small pt-4 mt-2">
  <div class="text-center py-3">© 2020 Copyright:
    <a href="#"> ETM</a>
  </div>
</footer>

  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
