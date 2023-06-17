import {Component, Inject, AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements AfterViewInit {
  title = 'squad';
  cams: any = [{
    id: 1,
    streetName: 'Piata Chipario',
    type: "street cam",
    status:"processed"
  }];

  constructor(@Inject('$window') private window:any) {

  }

  ngAfterViewInit(): void {
    var map = this.window.L.map('map').setView([46.771587591392475, 23.596033107357655], 16);
    const tiles = this.window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = this.window.L.marker([46.77252675796626, 23.59540135511264]).addTo(map);




    var blueMarker = this.window.L.marker([46.77252675796626, 23.59540135511264], {
      icon: new this.window.L.AwesomeNumberMarkers({
        number: 40,
        markerColor: "blue"
      })}).addTo(map);

    var latlngs = [[46.77161209860196, 23.59223819161919],[46.7718149631524, 23.592266400465064],
      [46.77253947316617, 23.595200120436285],[46.77241389212873, 23.595157807167467]];

    var polygon = this.window.L.polygon(latlngs, {color: 'blue'}).addTo(map);



    var redMarker = this.window.L.marker([46.770930139837645, 23.597561768558805], {
      icon: new this.window.L.AwesomeNumberMarkers({
        number: 80,
        markerColor: "red"
      })}).addTo(map);

    var latlngs2 = [[46.77125466872533, 23.597188844070615],[46.77265539386389, 23.59628616100255],
      [46.77268437399933, 23.596441309654878],[46.77110010371968, 23.597527350221142]];

    var polygon2 = this.window.L.polygon(latlngs2, {color: 'red'}).addTo(map);

    var yellowMarker = this.window.L.marker([46.76966620697067, 23.592819623101096], {
      icon: new this.window.L.AwesomeNumberMarkers({
        number: 60,
        markerColor: "orange"
      })}).addTo(map);

    var latlngs3 = [[46.76959307166847, 23.59280236853673],[46.769728319856924, 23.592633115461467],
      [46.770433537051616, 23.59551041774093],[46.770269309214626, 23.59549631331799]];

    var polygon3 = this.window.L.polygon(latlngs3, {color: 'orange'}).addTo(map);
  }

}
