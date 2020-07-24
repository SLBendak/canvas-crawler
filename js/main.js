console.log('hello');

document.addEventListener('DOMContentLoaded', () => {
    //                     DOM REFS
    // the movement tag
    let movementDisplay = document.getElementById('movement');
    // canvas
    let game = document.getElementById('game');

    //                  CANVAS CONFIGS
    // set some canvas configs
    game.setAttribute('height', 400)
    game.setAttribute('width', 800)
    // context
    let ctx = game.getContext('2d');
   

    const drawBox = (x, y, size, color) => {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, size, size);
    }
    drawBox(200, 100, 200, 'pink');
    //                    DRAW A BOX
    // set a fill color
    // ctx.fillStyle = 'blue';
    // // set a line color
    // ctx.strokeStyle = 'orange';
    // // set a line width
    // ctx.lineWidth = 5;
    // // call the fillRect to draw the filled square
    // ctx.fillRect(10, 10, 100, 100);
    // // call strokeRect to draw the line rectangle
    // ctx.strokeRect(10, 10, 100, 100);

});