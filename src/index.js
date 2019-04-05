window.onload = (
    function wAndH() {
        let scale = screen.width / 1366;
        let toScale = 'scale('+ scale + ')';
        comic.style
            .setProperty('transform', toScale)
    }
) 
/* 1340 / 640 = 2.09 */
/* 1366 / 768 = 1.175*/

