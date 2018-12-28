import { Component, Input } from '@angular/core'
import { IssService } from './iss.service'

@Component({
  selector: 'iss',
  templateUrl: './iss.component.html',
  styleUrls: ['./iss.component.scss'],
  providers: [IssService]
})

export class IssComponent {
  @Input() left: string
  @Input() top: string

  locationInterval = null

  constructor(private issService: IssService) { }

  ngOnInit() {
    this.getLocation()

    this.locationInterval = setInterval(() => this.getLocation(), 5000)
  }

  ngOnDestroy() {
    clearInterval(this.locationInterval)
  }

  getLocation() {
    this.issService.getLocation()
      .subscribe((data: { iss_position: { latitude: number, longitude: number } }) => {
        this.top = this.getTop(data.iss_position.latitude)
        this.left = this.getLeft(data.iss_position.longitude)
      })
  }

  getTop(latitude) {
    console.log('latitude:', latitude)
    const top = Math.abs((Number(latitude) - 90) / 180) * 100

    console.log('top:', top)
    return top + '%'
  }

  getLeft(longitude) {
    console.log('longitude:', longitude)
    const left = Math.abs((Number(longitude) + 180) / 360) * 100

    console.log('left:', left)
    return left + '%'
  }
}
