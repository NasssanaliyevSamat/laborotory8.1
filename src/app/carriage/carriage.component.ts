import { Component, OnInit } from '@angular/core';
import {Carriage} from '../shared/carriage';
import {FormControl, FormGroup} from '@angular/forms';
import {CarriageService} from '../services/carriage.service';
import {CarriageValidatorService} from '../services/carriage-validator.service';
import {LoggerService} from '../services/logger.service';
import {Addinfo} from '../shared/addinfo';
import {ChecksumService} from '../services/checksum.service';

@Component({
  selector: 'app-carriage',
  templateUrl: './carriage.component.html',
  styleUrls: ['./carriage.component.css'],
  providers: [CarriageService, CarriageValidatorService, LoggerService, ChecksumService]
})
export class CarriageComponent implements OnInit {
  carriages: Carriage[];
  formAdd: FormGroup;
  // For EditFlag
  selectedFlag = false;
  submitted = false;
  selected: Carriage;
  // For DetailFlag
  detailFlag = false;
  // For Detail
  detailCarriage: Carriage;
  // For AddElem
  addElemFlag = false;
  constructor(private carriageService: CarriageService, private carriageValidator: CarriageValidatorService) {
    this.carriages = carriageService.getCarriages();
  }
  // Обращение к сервису и вызов метода
  // Open div Add
  OpenAddElem(addElemFlag: boolean): void
  {
      if (addElemFlag === false){
        this.addElemFlag = true;
      }
      else {
        this.addElemFlag = false;
      }
  }
  // Edit function
  Edit(carriage: Carriage): void{
    this.carriageService.edit(carriage);
    this.carriages = this.carriageService.getCarriages();
    this.EditFlag();
  }
  // Open div Edit
  EditFlag(): void
  {
    if (this.selectedFlag === false){
      this.selectedFlag = true;
    }else {
      this.selectedFlag = false;
    }
  }
  // Detail function
  Detail(id: number): void
  {
    this.detailCarriage = this.carriageService.detail(id);
    this.DetailOpen();
  }
  AddElement(name: string, numb: string, status: string): void
  {
    const oo: Addinfo = new Addinfo();
    oo.name = name;
    oo.number = numb;
    oo.status = status;
    this.carriageService.addElement(oo);
    this.carriages = this.carriageService.getCarriages();
  }

  DeleteElement(id: number): void
  {
    this.carriageService.deleteElem(id);
    this.carriages = this.carriageService.getCarriages();
  }
  DetailOpen(): void
  {
    if (this.detailFlag === false){
      this.detailFlag = true;
    }else{
      this.detailFlag = false;
    }
  }

  OnSelected(carriage: Carriage): void
  {
    this.EditFlag();
    this.selected = carriage;
  }
  ngOnInit(): void
  {
    this.formAdd = new FormGroup({
      name: new FormControl(),
      numb: new FormControl(),
      status: new FormControl()
    });
    this.formAdd = this.carriageValidator.Validate(); // reactive validate
  }
}
