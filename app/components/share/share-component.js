angular.module('gym-buddies')
    .component('shareComponent', {
        templateUrl: 'app/components/share/share.html',
        controller: ShareController
    });
    
    function ShareController($firebaseArray, FBREF) {
        var sc = this;
        var postRef = new Firebase(FBREF + 'posts');
        sc.postList = $firebaseArray(postRef);
        
        sc.addPost = function(post) {
            // post.author = AuthController.member.username.split(' ')[0];
            if (post.$id) {
                sc.postList.$save(post);
            } else {
                sc.postList.$add(post);
            }
        }
    }
