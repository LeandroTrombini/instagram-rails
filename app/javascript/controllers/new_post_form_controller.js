import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="new-post-form"
export default class extends Controller {  
  static targets = [ "selectFileButton", "photoFile" ];

  connect() {
    // this.photoFileTarget.addEventListener('change', () => {
    //   this.element.submit();
    // })
  }
  
  selectFile(e) {
    console.log('selectFile called');
    e.preventDefault();
    this.photoFileTarget.click();
  };

  submitForm(e) {
    console.log('submitForm called');
    this.element.submit();
  }
}
console.log('NewPostFormController loaded');