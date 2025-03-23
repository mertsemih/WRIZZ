document.addEventListener('DOMContentLoaded', () => {
    const rizzText = document.querySelector('.rizz-text');
    const container = document.querySelector('.container');
    const soundToggle = document.getElementById('soundToggle');
    const skibidiButton = document.getElementById('skibidiButton');
    const pullUpButton = document.getElementById('pullUpButton');
    const flashEffect = document.querySelector('.flash-effect');
    const body = document.body;
    let isMuted = false;
    let currentAudio = null;
    let isPlaying = false;
    let flashInterval = null;
    
    // Dalgalı arka plan oluştur
    const wave = document.createElement('div');
    wave.className = 'wave';
    document.body.appendChild(wave);

    // Ses kontrolü
    soundToggle.addEventListener('click', () => {
        isMuted = !isMuted;
        soundToggle.classList.toggle('muted');
        soundToggle.textContent = isMuted ? '🔇' : '🔊';
        
        // Eğer ses çalıyorsa durdur
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
            isPlaying = false;
            body.classList.remove('flash');
            flashEffect.classList.remove('active');
            clearInterval(flashInterval);
        }
    });

    // Flash efekti fonksiyonu
    function triggerFlash() {
        flashEffect.classList.add('active');
        body.classList.add('flash');
        setTimeout(() => {
            flashEffect.classList.remove('active');
            body.classList.remove('flash');
        }, 100);
    }

    // Skibidi butonu için ses ve efekt fonksiyonu
    function playSkibidi() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
            isPlaying = false;
            body.classList.remove('flash');
            flashEffect.classList.remove('active');
            clearInterval(flashInterval);
        } else if (!isMuted) {
            currentAudio = new Audio('https://www.myinstants.com/media/sounds/skibidi-toilet.mp3');
            currentAudio.play();
            isPlaying = true;
            
            // Ses çalarken flash efektini tetikle
            flashInterval = setInterval(() => {
                if (isPlaying) {
                    triggerFlash();
                } else {
                    clearInterval(flashInterval);
                }
            }, 200);

            // Ses bittiğinde efektleri durdur
            currentAudio.addEventListener('ended', () => {
                isPlaying = false;
                body.classList.remove('flash');
                flashEffect.classList.remove('active');
                clearInterval(flashInterval);
                skibidiButton.classList.remove('active');
            });
        }
    }

    // Pull Up butonu için ses ve efekt fonksiyonu
    function playPullUp() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
            isPlaying = false;
            body.classList.remove('flash');
            flashEffect.classList.remove('active');
            clearInterval(flashInterval);
        } else if (!isMuted) {
            currentAudio = new Audio('https://www.myinstants.com/media/sounds/ok-i-pull-up.mp3');
            currentAudio.play();
            isPlaying = true;
            
            // Ses çalarken flash efektini tetikle
            flashInterval = setInterval(() => {
                if (isPlaying) {
                    triggerFlash();
                } else {
                    clearInterval(flashInterval);
                }
            }, 200);

            // Ses bittiğinde efektleri durdur
            currentAudio.addEventListener('ended', () => {
                isPlaying = false;
                body.classList.remove('flash');
                flashEffect.classList.remove('active');
                clearInterval(flashInterval);
                pullUpButton.classList.remove('active');
            });
        }
    }

    // Skibidi butonu tıklama olayı
    skibidiButton.addEventListener('click', () => {
        skibidiButton.classList.add('active');
        playSkibidi();
    });

    // Pull Up butonu tıklama olayı
    pullUpButton.addEventListener('click', () => {
        pullUpButton.classList.add('active');
        playPullUp();
    });

    // Tıklama efekti ve ses
    rizzText.addEventListener('click', () => {
        container.classList.add('shake');
        
        // Eğer ses çalıyorsa durdur, çalmıyorsa ve sessiz değilse başlat
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
            isPlaying = false;
            body.classList.remove('flash');
            flashEffect.classList.remove('active');
            clearInterval(flashInterval);
        } else if (!isMuted) {
            currentAudio = new Audio('https://www.myinstants.com/media/sounds/w-rizz.mp3');
            currentAudio.play();
            isPlaying = true;
            
            // Ses çalarken flash efektini tetikle
            flashInterval = setInterval(() => {
                if (isPlaying) {
                    triggerFlash();
                } else {
                    clearInterval(flashInterval);
                }
            }, 200);

            // Ses bittiğinde efektleri durdur
            currentAudio.addEventListener('ended', () => {
                isPlaying = false;
                body.classList.remove('flash');
                flashEffect.classList.remove('active');
                clearInterval(flashInterval);
            });
        }
        
        setTimeout(() => {
            container.classList.remove('shake');
        }, 500);
    });
}); 
