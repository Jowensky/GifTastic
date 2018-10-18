var key = 'XLl0PGWvEuBqDV7BsRBquZNZVa5GdwSa'
var thing = ["Tomato", "Lovely", "Eye", "Ben", "Awake", "Four", "Days", "Tiny", "Water", "Bag"]

$(function () {

    // grabs word from array & turns into button (adds class, data attr, & text)
    function add() {
        for (var i = 0; i < thing.length; i++) {

            $("#want").val("")

            var buttons = $('<button>');
            buttons.attr('data-wanted', thing[i]);
            buttons.addClass('word')
            buttons.text(thing[i])
            $('.button').append(buttons)
        }
    }
    add()

    // grabs input value and pushes into array then calls add function
    $('#search').click(function (e) {
        e.preventDefault();

        $('.button').empty()
        var want = $("#want").val()
        thing.push(want)
        add()

    })

    // uses data attr in parameter to make specified api call.  *doesn't work after adding new word*
    $('.word').click(function () {
        
        $("#gifs").empty()

        var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${$(this).attr('data-wanted')}&api_key=${key}&limit=10`)
        xhr.done(function (respond) {
            console.log(respond)
            $.each(respond.data, function (i, item) {

                var pic = item.images.original.url
                var rat = item.rating

                $("#gifs").append(`<h3>Rating: ${rat}</h3><img src=${pic}> `)
            })
        })
    })
})

