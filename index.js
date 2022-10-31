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
      replay.innerText="Replay";
      replayContainer.appendChild(replay);

      replieBox=document.createElement("section");
      replieBox.setAttribute("class","replieBox");
      main.appendChild(replieBox);

      for (replie of comment.replies) {

        commentContainer=document.createElement("section");
        commentContainer.setAttribute("class","replieContainer");
        replieBox.appendChild(commentContainer);
  
        commentBlock1=document.createElement("div");
        commentBlock1.setAttribute("class","commentBlock1");
        commentContainer.appendChild(commentBlock1);
  
        userPicture=document.createElement("img");
        userPicture.setAttribute("class","userPicture");
        userPicture.setAttribute("alt","userPicture");
        userPicture.setAttribute("src",replie.user.image.png);
        commentBlock1.appendChild(userPicture);
  
        userName=document.createElement("h3");
        userName.setAttribute("class","userName");
        userName.innerText=replie.user.username;
        commentBlock1.appendChild(userName)
  
        commentDate=document.createElement("p");
        commentDate.setAttribute("class","commentDate");
        commentDate.innerText=replie.createdAt;
        commentBlock1.appendChild(commentDate);
  
        commentBlock2=document.createElement("div");
        commentBlock2.setAttribute("class","commentBlock2");
        commentContainer.appendChild(commentBlock2);
        
        commentText=document.createElement("p");
        commentText.setAttribute("class","commentText");
        commentText.innerHTML=  `<span class="replyTo">@${replie.replyingTo}</span> ${replie.content}`
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
        score.innerText=replie.score;
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
        replay.innerText="Replay";
        replayContainer.appendChild(replay);

        if (replie.user.username==data.currentUser.username) {
          
          commentBlock4=document.createElement("div");
          commentBlock4.setAttribute("class","commentBlock4")
          commentBlock3.appendChild(commentBlock4);
               
          replay.innerText="Edit";
          replayIcon.setAttribute("class","editIcon");
          replayContainer.setAttribute("class","editContainer");

          deleteContainer=document.createElement("div");
          deleteContainer.setAttribute("class","deleteContainer");
          commentBlock4.appendChild(deleteContainer);

          deleteIcon=document.createElement("span");
          deleteIcon.setAttribute("class","deleteIcon");
          deleteContainer.appendChild(deleteIcon);
    
          deleteText=document.createElement("div");
          deleteText.setAttribute("class","deleteText");
          deleteText.innerText="Delete";
          deleteContainer.appendChild(deleteText);

          commentBlock4.appendChild(replayContainer);

          you=document.createElement("div");
          you.setAttribute("class","you");
          you.innerText="you"
          commentBlock1.appendChild(you)

        }
      }
    }

    newCommentContainer=document.createElement("section");
    newCommentContainer.setAttribute("class","commentContainer");
    main.appendChild(newCommentContainer);

    newBlock1=document.createElement("div");
    newBlock1.setAttribute("class","newBlock1");
    newBlock1.innerText="Add a comment..."
    newCommentContainer.appendChild(newBlock1);

    newBlock2=document.createElement("div");
    newBlock2.setAttribute("class","newBlock2");
    newCommentContainer.appendChild(newBlock2);

    currentUserPicture=document.createElement("img");
    currentUserPicture.setAttribute("class","userPicture");
    currentUserPicture.setAttribute("alt","userPicture");
    currentUserPicture.setAttribute("src",data.currentUser.image.png);
    newBlock2.appendChild(currentUserPicture);

    sendButton=document.createElement("button");
    sendButton.setAttribute("class","sendButton");
    sendButton.innerText="SEND";
    newBlock2.appendChild(sendButton);


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