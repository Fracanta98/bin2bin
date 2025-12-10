import { Component, Input, OnInit } from '@angular/core';
import { IconTabBarComponent, TabConfig } from '@fundamental-ngx/platform/icon-tab-bar';



@Component({
    selector: 'home',
    templateUrl: './home.html',
    imports: [IconTabBarComponent],
    styles: ""
})
export class Home implements OnInit {
    @Input()
    withOverflowExample = false;

    items: TabConfig[] = [
      {
        icon: 'journey-arrive',
        label: 'Scan',
        counter: null,
        color: null,
        active: true
    },
    {
        icon: 'list',
        label: 'List',
        counter: null,
        color: null,
        badge: true
    },
    {
        icon: 'activities',
        label: 'Log',
        counter: null,
        color: null
    },

    ];

    ngOnInit(): void {
      this.items
    }
}