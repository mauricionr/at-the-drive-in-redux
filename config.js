System.config({
  "baseURL": "/",
  "defaultJSExtensions": true,
  "transpiler": "typescript",
  "paths": {
    "github:*": "jspm_packages/github/*",
    "app": "src"
  },
  "packages": {
    "app": {
      "main": "app",
      "defaultExtension": "ts"
    }
  }
});

System.config({
  "map": {
    "typescript": "github:mhegazy/typescript@v1.5-beta2"
  }
});
