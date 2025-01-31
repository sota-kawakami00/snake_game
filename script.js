// カスタムカーソルの設定
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    
    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    });
}

// テキストのホバーエフェクト設定
function initWobbleText() {
    const textElements = document.querySelectorAll('.glow, .card h2, .card p, .nav-button, .explore-btn');
    
    textElements.forEach(element => {
        const text = element.textContent;
        const wrappedText = [...text].map(char => 
            char === ' ' ? ' ' : `<span class="wobble-text">${char}</span>`
        ).join('');
        element.innerHTML = wrappedText;
    });
}

// 星の生成
function createStars() {
    const stars = document.querySelector('.stars');
    
    // 通常の星を生成
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        stars.appendChild(star);
    }
    
    // 流れ星を生成
    setInterval(() => {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.top = `${Math.random() * 50}%`;
        shootingStar.style.left = `${Math.random() * 100}%`;
        stars.appendChild(shootingStar);
        
        // アニメーション終了後に要素を削除
        setTimeout(() => {
            shootingStar.remove();
        }, 3000);
    }, 4000);
}

// 星のきらめき効果
function twinkleStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        setInterval(() => {
            const opacity = Math.random() * 0.5 + 0.5;
            star.style.opacity = opacity;
        }, Math.random() * 5000 + 1000);
    });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Explore button effect
function initExploreButton() {
    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', createParticles);
    }
}

// パーティクルエフェクト
function createParticles() {
    const particles = 15;
    const button = document.querySelector('.explore-btn');
    const rect = button.getBoundingClientRect();

    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.background = '#fff';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;
        
        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';

        document.body.appendChild(particle);

        const angle = (Math.random() * Math.PI * 2);
        const velocity = 5 + Math.random() * 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let posX = startX;
        let posY = startY;
        let opacity = 1;
        
        const animate = () => {
            posX += vx;
            posY += vy;
            opacity -= 0.02;
            
            particle.style.left = posX + 'px';
            particle.style.top = posY + 'px';
            particle.style.opacity = opacity;

            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };

        requestAnimationFrame(animate);
    }
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initWobbleText();
    createStars();
    twinkleStars();
    initExploreButton();
});

// マウスの動きに応じて星を動かす
document.addEventListener('mousemove', (e) => {
    const stars = document.querySelector('.stars');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    stars.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
});

// スクロールインジケーターの表示制御
function handleScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // スクロール位置を監視
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        // スクロール位置が100px以上になったらインジケーターを非表示
        if (scrollPosition > 100) {
            scrollIndicator.classList.add('hide');
        } else {
            scrollIndicator.classList.remove('hide');
        }
    });

    // Explore buttonクリック時の処理
    const exploreBtn = document.querySelector('.explore-btn');
    exploreBtn.addEventListener('click', () => {
        document.querySelector('#content').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// 初期化時に実行する関数に追加
document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initWobbleText();
    createStars();
    twinkleStars();
    initExploreButton();
    handleScrollIndicator(); // 追加
});

// スクロールインジケーターの表示制御
function handleScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // スクロール位置を監視
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        // スクロール位置が100px以上になったらインジケーターを非表示
        if (scrollPosition > 100) {
            scrollIndicator.classList.add('hide');
        } else {
            scrollIndicator.classList.remove('hide');
        }
    });
}

// 新着バッジの自動制御（オプション）
function handleNewBadge() {
    const assignments = document.querySelectorAll('.assignment-item');
    if (assignments.length > 0) {
        // 最初の課題（最新）以外のNewバッジを非表示
        assignments.forEach((assignment, index) => {
            const badge = assignment.querySelector('.new-badge');
            if (badge && index > 0) {
                badge.style.display = 'none';
            }
        });
    }
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initWobbleText();
    createStars();
    twinkleStars();
    handleScrollIndicator();
    handleNewBadge(); // 新着バッジの制御を追加
});