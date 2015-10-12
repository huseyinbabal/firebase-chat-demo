'use strict';

/**
 * @ngdoc service
 * @name firebaseChatDemoApp.chat
 * @description
 * # chat
 * Factory in the firebaseChatDemoApp.
 */
angular.module('firebaseChatDemoApp')
  .factory('chat', ["$firebaseArray", function ($firebaseArray) {


    var ref = new Firebase("https://angular-firebase-gg.firebaseIO.com");
    var fireref = $firebaseArray(ref);

    return {
      removeMessage:function (item){
        fireref.$remove(item).then(function(ref) {
          console.log("Removed")
        });


      },
      sendMessage: function (message) {
        fireref.$add({ message: message}).then(function(ref) {
          console.log("added record with id " + ref.key);
        });

      },
      getMessages:function (){
        return fireref;
      }
    };
  }]);
