import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { html, css } from 'lit';
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class PartyUI extends DDD {

  static get tag() {
    return 'haxcms-party-ui';
  }

  constructor() {
    super();
    this.userArray = [];
    this.user = null;

  }

  static get styles() {
    return css`
      
      :host {
        display: block;
        padding: 16px;
      }

      .ui-container {
        text-align: center;
        background-color: var(--ddd-theme-default-beaver70);
        padding: var(--ddd-spacing-5);
        margin: var(--ddd-spacing-2) var(--ddd-spacing-0);
        border: 2px solid black;
        place-content: center;
      }

      .userbtn {
        background-color: var(--ddd-theme-default-opportunityGreen);
        font-size: 16px;
        cursor: pointer;
        border: var(--ddd-border-xs);
        border-color: var(--ddd-theme-default-potentialMidnight);
      }

      .userbtn:focus,
      .userbtn:hover {
        background-color: var(--ddd-theme-default-potential50);
      }

      .char-container {
        position: relative;
        padding: 16px;
      }

      .user-list {
        display: inline-flex;
        flex-wrap: wrap;
        border: var(--ddd-border-sm);
        border-color: var(--ddd-theme-default-potentialMidnight);
        border-radius: 20px;
        background-color: var(--ddd-theme-default-creekMaxLight);
        margin: var(--ddd-spacing-4);
        text-align: center;
        place-content: center;
        padding: var(--ddd-spacing-3);
      }

      .userName {
        color: var(--ddd-theme-default-original87Pink);
        width: 100%;
        margin: var(--ddd-spacing-2);
      }

      .delbtn {
        background-color: salmon;
        font-size: 16px;
        width: 50%;
        box-shadow: 10px;
        cursor: pointer;
        border: var(--ddd-border-xs);
        border-color: var(--ddd-theme-default-potentialMidnight);
        padding: var(--ddd-theme-spacing-4);
      }

      .delbtn:focus,
      .delbtn:hover {
        background-color: var(--ddd-theme-default-potential50);
      }


      `
    }

  render() {
    return html`
    <confetti-container id="confetti">
      <div class="ui-container">
        <div class="btnuserwrapper">
          <input id="user-input" type="text" placeholder="Enter Username Here" value="${this.user}" @input="${this.updateUser}" @keypress="${this.userInput}">
          <button class="userbtn" @click="${this.addUser}">Add User</button>
        </div>
        <div class="char-container">
          ${this.userArray.map((item) => html`
          <div class="user-list">
            <rpg-character seed="${item.name}"></rpg-character>
            <p class="userName">${item.name}</p>
            <button class="delbtn" data-user-id="${item.id}" @click="${this.delUser}">Delete User</button>
          </div>
          `)}
        </div>
        <button class="savebtn" @click="${this.saveUser}">Save</button>
      </div>
    </confetti-container>
    `;
  }


  userInput(username) {
    const inputValue = username.target.value;
    const scrubVal = inputValue.replace(/[^a-z0-9]/g, "");
    username.target.value = scrubVal.slice(0, 10);
  }

  updateUser(username) {
    this.user = username.target.value;
  }

  addUser(e) {
    const randomNumber = globalThis.crypto.getRandomValues(new Uint32Array(1))[0];

    const item = {
      id: randomNumber,
      name: this.user,
    }

    console.log(item);
    this.userArray.push(item);
    this.requestUpdate();
    console.log(this.userArray);
  }

  delUser(e) {
    this.userArray = this.userArray.filter(item => item.id !== parseInt(e.target.getAttribute('data-user-id')));
  }

  
/** updated(changedProperties) {
    if (changedProperties.has('')) {
      
      // do your testing of the value and make it rain by calling makeItRain
      if () {
        this.makeItRain();
      }
    }
  }*/
  
  
  makeItRain() {
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        setTimeout(() => {
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }


  static get properties() {
    return {
      userArray: { type: Array },
      user: { type: String },

    };
  }
}

globalThis.customElements.define(PartyUI.tag, PartyUI);


