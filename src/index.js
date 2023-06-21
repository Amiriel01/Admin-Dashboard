import $ from "jquery";


$(document).ready(function () {
    $('.dashboard-text').on("click", () => {
        $('.dashboard-list').toggle();
    })
}) 

