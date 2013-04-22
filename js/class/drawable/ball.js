Drawable.Abstract('Drawable.Ball', {

    init : function (options) {
        this._super(options);

        this
            .size({
                width: 3,
                height: 3
            })
            .position({
                x: 50,
                y: 70
            })
        ;
    },

    move : function () {
        var nextPosition = this.getNextPosition();
        var position = this.position();



        var vector = this.vector();
        if (vector.x > 0) {

        }
    },

    _checkTopSpace : function () {

    },

    _checkBottonSpace : function () {

    },

    _checkLeftSpace : function () {

    },

    _checkRightSpace : function () {

    },

    draw : function () {
        var pos = this.position();
        var size = this.size();

        var context = this._getContext();

        context.fillRect(pos.x, pos.y, size.width, size.height);
    }

});
