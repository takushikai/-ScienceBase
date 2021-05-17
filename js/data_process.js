/*
input:val(cellの値)
output:processed_data（上書き）
dataFilterに渡す値はbool
*/

//eval(formula_input)して、適合するほうに(processed_dataを破壊するかしないか。)で処理をわける？
document.getElementById("run_button").onclick = function (){
  let formula_input = document.getElementById("formula_input").value;//式
  let column_input_value = document.getElementById("column_input").value - 1;//行指定
  let picked = array_2d.map(item => item[column_input_value]);//指定した列だけの1次元配列をpickedに代入

  if(formula_input.includes("a"||"b"||"c"))//processed_dataを書き換えるような処理の関数名
  {
    dataFilter(processed_data);
  }
}
//processed_dataを書き換えるような処理の場合
//絞り込み　配列を指定、指定された位置（列）を探し、適合する2次元配列を作成,map>findIndex>push
function dataFilter(array_2d)
{
    //let formula_input = document.getElementById("formula_input").value;//式
    // let column_input_value = document.getElementById("column_input").value - 1;//行指定
    // let picked = array_2d.map(item => item[column_input_value]);//指定した列だけの1次元配列をpickedに代入
    let index;
    let arr = [];

    //指定した配列から検索、indexの配列を返す [OK]
    index = picked.reduce(function(accumulator, val, index) 
        {
        if (eval(formula_input))//検索値(bool)
        {
            console.log("true");
            accumulator.push(index);
        }
        return accumulator;
        },
        [])

    //arrに検索済みの新しい配列を代入する
    for (let i=0; i<index.length; i++){
        arr.push(array_2d[index[i]]);
    }
    processed_data = arr;
    data_disp(processed_data);
}




//昇順ソート
function dataSortUp(array_2d)
{
    column_input_value = document.getElementById("column_input").value - 1;
    let arr = array_2d.sort((a,b) => a[column_input_value] - b[column_input_value]);
    processed_data = arr;
    data_disp(processed_data);
}

//降順ソート
function dataSortDown(array_2d)
{
    column_input_value = document.getElementById("column_input").value - 1;
    let arr = array_2d.sort((a,b) => b[column_input_value] - a[column_input_value]);
    processed_data = arr;
    data_disp(processed_data);
}


//素数判定(1は素数じゃない！)
/**引用元
 * https://gist.github.com/think49/675313/c9abb72fd87fa3309e42fe8613597f0b014d669b
 * isPrime.js
 * @version 1.0
 * @author think49
 */
/**
 * 数値を素数判定する。
 * @function
 * @param {Number} num 数値 
 * @returns {Boolean} 素数なら true を返し、非素数 (小数, 負の数, 合成数など) なら false を返す。
 */

function isPrime (num) {
    var a = 2;
  
    if (num === a) {
      return true;
    }
  
    /** 自然数を判定する */
    isNaturalNumber: {
      if (num < 1 || num % 1 !== 0) {
        return false;
      }
    }
  
    /** フェルマーテスト (フェルマーの小定理) */
    fermatTest: {
      if (Math.pow(a, num) % num !== a) {
        return false;
      }
    }
  
    /** エラトステネスのふるい */
    eratosthenes: {
      do {
        if (num % a === 0) {
          return false;
        }
        a++;
      } while (num > a);
    }
  
    return num === a;
  }


//倍数
function isMultiple(val,num){
  if((val % num) == 0){
    return true;
  }
  else {
    return false;
  }
}


//奇数
function isOdd(val){
  if((val % 2)!= 0){
    return true;
  }
  else{
    return false;
  }
}


//偶数
function isEven(val){
  if((val % 2) == 0){
    return true;
  }
  else{
    return false;
  }
}


//問題あり。
function average(arr_1d){
  let sum = 0;

  for (let i=0; i<arr_1d.length; i++) {

    sum += arr_1d[i];

  }
  
  let result = sum / arr_1d.length;
  console.log("平均値："+result);
  return false;
}