Drawable.Abstract('Drawable.Frame', {

    init : function (options) {
        this._super(options);

        this.position({
            x : 10,
            y : 10
        });
        this.size({
            height: 200,
            width: 200
        });
        this._takeSpace();
    },

    draw : function () {
        var pos = this.position();
        var size = this.size();

        var context = this._getContext();
        context.strokeRect(pos.x, pos.y, size.width, size.height);
        return this;
    },

    _takeSpace : function () {
        var pos = this.position();
        var size = this.size();

        for (var i = pos.x; i < size.width; i++) {
            try {
                this._space.takeCell(i, pos.y, this);
            } catch (e) {
                console.log(e.message);
            }
            try {
                this._space.takeCell(i + size.height, pos.y, this);
            } catch (e) {
                console.log(e.message);
            }
        };
        for (var j = pos.y; j < size.height; j++) {
            try {
                this._space.takeCell(pos.x, j, this);
            } catch (e) {
                console.log(e.message);
            }
            try {
                this._space.takeCell(pos.x, j + size.width, this);
            } catch (e) {
                console.log(e.message);
            }
        }

    }

});
