Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        return [Meteor.subscribe('posts'), Meteor.subscribe('comments')];
    }
});

Router.map(function() {
    this.route('postsList', {
        path: '/'
    });

    this.route('postPage', {
        // the path key allows you to add dynamic routes --> the :_id part enables you to do this
        // The special :_id syntax tells the router two things: first, to match any route of the form /posts/xyz/ ,
        // where “xyz” can be anything at all. Second, to put whatever it finds in this “xyz” spot inside an
        // _id property in the router's params array.
        path: '/posts/:_id',

        // this corresponds to the currently matched route, and this.params accesses the named parts of the route
        data: function() {
            console.log(this.params._id)
            return Posts.findOne({
                _id: this.params._id
            });
        }
    });

    this.route('postSubmit', {
        path: '/submit'
    });

    this.route('/posts/:_id/edit', {
        name: 'postEdit',
        data: function() {
            console.log(this.params._id);
            return Posts.findOne({
                _id: this.params._id
            });
        }
    });


});

var requireLogin = function() {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}

// Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {
    only: 'postSubmit'
});