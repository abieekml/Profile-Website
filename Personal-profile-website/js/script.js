        function createParticles() {
            const bgAnimation = document.getElementById('bgAnimation');
            const particleCount = 15;
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                const size = Math.random() * 4 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
                bgAnimation.appendChild(particle);
            }
        }

        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('click', function () {
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.left = '50%';
                ripple.style.top = '50%';
                ripple.style.width = '20px';
                ripple.style.height = '20px';
                ripple.style.marginLeft = '-10px';
                ripple.style.marginTop = '-10px';
                ripple.style.zIndex = '10';
                const inner = this.querySelector('.social-link-inner');
                inner.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });

        const style = document.createElement('style');
        style.textContent = `@keyframes ripple { to { transform: scale(4); opacity: 0; } }`;
        document.head.appendChild(style);

        createParticles();

        const description = document.querySelector('.profile-description');
        const text = description.textContent;
        description.textContent = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                description.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        }
        window.addEventListener('load', () => {
            setTimeout(typeWriter, 1000);
        });

        document.getElementById('darkToggle').addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
