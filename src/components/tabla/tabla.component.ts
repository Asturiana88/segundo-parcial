import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  @Input() selected!: any
  @Input() headers!: any[]
  @Input() content!: Observable<any>
  @Output() handleRowClickEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleRowClick(value: any) {
    this.handleRowClickEvent.emit(value);
  }

  getHeader(header:any){
    if (typeof header == 'string'){
      return header
    }
    return header[0]
  }

  getItemData(item:any, header:any){
    if (typeof header == 'string'){
      return item[header]
    } 
    let data = item;
    for (let index = 1; index < header.length; index++) {
      data = data[header[index]];
    }
    return data
  }

}
