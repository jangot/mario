$(function () {
    var canvas = $('<canvas width="' + CONST.AREA_WIDTH + '" height="' + CONST.AREA_WIDTH + '"></canvas>')[0];

    $('body').append(canvas);

    var animator = new Animation();
    var keyboard = new Keyboard();
    var space = new Space();

    var frame = new Drawable.Frame({
        canvas : canvas,
        space : space
    });
    animator.add(frame);

    var ball = new Drawable.Ball({
        canvas : canvas,
        space : space
    });
    ball.vector({
        x:5,
        y:5,
        speed:1
    })
    animator.add(ball);

    animator
        .start()
        .onTik(function () {
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, CONST.AREA_WIDTH, CONST.AREA_WIDTH);
            //ball.move()
        });
    ;



});
