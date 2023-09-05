const images = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117",
  },
  { url: "https://avatars.githubusercontent.com/u/6759280?v=4" },
  {
    url: "https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png",
  },
  {
    url: "https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9VhASGSfFj_77fZ748zUwZZ0HbLv35YYrd93apRFEjDlRDUcoBJlyiiLfzxymVaJMp0&usqp=CAU",
  },
  { url: "https://netflixx-8b384.firebaseapp.com/assets/user5.png" },
  {
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png",
  },
  {
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png",
  },
  {
    url: "https://i.pinimg.com/originals/a7/50/d6/a750d6fe9faf923f57feaa2cfa5cfc88.png",
  },
  {
    url: "https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg",
  },
];

export const filterAvatars = (screens, stateList, stateitem) => {
  let listTemt = [];
  const screenUrls = screens?.map((screen) => screen.imageScreen);
  listTemt = images.filter((image) => !screenUrls?.includes(image.url));
  {
    stateList ? stateList(listTemt) : null;
  }
  const randomNumber = Math.ceil(Math.random() * listTemt.length - 1);
  // console.log(listTemt[randomNumber].url);
  {
    stateitem ? stateitem(listTemt[randomNumber].url) : null;
  }
};
