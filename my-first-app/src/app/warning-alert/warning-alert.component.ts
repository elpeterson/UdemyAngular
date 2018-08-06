import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: `
        <p>Something has catastrophically failed!</p>
    `,
    styles: [`
        p {
            color: red;
            font-weight: bold;
        }
    `]
})

export class WarningAlertComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
