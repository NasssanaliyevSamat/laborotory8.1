import { Component, OnInit } from '@angular/core';
import {Carriage} from '../shared/carriage';
import {Carriages} from '../shared/Carriages';
import {FormGroup, FormControl, Validators, FormBuilder, NgModel} from '@angular/forms';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-carriage',
  templateUrl: './carriage.component.html',
  styleUrls: ['./carriage.component.css']
})
export class CarriageComponent implements OnInit {

  carriages = Carriages;
  selected: Carriage;
  selectedFlag = false;
  buffer = '';
  selectStatus: Array<string> = ['Works', 'Faulty', 'Under Repair'];

  //
  // selectStatus = [{'Works'}, {'Faulty'}, {'Under Repair'}];

  addElem: Carriage;
  addElemFlag = false;
  len: number;
  id: number;

  i = 0;
  count = 0;
  formAdd: FormGroup;

  detailFlag = false;
  detailCarriage: Carriage;

  arrayNumb = [];
  numbSum = 0;
  arrayMult = [];
  arrayMultSring = '';
  multSum = 0;
  cS = false;

  submitted = false;
  constructor() {}
  // constructor(private fb: FormBuilder) {
  //   this._createForm();
  // }
  // private _createForm(): void{
  //   this.formAdd = this.fb.group({
  //     numb: ['', [Validators.required, this.detailFlag]]
  //   });
  // }


