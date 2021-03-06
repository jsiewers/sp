import {
    LitElement,
    html,
    css
} from 'lit-element';
class CourseElement extends LitElement {
    static get properties() {
        return {
            href: {
                attribute: true
            },
            src: {
                attribute: true
            },
            video: {
                attribute: true
            },
            projecten: {
                attribute: true
            },
            onderwerpen: {
                attribute: true
            },
        };
    }

    static get styles() {
        return css `

         #learnpath {
            display: grid;
            grid-template-columns: 1fr 6fr;

        }

        #path {
            display: flex;
            align-items: stretch;
            justify-content: space-between;
            flex-wrap: nowrap;
            flex-direction: column;

        }


        #title {
            font-weight:700;
            color:var(--c4);
        }

        #text {
        }

        #coursewrapper {
            padding-top: 2rem;
        }

        #course {
            display: grid;
            grid-template-areas:
            "logo title"
            "logo text"
            "logo info";
            padding:1rem;
            grid-template-rows: auto;
            grid-template-columns: 100px 1fr;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 1px 1px 5px var(--c8);
            min-height:100px;

        }

        #icon-href {
            grid-area:logo;
            height:100px;
            width:100px;
        }

        #title, #text, #info {
          padding: 1rem;
          padding-top:0rem;
        }

        #title {
            grid-area:title;
        }

        #text {
          grid-area:text;
        }
        #info {
          grid-area:info;
          padding-bottom:0rem;
        }

        #icon {
            height:100%;
            width:100%;
            background-repeat: no-repeat;
            background-size:90%;
            background-position: center;
            background-position-y: 0px;
            background-position-x: 0px;
        }

        .line {
            flex-grow: 4;
            width: 3px;
            background-color: var(--c3);
            margin: auto;
        }

        .grow-2 {
            flex-grow:2;
        }

        .grow-3 {
            flex-grow:3;
        }

        .circle {
            height: 15px;
            width: 15px;
            background-color: #fff;
            border-radius: 50%;
            border: 3px solid var(--c3);
            margin: auto;
        }

        #info {
            color:var(--c3);
        }

        #info > span {
            margin-right:1rem;
        }

        fa-icon {
            color:var(--c1);
            margin-right:1rem;
            vertical-align:top;
        }


        #title > a {
                color:var(--c4);
                text-decoration: none;
        }

        @media only screen and (max-width: 700px) {
            div#info span {
              display:block;
            }

            #course {
              grid-template-areas:
              "logo title"
              "text text"
              "info info";
            }
            #title, #text, #info {
              padding: 1rem;
              padding-left:0rem;
              padding-top:0rem;
            }

        }

    `
    };

    render() {
        return html `
           <div id="learnpath">
                <div id="path">
                    <div class="line grow-2"></div>
                    <div class="circle"></div>
                    <div class="line grow-3"></div>
                </div>
                <div id="coursewrapper">
                    <div id="course">
                        <a id="icon-href" href="${ this.href }">
                          <div id="icon"
                            style="background-image: url('${ this.src }')"
                            alt="css course">
                          </div>
                        </a>
                        <div id="title">
                            <a href="${ this.href }"><slot name="title">title</slot></a>
                        </div>
                        <div id="text">
                            <slot name="text">Text.....</slot>
                        </div>
                        <div id="info">
                            <span><fa-icon class="fab fa-youtube"></fa-icon><slot name="video">${ this.video }</slot> uur video</span>
                            <span><fa-icon class="far fa-file"></fa-icon><slot name="onderwerpen">${ this.onderwerpen }</slot> onderwerpen</span>
                            <span><fa-icon class="fas fa-project-diagram"></fa-icon><slot name="projecten">${ this.projecten }</slot> opdrachten en projecten</span>
                        </div>
                    </div> <!-- course -->
                </div><!-- wrapper -->
            </div><!-- learnpath -->        `;
    }
}
customElements.define('course-element', CourseElement);
