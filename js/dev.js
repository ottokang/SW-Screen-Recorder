"use strict";

let isDevelopement = 0;

if (isDevelopement === 1) {
    // 顯示訊息
    $("#recorder_time").html("錄影時間測試").show();
    $("#countdown_time").html("倒數時間").show();
    $("#message").html("訊息測試").show();
    $("#recorder_time").html("錄影時間測試").show();

    // 顯示測試選項
    $(".dev").show();
}