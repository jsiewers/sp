import { LitElement, html, css } from 'lit-element';
import { courses } from '../../data/courses';

export class BaseLearningpathView extends LitElement {
  static get properties() {
    return {
      courses: { type: Array },
      tagFilter: { type: Array },
      selectFilter: { type: Array }
    };
  }

  constructor() {
    super();
    this.courses = courses;
    /*
    * Only display the courses belonging to this learningpath.
    * Query takes the name of the learningpath
    */
    this.tagFilter = (query) => {
        let selectedCourses = this.courses.filter(course => (course.tags.indexOf(query) !== -1));
        return selectedCourses.sort((a,b) => a.code.localeCompare(b.code));
    };

    this.selectFilter = (query) => {
      let selectedCourses = this.courses.filter(course => {
        //check if course.code is in selectedCourses
        //course.position = this.selectFilter.length;
        if (query.indexOf(course.code) !== -1) {
            course.order = query.indexOf(course.code);
            return true;
        }
      })
      return selectedCourses.sort((a,b) => a.order - b.order);
    };
  }

  getCourses(selectedCourses) {
    return this.selectFilter(selectedCourses).map(course => html`
    <course-element href="/courses/${ course.code.toLowerCase() }" onderwerpen="${course.subjects}" projecten="${course.projects}"
            src="../../img/courses/${course.img}" video="${course.video}">
      <span slot="title">
        ${course.title}
      </span>
      <span slot="text">
        ${course.text}
      </span>
    </course-element>
    `)
  }

  static get styles() {
    return mainStyles
  };

    render() {
        return html `
          <section>
          </section>
        `;
    }
}

//customElements.define('full-stack-developer-view', BaseLearningpathView);
