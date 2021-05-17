// https://qiita.com/banaoh/items/4119c0e23053b1cfa80b

// 配列をcsvで保存するfunction
function exportCSV(content){
  var formatCSV = '';
  
  for (var i = 0; i < content.length; i++) {
      var value = content[i];

      for (var j = 0; j < value.length; j++) { var innerValue = value[j]===null?'':value[j].toString(); var result = innerValue.replace(/"/g, '""'); if (result.search(/("|,|\n)/g) >= 0)
      result = '"' + result + '"';
      if (j > 0)
      formatCSV += ',';
      formatCSV += result;
    }
    formatCSV += '\n';
  }
 
 console.log(formatCSV);
 
  //ファイル作成＆ダウンロード処理
  let blob = new Blob([formatCSV],{type:"text/csv"});
  let link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  let date = new Date();
  let time = date.getFullYear()
            + '/' + ('0' + (date.getMonth() + 1)).slice(-2)
            + '/' + ('0' + date.getDate()).slice(-2)
            + ' ' + ('0' + date.getHours()).slice(-2)
            + ':' + ('0' + date.getMinutes()).slice(-2)
            + ':' + ('0' + date.getSeconds()).slice(-2)
            + '(JST)';
  link.download = "data" + time +'.csv';
  link.click();
}