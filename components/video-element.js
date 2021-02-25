import {LitElement, html, css} from 'lit-element';


class VideoElement extends LitElement {
    static get properties() {
        return {
            video: {attribute: true},
        };
    }
    static get styles() {
        return css`
    <style>
    :host {
      position:relative;
    }

    .videoWrapper {
        position: relative;
        margin-top:2rem;
        padding-bottom: 56.25%; /* 16:9 */
        height: 0;
    }
    .videoWrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    </style>

        `;
    }

    //playlist = videoseries?list=PL_dDpKbU0KLa5MAlFr65r342OFHyWgCB4
    //video = 9-5wdkahTOA

    render() {
        return html`
            <div class="videoWrapper">
                <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen frameborder="0" height="auto"
                        src="https://www.youtube.com/embed/${ this.video }"
                        ></iframe>
            </div>
        `;
    }
}

customElements.define('video-element', VideoElement);
