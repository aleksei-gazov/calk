

let productArea = 0
let selfTappingScrews = 0
let lengthPipe = 0
let sheets = 0
let totalDta = []
export const productDimensions = (roofWidth: number, roofLength: number, ) => {
 productArea = roofWidth * roofLength
 console.log(roofWidth * roofLength)
}
export const numberOfSheets = (roofWidth: number, length: number, sheetWidth: number) => {  
  sheets = ((Math.ceil(roofWidth/sheetWidth)) * (Math.ceil(length/1)) )
  console.log((Math.ceil(roofWidth/sheetWidth)) * (Math.ceil(length/1)))
}
export const numberOfScrews = ( material: string ="metal") => {
  if (material === "metal") {
    selfTappingScrews = productArea * 10
    console.log(productArea * 10)
   } else if (material === "plastic") {
     selfTappingScrews = productArea * 5
     console.log(productArea * 5)
   }
}
export const pipeQuantity = (roofWidth: number, roofLength: number,  step: number, pipeWidth: number) => {
 let numberOfLags = (Math.ceil(roofWidth/step)) + 1
 let crate = (Math.ceil(roofLength/1)) + 1
  lengthPipe = (numberOfLags * roofLength) + (crate *(roofWidth - (numberOfLags* pipeWidth)))
  console.log((numberOfLags * roofLength) + (crate *(roofWidth - (numberOfLags* pipeWidth))))
} 

export const sumSheets = (price: number, ) => {
  sheets * price
  console.log(5)
}
