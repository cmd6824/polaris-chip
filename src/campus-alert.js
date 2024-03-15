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
    this.opened = true;
    this.alerttype = "notice";
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        padding: 12px;
      }

      :host([sticky]) {
        position: sticky;
        top: 0;
      }

      :host([alerttype="warning"]) .alert-container {
        background-color: yellow;
      }

      :host([alerttype="alert"]) .alert-container {
        background-color: red;
      }

      :host([alerttype="notice"]) .alert-container {
        background-color: orange;
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
        width: 100%;
      }

      .date {
        line-height: 1px;
      }
      
      .alert-msg {
        max-height: 0;
        transition: max-height 0.2s ease-out;
        padding-left: 4px;
      }
      
      .hidden {
        display: none;
      }

      `
    }

    toggleAlert() {
      this.opened = !this.opened;
      localStorage.setItem("campus-alert-opened-state", this.opened);
    }

    

  render() {
    return html`
    <div class="alert-container">
        <button id="expand-alert" @click='${this.openAlert}'>open</button>
          <div id="alert-msg" class="hidden">
            <p>${this.message}</p>
          </div>
          <div class="date">
            <p>${this.date}</p>
          </div>
    </div>
    `;

  }

  openAlert() {
    const toggleButton = document.getElementById('expand-alert');
    const textContainer = document.getElementById('alert-msg');

    toggleButton.addEventListener('click', function() {
      if (textContainer.classList.contains('hidden')) {
        textContainer.classList.remove('hidden');
        toggleButton.textContent = 'Hide Text';
      } else {
        textContainer.classList.add('hidden');
        toggleButton.textContent = 'Show Text';
      }
    });
  }



 

  static get properties() {
    return {
      opened: { type: Boolean, reflect: true },
      date: { type: String },
      message: { type: String },
      sticky: { type: Boolean, reflect: true },
      alerttype: { type: String },

    };
  }
}

globalThis.customElements.define(CampusAlert.tag, CampusAlert);


