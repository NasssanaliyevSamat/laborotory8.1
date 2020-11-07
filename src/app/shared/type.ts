// AddElement(name: string, numb: string, status: string): void {
//   this.CheckSum(numb);
//   if (this.cS === true) {
//
//   //this.addElem.CarriageTypeFourthToSix = numb.substring(3, 5);/
//
//
//   this.len = this.carriages.length;
//   this.addElem = {
//     id: this.len + 1, CarriageName: name, CarriageNumber: numb,
//     CarriageStatus: status,
//     CarriageTypeSecond: '',
//     CarriageTypeFirst: '',
//     CarriageTypeFourthToSix: '',
//     CarriageTypeThird: '',
//     CarriageTypeSevens: '',
//     CarriageTypeEights: numb[7],
//     CarriageSum: 0
//   };
//   this.carriages.push(this.addElem);
// }
// }
//
// CheckSum(numb: string): void{
//   this.len = numb.length;
//   console.log(this.len);
//   for ( this.i = 0; this.i < this.len; this.i++){
//   this.arrayNumb[this.i] = Number(numb[this.i]); // convert to number, first column
//   console.log(this.arrayNumb[this.i]);
//   this.numbSum += this.arrayNumb[this.i]; // sum first column
//   console.log(this.numbSum);
//   // tslint:disable-next-line:triple-equals
//   if (this.count == 7){
//     console.log('seeeveeeb');
//     this.arrayMult[this.count] = this.arrayNumb[this.count] * 2;
//   }
//   if ( this.count % 2 === 0){ // multiplication
//
//     this.arrayMult[this.count] = this.arrayNumb[this.count] * 2;
//     // console.log('4etnye', this.i);
//
//   }
//   else if (this.count % 2 !== 0 && this.count !== 7) {
//     this.arrayMult[this.count] = this.arrayNumb[this.count] * 1;
//   }
//   this.arrayMultSring += String(this.arrayMult[this.i]); // convert to string for third column
//   console.log('string', this.arrayMultSring);
//   this.count++;
// }
// this.len = this.arrayMultSring.length;
// console.log('dlina= ' , this.len);
// for ( this.i = 0; this.i < this.len; this.i++){
//   this.multSum += Number(this.arrayMultSring[this.i]);
// }
// console.log(this.multSum, this.numbSum);
// if (this.numbSum === this.multSum){
//   this.cS = true;
// }else {
//   this.cS = false;
// }
// }
// onSelected(carriage: Carriage): void{
//   this.EditFlag();
//   this.selected = carriage;
// }
//
// }
