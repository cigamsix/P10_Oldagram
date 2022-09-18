const posts = [
  {
    id: 0,
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21492,
  },
  {
    id: 1,
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 12502,
  },
  {
    id: 2,
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 15137,
  },
];

let isClicked = false;

let userAvatar = document.querySelector(".user-avatar");
let titleUser = document.querySelector(".title-user");
let titleInfo = document.querySelector(".title-info");
let userPost = document.querySelector(".user-post");

let userPostSubtitleCaption = document.querySelector(
  ".user-post-subtitle-caption"
);
let userCaptionUsername = document.querySelector(".user-caption-username");
let userCaptionText = document.querySelector(".user-caption-text");

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function renderPosts(itemObj) {
  //userAvatar.src = itemObj.avatar;
  userAvatar.outerHTML = `<img class="user-avatar" src="${itemObj.avatar}" />`;
  titleUser.textContent = `${itemObj.name}`;
  titleInfo.textContent = `${itemObj.location}`;

  //userPost.src = itemObj.post;
  userPost.outerHTML = `<img class="user-post" src="${itemObj.post}" />`;
  userPostSubtitleLikes.textContent = `${numberWithCommas(
    itemObj.likes
  )} likes`;

  //userCaptionUsername.textContent = `${itemObj.username} `;
  //userCaptionText.textContent = itemObj.comment;

  //userPostSubtitleCaption.innerHTML = userCaption.textContent;

  userPostSubtitleCaption.outerHTML = `<p class="user-post-subtitle-caption"><span class="user-caption">${itemObj.username}</span> ${itemObj.comment}</p> `;
}

function renderPostsHTML(itemObj) {
  return `<div class="posts">
    <section class="title">
      <img class="user-avatar" src="${itemObj.avatar}" />

      <div class="title-post">
        <p class="title-user">${itemObj.name}</p>
        <p class="title-info">${itemObj.location}</p>
      </div>
    </section>
    <main>
      <img class="user-post" src="${itemObj.post}" />
      <div class="user-post-comment">
        <div class="user-post-icon">
          <img class="icon heart" id="heart${
            itemObj.id
          }" src="images/icon-heart.png" />
          <img class="icon" src="images/icon-comment.png" />
          <img class="icon" src="images/icon-dm.png" />
        </div>
        <div class="user-post-subtitle">
          <p class="user-post-subtitle-likes" id="likes${
            itemObj.id
          }">${numberWithCommas(itemObj.likes)} likes </p>
          <p class="user-post-subtitle-caption"
            ><span class="user-caption-username">${itemObj.username} </span
            ><span class="user-caption-text">${itemObj.comment}</span
          ></p>
        </div>
      </div>
    </main>
  </div>`;
}

let heartIconArray = [];

function renderWholePosts() {
  posts.map((itemObj) => {
    document.querySelector("body").innerHTML += renderPostsHTML(itemObj);

    let heartIcon = document.querySelector(`#heart${itemObj.id}`);
    console.log(heartIcon);

    heartIconArray.push(heartIcon);
    console.log(`heartIconArray: ${heartIconArray}`);

    heartIconArray.map((element) => {
      console.log(`heartIconArray itemObj: ${element}`);
      element.addEventListener("click", () => {
        let userLikes = document.querySelector(`#likes${itemObj.id}`);
        itemObj.likes++;
        console.log(itemObj.likes);
        userLikes.textContent = `${numberWithCommas(itemObj.likes)} likes`;
        console.log(userLikes);
      });
    });
  });
}
//renderWholePosts();

function renderWholePosts2() {
  for (let i = 0; i < posts.length; i++) {
    document.querySelector("body").innerHTML += renderPostsHTML(posts[i]);

    let heartIcon = document.querySelector(`#heart${posts[i].id}`);

    console.log(`i: ${i}`);

    console.log(heartIcon);

    heartIconArray.push(heartIcon);
    console.log(heartIconArray);

    // for (let i = 0; i < heartIconArray.length; i++) {
    //   console.log(`heartIconArray itemObj: ${heartIconArray[i]}`);
    //   heartIconArray[i].addEventListener("click", () => {
    //     let userLikes = document.querySelector(`#likes${posts[i].id}`);
    //     posts[i].likes++;
    //     console.log(posts[i].likes);
    //     userLikes.textContent = `${numberWithCommas(posts[i].likes)} likes`;
    //     console.log(userLikes);
    //   });
    // }
  }
}
renderWholePosts2();

// for (let i = 0; i < heartIconArray.length; i++) {
//   console.log(`i: ${i}`);
//   console.log(heartIconArray[i]);
// }

// console.log(heartIconArray[0]);
// console.log(heartIconArray[1]);
// console.log(heartIconArray[2]);

// heartIconArray[0].addEventListener("click", addLikeAtIndex0);
// heartIconArray[1].addEventListener("click", addLikeAtIndex1);
// heartIconArray[2].addEventListener("click", addLikeAtIndex2);

// function addLikeAtIndex0() {
//   let userLikes = document.querySelector(`#likes${posts[0].id}`);
//   posts[0].likes++;
//   console.log(posts[0].likes);
//   userLikes.textContent = `${numberWithCommas(posts[0].likes)} likes`;
//   console.log(userLikes);
// }

// function addLikeAtIndex1() {
//   let userLikes = document.querySelector(`#likes${posts[1].id}`);
//   posts[1].likes++;
//   console.log(posts[1].likes);
//   userLikes.textContent = `${numberWithCommas(posts[1].likes)} likes`;
//   console.log(userLikes);
// }

// function addLikeAtIndex2() {
//   let userLikes = document.querySelector(`#likes${posts[2].id}`);
//   posts[2].likes++;
//   console.log(posts[2].likes);
//   userLikes.textContent = `${numberWithCommas(posts[2].likes)} likes`;
//   console.log(userLikes);
// }

let heartIcon0 = document.querySelector(`#heart${posts[0].id}`);
let heartIcon1 = document.querySelector(`#heart${posts[1].id}`);
let heartIcon2 = document.querySelector(`#heart${posts[2].id}`);

console.log("=================================");
console.log(heartIcon0);
console.log(heartIcon1);
console.log(heartIcon2);
console.log("=================================");
console.log(heartIconArray[0]);
console.log(heartIconArray[1]);
console.log(heartIconArray[2]);
console.log("=================================");

//[heartIcon0, heartIcon1, heartIcon2] = heartIconArray;
console.log("=============DESTRUCTURE=================");
console.log(heartIcon0);
console.log(heartIcon1);
console.log(heartIcon2);
console.log("=================================");

heartIcon0.addEventListener("click", () => {
  let userLikes = document.querySelector(`#likes${posts[0].id}`);
  posts[0].likes++;
  console.log(posts[0].likes);
  userLikes.textContent = `${numberWithCommas(posts[0].likes)} likes`;
  console.log(userLikes);
});
heartIcon1.addEventListener("click", () => {
  let userLikes = document.querySelector(`#likes${posts[1].id}`);
  posts[1].likes++;
  console.log(posts[1].likes);
  userLikes.textContent = `${numberWithCommas(posts[1].likes)} likes`;
  console.log(userLikes);
});
heartIcon2.addEventListener("click", () => {
  let userLikes = document.querySelector(`#likes${posts[2].id}`);
  posts[2].likes++;
  console.log(posts[2].likes);
  userLikes.textContent = `${numberWithCommas(posts[2].likes)} likes`;
  console.log(userLikes);
});
