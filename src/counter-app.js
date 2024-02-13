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
    
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 20px;
      }`
    }



  render() {
    return html`
    <div class="counterapp">
        <counter-app counter="16" min="10" max="25"></counter-app>
    </div>

    `;
  }

  static get properties() {
    return {
      
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);


