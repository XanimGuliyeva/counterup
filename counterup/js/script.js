// function opentab(website){
//     var data = document.getElementsByClassName("panel");
//     for(i=0;i<data.length;i++) {
//         data[i].style.display='none'
//     }
//     document.getElementById(website).style.display='block'
// }


$('.counter').each(function(){
    var $this=$(this),
    countTo=$this.attr('data-count');
    $({countNum: $this.text()}).animate({
        countNum: countTo
    },

    {
        duration:3000,
        easing: 'linear',
        step: function() {
            $this.text(Math.floor(this.countNum));          
        },
        complete: function() {
            $this.text(this.countNum);          
        },
    });
});