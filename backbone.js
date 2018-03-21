function displayTracks() {
    $(document).ready(function () {
        var artist = $( "#search" ).val();
        artist = artist.toLowerCase();
        for(var i = 0; i < artist.length; i++){
            if(artist[i] == " "){
                artist[i] = "+"
            }
        }
        $.ajax({
            url: "https://itunes.apple.com/search?term="+ artist,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function (result) {
                myFunction(result);
            },
            error: function () {
                alert('Failed!');
            }
        });
    });
}
function myFunction(result) {
    console.log(result);
    var amount = $('#displayed').val();
    var html = "<table border='1'>";
    var artwork = '';
    var preview = '';
    for (var i = 0; i < amount; i++) {
        artwork = result.results[i].artworkUrl100;
        preview = result.results[i].previewUrl;
        html += "<tr>";
        html += "<td>" + "<img src ='" + artwork + "'>" + "</td>";
        html += "<td>" + result.results[i].trackName + "</td>";
        html += "<td>" + result.results[i].artistName + "</td>";
        html += "<td>" + result.results[i].collectionName + "</td>";
        html += "<td>" + result.results[i].primaryGenreName + "</td>";
        html += "<td>" + "<a target = '_blank' href=" + preview + ">Listen</a>" + "</td>";
        html += "</tr>"
    }
    html += "</table>";
    $('#listOutput').html(html);
}

