$.Class('Space', {

    _cells : null,

    init : function (options) {
        this._cells = {};
    },

    takeCell : function (x, y, object) {
        var id = this._getIdByCoords(x, y);
        if (this._cells[id]) {
            throw Error('Cell ' + id + ' is full.');
        }
        this._cells[id] = object;
        return this;
    },
    leaveCell : function (x, y) {
        var id = this._getIdByCoords(x, y);
        delete this._cells[id];
        return this;

    },

    isFull : function (x, y) {
        var id = this._getIdByCoords(x, y);
        return Boolean(this._cells[id]);
    },

    _getIdByCoords : function (x, y) {
        return 'X_' + x + '|Y_' + y;
    }
});
