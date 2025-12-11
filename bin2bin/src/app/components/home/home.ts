import { Component, Input, OnInit } from '@angular/core';
import { IconTabBarComponent, TabConfig } from '@fundamental-ngx/platform/icon-tab-bar'
import { ButtonComponent } from '@fundamental-ngx/core/button';
import { LayoutPanelModule } from '@fundamental-ngx/core/layout-panel';
import { RouterLink } from '@angular/router';







@Component({
    selector: 'home',
    templateUrl: './home.html',
    imports: [IconTabBarComponent, ButtonComponent, LayoutPanelModule ]

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
        badge: true,
        active: false, 
        id: "2",
       
    },
    {
        icon: 'activities',
        label: 'Logs',
        counter: null,
        color: null
    },

    ];

    ngOnInit(): void {
      this.items
    }
}