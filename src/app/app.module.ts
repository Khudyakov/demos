import {Inject, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    OverlayPanelModule
  ],
  providers: [
    {provide: '$window', useValue: window},
    {provide: APP_BASE_HREF, useValue: '/docs'}
      ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(@Inject('$window') private window:any) {
    window.L.AwesomeNumberMarkers = window.L.Icon.extend({
      options: {
        iconSize: [35, 45],
        iconAnchor:   [17, 42],
        popupAnchor: [1, -32],
        className: 'awesome-number-marker',
        icon: 'home',
        markerColor: 'blue',
        numberColor: 'white',
        number: ''
      },

      createIcon: function () {

        var div = document.createElement('div'),
            options = this.options;

        div.innerHTML = this._createInner();
        this._setIconStyles(div, 'icon-' + options.markerColor);

        return div;
      },

      _createInner: function() {
        var iconColorStyle = "", options = this.options;

        if(options.numberColor) {
          iconColorStyle = "style='color: " + options.numberColor + "' ";
        }

        return "<i " + iconColorStyle + "><b>" + options.number + "</b></i>";
      },

      _setIconStyles: function (img, name) {
        var options = this.options,
            size = window.L.point(options['iconSize']),
            anchor = window.L.point(options.iconAnchor);

        img.className = 'awesome-number-marker-' + name + ' ' + options.className;

        if (anchor) {
          img.style.marginLeft = (-anchor.x) + 'px';
          img.style.marginTop  = (-anchor.y) + 'px';
        }

        if (size) {
          img.style.width  = size.x + 'px';
          img.style.height = size.y + 'px';
        }
      }
    });
  }
}
