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
    this.title = "My card";
    this.img = "#";
    this.alt = "#";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card {
        margin: 0;
        max-width: 300px;
        padding: 8px;
        border: 2px solid black;
        background-color: lightblue;
      }

      img {
        display: block;
        max-width: 100%;
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

    
    `;
  }

  render() {
    return html`
    <div class="card">
      <img class="card-image" src=${this.img} alt=${this.alt}>
      <div class="card-text">
          <h2 class="card-title">${this.title}</h2>
        <div class="card-details">
          <p>This is what life feels like when you use HAX to create your websites. Perfect for blogging and creates peace within yourself.</p>
  <div class="btn-wrapper">
    <a href="https://hax.psu.edu">
     <button class="btn">Details</button>
    </a>
  </div>
  </div>
  </div>
  </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      img: { type: String },
      alt: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
