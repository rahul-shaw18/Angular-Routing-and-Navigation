import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-error",
  template: `
    <h1>404: Page Not Found!</h1>
    <p>
      "The Page you are looking for cannot be found or you do not have access to
      that page"
    </p>
  `,
  styles: [
    "h1{color:red;text-align:center;margin:100px;font-size:70px} p{color:black;text-align:center;margin:100px;font-size:25px}",
  ],
})
export class ErrorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
