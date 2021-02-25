//
import "/components/article-element.js"
import "/components/article-head.js"
import "/components/bread-crumbs.js"
import "/components/card-element.js"
import "/components/checked-item.js"
import "/components/list-item.js"
import "/components/link-item.js"

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
    initRouter();
});

function initRouter() {
    const router = new Router(document.querySelector('main'));
    router.setRoutes(routes);
}
