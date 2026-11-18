//const url = "https://api.npoint.io/10e6eebe9ffc26b04435";
const url = "object.json";

fetch(url) //request file
.then(response => response.json()) //parse response
.then(posts => { 
  const section = document.querySelector("section"); // container

  posts.forEach(post => {
    const article = document.createElement("article"); //create an empty <article> for each post
    const header = document.createElement("header"); //<header>

    const author = document.createElement("span"); //<span>
    author.className = "author";
    author.textContent = post.author;

    const time = document.createElement("time"); //<time>
    time.dateTime = post.createdAt;
    time.textContent = new Date(post.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      timeZone: "UTC",
    });

    header.append(author, time); //add author and time to header
    article.append(header);

    if (post.image) { //only posts with a photo get an <img>
      const img = document.createElement("img");
      img.src = post.image;
      img.alt = post.imageAlt;
      article.append(img);
    }

    const text = document.createElement("p"); //<p>
    text.textContent = post.text; //add data to it
    article.appendChild(text); //add p to article

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "👍";
    article.append(button);

    section.appendChild(article); //add article to page
  });
})
.catch(error => console.error(error)); //error logging

