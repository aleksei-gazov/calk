

let productArea = 0
let selfTappingScrews = 0

export const productDimensions = (sheetWidth: number, length: number, ) => {
 productArea = sheetWidth * length
}
export const numberOfScrews = ( material: string ="metal") => {
  if (material === "metal") {
    selfTappingScrews = productArea * 10
   } else if (material === "plastic") {
     selfTappingScrews = productArea * 5
   }
}
export const pipeQuantity = (sheetWidth: number, length: number, ) => {

}