let reviewScore = document.getElementsByClassName("reviewScore");
let thumbsUp = document.getElementsByClassName("fa-thumbs-up")
let thumbsDown = document.getElementsByClassName("fa-thumbs-down")
let trash = document.getElementsByClassName("fa-ban");
let reviewButton = document.getElementsByClassName('.btn')





Array.from(thumbsUp).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const review = this.parentNode.parentNode.childNodes[3].innerText
    const thumbsUp = parseFloat(this.parentNode.parentNode.childNodes[7].innertext)
    
    fetch('/review', {
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
    const name = this.parentNode.parentNode.parentnode.childNodes[1].innerText
    const review = this.parentNode.parentNode.parentnode.childNodes[3].innerText
    const thumbsDown = parseFloat(this.parentNode.parentNode.parentnode.childNodes[7].innerText)
    fetch('/reviewDown', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'review': review,
        'thumbsup': thumbsDown})
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

Array.from(reviewScore).forEach(function (reviewButton) {
  reviewButton.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const review = this.parentNode.parentNode.childNodes[3].innerText
    const rScore = parseFloat(this.parentNode.parentNode.childNodes[5].innertext)
    
    fetch('/reviewScore', {

      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'review': review,
        'reviewScore': rScore
      })
})
    .then(response => {
      if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
      console.log(reviewScore)
  });
});
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const review = this.parentNode.parentNode.childNodes[3].innerText
        const rScore = parseFloat(this.parentNode.parentNode.childNodes[5].innertext)

        fetch('review', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'review': review,
            'reviewScore': rScore
            
            
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});