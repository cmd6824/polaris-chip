import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class CounterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }

  constructor() {
    super();
    this.counter = "0";
    this.min = "0";
    this.max = "10";
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 12px;
      }

      :host([counter="18"]) .counterapp {
        color: orange;
      }

      :host([counter="21"]) .counterapp {
        color: green;
      }
      
      .counterapp {
        display: block;
        margin: 0 auto;
        background-color: white;
        border: 2px solid black;
        max-width: 50px;
        text-align: center;
        padding: 12px;
        font-size: 30px;
      }

      .btnadd {
        display: inline;
        margin: 0 auto;
      }

      .btnsubtract {
        display: inline;
        margin: 0 auto;
      }
      `
    }



  render() {
    return html`
    <div class="counterapp">
      <span>${this.counter}</span>
    </div>
    <div class="button-wrap">
      <button class="btnadd">+</button>
      <button class="btnsubtract">-</button>
    </div>

    `;
  }

  static get properties() {
    return {
      counter: { type: Number, relfect: true },
      min: { type: String },
      max: { type: String },
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);


