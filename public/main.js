let starScore = document.getElementsByClassName("fa-star");
let thumbsUp = document.getElementsByClassName("fa-thumbs-up")
let thumbsDown = document.getElementsByClassName("fa-thumbs-down")
let trash = document.getElementsByClassName("fa-ban");





Array.from(thumbsUp).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const review = this.parentNode.parentNode.childNodes[3].innerText
    const thumbsUp = parseFloat(this.parentNode.parentNode.childNodes[6].innertext)
    fetch('/reviews', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'review': review,
        'thumbsUp': thumbsUp
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(thumbsDown).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const review = this.parentNode.parentNode.childNodes[3].innerText
    const thumbsDown = parseFloat(this.parentNode.parentNode.childNodes[6].innerText)
    fetch('/reviewsDown', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'review': review,
        'thumbsup': thumbsDown
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(starScore).forEach(function (element) {
  element.addEventListener('input', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const review = this.parentNode.parentNode.childNodes[3].innerText
    const starScore = parseFloat(this.parentNode.parentNode.childNodes[4].innerText)
    let score = document.getElementsByClassName('.starScore').value
    
    fetch('/starsScore', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'review': review,
        'score': score
      })
})
    .then(response => {
      if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
      console.log(score)
  });
});
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const review = this.parentNode.parentNode.childNodes[3].innerText
        fetch('reviews', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'review': review
            
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});