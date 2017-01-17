import { Component } from '@angular/core';
declare let module: any;

@Component({
    selector: 'app',
    templateUrl: `app/app.html`,
})
export class AppComponent {
    private helloTargets: string[] = ['World', 'Angular', 'to you'];
    helloTo = this.helloTargets[0];

    constructor() {
        setInterval(() => {
            let helloTargets = this.helloTargets;
            // 把第一個移到最後一個
            helloTargets.push(helloTargets.shift());
            this.helloTo = this.helloTargets[0];
        }, 500);
    };
}