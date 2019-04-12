window.onload = (
    function wAndH() {
        const title = document.getElementById('comic');
        let scale = screen.width / 1360;
        let toScale = 'scale(' + scale + 'px)';
        title.style
            .setProperty('transform', toScale)
    }
)


/* 1340 / 640 = 2.09 */
/* 1366 / 768 = 1.175*/

