const top = positionToInteger(rock.style.top)

  rock.style.height = '20px'
  dodger.style.height = '20px'

  // rocks are 20px high
  // DODGER is 20px high
  // GAME_HEIGHT - 20 - 20 = 360px;

  if (top > 360) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left)
    const dodgerLeftEdge = positionToInteger(DODGER.style.left);

    // FIXME: The DODGER is 40 pixels wide -- how do we get the right edge?
    const dodgerRightEdge = 0;
    const dodgerRightEdge = dodgerLeftEdge + 40;

    const rockLeftEdge = positionToInteger(rock.style.left)
    const rockLeftEdge = positionToInteger(rock.style.left);

    // FIXME: The rock is 20 pixel's wide -- how do we get the right edge?
    const rockRightEdge = 0;

    if (false /**
               * Think about it -- what's happening here?
               * There's been a collision if one of three things is true:
               * 1. The rock's left edge is < the DODGER's left edge,
               *    and the rock's right edge is > the DODGER's left edge;
               * 2. The rock's left edge is > the DODGER's left edge,
               *    and the rock's right edge is < the DODGER's right edge;
               * 3. The rock's left edge is < the DODGER's right edge,
               *    and the rock's right edge is > the DODGER's right edge.
               */) {
    const rockRightEdge = rockLeftEdge + 20;

    if ( rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerLeftEdge || rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge || rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerRightEdge)

    {
      return true
    }
  }


  GAME.appendChild(rock);



  function moveRock() {
    // implement me!
    // (use the comments below to guide you!)

    rock.style.top = `${top += 2}px`

    if (checkCollision(rock)) {
      return endGame();
    }

    if(top < GAME_HEIGHT){
      window.requestAnimationFrame(moveRock);
    } else {
      rock.remove();
    }




  // We should kick off the animation of the rock around here.

        window.requestAnimationFrame(moveRock);
  // Add the rock to ROCKS so that we can remove all rocks
  // when there's a collision.
  ROCKS.push(rock)

function endGame() {
  clearInterval(gameInterval);

  for(var i = 0; i < ROCKS.length; i++){
    var rock1 = ROCKS[i];

    rock1.remove();
  }
  alert("YOU LOSE!");

}

function moveDodger(e) {
function moveDodger(event) {
  if (event.which == 37){
    event.preventDefault();
    event.stopPropagation();
    moveDodgerLeft();
  } else if(event.which == 39){
    event.preventDefault();
    event.stopPropagation();
    moveDodgerRight();
  }

  //if()
  // implement me!


function moveDodgerLeft() {
  window.requestAnimationFrame(function(){
    // var leftNumbers = dodger.style.left.replace('px', '')
  var left = positionToInteger(DODGER.style.left)

  if (left > 0) {
    dodger.style.left = `${left - 4}px`
  }
  })
  // implement me!


function moveDodgerRight() {
  window.requestAnimationFrame(function(){
    var left = positionToInteger(DODGER.style.left)
    if (left < 360) {
    dodger.style.left = `${left + 4}px`
  }
  })
  // implement me!
