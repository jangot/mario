$.Class('Drawable.Abstract', {

    _canvas : null,
    _space : null,

    _position : null,
    _size : null,
    _vector : null,
    _animation : null,

    init : function (options) {
        this._canvas = options.canvas;
        this._space = options.space;
        this._position = {
            x : 0,
            y : 0
        }
        this._size = {
            height : 0,
            width : 0
        }
        this._vector = {
            x : 0,
            y : 0,
            speed : 0
        }
    },

    draw : function () {
        throw Error('Method is not implemented.');
    },

    position : function (position) {
        if (position) {
            this._setPosition(position);
            return this;
        }
        return this._position;
    },

    size : function (size) {
        if (size) {
            this._setSize(size);
            return this;
        }
        return this._size;
    },

    vector : function (vector) {
        if (vector) {
            this._setVector(vector);
            return this;
        }
        return this._vector;
    },

    getNextPosition : function () {
        var vector = this.vector();
        var vX = vector.x / vector.speed;
        var vY = vector.y / vector.speed;

        var pos = this.position();

        var newX = pos.x + vX;
        var newY = pos.y + vY;
        return {
            x : newX,
            y : newY
        }
    },

    move : function () {
        this.position(this.getNextPosition());
    },

    canvas : function (canvas) {
        if(canvas) {
            this._canvas = canvas;
            return this;
        }
        return this._canvas;
    },

    isCross : function (object) {
        var XColl=false;
        var YColl=false;

        var position1 = this.position();
        var position2 = object.position();

        if (
            (position1.x + this.size().width >= position2.x)
                && (position1.x <= position2.x + object.size().width)
            ) XColl = true;
        if (
            (position1.y + this.size().height >= position2.y)
                && (position1.y <= position2.y + object.size().height)
            ) YColl = true;
        return (XColl&YColl);
    },


    _setPosition : function (position) {
        if (position.x) {
            this._position.x = position.x;
        }
        if (position.y) {
            this._position.y = position.y;
        }
        return this;
    },

    _setSize : function (size) {
        if (size.height) {
            this._size.height = size.height;
        }
        if (size.width) {
            this._size.width = size.width;
        }
    },

    _setVector : function (vector) {
        if (vector.x) {
            this._vector.x = vector.x;
        }
        if (vector.y) {
            this._vector.y = vector.y;
        }
        if (vector.speed) {
            this._vector.speed = vector.speed;
        }
        return this;
    },

    _getContext : function () {
        var context = this._canvas.getContext('2d');
        context.fillStyle = '000000';
        return context;
    }

});
