import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }

  constructor() {
    super();
    this.counter = "5";
    this.min = "1";
    this.max = "10";
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 12px;
      }

      :host([counter="18"]) .counterapp {
        color: blue;
      }

      :host([counter="21"]) .counterapp {
        color: green;
      }


      .counterapp {
        display: block;
        margin: 0 auto;
        background-color: lightpink;
        border: 2px solid black;
        width: 100px;
        text-align: center;
        padding: 4px;
        font-size: 20px;
      }

      .btnadd,
      .btnsubtract {
        display: inline-block;
        margin: 0 auto;
        text-align: center;
        font-size: 20px;
        height: 30px;
        width: 30px;
      }

      .button-wrap {
        display: flex;
        justify-content: center;
        padding-top: 4px;
      }

      .btnadd:hover,
      .btnadd:focus-within {
        background-color: green;
      }

      .btnsubtract:hover,
      .btnsubtract:focus-within {
        background-color: red;
      }

      `
    }

  render() {
    return html`
    <confetti-container id="confetti">
    <div class="counterapp">
      <h1 class="counter">${this.counter}</h1>
    </div>
    <div class="button-wrap">
      <button class="btnadd" @click="${this.add}" ?disabled="${this.max === this.counter}">+</button>
      <button class="btnsubtract" @click="${this.subtract}" ?disabled="${this.min === this.counter}">-</button>
    </div>
    </confetti-container>
    `;
  }

  add() {
    if (this.counter < this.max && this.counter >= this.min) {
      this.counter++;
    }
  }

  subtract() {
    if (this.counter <= this.max && this.counter > this.min) {
      this.counter--;
    }
  }

  changeCountNum() {
    if (this.counter === this.max || this.counter === this.min) {
      this.style.color = 'red';
    }
    else {
      this.style.color = 'black';
    }
  }

  updated(changedProperties) {
    if (changedProperties.has('counter')) {
      this.changeCountNum();
      // do your testing of the value and make it rain by calling makeItRain
      if (this.counter == 21) {
        this.makeItRain();
      }
    }
  }
  
  makeItRain() {
    // this is called a dynamic import. It means it won't import the code for confetti until this method is called
    // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
    // will only run AFTER the code is imported and available to us
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        // This is a minor timing 'hack'. We know the code library above will import prior to this running
        // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
        // this "hack" ensures the element has had time to process in the DOM so that when we set popped
        // it's listening for changes so it can react
        setTimeout(() => {
          // forcibly set the poppped attribute on something with id confetti
          // while I've said in general NOT to do this, the confetti container element will reset this
          // after the animation runs so it's a simple way to generate the effect over and over again
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }


  static get properties() {
    return {
      counter: { type: Number, reflect: true },
      min: { type: Number, reflect: true },
      max: { type: Number, reflect: true },
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);


