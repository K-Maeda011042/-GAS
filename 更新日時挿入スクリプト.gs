 // 参考；
 // https://www.log-stocker.com/gas/703/

function insertLastUpdated() { 

 // アクティブなスプレッドシート（対応状況確認シート）の
 // アクティブなシート（誰かがいじったシート）を指定 
 var ss = SpreadsheetApp.getActive().getActiveSheet();
 Logger.log(ss.getSheetName());

if(ss.getSheetName() == 'master・リンク'){
  return;
}

 //アクティブなセル（誰かがいじったセル）の行数を取得
 var currentRow = ss.getActiveCell().getRow();
 
 //アクティブなセル（誰かがいじったセル）の値を取得
 var currentCell = ss.getActiveCell().getValue();

 //更新日をいれる列を指定、H+currentRowでH列のセルを指定できる
 var updateDate = ss.getRange('H' + currentRow);
 
 //更新時間をいれる列を指定、I+currentRowでI列のセルを指定できる
 var updateTime = ss.getRange('I' + currentRow);

 // 指定したセル（誰かがいじったセルと同じ行のH,I列のセル）に更新日時を入れる
 if(currentRow>1){
  if(currentCell) {
   updateDate.setValue(Utilities.formatDate( new Date(), 'Asia/Tokyo', 'yyyy-MM-dd'));
   updateTime.setValue(Utilities.formatDate( new Date(), 'Asia/Tokyo', 'HH:mm'));
   Logger.log(Utilities.formatDate( new Date(), 'Asia/Tokyo', 'yyyy-MM-dd'));
   Logger.log(Utilities.formatDate( new Date(), 'Asia/Tokyo', 'HH:mm'));
  }
 }
}
