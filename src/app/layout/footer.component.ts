import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <!-- Footer -->
<footer class="page-footer sticky-bottom font-small special-color-dark pt-4 mt-2 border border-primary">
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
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
