$.Class('Debug', {

    l : function (masseges, name) {
        if ($.type(masseges) !== 'array') {
            masseges = [masseges];
        }
        if (!name) {
            name = 'Some log.';
        }
        console.log('Name: ' + name);
        console.log.apply(console, masseges);
        console.log('========================');
    },

    e : function (error) {
        console.error(error);
    }

}, {});

var _D = Debug;
