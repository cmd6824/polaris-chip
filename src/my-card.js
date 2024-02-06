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
          <p>${this.text}</p>
  <div class="btn-wrapper">
    <a href=${this.link}>
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
      text: { type: String },
      link: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
