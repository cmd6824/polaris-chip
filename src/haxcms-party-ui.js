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
    this.user = "";

  }

  static get styles() {
    return css`
      
      :host {
        display: block;
        padding: 16px;
      }

      .ui-container {
        text-align: center;
        background-color: var(--ddd-theme-default-potential75);
        padding: var(--ddd-spacing-5);
        margin: var(--ddd-spacing-2) var(--ddd-spacing-0);
        border: 2px solid black;
        place-content: center;
      }

      .userbtn {
        background-color: var(--ddd-theme-default-skyBlue)
      }

      .char-container {
        position: relative;
        padding: 16px;
      }

      .del-btn {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
      }


      `
    }

  render() {
    return html`
    <div class="ui-container">
      <div class="btnuserwrapper">
        <input id="user-input" type="text" placeholder="Enter Username Here">
        <button class="userbtn" @click="${this.addUser}">Add User</button>
      </div>
      <div class="char-container">
        ${this.userArray.map((item) => html`
        <rpg-character seed="${item}"></rpg-character>

        `)}
      
      </div>
    </div>

    
    `;
  }

  createCharacter(username){

   
  }

  userInput(username) {
    this.user = username.target.value;
  }

  addUser() {
    const item = document.getElementById("user-input");
    this.userArray.push(item);
    console.log(this.userArray);
    this.requestUpdate();
  }

  delUser(username) {
    
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


