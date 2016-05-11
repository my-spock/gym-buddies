angular.module('gym-buddies')
    .component("chatComponent", {
        templateUrl: "app/components/chat/chat.html",
        controller: ChatController
    });
    
    function ChatController($firebaseArray, FBREF) {
        var cc = this;
        var messageRef = new Firebase(FBREF + "chats");
        
        cc.chatList = $firebaseArray(messageRef);
        
        cc.sendMessage = function(message) {
            cc.chatList.$add(message);
        }        
    }