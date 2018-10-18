var key = 'XLl0PGWvEuBqDV7BsRBquZNZVa5GdwSa'
var thing = ["Tomato", "Lovely", "Eye", "Ben", "Awake", "Four", "Hours", "Tiny", "Water", "Bag"]

$(function () {

    add()

    $('#search').click(function () {

        $('.button').empty()
        var want = $("#want").val()
        thing.push(want)
        add()
    })

    function add() {
        for (var i = 0; i < thing.length; i++) {

            var a = $('<button>');
            a.attr('data-wanted', thing[i]);
            a.text(thing[i])
            $('.button').append(a)
        }
    }
    

    $('.button').click(function () {

        console.log()
        // var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${$(this).attr('data-wanted')}&api_key=${key}&limit=10`)

        // xhr.done(function (data) { console.log(data); })
    })

})





// This json function would not take the vaule of the search bar 

// var thing = $("#thing").val()
// var url = `http://api.giphy.com/v1/gifs/search?`

// var options = {
//     q: thing,
//     api_key: key,
//     limit: 5
// }

// function fetch() {
//     $.getJSON(url, options,
//         function (response) {
//             console.log(response)
//         }
//     )
// }