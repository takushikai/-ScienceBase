document.getElementById("file_menu").onchange= () => {
        var elements = document.getElementById("file_menu").options;
        //※elementsの最初はhiddenなので、表示されるもののindexは1から始まる
        if(elements[1].selected){//保存
            if (typeof sessionStorage !== 'undefined') {
                // Web Storageに関する処理を記述
                let ABC =storage.getItem("data"); // なかったらnullが返る
                if ( ABC ){
                    storage.clear();
                    storage.setItem("tableTitle", JSON.stringify(tableTitle));
                    storage.setItem("data", JSON.stringify(processed_data));
                } 
                else {//何も無いとき
                    storage.setItem("tableTitle", JSON.stringify(tableTitle));
                    storage.setItem("data", JSON.stringify(processed_data));
                }
                
            }
            else {
                window.alert("本ブラウザではWeb Storageが使えません");
            }
        }
        if(elements[2].selected){//.csvを開く
            document.getElementById("selfile").click();
        }
        if(elements[3].selected){//.csvを保存
            exportCSV(processed_data);
        }

        elements[0].selected = true; //最初の項目を選択状態にする
}



document.getElementById("data_menu").onchange= () => {
        var elements = document.getElementById("data_menu").options;
        //※elementsの最初はhiddenなので、表示されるもののindexは1から始まる
        if(elements[1].selected){
            window.alert("coming soon...");
        }
        if(elements[2].selected){
            window.alert("coming soon...");
        }
        if(elements[3].selected){
            window.alert("coming soon...");
        }

        elements[0].selected = true; //最初の項目を選択状態にする
}



document.getElementById("help_menu").onchange= () => {
        var elements = document.getElementById("help_menu").options;
        //※elementsの最初はhiddenなので、表示されるもののindexは1から始まる
        if(elements[1].selected){
            window.open('manual.html');
        }
        if(elements[2].selected){
            window.alert("Web data base_v0.1 | Copyright 2020 by T.Kai All rights reserved.")
        }

        elements[0].selected = true; //最初の項目を選択状態にする
}