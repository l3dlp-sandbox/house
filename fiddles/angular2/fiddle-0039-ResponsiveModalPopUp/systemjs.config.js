(function (global) {

     var ngVer = '@2.0.0-rc.1';
     var map = {
          'app': 'app',
          '@angular': 'https://unpkg.com/@angular/core', // sufficient if we didn't pin the version
          'angular2-in-memory-web-api': 'https://unpkg.com/angular2-in-memory-web-api', // get latest
          'rxjs': 'https://unpkg.com/rxjs@5.0.0-beta.6',
          'ts': 'https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js',
          'typescript': 'https://unpkg.com/typescript@1.8.10/lib/typescript.js',
          'ag-grid-ng2': 'https://unpkg.com/ag-grid-ng2@4.1.3',
          'ag-grid': 'https://unpkg.com/ag-grid@4.1.5',
          'mdi': 'https://unpkg.com/mdi@1.6.50'
     };

     var packages = {
          'app': {main: 'main.ts', defaultExtension: 'ts'},
          'rxjs': {defaultExtension: 'js'},
          'angular2-in-memory-web-api': {defaultExtension: 'js'},
     };

     var ngPackageNames = [
          'common',
          'compiler',
          'core',
          'http',
          'platform-browser',
          'platform-browser-dynamic',
          'router',
          'router-deprecated',
          'upgrade'
     ];

     // Add map entries for each angular package
     // only because we're pinning the version with `ngVer`.
     ngPackageNames.forEach(function (pkgName) {
          map['@angular/' + pkgName] = 'https://unpkg.com/@angular/' + pkgName + ngVer;
     });

     // Add package entries for angular packages
     ngPackageNames.forEach(function (pkgName) {

          // Bundled (~40 requests):
          packages['@angular/' + pkgName] = {main: pkgName + '.umd.js', defaultExtension: 'js'};

          // Individual files (~300 requests):
          //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
     });

     var config = {
          // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
          transpiler: 'typescript',
          typescriptOptions: {
               emitDecoratorMetadata: true
          },

          map: map,
          packages: packages
     }

     System.config(config);

})(this);
