//
import "/components/article-element.js"
import "/components/article-head.js"
import "/components/bread-crumbs.js"
import "/components/card-element.js"
import "/components/checked-item.js"
import "/components/list-item.js"
import "/components/link-item.js"
import "/components/add-to-home-screen.js"

//courses
import "/components/code-element.js"
import "/components/nav-link.js"
import "/components/nav-bar.js"
import "/components/video-element.js"

//frontpage
import "/components/card-panel.js"
import "/components/photo-card.js"

//learningpath
import "/components/course-element.js"

//styles
import "/components/fa-icon.js"


import { routes } from './data/routes.js';
import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
    // registerSW();
    initRouter();
  }
);

function initRouter() {
    const router = new Router(document.querySelector('main'));
    router.setRoutes(routes);
}

// async function registerSW() {
//   if ('serviceWorker' in navigator) {
//     console.log('serviceWorker in navigator');
//     try {
//       console.log('pick up serviceworker');
//       await navigator.serviceWorker.register("./sw.js").then(function(result) {
//         console.log("serviceWorker registered, scope: " + result.scope);
//       });
//     } catch (e) {
//       console.log("serviceWorker registration failed");
//     }
//
//   } else {
//     console.log('Your browser does nog support ServiceWorker');
//   }
// }
