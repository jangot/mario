$.Class('Subject.Abstract', {

    _center : null,
    _drawable : null,


    init : function (options) {

        this._center = {
            x : 100,
            y : 100
        }

    },

    draw : function () {
        if (this._drawable) {
            this._drawable.draw();
        }
        return;
    }

});
