const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21492,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 12502,
  },
  {
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

let userAvatar = document.querySelector(".user-avatar");
let titleUser = document.querySelector(".title-user");
let titleInfo = document.querySelector(".title-info");
let userPost = document.querySelector(".user-post");
let userPostSubtitleLikes = document.querySelector(".user-post-subtitle-likes");
//let userPostSubtitleCaption = document.querySelector(".user-post-subtitle-caption");
let userCaptionUsername = document.querySelector(".user-caption-username");
let userCaptionText = document.querySelector(".user-caption-text");

function renderPosts(itemObj) {
  userAvatar.src = itemObj.avatar;
  //userAvatar.outerHTML = `<img class="user-avatar" src="${itemObj.avatar}" />`;
  titleUser.textContent = `${itemObj.name}`;
  titleInfo.textContent = `${itemObj.location}`;

  userPost.src = itemObj.post;
  //userPost.outerHTML = `<img class="user-post" src="${itemObj.post}" />`;
  userPostSubtitleLikes.textContent = `${numberWithCommas(
    itemObj.likes
  )} likes`;

  {
    /* <p class="user-post-subtitle-caption"><span class="user-caption">vincey1853</span>just text lol</p> */
  }
  userCaptionUsername.textContent = `${itemObj.username} `;
  userCaptionText.textContent = itemObj.comment;

  //userPostSubtitleCaption.innerHTML = userCaption.textContent;

  //userPostSubtitleCaption.outerHTML = `<p class="user-post-subtitle-caption"><span class="user-caption">${itemObj.username}</span> ${itemObj.comment}</p> `;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

posts.map((itemObj) => {
  renderPosts(itemObj);
  console.log(itemObj);
});
