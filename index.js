<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
  <section class="container">

    <h1 class="my-3">GET and POST</h1>

    <div>
      <h2>Get Request</h2>
      <button class="btn btn-primary my-3" id="getDataBtn">Get Data</button>
      <div id="showPosts">

      </div>
    </div>


    <div class="mt-3">

      <h2>Post Request</h2>

      <form id="messageForm">
        <label for="name" class="form-label">Name:</label> <br>
        <input id="name" class="form-control" type="text" /><br> <br>

        <label for="message" class="form-label">Message:</label> <br>
        <textarea id="message" class="form-control" rows="4" cols="45"></textarea> <br> <br>

        <button type="submit" class="btn btn-success">Submit</button>
      </form>

      <div id="showMessage"></div>

    </div>

  </section>

   <section class="container py-4">
    <h1>Movie Database</h1>

    <div>
      <h2 class="my-4">Get Movies</h2>
      <button id="getMoviesBtn" class="btn btn-primary my-2 fs-5 fw-normal">Get Movies</button>
      <div id="showMovies" class="my-3"></div>
    </div>



    <div class="mt-4">
      <h2>POST Movie</h2>

      <form id="movieForm" class="mt-4">

        <div class="mb-3">
          <label class="form-label fs-5 fw-normal " for="title">Title: </label>
          <input class="form-control" id="title" type="text" />
        </div>

        <div class="mb-3">
          <label class="form-label fs-5 fw-normal " for="releaseYear">Release Year: </label>
          <input class="form-control" id="releaseYear" type="number" />
        </div>

        <div class="mb-3">
          <label class="form-label fs-5 fw-normal " for="">Genre: </label>
          <select id="selectGenre" class="form-select">
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Horror">Horror</option>
            <option value="Sports">Sports</option>
            <option value="Musical">Musical</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label fs-5 fw-normal " for="director">Director: </label>
          <input class="form-control" id="director" type="text" />
        </div>

        <div class="mb-3">
          <label class="form-label fs-5 fw-normal " for="language">Language: </label>
          <input class="form-control" id="language" type="text" />
        </div>

        <div class="mb-3">
          <label class="form-label fs-5 fw-normal " for="">Country: </label>
          <select id="selectCountry" class="form-select">
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Japan">Japan</option>
            <option value="SouthKorea">South Korea</option>
            <option value="Africa">Africa</option>
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label fs-5 fw-normal " for="rating">Rating: </label>
          <input class="form-control" id="rating" type="number" />
        </div>

        <div class="mb-3">
          <label class="form-label fs-5 fw-normal " for="plot">Plot: </label>
          <textarea class="form-control" id="plot" rows="2" cols="15"></textarea>
        </div>

        <div class="mb-3">
          <label class="form-label fs-5 fw-normal " for="awards">Awards: </label>
          <input class="form-control" id="awards" type="text" />
        </div>

        <div class="mb-3">
          <label class="form-label fs-5 fw-normal " for="posterUrl">Poster URL: </label>
          <input class="form-control" id="posterUrl" type="url" />
        </div>

        <div class="mb-3">
          <label class="form-label fs-5 fw-normal " for="trailerUrl">Trailer URL: </label>
          <input class="form-control" id="trailerUrl" type="url" />
        </div>

        <button class="btn btn-success mb-3 fs-5 fw-normal" type="submit">Add Movie</button>

      </form>

      <div id="result" class="mt-3"></div>

    </div>

  </section>

  <script>

    const name = document.querySelector('#name')
    const message = document.querySelector('#message')
    const showMessage = document.querySelector('#showMessage')
    const showPosts = document.querySelector('#showPosts')
    const getDataBtn = document.querySelector('#getDataBtn')
    const messageForm = document.querySelector('#messageForm')

    const apiUrl = 'https://posts-student-neog.replit.app/posts'

    getDataBtn.addEventListener('click', function () {
      fetch(apiUrl)
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          console.log(data)
          if (data) {
            showPosts.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
              const card = document.createElement('div')
              card.className = "card p-3 mb-3"

              const h2 = document.createElement('h2')
              h2.textContent = `Post ID: ${data[i]._id}`

              const p = document.createElement('p')
              p.textContent = JSON.stringify(data[i])


              card.appendChild(h2)
              card.appendChild(p)
              showPosts.appendChild(card)
            }
          } else {
            showPosts.textContent = "Not able to find message.";
          }
        })
        .catch(function (error) {
          showPosts.textContent = "Error in fetching messages."
        })
    })


    messageForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const messages = {
        name: name.value,
        message: message.value
      }

      fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(messages),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          if (data) {
            showMessage.textContent = JSON.stringify(data)
          } else {
            showMessage.textContent = "Can't load Message."
          }
        })
        .catch(function (error) {
          showMessage.textContent = "Failed to post message."
        })

    })


  </script>

      <script>

    const title = document.querySelector('#title')
    const releaseYear = document.querySelector('#releaseYear')
    const genre = document.querySelector('#selectGenre')
    const director = document.querySelector('#director')
    const language = document.querySelector('#language')
    const selectCountry = document.querySelector('#selectCountry')
    const rating = document.querySelector('#rating')
    const plot = document.querySelector('#plot')
    const awards = document.querySelector('#awards')
    const posterUrl = document.querySelector('#posterUrl')
    const trailerUrl = document.querySelector('#trailerUrl')
    const result = document.querySelector('#result')
    const movieForm = document.querySelector('#movieForm')
    const getMoviesBtn = document.querySelector('#getMoviesBtn')
    const showMovies = document.querySelector('#showMovies')

    const apiUrl = 'https://va-5-assignment-express-student-neog.replit.app/movies'


    getMoviesBtn.addEventListener('click', function () {

      showMovies.innerHTML = ""

      fetch(apiUrl)
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          if (data) {

            for (let i = 0; i < data.length; i++) {
              const card = document.createElement('div')
              card.className = "card mb-3"

              const cardBody = document.createElement('div')
              cardBody.className = 'card-body'

              const h2 = document.createElement('h2')
              h2.textContent = `Movie ID: ${data[i]._id}`

              cardBody.appendChild(h2)

              const div = document.createElement('div')
              div.textContent = `${JSON.stringify(data[i])}`

              cardBody.appendChild(div)
              card.appendChild(cardBody)
              showMovies.appendChild(card)


            }

          }
        })

    })


    movieForm.addEventListener('submit', function (event) {

      event.preventDefault();

      const movieDetails = {
        title: title.value,
        releaseYear: releaseYear.value,
        genre: genre.value,
        director: director.value,
        language: language.value,
        country: selectCountry.value,
        rating: rating.value,
        plot: plot.value,
        awards: awards.value,
        posterUrl: posterUrl.value,
        trailerUrl: trailerUrl.value,
      }

      fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(movieDetails),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          if (data) {
            result.textContent = "Movie Added SuccessFully."
          } else {
            result.textContent = "Failed to add movie."
          }
        })
        .catch(function (error) {
          result.textContent = "Error!! in adding movie."
        })

    })




  </script>

  <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</body>

</html>
