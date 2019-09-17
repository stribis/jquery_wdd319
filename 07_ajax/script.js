$(document).ready(function(){
  const numCard = $('.username').length
  $.ajax({
    url : 'https://jsonplaceholder.typicode.com/users'
  }).done(function(data){

    for(let i = 0; i < data.length ; i++){
      const template = `
            <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
              <div class="tc">
                  <img src="${`https://robohash.org/${data[i].username}.png?set=set4`}" class="bb avatar br-100 h4 w4 dib">
                  <h1 class="username f4">${data[i].username}</h1>
                  <hr class="mw3 bb bw1 b--black-10 center">
              </div>
              <p class="lh-copy measure center f6 black-70">
                  Name: <span class="name b">${data[i].name}</span>
              </p>
              <p class="lh-copy measure center f6 black-70">
                  Email: <span class="email b">${data[i].email}</span>
              </p>
              <p class="lh-copy measure center f6 black-70">
                  City: <span class="city b">${data[i].city}</span>
              </p>
          </article>`
      
      $('main').prepend(template)
    }
  })
})