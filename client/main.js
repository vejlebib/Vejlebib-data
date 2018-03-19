import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

if(Meteor.isClient){
    // client code goes here
}

if(Meteor.isServer){
    // server code goes here
}

Router.configure({
    layoutTemplate: 'master'
});
Router.route('/login');
Router.route('/register');
Router.route('/dashboard');
Router.route('/', {
    template: 'main'
});
