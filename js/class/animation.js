$.Class('Animation', {

    _items : null,
    _interval : null,
    _delay : null,
    _onTik : null,

    init : function () {
        this._items = [];
        this._delay = 100;
        this._onTik = [];
    },

    add : function (item) {
        contract(arguments).params('object').end();
        if ($.type(item.draw) !== 'function') {
            return;
        }
        this.remove(item);
        this._items.push(item);
        return this;
    },

    remove : function (item) {
        contract(arguments).params('object').end();
        for (var i in this._items) {
            if (item == this._items[i]) {
                this._items.splice(i, 1);
            }
        }
        return this;
    },

    start : function () {
        if (this._interval) {
            this.stop();
        }
        this._interval = setInterval(function () {
            this.tik();
        }.bind(this), this._delay);
        return this;
    },

    stop : function () {
        clearInterval(this._interval);
        return this;
    },

    draw : function () {
        for (var i in this._items) {
            try {
                this._items[i].draw();
            } catch (e) {
                Debug.e(e);
            }
        }
        return this;
    },

    tik : function () {
        for (var i in this._onTik) {
            try {
                this._onTik[i]();
            } catch (e) {
                Debug.e(e);
            }
        }
        this.draw();
        return this;
    },

    onTik : function (cb) {
        contract(arguments).params('function').end();
        this._onTik.push(cb);
        return this;
    }

})
