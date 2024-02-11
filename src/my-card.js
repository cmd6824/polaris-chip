import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Title";
    this.img = "image";
    this.alt = "description of image";
    this.text = "text under the image";
    this.link = "https://hax.psu.edu";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 20px;
      }

      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

      .card {
        margin: 0;
        max-width: 300px;
        padding: 8px;
        border: 2px solid black;
        background-color: lightblue;
      }

      img {
        max-width: 100%;
      }

      .card.change-color {
        background-color: red;
      }

      .btn {
        background-color: white;
        color: black;
        font-size: 16px;
        border-radius: 10%;
        padding: 8px;
        margin: 4px 4px 4px 100px;
      }

      .btn:focus,
      .btn:hover {
        background-color: grey;
      }

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }
    
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div class="card">
      <img class="card-image" src="${this.img}" alt="${this.alt}">
      <div class="card-text">
        <h2 class="card-title">${this.title}</h2>
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div>
            <slot>${this.text}</slot>
          </div>
        </details>
      <div class="btn-wrapper">
        <a href="${this.link}">
          <button class="btn">Details</button>
        </a>
      </div>
      </div>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      img: { type: String },
      alt: { type: String },
      text: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);


