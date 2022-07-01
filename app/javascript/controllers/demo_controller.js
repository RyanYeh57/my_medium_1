// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "content" ]

  connect() {
  }

  pushme() {
    let content = this.contentTarget.value
    console.log(content)
  }

  pushit() {
    let content = this.contentTarget.value
    console.log(content)
  }
}
