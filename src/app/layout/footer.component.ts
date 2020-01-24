import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <!-- Footer -->
<footer class="footer font-small pt-4 mt-2" style="margin-left:+250px">
  <div class="text-center py-3">© 2020 Copyright:
    <a> ETM</a>
  </div>
</footer>

  `,
  styles: ["position: relative; background-color: #263238; line-height: 32px; font-size: 16px; bottom:0; right:0; width:1500px"]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
