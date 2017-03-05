/// <reference path="../typings/index.d.ts" />

declare module "*.html" {
    let template: string;
    export default template;
}

declare module "*.styl" {
    let textContent: string;
    export { textContent };
}