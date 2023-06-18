import {Component, Inject, AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements AfterViewInit {
  title = 'squad';
  private map: any = undefined;
  defaultState: any;
  cams: any = [{
    id: 1,
    streetName: 'Bulevardul 21 Decembrie 1989',
    videoRaw:'webcam1.mp4',
    videoProcessed:'webcam1p.mp4',
    type: "street cam",
    status:"new",
    capacity: 30,
    occupied:0,
    loaded: 0,
    data:{
      marker: [46.77252675796626, 23.59540135511264],
      color:'green',
      number: 40,
      polygon:[[46.77161209860196, 23.59223819161919],[46.7718149631524, 23.592266400465064],
        [46.77253947316617, 23.595200120436285],[46.77241389212873, 23.595157807167467]]
    }
  },{
    id: 2,
    streetName: 'Piața Avram Iancu',
    videoRaw:'webcam2.mp4',
    videoProcessed:'webcam2p.mp4',
    type: "street cam",
    status:"new",
    capacity: 25,
    occupied:0,
    loaded: 0,
    data:{
      marker: [46.770930139837645, 23.597561768558805],
      color:'red',
      number: 80,
      polygon:[[46.77125466872533, 23.597188844070615],[46.77265539386389, 23.59628616100255],
        [46.77268437399933, 23.596441309654878],[46.77110010371968, 23.597527350221142]]
    }
  },{
    id: 3,
    streetName: 'Bulevardul Eroilor',
    videoRaw:'webcam3.mp4',
    videoProcessed:'webcam3p.mp4',
    type: "street cam",
    status:"new",
    capacity: 20,
    occupied:0,
    loaded: 0,
    data:{
      marker: [46.76966620697067, 23.592819623101096],
      color:'orange',
      number: 60,
      polygon:[[46.76959307166847, 23.59280236853673],[46.769728319856924, 23.592633115461467],
        [46.770433537051616, 23.59551041774093],[46.770269309214626, 23.59549631331799]]
    }
  }];

  constructor(@Inject('$window') private window:any) {

    this.defaultState = Object.assign({}, this.cams);
  }

  ngAfterViewInit(): void {
    this.map = this.window.L.map('map').setView([46.771587591392475, 23.596033107357655], 16);
    const tiles = this.window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }


  renderOnMap(cam: any, videoElem):void {
    cam.status = 'processing';
    cam.disabled = true;

    setTimeout(() => {
      var blueMarker = this.window.L.marker(cam.data.marker, {
        icon: new this.window.L.AwesomeNumberMarkers({
          number: cam.data.number,
          markerColor: cam.data.color
        })}).addTo(this.map);

      var polygon = this.window.L.polygon(cam.data.polygon, {color: cam.data.color}).addTo(this.map);

      cam.occupied = Math.round(cam.capacity * cam.data.number * 0.01);
      cam.loaded = cam.data.number + '%';

      cam.status = 'processed';
      videoElem.pause();
    },5000);

  }

  reset() {
    this.cams = Object.assign({},this.defaultState);
  }
}
