import { LitElement, html, css } from 'lit';

export class CampusAlert extends LitElement {

  static get tag() {
    return 'campus-alert';
  }

  constructor() {
    super();
    
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 12px;
      }

      

      `
    }

  render() {
    return html`
    <div class="alert-container">
        <div class="date">
            
        </div>
        <div class="alert-msg">

        </div>
    </div>
    `;

  }

 

  static get properties() {
    return {
      
    };
  }
}

globalThis.customElements.define(CampusAlert.tag, CampusAlert);


