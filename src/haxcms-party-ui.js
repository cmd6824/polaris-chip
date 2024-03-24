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

      .my-div {
        padding: var(--ddd-spacing-5);
        margin: var(--ddd-spacing-2) var(--ddd-spacing-0);
        color: var(--ddd-theme-default-keystoneYellow);
      }

      .ui-container {
        text-align: center;
        background-color: var(--ddd-theme-default-potential75);
        padding: 8px;
        margin: 0 auto;
        border: 2px solid black;
        place-content: center;
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
        <input class="user-input" type="text" placeholder="Enter Username Here">
        <button id="userbtn" @click="${this.addUser}">Add User</button>
      </div>
      <div class="char-container">
        ${this.userArray.map(element => this.createCharacter(element))}
      </div>
    </div>

    
    `;
  }

  createCharacter(name){

    return html`
        <rpg-character id="rpg" hat="random" seed= ${name} style= "height: 100px; width: 100px;"></rpg-character>
        <button id="del-btn" @click="${this.delUser}">Delete User</button>
    `;
  }

  userInput(username) {
    this.user = username.target.value;
  }

  addUser(username) {
    this.userArray.push(this.user);
    this.shadowRoot.querySelector(".user-input").value = "";
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
      userArray: { type: Array },
      user: { type: String },

    };
  }
}

globalThis.customElements.define(PartyUI.tag, PartyUI);


