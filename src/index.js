import $ from "jquery";

// $(document).ready(function () {
// $('.dashboard-text').on("click",
//     function () {
//         //show menu
//         $('.dashboard-list', this).hide();
//     }, function () {
//         //hide menu
//         $('.dashboard-list', this).show();
//     });
// // });
$(document).ready(function () {
    $('.dashboard-text').on("click", () => {
        $('.dashboard-list').toggle();
    })
}) 


// $('.dashboard-text').on('click', function() {
//     $('.dashboard-list').toggleClass('hide)')
// })

// $(".dashboard-text").on("click", function(){
//     $(this).toggleClass("active");
//   });