  ngOnInit(): void {
    this.formAdd = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
    ]),
      numb: new FormControl(null, [
        Validators.maxLength(8),
        Validators.minLength(8),
        Validators.required
      ]),
      status: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ])
    });
  }

  OpenAddElem(): void{
    if (this.addElemFlag === false){
      this.addElemFlag = true;
    }
    else {
      this.addElemFlag = false;
    }
  }
  DeleteElement(id: number): void{
    this.carriages = this.carriages.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }

  Edit(id: number, name: string, numb: string, status: string): void
  {
    numb = this.buffer;
    if (this.CheckSum(numb) === true){
      this.carriages[id - 1].CarriageName = name;
      this.carriages[id - 1].CarriageNumber = numb;
      this.carriages[id - 1].CarriageStatus = status;
      console.log(this.carriages[id - 1].CarriageName);
      console.log(this.carriages[id - 1].CarriageNumber);
      this.EditFlag();
    }

  }

  EditFlag(): void{
    if (this.selectedFlag === false){
      this.selectedFlag = true;
    }else {
      this.selectedFlag = false;
    }
  }

  Detail(carriage: Carriage): void{
    this.detailCarriage = carriage;
    this.DetailOpen();
  }
  DetailOpen(): void{
    if (this.detailFlag === false){
      this.detailFlag = true;
    }else{
      this.detailFlag = false;
    }
  }
  AddElement(name: string, numb: string, status: string): void {
    this.CheckSum(numb);
    if (this.cS === true) {
      // // @ts-ignore
      // if (numb[0] === 2) // 1
      // {
      //   this.addElem.CarriageTypeFirst = 'Крытый';
      //   // @ts-ignore
      //   if (numb[1] === 0){
      //     this.addElem.CarriageTypeSecond = '4-осн., с объемом кузова менее 120 куб.м.';
      //     this.addElem.CarriageTypeThird = '';
      //   }
      //   // @ts-ignore
      //   if (numb[1] === 1 || numb[1] === 2 || numb[1] === 3){
      //     this.addElem.CarriageTypeSecond = '4-осн., с объемом кузова 120 куб.м. и более';
      //     this.addElem.CarriageTypeThird = '';
      //   }
      //   // @ts-ignore
      //   if (numb[1] === 4 || numb[1] === 5 || numb[1] === 6 || numb[1] === 7){
      //     this.addElem.CarriageTypeSecond = '4-осн., с объемом кузова 120 куб.м. и более';
      //     this.addElem.CarriageTypeThird = '';
      //   }
      // }
      // // @ts-ignore
      // if (numb[0] === 4 ){ // 2
      //   this.addElem.CarriageTypeFirst = 'Платформа';
      //   // @ts-ignore
      //   if (numb[1] === 0) {
      //     this.addElem.CarriageTypeSecond = '4-осн с длиной рамы до 13,4 м.';
      //     this.addElem.CarriageTypeThird = '';
      //   }
      //
      //   // @ts-ignore
      //   if (numb[1] === 2 || numb[1] === 3 || umb[1] === 4 || numb[1] === 5 || numb[1] === 6 ) {
      //     this.addElem.CarriageTypeSecond = '4-осн с длиной рамы 13,4 м. И более';
      //     this.addElem.CarriageTypeThird = '';
      //   }
      //
      // }
      //
      // // @ts-ignore
      // if (numb[0] === 6)
      // {
      //   this.addElem.CarriageTypeFirst = 'Полувагон';
      //   // @ts-ignore
      //   if (numb[1] === 0 || numb[1] === 1 || numb[1] === 2) {
      //     this.addElem.CarriageTypeSecond = '4-осн. С люками в полу и торцевыми дверями';
      //     this.addElem.CarriageTypeThird = '';
      //   }
      //   // @ts-ignore
      //   if (numb[1] === 4 || numb[1] === 5 || numb[1] === 6 || numb[1] === 7) {
      //     this.addElem.CarriageTypeSecond = '4-осн. с люками в полу без торцевых дверей';
      //     this.addElem.CarriageTypeThird = '';
      //   }
      //   // @ts-ignore
      //   if (numb[1] === 8) {
      //     this.addElem.CarriageTypeSecond = '4-осн с глухим кузовом';
      //     this.addElem.CarriageTypeThird = '';
      //   }
      //   // @ts-ignore
      //   if (numb[1] === 9) { // 2
      //     this.addElem.CarriageTypeSecond = '8-осн';
      //     // @ts-ignore
      //     if (numb[2] === 0) {
      //       this.addElem.CarriageTypeThird = 'С люками в полу торцовыми дверями';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 2 || numb[2] === 3 || numb[2] === 4 || numb[2] === 5 || numb[2] === 6 ) {
      //       this.addElem.CarriageTypeThird = 'с люками в полу без торцовых дверей';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 8) {
      //       this.addElem.CarriageTypeThird = 'с глухим кузовом';
      //     }
      //   }
      // }
      // // @ts-ignore
      // if (numb[0] === 7){
      //   this.addElem.CarriageTypeFirst = 'Цистерна';
      //   // @ts-ignore
      //   if (numb[1] === 0){
      //     this.addElem.CarriageTypeSecond = 'для нефтебитума и вязких нефтепродуктов';
      //     // @ts-ignore
      //     if (numb[2] === 0){
      //       this.addElem.CarriageTypeThird = 'для нефтебитума (бункерный с облегченной рамой)';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 1 || numb[2] === 2 || numb[2] === 3 ){
      //       this.addElem.CarriageTypeThird = 'для нефтебитума (бункерный полувагон)';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 5 || numb[2] === 6 ){
      //       this.addElem.CarriageTypeThird = 'для вязких нефтепродуктов';
      //     }
      //   }
      //   // @ts-ignore
      //   if (numb[1] === 1){
      //     this.addElem.CarriageTypeSecond = '4-осн для нефти и темных нефтепрод';
      //     this.addElem.CarriageTypeThird = '';
      //   }
      //   // @ts-ignore
      //   if (numb[1] === 2){
      //     this.addElem.CarriageTypeSecond = '4-осн для нефти, темных и светлых нефтепродуктов';
      //     this.addElem.CarriageTypeThird = '';
      //   }
      //   // @ts-ignore
      //   if (numb[1] === 3 || numb[1] === 4){
      //     this.addElem.CarriageTypeSecond = '4-осн для светлых нефтепрод';
      //     // @ts-ignore
      //     if (numb[2] === 0 || numb[2] === 1 || numb[2] === 2 || numb[2] === 3 || numb[2] === 4 || numb[2] === 5 || numb[2] === 6  ){
      //       this.addElem.CarriageTypeThird = 'с объемом котла 73,1 куб. м';
      //     }
      //   }
      //   // @ts-ignore
      //   if (numb[1] === 6){
      //     this.addElem.CarriageTypeSecond = '4-осн для химических грузов';
      //     // @ts-ignore
      //     if (numb[2] === 0){
      //       this.addElem.CarriageTypeThird = 'для серной кислоты';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 1){
      //       this.addElem.CarriageTypeThird = 'для улучшенной серной кислоты';
      //
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 3){
      //       this.addElem.CarriageTypeThird = 'для меланжа';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 4){
      //       this.addElem.CarriageTypeThird = 'для метанола';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 6 || numb[2] === 5 || numb[2] === 7 || numb[2] === 8){
      //       this.addElem.CarriageTypeThird = 'для остальных химических грузов';
      //     }
      //   }
      //   // @ts-ignore
      //   if (numb[1] === 7) {
      //     this.addElem.CarriageTypeSecond = '	4-осн для пищевых продуктов';
      //     // @ts-ignore
      //     if (numb[2] === 0){
      //       this.addElem.CarriageTypeThird = 'для спирта';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 1){
      //       this.addElem.CarriageTypeThird = 'для молока';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 2){
      //       this.addElem.CarriageTypeThird = 'для растительного масла';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 3 || numb[2] === 4){
      //       this.addElem.CarriageTypeThird = 'для виноматериалов';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 5){
      //       this.addElem.CarriageTypeThird = 'для патоки';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 8){
      //       this.addElem.CarriageTypeThird = '\tдля остальных пищевых продуктов';
      //     }
      //   }
      //   // @ts-ignore
      //   if (numb[1] === 9) {
      //     this.addElem.CarriageTypeSecond = '	8-осн нефтебензиновая';
      //     // @ts-ignore
      //     if (numb[2] === 0 || numb[1] === 1){
      //       this.addElem.CarriageTypeThird = 'для спирта';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 4 || numb[2] === 5){
      //       this.addElem.CarriageTypeThird = 'для светлых и темных нефтепрод';
      //     }
      // }
      //
      // // @ts-ignore
      //   if (numb[0] === 8){
      //   this.addElem.CarriageTypeFirst = 'изотермический';
      //   // @ts-ignore
      //   if (numb[1] === 0 ){
      //     this.addElem.CarriageTypeSecond = '4-осн вагон-термос';
      //     this.addElem.CarriageTypeThird = '';
      //   }
      //   // @ts-ignore
      //   if (numb[1] === 1){
      //     this.addElem.CarriageTypeSecond = '4-осн вагон-ледник';
      //     // @ts-ignore
      //     if (numb[2] === 0 ){
      //       this.addElem.CarriageTypeThird = 'с пристенными карманами';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 4 ){
      //       this.addElem.CarriageTypeThird = 'с потолочными баками';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 7 ){
      //       this.addElem.CarriageTypeThird = 'для вина';
      //     }
      //   }
      //   // @ts-ignore
      //   if (numb[1] === 3){
      //     this.addElem.CarriageTypeSecond = '4-осн автономный рефрижераторный вагон (АРВ)';
      //     // @ts-ignore
      //     if (numb[2] === 0 ){
      //       this.addElem.CarriageTypeThird = 'со служебным отделением для бригады';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 1 ){
      //       this.addElem.CarriageTypeThird = 'без служебного отделения для бригады, 19м';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 3 || numb[2] === 3 ){
      //       this.addElem.CarriageTypeThird = 'без служебного отделения для бригады, 21м';
      //     }
      //   }
      //   // @ts-ignore
      //   if ( numb[1] === 4){
      //     this.addElem.CarriageTypeSecond = '4-осн грузовой вагон в составе рефрижераторных';
      //     // @ts-ignore
      //     if (numb[2] === 0 ){
      //       this.addElem.CarriageTypeThird = '21-вагонного поезда';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 1 ){
      //       this.addElem.CarriageTypeThird = '12-вагонного поезда';
      //     }
      //   }
      //   // @ts-ignore
      //   if (numb[1] === 7 ){
      //     this.addElem.CarriageTypeSecond = '4-осн грузовой вагон в составе 5-вагонных';
      //     // @ts-ignore
      //     if (numb[2] === 0){
      //       this.addElem.CarriageTypeThird = 'Для секции ZA-5 постройки ГДР без служебного технич отделения';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 1){
      //       this.addElem.CarriageTypeThird = 'Для секции ZA-5 постройки ГДР с дизельным отделением со служебным технич.';
      //
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 3){
      //       this.addElem.CarriageTypeThird = 'для меланжа';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 4){
      //       this.addElem.CarriageTypeThird = 'для метанола';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 6 || numb[2] === 5 || numb[2] === 7 || numb[2] === 8){
      //       this.addElem.CarriageTypeThird = 'для остальных химических грузов';
      //     }
      //   }
      //   // @ts-ignore
      //   if (numb[1] === 7) {
      //     this.addElem.CarriageTypeSecond = '	4-осн для пищевых продуктов';
      //     // @ts-ignore
      //     if (numb[2] === 0){
      //       this.addElem.CarriageTypeThird = 'для спирта';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 1){
      //       this.addElem.CarriageTypeThird = 'для молока';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 2){
      //       this.addElem.CarriageTypeThird = 'для растительного масла';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 3 || numb[2] === 4){
      //       this.addElem.CarriageTypeThird = 'для виноматериалов';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 5){
      //       this.addElem.CarriageTypeThird = 'для патоки';
      //     }
      //     // @ts-ignore
      //     if (numb[2] === 8){
      //       this.addElem.CarriageTypeThird = '\tдля остальных пищевых продуктов';
      //     }
      //   }
      // }
      //   // @ts-ignore
      // if (numb[6] === 9){ // number 7
      //   this.addElem.CarriageTypeSevens = 'Переходной площадкa eсть';
      // }else{
      //   this.addElem.CarriageTypeSevens = 'Переходной площадки нет';
      // }
      // this.addElem.CarriageTypeFourthToSix = numb.substring(3, 5);
      // this.addElem.CarriageTypeEights = numb[7];

      this.len = this.carriages.length;
      this.addElem = {
        id: this.len + 1, CarriageName: name, CarriageNumber: numb,
        CarriageStatus: status,
        CarriageTypeSecond: '',
        CarriageTypeFirst: '',
        CarriageTypeFourthToSix: '',
        CarriageTypeThird: '',
        CarriageTypeSevens: '',
        CarriageTypeEights: '',
        CarriageSum: 0
      };
      console.log('QWWWWWWWWWWWWWWWWWWWWW', status);
      // @ts-ignore
      if (Number(numb[0]) === 2){
        this.addElem.CarriageTypeFirst = 'крытые грузовые вагоны';
      }
      // @ts-ignore
      if (Number(numb[0]) === 4){
        this.addElem.CarriageTypeFirst = 'платформы';
      }
      // @ts-ignore
      if (Number(numb[0]) === 6){
        this.addElem.CarriageTypeFirst = 'полувагоны';
      }
      console.log(numb[0]);
      // @ts-ignore
      if (Number(numb[0]) === 7){
        // console.log('asdasd');
        this.addElem.CarriageTypeFirst = 'цистерны';
      }
      // @ts-ignore
      if (Number(numb[0]) === 8){
        this.addElem.CarriageTypeFirst = 'изотермические вагоны';
      }
      // @ts-ignore
      if (Number(numb[0]) === 3 || numb[0] === 9){
        this.addElem.CarriageTypeFirst = 'прочие вагоны (специализированные и др.)';
      }
      this.carriages.push(this.addElem);
    }
  }
  CheckSum(numb: string): boolean{
    this.len = numb.length;
    console.log(this.len);
    for ( this.i = 0; this.i < this.len; this.i++){
      this.arrayNumb[this.i] = Number(numb[this.i]); // convert to number, first column
      console.log(this.arrayNumb[this.i]);
      this.numbSum += this.arrayNumb[this.i]; // sum first column
      console.log(this.numbSum);
      // tslint:disable-next-line:triple-equals
      if (this.count == 7){
        console.log('seeeveeeb');
        this.arrayMult[this.count] = this.arrayNumb[this.count] * 2;
      }
      if ( this.count % 2 === 0){ // multiplication

        this.arrayMult[this.count] = this.arrayNumb[this.count] * 2;
        // console.log('4etnye', this.i);

      }
      else if (this.count % 2 !== 0 && this.count !== 7) {
        this.arrayMult[this.count] = this.arrayNumb[this.count] * 1;
      }
      this.arrayMultSring += String(this.arrayMult[this.i]); // convert to string for third column
      console.log('string', this.arrayMultSring);
      this.count++;
    }
    this.len = this.arrayMultSring.length;
    console.log('dlina= ' , this.len);
    for ( this.i = 0; this.i < this.len; this.i++){
      this.multSum += Number(this.arrayMultSring[this.i]);
    }
    console.log(this.multSum, this.numbSum);
    if (this.numbSum === this.multSum){
      this.cS = true;
    }else {
      this.cS = false;
    }
    this.len = 0;
    this.count = 0;
    this.numbSum = 0;
    this.multSum = 0;
    this.arrayNumb = [];
    this.arrayMultSring = '';
    this.arrayMult = [];
    return this.cS;
  }
  onSelected(carriage: Carriage): void{
    this.EditFlag();
    this.selected = carriage;
  }

}
