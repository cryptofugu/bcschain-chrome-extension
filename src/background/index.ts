import BCSChromeController from './controllers';

// Add instance to window for debugging
const controller = new BCSChromeController();
Object.assign(window, { controller });
