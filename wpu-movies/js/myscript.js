function searchMovies() {
    $('#list-movies').html('');

    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '938aed99',
            's': $('#search-input').val()
        },
        success: function(data) {
            if ( data.Response == 'True' ) {
                
                let movies = data.Search;

                $.each(movies, function(i, data) {
                    $('#list-movies').append(`
                        <div class="col-md-4">
                            <div class="card mb-3">
                                <img src="${data.Poster}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${data.Title}</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">${data.Year}</h6>
                                    <a href="#" class="card-link see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.imdbID}">See Detail</a>
                                </div>
                            </div>    
                        </div>    
                    `);
                });

                $('#search-input').val('');

            } else {
                $('#list-movies').html(`
                    <div class="col">
                        <h1 class="text-center">${data.Error}</h1>
                    </div>    
                `);
            }
        }
    });
}

$('#btn-search').on('click', function() {
    searchMovies();
});

$('#search-input').on('keyup', function(e) {
    if ( e.key == "Enter" || e.which == 13 || e.keyCode == 13 ) {
        searchMovies();
    }
});

$('#list-movies').on('click', '.see-detail', function() {
    // console.log($(this).data('id'));

    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '938aed99',
            'i': $(this).data('id')
        },
        success: function(data) {
            if ( data.Response == "True" ) {
                
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="${data.Poster}" class="img-fluid">
                            </div>    
                            <div class="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item"><h3>${data.Title}</h3></li>
                                    <li class="list-group-item">Released : ${data.Released}</li>
                                    <li class="list-group-item">Genre : ${data.Genre}</li>
                                    <li class="list-group-item">Director : ${data.Director}</li>
                                    <li class="list-group-item">Actors : ${data.Actors}</li>
                                </ul>
                            </div>    
                        </div>    
                    </div>    
                `)

            }
        }
    });

});