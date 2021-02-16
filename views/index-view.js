import {
    LitElement,
    html,
    css
} from 'lit-element';




class IndexView extends LitElement {
    static get styles() {
        return css `



            `
    };


    render() {
        return html `

        <article-head>
            <span slot="author">Jan Jaap Siewers</span>
            <span slot="date">11-02-2021</span>
            <span slot="header">Meer leren over design, IT en software development</span>
        </article-head>
        <card-panel>
            <card-element href="/">
                <span slot="title">Voor wie bestemd:</span>
                <span slot="text">
                <checked-item>Deze cursus is voor iedereen die al enige ervaring heeft met Git en in een team wil gaan werken. In deze cursus leer je werken met standaard git commando's en je gaat werken git projects.</checked-item>
                <checked-item>Deze cursus is voor iedereen die al enige ervaring heeft met Git en in een team wil gaan werken. In deze cursus leer je werken met standaard git commando's en je gaat werken git projects.</checked-item>

                    </span>
                <span slot="link"></span>
            </card-element>
            <card-element href="/">
                <span slot="title">Wat ga je leren</span>
                <span slot="text">
                ${ this.camera }Het opzetten van een workflow in Git.
                    Dit is nuttig voor vrijwel ieder team dat zich met software-ontwikkeling bezig houdt.
                    Welke workflow het beste past bij een team, hangt helemaal af van de werkwijze van een team. Wijk gerust af van de voorgestelde werkwijze in de cursus als dat beter past.
                </span>
                <span slot="link"></span>
            </card-element>
            <card-element href="/test">
                <span slot="title">Dit zijn de leertrajecten die we aanbieden</span>
                <span slot="text">
                <tag-element color="var(--c-webdeveloper)" href="/webdeveloper">webdeveloper</tag-element>
                <tag-element color="var(--c-mobile-developer)" href="/mobile-developer">mobile-developer</tag-element>
                <tag-element color="var(--c-game-developer)" href="/game-developer">game-developer</tag-element>
                <tag-element color="var(--c-content-developer)" href="/content-developer">content-developer</tag-element>
                <tag-element color="var(--c-full-stack-developer)" href="/full-stack-developer">full-stack-developer</tag-element>
                </span>
                <span slot="link"></span>
            </card-element>
        </card-panel>
        <article-element>
            <span slot="header">Ja daar gaan we weer voor de zoveelste keer!! Deze gaat over de gehele breedte!!</span>
            <span slot="col-1">
                <h3>Dit is dan een tussenkopje</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra scelerisque magna ac tincidunt. Donec in posuere turpis. Integer aliquam vulputate fermentum. Aenean sagittis iaculis fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam placerat augue in felis ultricies, nec vehicula turpis dictum. Duis eu mi at ipsum faucibus lacinia at et ipsum. Nullam aliquet turpis et sollicitudin tincidunt. Praesent quis nulla sapien. Donec ullamcorper quam vel purus eleifend, a sagittis erat vulputate. Integer pellentesque varius lobortis. Mauris nec rutrum elit, a venenatis nibh. In tempus eget metus accumsan malesuada. Donec tincidunt fermentum risus non maximus. Nunc elementum et odio et placerat.</span>
            <span slot="col-2">
            <h3>Dit is dan een tussenkopje</h3>
            In hac habitasse platea dictumst. Praesent bibendum sapien purus, nec euismod sem ultrices at. Praesent in euismod neque. Vivamus at finibus erat, non ultrices quam. Ut vel risus ac ligula sodales lacinia eu at mauris. Ut ornare velit vitae dapibus semper. Praesent et lobortis est, eget accumsan odio. Duis eget pellentesque felis, vel convallis sapien. Sed tempus mauris ac elit ullamcorper, a fermentum nisl imperdiet.</span>
        </article-element>
        <course-element video="4" onderwerpen="2" projecten="6" src="img/courses/course_css.svg">
            <span slot="title">Starten met CSS3</span>
            <span slot="text">kssdlfjks dlfkjsdf oweir jsdfklnwerop svdn,xnv sefjwe pfosdj fxdkvnoefjw pefojs f </span>
        </course-element>
        <course-element video="16" onderwerpen="2" projecten="12" src="img/courses/course_php8_beginners.svg">
            <span slot="title">Beginnerscursus PHP 8</span>
            <span slot="text">Deze cursus is voor beginnende programmeurs die niet of niet veel ervaring hebben met PHP. PHP is een taal waarmee je vooral websites en webapplicaties mee kunt bouwen. Het is een zgn. server-side taal. PHP wordt uitgevoerd op een server en niet in je browser.<br />
            </span>
        </course-element>
        `;
    }
}

customElements.define('index-view', IndexView);
