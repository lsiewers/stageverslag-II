// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAm6Wxih9yOI6rn2Jae5j4Fv5VBSK2idvo',
    authDomain: 'stageverslag-ii.firebaseapp.com',
    databaseURL: 'https://stageverslag-ii.firebaseio.com',
    projectId: 'stageverslag-ii',
    storageBucket: 'stageverslag-ii.appspot.com',
    messagingSenderId: '734642176846'
  }
};
