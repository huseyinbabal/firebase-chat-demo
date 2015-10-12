'use strict';

/**
 * @ngdoc function
 * @name firebaseChatDemoApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * Controller of the firebaseChatDemoApp
 */
angular.module('firebaseChatDemoApp')
  .controller('ChatCtrl', ["chat",function (chat) {
    var vm = this;
    vm.messages = chat.getMessages();

    vm.remove = function (id){
      chat.removeMessage(id);
    };
    vm.send = function(){
      vm.messages.push(chat.sendMessage(vm.message));
    }
  }]);
