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
    this.opened = false;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        padding: 12px;
      }

      :host[sticky] {
        position: sticky;
        top: 0;
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

      .expand-alert {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

      }


      .date {
        line-height: 1px;
      }
      
      .alert-msg {
        padding-left: 4px;
      }

      `
    }

    toggleAlert() {
      this.opened = !this.opened;
    }

  render() {
    return html`
    <div class="alert-container" ?sticky='${this.sticky}'>
      <div class="toggle-btn" @click='${this.toggleAlert}'>
        <button class="expand-alert">
          
        </button>
      </div>
        <div class="alert-msg">
          <h3>${this.message}</h3>
        </div>
        <div class="date">
            <p>${this.date}</p>
        </div>
    </div>
    `;

  }

 

  static get properties() {
    return {
      opened: { type: Boolean, reflect: true },
      date: { type: String },
      message: { type: String },
      sticky: { type: Boolean, reflect: true },

    };
  }
}

globalThis.customElements.define(CampusAlert.tag, CampusAlert);


