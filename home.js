import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';


new MDCRipple(document.querySelector('.submit'));
const shippingForm = document.querySelector('#HWAC-tag-form');
shippingForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  alert('Success!');
});

new MDCRipple(document.querySelector('.mdc-button'));

const textFieldElements = [].slice.call(document.querySelectorAll('.mdc-text-field'));
textFieldElements.forEach((textFieldEl) => {
  new MDCTextField(textFieldEl);
});
