$(document).ready(function(){

    $('.switch-btn').click(function(){
        $(this).toggleClass('switch-on');
    });

    $( "#polzunok" ).slider({
        animate: "slow",
        range: "min",    
        value: 50
    });

})