import imagejuliusomo from "../src/assets/images/avatars/image-juliusomo.png";
import imageamyrobson from "../src/assets/images/avatars/image-amyrobson.png";
import imagemaxblagun from "../src/assets/images/avatars/image-maxblagun.png";
import imageramsesmiron from "../src/assets/images/avatars/image-ramsesmiron.png";


export const data = 
{
  "currentUser": {
    "image": { 
      "png": imagejuliusomo
    },
    "username": "juliusomo"
  },

  "userList": [
    {"username":"amyrobson","image":imageamyrobson},
    {"username":"juliusomo","image":imagejuliusomo},
    {"username":"maxblagun","image":imagemaxblagun},
    {"username":"ramsesmiron","image":imageramsesmiron}
],
  "comments": [
    {
      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "2023-04-09T01:35:00",
      "score": 12,
      "user": {
        "image": { 
          "png": imageamyrobson
        },
        "username": "amyrobson"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": "2023-04-25T03:40:05",
      "score": 5,
      "user": {
        "image": { 
          "png": imagemaxblagun
        },
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "2023-05-02T05:24:35",
          "score": 4,
          "replyingTo": "maxblagun",
          "user": {
            "image": { 
              "png": imageramsesmiron
            },
            "username": "ramsesmiron"
          }
        },
        {
          "id": 4,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": "2023-05-07T01:33:33",
          "score": 2,
          "replyingTo": "ramsesmiron",
          "user": {
            "image": { 
              "png": imagejuliusomo
            },
            "username": "juliusomo"
          }
        }
      ]
    }
  ]
}