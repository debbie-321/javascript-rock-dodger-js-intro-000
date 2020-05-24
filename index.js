const START = document.getElementById('start')

var gameInterval = null

/**
 * Be aware of what's above this line,
 * but all of your work should happen below.
@@ -29,25 +28,18 @@ function checkCollision(rock) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left)

    // FIXME: The DODGER is 40 pixels wide -- how do we get the right edge?
    const dodgerRightEdge = 0;
    const dodgerRightEdge = dodgerLeftEdge+40;

    const rockLeftEdge = positionToInteger(rock.style.left)

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
      return true
    }
    const rockRightEdge = rockLeftEdge+20;

    return (
      (rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerLeftEdge) ||
      (rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge) ||
      (rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerRightEdge)
    )
  }
}

@@ -58,56 +50,72 @@ function createRock(x) {
  rock.style.left = `${x}px`

  // Hmmm, why would we have used `var` here?
  var top = 0

  rock.style.top = top
  var top = rock.style.top = 0

  /**
   * Now that we have a rock, we'll need to append
   * it to GAME and move it downwards.
   */
   GAME.appendChild(rock);


  /**
   * This function moves the rock. (2 pixels at a time
   * seems like a good pace.)
   */

  function moveRock() {
    rock.style.top = `${top += 2}px`;
    // implement me!
    // (use the comments below to guide you!)
    /**
     * If a rock collides with the DODGER,
     * we should call endGame().
     */

    /**
     * Otherwise, if the rock hasn't reached the bottom of
     * the GAME, we want to move it again.
     */
      /**
       * If a rock collides with the DODGER,
       * we should call endGame().
       */

    if (checkCollision(rock)) {
      return endGame();
    }
    /**
     * But if the rock *has* reached the bottom of the GAME,
     * we should remove the rock from the DOM.
     */
  }

    if (top < GAME_HEIGHT){
      window.requestAnimationFrame(moveRock);
    }
    /**
    * But if the rock *has* reached the bottom of the GAME,
    * we should remove the rock from the DOM.
    */
    else {
      rock.remove();
    }
}

  // We should kick off the animation of the rock around here.
  window.requestAnimationFrame(moveRock);

  // Add the rock to ROCKS so that we can remove all rocks
  // when there's a collision.
  ROCKS.push(rock)
  ROCKS.push(rock);

  // Finally, return the rock element you've created.
  return rock
  return rock;
}


/**
 * End the game by clearing `gameInterval`,
 * removing all ROCKS from the DOM,
 * and removing the `moveDodger` event listener.
 * Finally, alert "YOU LOSE!" to the player.
 */
function endGame() {
  clearInterval(gameInterval);
  ROCKS.forEach(function(rock) {rock.remove()});
  document.removeEventListener("keydown", moveDodger);
  return alert("YOU LOSE!");
}

function moveDodger(e) {
@@ -119,6 +127,17 @@ function moveDodger(e) {

   if (e.which == LEFT_ARROW) {
     moveDodgerLeft();
     e.preventDefault();
     e.stopPropagation();
   }

   if (e.which == RIGHT_ARROW) {
     moveDodgerRight();
     e.preventDefault();
     e.stopPropagation();
   }
}

function moveDodgerLeft() {
@@ -127,6 +146,12 @@ function moveDodgerLeft() {
   * This function should move DODGER to the left
   * (mabye 4 pixels?). Use window.requestAnimationFrame()!
   */
   var leftString = dodger.style.left.replace('px', '');
   var leftInt = parseInt(leftString);

   if (leftInt > 0) {
     dodger.style.left = `${leftInt-10}px`;
   }
}

function moveDodgerRight() {
@@ -135,6 +160,12 @@ function moveDodgerRight() {
   * This function should move DODGER to the right
   * (mabye 4 pixels?). Use window.requestAnimationFrame()!
   */
   var leftString = dodger.style.left.replace('px', '');
   var leftInt = parseInt(leftString);

   if (leftInt < 360) {
     dodger.style.left = `${leftInt+10}px`;
   }
}

/**
@@ -147,10 +178,9 @@ function positionToInteger(p) {

function start() {
  window.addEventListener('keydown', moveDodger)

  START.style.display = 'none'

  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
  }, 1000)
  }, 1000);
}
