export function maxAndMin(numbersString: string): string {
  const a: string = numbersString.trim();
  const arrStr: string[] = a.split(/\s+/); // масив рядків
  const arrNum: number[] = []; // масив чисел
  for (let i = 0; i < arrStr.length; i++) {
    const num: number = Number(arrStr[i]);
    arrNum.push(num);
  }
  const arrResult: number[] = [];
  let max: number = arrNum[0];
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > max) {
      max = arrNum[i];
    }
  }
  arrResult.push(max);
  let min: number = arrNum[0];
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] < min) {
      min = arrNum[i];
    }
  }
  arrResult.push(min);
  return arrResult.join(" ");
}
