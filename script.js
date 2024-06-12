        // JavaScript to enable full screen mode
        document.getElementById('fullscreen-btn').addEventListener('click', function(changescreen) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
                document.documentElement.msRequestFullscreen();
            }

            openFullscreenButton.style.display = 'none';
            submitFormButton.style.display = 'inline-block';
        });

        // Listen for fullscreen change events
        document.addEventListener('fullscreenchange', function() {
            if (document.fullscreenElement) {
                console.log('Fullscreen mode entered');
            } else {
                console.log('Fullscreen mode exited');
            }

            openFullscreenButton.style.display = 'inline-block';
        submitFormButton.style.display = 'none';
        });

        // For other browsers' fullscreen change events
        document.addEventListener('webkitfullscreenchange', function() {
            if (document.webkitFullscreenElement) {
                console.log('Fullscreen mode entered');
            } else {
                console.log('Fullscreen mode exited');
            }
        });

        document.addEventListener('mozfullscreenchange', function() {
            if (document.mozFullScreenElement) {
                console.log('Fullscreen mode entered');
            } else {
                console.log('Fullscreen mode exited');
            }
        });

        document.addEventListener('msfullscreenchange', function() {
            if (document.msFullscreenElement) {
                console.log('Fullscreen mode entered');
            } else {
                console.log('Fullscreen mode exited');
            }
        });

        //courtesy of BoogieJack.com
function killCopy(e){
return false
}
function reEnable(){
return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
document.onmousedown=killCopy
document.onclick=reEnable
}