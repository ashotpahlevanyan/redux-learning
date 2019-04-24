// Note the curly braces: grab the named export instead of default export
import { App } from './App'

//And if you need both:

import ConnectedApp, { App } from './App'

// in the app itself you should import it normally

import App from './App'