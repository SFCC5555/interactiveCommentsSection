let main = document.querySelector("main");

fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(data.comments)

    for (comment of data.comments) {
      commentContainer=document.createElement("section");
      commentContainer.setAttribute("class","commentContainer");
      main.appendChild(commentContainer);

      commentBlock1=document.createElement("div");
      commentBlock1.setAttribute("class","commentBlock1");
      commentContainer.appendChild(commentBlock1);

      userPicture=document.createElement("img");
      userPicture.setAttribute("class","userPicture");
      userPicture.setAttribute("alt","userPicture");
      userPicture.setAttribute("src",comment.user.image.png);
      commentBlock1.appendChild(userPicture);

      userName=document.createElement("h3");
      userName.setAttribute("class","userName");
      userName.innerText=comment.user.username;
      commentBlock1.appendChild(userName)

      commentDate=document.createElement("p");
      commentDate.setAttribute("class","commentDate");
      commentDate.innerText=comment.createdAt;
      commentBlock1.appendChild(commentDate);

      commentBlock2=document.createElement("div");
      commentBlock2.setAttribute("class","commentBlock2");
      commentContainer.appendChild(commentBlock2);

      commentText=document.createElement("p");
      commentText.setAttribute("class","commentText");
      commentText.innerText=comment.content;
      commentBlock2.appendChild(commentText);

      commentBlock3=document.createElement("div");
      commentBlock3.setAttribute("class","commentBlock3");
      commentContainer.appendChild(commentBlock3);

      scoreContainer=document.createElement("div");
      scoreContainer.setAttribute("class","scoreContainer");
      commentBlock3.appendChild(scoreContainer);

      plusScore=document.createElement("span");
      plusScore.setAttribute("class","plusScore");
      scoreContainer.appendChild(plusScore);

      score=document.createElement("div");
      score.setAttribute("class","score");
      score.innerText=comment.score;
      scoreContainer.appendChild(score);
      
      
      minusScore=document.createElement("span");
      minusScore.setAttribute("class","minusScore");
      scoreContainer.appendChild(minusScore);

      replayContainer=document.createElement("div");
      replayContainer.setAttribute("class","replayContainer");
      commentBlock3.appendChild(replayContainer);

      replayIcon=document.createElement("span");
      replayIcon.setAttribute("class","replayIcon");
      replayContainer.appendChild(replayIcon);

      replay=document.createElement("div");
      replay.setAttribute("class","replay");
      replay.innerText="Replay"
      replayContainer.appendChild(replay)


    }


    })


/*<section class="commentContainer">
  <div class="commentBlock1">
    <img alt="userPicture" class="userPicture" src="./images/avatars/image-amyrobson.png">
    <h3 class="userName">amyrobson</h3>
    <p class="commentDate">1 month ago</p>
  </div>
  <div class="commentBlock2">
    <p class="commentText">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</p>
  </div>
  <div class="commentBlock3">
    <div class="scoreContainer">
      <span class="plusScore"></span>
      <div class="score">12</div>
      <span class="minusScore"></span>
    </div>

    <div class="replayContainer">
      <span class="replayIcon"></span>
      <div class="replay">Replay</div>
    </div>        
  </div>
</section>*/