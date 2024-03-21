import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { html, css } from 'lit';
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class PartyUI extends DDD {

  static get tag() {
    return 'haxcms-party-ui';
  }

  constructor() {
    super();
    this.items = [];

  }

  static get styles() {
    return css`
      
      :host {
        display: block;
        
      }

      input[type=text] {
        width: 100%;
      }

      .userbtn {
        justify-content: center;
        align-items: center;
        cursor: pointer;
        display: flex;
        height: fit-content;
        width: fit-content;
        color: var(--component-color, var(--ddd-theme-default-link));
        border-top-style: ;
        border-top-width: ;
        border-right-style: ;
        border-right-width: ;
        border-bottom-style: ;
        border-bottom-width: ;
        border-left-style: ;
        border-left-width: ;
        border-image-source: ;
        border-image-slice: ;
        border-image-width: ;
        border-image-outset: ;
        border-image-repeat: ;
        background-color: var(--component-background-color, transparent);
        font-weight: var(--ddd-font-primary-medium);
        text-decoration: none;
        border-radius: var(--ddd-radius-xs);
        border-color: var(--component-border-color, var(--ddd-theme-default-link));
        padding: var(--simple-cta-button-padding, 0.75rem 0.75rem 0.75rem 1.5rem);
        transition: all 0.2s ease-out 0s;
      }

      `
    }

  render() {
    return html`
    <div>
      <button class="userbtn">Add User</button>
    </div>
    <form>
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="fname">
    </form>
    <div>
        ${this.items.map((item) => html`
          <my-item title="${item.title}" @click="${this.targetClicked}" data-id="${item.id}">
          ${item.content}
          <strong>${item.coolness}</strong>
          </my-item>
        `)}
      </div>
    
    `;
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
      items: { type Array },

    };
  }
}

globalThis.customElements.define(PartyUI.tag, PartyUI);


