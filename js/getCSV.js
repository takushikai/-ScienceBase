//ダイアログでファイルが選択された時
document.getElementById("selfile").addEventListener("change",function(evt){

  var file = evt.target.files;

  //FileReaderの作成
  var reader = new FileReader();
  //テキスト形式で読み込む
  reader.readAsText(file[0]);

  reader.onload = function(){
    let txt = reader.result;
    getCSV(txt);
    console.log(txt);
  }
},false);

function getCSV(txt){
    //改行ごとに配列化
    var arr = txt.split('\n');
  
    //1次元配列を2次元配列に変換
    var res = [];
    for(var i = 0; i < arr.length; i++){
      //空白行が出てきた時点で終了
      if(arr[i] == '') break;
  
      //","ごとに配列化
      res[i] = arr[i].split(',');
  
      for(var i2 = 0; i2 < res[i].length; i2++){
        //数字の場合は「"」を削除
        if(res[i][i2].match(/\-?\d+(.\d+)?(e[\+\-]d+)?/)){
          res[i][i2] = parseFloat(res[i][i2].replace('"', ''));
        }
      }
    }
    console.log(res);
    tableTitle = res[0];//resの最初のタイトル行
    res.shift();//resから最初のタイトル行を削除（破壊的）
    data = res;
    processed_data = data;
    tableTitleArea.innerHTML = "";//今あるタイトルを削除
    table_title_disp(tableTitle);
    data_disp(data);
    return res;
  
  }