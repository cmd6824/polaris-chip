import { LitElement, html, css } from 'lit';

export class CampusAlert extends LitElement {

  static get tag() {
    return 'campus-alert';
  }

  constructor() {
    super();
    this.date = "01-01-2024"
    this.message = "Default message alert"
    this.sticky = false;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        padding: 12px;
      }

      .alert-container {
        background-color: orange;
        width: 100%;
        margin: 0 auto;
        border: 2px solid black;
        text-transform: capitalize;
        text-align: center;
        display: grid;
        place-content: center;
      }

      .sticky {
        position: sticky;
        top: 0;
      }

      .date {
        padding-left: 4px;
      }
      
      .alert-msg {
        padding-left: 4px;
      }

      `
    }

  render() {
    return html`
    <div class="alert-container">
        <div class="date">
            <p>${this.date}</p>
        </div>
        <div class="alert-msg">
          <p>${this.message}</p>
        </div>
    </div>
    `;

  }

 

  static get properties() {
    return {
      date: { type: String },
      message: { type: String },
      sticky: { type: Boolean },

    };
  }
}

globalThis.customElements.define(CampusAlert.tag, CampusAlert);


