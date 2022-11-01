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

      replayContainerD=document.createElement("div");
      replayContainerD.setAttribute("class","replayContainerD");
      commentBlock1.appendChild(replayContainerD);

      replayIconD=document.createElement("span");
      replayIconD.setAttribute("class","replayIcon");
      replayContainerD.appendChild(replayIconD);

      replayD=document.createElement("div");
      replayD.setAttribute("class","replay");
      replayD.innerText="Replay";
      replayContainerD.appendChild(replayD);

      replieBox=document.createElement("section");
      replieBox.setAttribute("class","replieBox");
      main.appendChild(replieBox);

      commentBlock5=document.createElement("div");
      commentBlock5.setAttribute("class","commentBlock5");
      commentContainer.appendChild(commentBlock5);
      commentContainer.appendChild(commentBlock3);

      commentBlock5.appendChild(commentBlock1);
      commentBlock5.appendChild(commentBlock2);

      
      newComment(main,"newCommentContainer");

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
        

        /*Desktop Modifications*/

        replayContainerD=document.createElement("div");
        replayContainerD.setAttribute("class","replayContainerD");
        commentBlock1.appendChild(replayContainerD);

        replayIconD=document.createElement("span");
        replayIconD.setAttribute("class","replayIcon");
        replayContainerD.appendChild(replayIconD);
  
        replayD=document.createElement("div");
        replayD.setAttribute("class","replay");
        replayD.innerText="Replay";
        replayContainerD.appendChild(replayD);

        commentBlock5=document.createElement("div");
        commentBlock5.setAttribute("class","commentBlock5");
        commentContainer.appendChild(commentBlock5);
        commentContainer.appendChild(commentBlock3);
  
        commentBlock5.appendChild(commentBlock1);
        commentBlock5.appendChild(commentBlock2);        
        
        replayContainerD.addEventListener("click",renderNewComment);
        replayContainer.addEventListener("click",renderNewComment);
        

        if (replie.user.username==data.currentUser.username) {
          
          commentBlock4=document.createElement("div");
          commentBlock4.setAttribute("class","commentBlock4")
          commentBlock3.appendChild(commentBlock4);

          commentBlock4D=document.createElement("div");
          commentBlock4D.setAttribute("class","commentBlock4D")
          commentBlock1.appendChild(commentBlock4D);
                
          replay.innerText="Edit";
          replayIcon.setAttribute("class","editIcon");
          replayContainer.setAttribute("class","editContainer");
          
          replayD.innerText="Edit";
          replayIconD.setAttribute("class","editIcon");
          replayContainerD.setAttribute("class","editContainer");

          deleteContainer=document.createElement("div");
          deleteContainer.setAttribute("class","deleteContainer");
          commentBlock4.appendChild(deleteContainer);

          deleteContainerD=document.createElement("div");
          deleteContainerD.setAttribute("class","deleteContainer");
          commentBlock4D.appendChild(deleteContainerD);

          deleteIcon=document.createElement("span");
          deleteIcon.setAttribute("class","deleteIcon");
          deleteContainer.appendChild(deleteIcon);

          deleteIconD=document.createElement("span");
          deleteIconD.setAttribute("class","deleteIcon");
          deleteContainerD.appendChild(deleteIconD);
    
          deleteText=document.createElement("div");
          deleteText.setAttribute("class","deleteText");
          deleteText.innerText="Delete";
          deleteContainer.appendChild(deleteText);

          deleteTextD=document.createElement("div");
          deleteTextD.setAttribute("class","deleteText");
          deleteTextD.innerText="Delete";
          deleteContainerD.appendChild(deleteTextD);

          commentBlock4.appendChild(replayContainer);
          commentBlock4D.appendChild(replayContainerD);

          you=document.createElement("div");
          you.setAttribute("class","you");
          you.innerText="you"
          commentBlock1.appendChild(you)

        }

        else {
          newComment(replieBox,"newReplieContainer")
        }
      }
    }

    function newComment(contenedor,clase) {
      
      newCommentContainer=document.createElement("section");
      newCommentContainer.setAttribute("class",clase);
      contenedor.appendChild(newCommentContainer);
  
      newBlock1=document.createElement("input");
      newBlock1.setAttribute("class","newBlock1");
      newBlock1.setAttribute("type","text");
      newBlock1.setAttribute("placeholder","Add a comment...")
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
  
      sendButtonD=document.createElement("button");
      sendButtonD.setAttribute("class","sendButtonD");
      sendButtonD.innerText="SEND";
      newCommentContainer.appendChild(sendButtonD);

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


