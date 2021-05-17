//data:元データで、変更を加えない（2dArray）
//processed_data:処理後のデータ
//tableTitle:タイトル行
const storage = localStorage;
let tableTitle;
let data;

let ABC = localStorage.getItem("data"); // なかったらnullが返る
    if ( ABC ){
        tableTitle =  JSON.parse(storage.getItem("tableTitle"));
        data =  JSON.parse(storage.getItem("data"));
    } 
    else {//localStorageに値が無いときのデフォルト表示
        tableTitle = ["日付","値","真偽値"];
        data = [[1,2,3],[34,32,4],[22,1,3],[123,32,21],[1,1,33]];
    }

let processed_data = data;//初期値はdataと同じ
let tableTitleArea = document.getElementById("tableTitleArea");
let table = document.getElementById("tableBody");
let newRow;
let newCell;
let newText;


function Reset(){
    processed_data = data;
    data_disp(processed_data);
}

//タイトルを表示する
function table_title_disp(arr_1d)
{
    for (var i=0; i<arr_1d.length; i++)
    {
        newCell = tableTitleArea.insertCell();
        newText = document.createTextNode(arr_1d[i]);
        newCell.appendChild(newText);
    }
}

table_title_disp(tableTitle);


//データを表示する
function data_disp(arr_2d)
{
    table.innerHTML="";//まずは、tableBodyを空にする
    for (var i=0; i<arr_2d.length; i++)
    {
        newRow = table.insertRow();
        //cellの追加ループ
        for (var ii=0; ii<arr_2d[0].length; ii++)
        {
            newCell = newRow.insertCell();
            //newCell.setAttribute("contenteditable","true")//contenteditable="true"   このへん
            newText = document.createTextNode(arr_2d[i][ii]);
            newCell.appendChild(newText);
        }
    }
}

data_disp(data);


//データが変更されたら、processsed_dataを上書きする必要がある\/?
document.addEventListener("input",()=>{
    console.log(table);
})

function tableToArr() {
    var data = [];
    document.getElementsByTagName('tr').forEach(element => {
        
    });
    (function(i) {
        $('td', $(this)).each(function(j) {
             data.push($(this).text());
        });
    });
    return data;
}