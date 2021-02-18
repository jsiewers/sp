import { LitElement, html, css } from 'lit-element';
import { mainStyles } from '../../styles/main-styles.js';
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
