const intercept = require('../Nicestack/core/intercept');
const db = require('../Nicestack/core/cryptodb');
const files = require('../Nicestack/core/files');

const storage = db.createDB('storage', false);

intercept.openHTTP(80);

intercept.exposeHTML('*', files.load('../Nicestack/core/main.html'));
intercept.namespaces('../Nicestack/namespaces/');

intercept.namespace('app', './app.html');
intercept.namespaces('./views/');
intercept.namespaces('./components/');
intercept.namespaces('./namespaces/');

intercept.protectedNamespace('adminView', './protectedViews/adminView.html');
intercept.registerProtectionKey('appledore');

intercept.inject({storage});