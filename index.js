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

  <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</body>

</html>
