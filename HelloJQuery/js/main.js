$(document).on("pageinit","#top",function(){ // idが`top`に割り振られたページの`pageinit`イベントをフックする.
    const listItems = ["AAA", "BBB", "CCC"];
    // jQueryの繰り返し処理.
    $.each(listItems, function (index, val) {
        console.log(val);
        $("#words").append("<li>"+ val +"</li>");
        $("#words").listview("refresh"); // 必ず最後に refreshを呼ぶこと！
    })
});