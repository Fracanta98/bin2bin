import { Component, Input, OnInit } from '@angular/core';
import { IconTabBarComponent, TabConfig } from '@fundamental-ngx/platform/icon-tab-bar';



@Component({
    selector: 'home',
    templateUrl: './home.html',
    imports: [IconTabBarComponent]
})
export class Home implements OnInit {
    @Input()
    withOverflowExample = false;

    items: TabConfig[] = [
      {
        icon: 'accelerated',
        label: 'Item 0',
        counter: 55,
        color: 'critical',
        active: true
    },
    {
        icon: 'action',
        label: 'Item 1',
        counter: 96,
        color: null,
        badge: true
    },
    {
        icon: 'account',
        label: 'Item 2',
        counter: 51,
        color: null
    },

    ];

    ngOnInit(): void {
      this.items
    }
}