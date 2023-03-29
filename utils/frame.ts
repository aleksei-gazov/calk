import { toGetDataAC } from "../totalReducer"


// let productArea = 0
let selfTappingScrews = 0
let lengthPipe = 0
let sheets = 0
// let totalData: any = {
//productArea - размер изделия
//sheets - количнство саморезов
//pipe - труба
// sheet - лист
// }
let materialData: any = {
 // productArea - размер изделия 1
 //cellSize - размерячейки 
  //name - 1
  // unit - единицы изделия 1
  //quantity - количество 1
  //sum 1
}
let materialData1: any = {
   //name - 1
   // unit - единицы изделия 1
   //quantity - количество 1
   //sum 1
 }
let materialData2: any = {
   //name - 1
   // unit - единицы изделия 1
   //quantity - количество 1
   //sum 1
 }

//Рассчет размеров изделия
export const productDimensions = (roofWidth: number, roofLength: number, ) => {
  materialData.productArea = roofWidth * roofLength
//  console.log(roofWidth * roofLength)
}
//Рассчет количества листов
export const numberOfSheets = (roofWidth: number, length: number, sheetWidth: number) => {  
  materialData.quantity = (Math.ceil(roofWidth/sheetWidth)) * (Math.ceil(length/1))* sheetWidth
  // console.log((Math.ceil(roofWidth/sheetWidth)) * (Math.ceil(length/1))* sheetWidth)
}
// Рассчет стоимости листов
export const sumSheets = (data, dispatch)=> {
   let mat = data.find((i)=> i.type === 'list')
   materialData.name = mat.name
   materialData.unit = mat.unit
    materialData.sum = (mat.price * materialData.quantity).toFixed(2)
    dispatch(toGetDataAC(materialData))
}

// Рассчет количества саморезов
export const numberOfScrews = (data, roofWidth: number, roofLength: number, material: string,  dispatch ) => {
  let mat = data.find((i)=> i.type === 'fix')
  materialData1.name = mat.name
  materialData1.unit = mat.unit
   materialData1.sum = (mat.price * materialData.quantity).toFixed(2)
   materialData1.quantity =  roofWidth * roofLength * 5
     dispatch(toGetDataAC(materialData1))
}

//Рассчет количества труб и сетки каркаса
export const pipeQuantity = (data, roofWidth: number, roofLength: number,  step: number, pipeWidth: number,  dispatch) => {
  let mat = data.find((i)=> i.type === 'pipe')
 let numberOfLags = (Math.ceil(roofWidth/step)) + 1 //кол-во лаг 
let distanceBetweenLags =  roofWidth / (numberOfLags - 1) - mat.width // среднее расст между лагами
console.log(roofWidth / (numberOfLags - 1) - mat.width/100)

 let crate = (Math.ceil(roofLength/step)) + 1 //кол-во обрешотки
let distanceBetweenTheCrate = roofLength/(crate - 1) // среднее расстояние между обрешоткой
materialData2.quantity = (numberOfLags * roofLength) + (crate *(roofWidth - (numberOfLags* pipeWidth))) // кол-во трубы
materialData2.name = mat.name
materialData2.unit = mat.unit
materialData2.sum = (materialData2.quantity * mat.price).toFixed(2)
dispatch(toGetDataAC(materialData2))
  // console.log(`${distanceBetweenLags}x${distanceBetweenTheCrate}`)

  // console.log((numberOfLags * roofLength) + (crate *(roofWidth - (numberOfLags* pipeWidth))))
} 


