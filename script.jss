// Particle System
function initParticles() {
  const particlesContainer = document.getElementById('particles');
  const isMobile = window.innerWidth <= 768;
  const particleCount = isMobile ? 15 : 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 3 + 1;
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(0, 240, 255, 0.6);
      border-radius: 50%;
      left: ${startX}px;
      top: ${startY}px;
      animation: float ${duration}s ${delay}s infinite ease-in-out;
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.8);
    `;
    
    particlesContainer.appendChild(particle);
  }
  
  // Add float animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0%, 100% {
        transform: translate(0, 0);
        opacity: 0.3;
      }
      25% {
        transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
        opacity: 0.8;
      }
      50% {
        transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
        opacity: 0.5;
      }
      75% {
        transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
        opacity: 0.8;
      }
    }
  `;
  document.head.appendChild(style);
}

// Smooth Scroll for Navigation
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const offset = 80;
        const targetPosition = target.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          document.querySelector('.menu-toggle').classList.remove('active');
        }
      }
    });
  });
}

// Reveal on Scroll - ULTRA OPTIMIZED
function initRevealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Instant trigger on scroll
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,  // Trigger earlier for faster appearance
    rootMargin: '0px 0px -50px 0px'  // Reduced margin for snappier feel
  });
  
  reveals.forEach(reveal => {
    revealObserver.observe(reveal);
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = menuToggle.querySelectorAll('span');
    if (menuToggle.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translateY(10px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
}

// Typing Effect for Hero Description
function initTypingEffect() {
  const typingText = document.querySelector('.typing-text');
  if (!typingText) return;
  
  const text = typingText.textContent;
  typingText.textContent = '';
  typingText.style.borderRight = '2px solid var(--neon-cyan)';
  
  let index = 0;
  const speed = 50;
  
  function type() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      // Blinking cursor
      setInterval(() => {
        typingText.style.borderRight = 
          typingText.style.borderRight === '2px solid transparent' 
            ? '2px solid var(--neon-cyan)' 
            : '2px solid transparent';
      }, 500);
    }
  }
  
  setTimeout(type, 500);
}

// Neural Network Animation
function initNeuralNetwork() {
  const svg = document.querySelector('.network-svg');
  if (!svg) return;
  
  const connectionsGroup = svg.querySelector('.connections');
  
  // Define connections between layers
  const connections = [
    // Input to Hidden Layer 1
    {from: {x: 50, y: 75}, to: {x: 150, y: 50}},
    {from: {x: 50, y: 75}, to: {x: 150, y: 100}},
    {from: {x: 50, y: 125}, to: {x: 150, y: 100}},
    {from: {x: 50, y: 125}, to: {x: 150, y: 150}},
    {from: {x: 50, y: 175}, to: {x: 150, y: 150}},
    {from: {x: 50, y: 175}, to: {x: 150, y: 200}},
    {from: {x: 50, y: 225}, to: {x: 150, y: 200}},
    {from: {x: 50, y: 225}, to: {x: 150, y: 250}},
    
    // Hidden Layer 1 to Hidden Layer 2
    {from: {x: 150, y: 50}, to: {x: 250, y: 75}},
    {from: {x: 150, y: 100}, to: {x: 250, y: 75}},
    {from: {x: 150, y: 100}, to: {x: 250, y: 125}},
    {from: {x: 150, y: 150}, to: {x: 250, y: 125}},
    {from: {x: 150, y: 150}, to: {x: 250, y: 175}},
    {from: {x: 150, y: 200}, to: {x: 250, y: 175}},
    {from: {x: 150, y: 200}, to: {x: 250, y: 225}},
    {from: {x: 150, y: 250}, to: {x: 250, y: 225}},
    
    // Hidden Layer 2 to Output
    {from: {x: 250, y: 75}, to: {x: 350, y: 100}},
    {from: {x: 250, y: 125}, to: {x: 350, y: 100}},
    {from: {x: 250, y: 125}, to: {x: 350, y: 150}},
    {from: {x: 250, y: 175}, to: {x: 350, y: 150}},
    {from: {x: 250, y: 175}, to: {x: 350, y: 200}},
    {from: {x: 250, y: 225}, to: {x: 350, y: 200}}
  ];
  
  // Create connection lines
  connections.forEach((conn, index) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', conn.from.x);
    line.setAttribute('y1', conn.from.y);
    line.setAttribute('x2', conn.to.x);
    line.setAttribute('y2', conn.to.y);
    line.classList.add('connection');
    
    // Randomly activate connections
    if (Math.random() > 0.6) {
      line.classList.add('active');
      line.style.animationDelay = `${Math.random() * 2}s`;
    }
    
    connectionsGroup.appendChild(line);
  });
  
  // Periodically toggle random connections
  setInterval(() => {
    const allConnections = connectionsGroup.querySelectorAll('.connection');
    const randomConnection = allConnections[Math.floor(Math.random() * allConnections.length)];
    randomConnection.classList.toggle('active');
  }, 1000);
}

// Dynamic AI Metrics Update
function initDynamicMetrics() {
  const neuralActivity = document.getElementById('neural-activity');
  const modelAccuracy = document.getElementById('model-accuracy');
  
  if (!neuralActivity || !modelAccuracy) return;
  
  setInterval(() => {
    // Simulate real-time metric fluctuations
    const activity = (85 + Math.random() * 10).toFixed(0);
    const accuracy = (92 + Math.random() * 4).toFixed(1);
    
    neuralActivity.textContent = `${activity}%`;
    modelAccuracy.textContent = `${accuracy}%`;
  }, 3000);
  
  // Animate metric bars
  const metricFills = document.querySelectorAll('.metric-fill');
  metricFills.forEach((fill, index) => {
    setInterval(() => {
      const currentWidth = parseInt(fill.style.width);
      const newWidth = currentWidth + (Math.random() > 0.5 ? 1 : -1);
      const clampedWidth = Math.max(85, Math.min(98, newWidth));
      fill.style.width = `${clampedWidth}%`;
      
      // Update corresponding value text
      const valueElement = fill.parentElement.parentElement.querySelector('.metric-value');
      if (valueElement) {
        valueElement.textContent = `${clampedWidth}%`;
      }
    }, 4000 + index * 500);
  });
}

// Photo Frame Glitch Effect
function initPhotoGlitch() {
  const photoFrame = document.querySelector('.cyber-photo-frame');
  if (!photoFrame) return;
  
  setInterval(() => {
    if (Math.random() > 0.95) {
      photoFrame.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
      setTimeout(() => {
        photoFrame.style.transform = 'translate(0, 0)';
      }, 100);
    }
  }, 2000);
}

// Terminal Animation (removed - keeping function stub for compatibility)
function initTerminalAnimation() {
  // Replaced with neural network animation
  initNeuralNetwork();
  initDynamicMetrics();
  initPhotoGlitch();
}

// Parallax Effect
function initParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-visual, .cyber-grid');
    
    parallaxElements.forEach(element => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// Active Nav Link on Scroll
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 150;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Add glow effect on hover for cards
function initCardGlow() {
  const cards = document.querySelectorAll('.glass-card, .project-card, .stack-category');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
  
  // Add CSS for glow effect
  const style = document.createElement('style');
  style.textContent = `
    .glass-card::before,
    .project-card::before,
    .stack-category::before {
      content: '';
      position: absolute;
      width: 300px;
      height: 300px;
      background: radial-gradient(
        circle at center,
        rgba(0, 240, 255, 0.15),
        transparent 70%
      );
      left: var(--mouse-x, 50%);
      top: var(--mouse-y, 50%);
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      z-index: 0;
    }
    
    .glass-card:hover::before,
    .project-card:hover::before,
    .stack-category:hover::before {
      opacity: 1;
    }
    
    .glass-card > *,
    .project-card > *,
    .stack-category > * {
      position: relative;
      z-index: 1;
    }
  `;
  document.head.appendChild(style);
}

// Stat Counter Animation
function initStatCounter() {
  const stats = document.querySelectorAll('.stat-value');
  
  const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.firstChild.textContent = target;
        clearInterval(timer);
      } else {
        element.firstChild.textContent = Math.floor(current);
      }
    }, stepTime);
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const text = entry.target.textContent.trim();
        const match = text.match(/(\d+)/);
        if (match) {
          const target = parseInt(match[1]);
          animateCounter(entry.target, target);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  stats.forEach(stat => observer.observe(stat));
}

// Tech Tag Stagger Animation
function initTechTagAnimation() {
  const techTags = document.querySelectorAll('.tech-tag, .tech-pill');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const tags = entry.target.parentElement.querySelectorAll('.tech-tag, .tech-pill');
        tags.forEach((tag, index) => {
          tag.style.opacity = '0';
          tag.style.transform = 'translateY(20px)';
          setTimeout(() => {
            tag.style.transition = 'all 0.4s ease';
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
          }, index * 50);
        });
        observer.unobserve(entry.target.parentElement);
      }
    });
  }, { threshold: 0.3 });
  
  const tagContainers = document.querySelectorAll('.tech-tags, .project-tech');
  tagContainers.forEach(container => observer.observe(container));
}

// Cursor Trail Effect
function initCursorTrail() {
  let cursorTrail = [];
  const trailLength = 10;
  
  document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.cssText = `
        position: fixed;
        width: 5px;
        height: 5px;
        background: rgba(0, 240, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        animation: fadeOut 0.5s ease forwards;
      `;
      
      document.body.appendChild(trail);
      cursorTrail.push(trail);
      
      if (cursorTrail.length > trailLength) {
        const oldTrail = cursorTrail.shift();
        setTimeout(() => oldTrail.remove(), 500);
      }
    }
  });
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeOut {
      to {
        opacity: 0;
        transform: scale(0);
      }
    }
  `;
  document.head.appendChild(style);
}

// Easter Egg: Konami Code
function initKonamiCode() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;
  
  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateEasterEgg();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
}

function activateEasterEgg() {
  // Create matrix rain effect
  const canvas = document.createElement('canvas');
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    pointer-events: none;
  `;
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const chars = '01';
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);
  
  let frameCount = 0;
  const maxFrames = 300;
  
  function draw() {
    ctx.fillStyle = 'rgba(5, 8, 16, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00f0ff';
    ctx.font = `${fontSize}px monospace`;
    
    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    
    frameCount++;
    if (frameCount < maxFrames) {
      requestAnimationFrame(draw);
    } else {
      canvas.style.transition = 'opacity 1s ease';
      canvas.style.opacity = '0';
      setTimeout(() => canvas.remove(), 1000);
    }
  }
  
  draw();
  
  // Show message
  const message = document.createElement('div');
  message.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10001;
    font-family: 'Orbitron', monospace;
    font-size: 2rem;
    color: #00f0ff;
    text-shadow: 0 0 20px #00f0ff;
    text-align: center;
    animation: glitchText 0.3s infinite;
  `;
  message.textContent = 'SYSTEM UNLOCKED';
  document.body.appendChild(message);
  
  setTimeout(() => {
    message.style.transition = 'opacity 1s ease';
    message.style.opacity = '0';
    setTimeout(() => message.remove(), 1000);
  }, 3000);
}

// Performance: Lazy load images
function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Neural Network Canvas Background
function initNeuralNetworkCanvas() {
  const canvas = document.getElementById('neural-network-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId;

  // Set canvas size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Colors matching the specification
  const colors = {
    deepPurple: '#1a0033',
    electricBlue: '#0066ff',
    cyan: '#00ffff',
    magenta: '#ff00ff'
  };

  // Node class
  class Node {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = Math.random() * 3 + 2;
      this.baseRadius = this.radius;
      this.connections = [];
      this.pulseOffset = Math.random() * Math.PI * 2;
      this.color = Math.random() > 0.5 ? colors.cyan : colors.magenta;
    }

    update() {
      // Pulsing effect
      this.radius = this.baseRadius + Math.sin(Date.now() * 0.003 + this.pulseOffset) * 1.5;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  // Connection class
  class Connection {
    constructor(from, to) {
      this.from = from;
      this.to = to;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.active = Math.random() > 0.7;
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
      this.pulseOffset = Math.random() * Math.PI * 2;
    }

    update() {
      if (this.active) {
        this.opacity = 0.3 + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.4;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.moveTo(this.from.x, this.from.y);
      ctx.lineTo(this.to.x, this.to.y);
      ctx.strokeStyle = `rgba(0, 255, 255, ${this.opacity})`;
      ctx.lineWidth = this.active ? 2 : 1;
      ctx.shadowColor = colors.cyan;
      ctx.shadowBlur = this.active ? 5 : 0;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }
  }

  // Floating particles
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? colors.electricBlue : colors.magenta;
      this.opacity = Math.random() * 0.5 + 0.3;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Wrap around edges
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    }
  }

  // Create nodes in a neural network pattern
  const nodes = [];
  const connections = [];
  const particles = [];

  // Create layers of nodes
  const isMobile = window.innerWidth <= 768;
  const layers = isMobile ? 3 : 4;
  const nodesPerLayer = isMobile ? [4, 6, 4] : [8, 12, 12, 6];

  for (let layer = 0; layer < layers; layer++) {
    const layerNodes = [];
    const x = (canvas.width / (layers + 1)) * (layer + 1);
    const nodeCount = nodesPerLayer[layer];

    for (let i = 0; i < nodeCount; i++) {
      const y = (canvas.height / (nodeCount + 1)) * (i + 1) + (Math.random() - 0.5) * 50;
      const node = new Node(x, y);
      nodes.push(node);
      layerNodes.push(node);
    }

    // Connect layers
    if (layer > 0) {
      const prevLayer = [];
      let startIndex = 0;
      for (let l = 0; l < layer; l++) {
        startIndex += nodesPerLayer[l];
      }
      const endIndex = startIndex + nodesPerLayer[layer - 1];
      for (let i = startIndex; i < endIndex; i++) {
        prevLayer.push(nodes[i]);
      }

      // Create connections between layers
      prevLayer.forEach(fromNode => {
        layerNodes.forEach(toNode => {
          if (Math.random() > 0.6) { // Not all nodes are connected
            connections.push(new Connection(fromNode, toNode));
          }
        });
      });
    }
  }

  // Create floating particles
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle());
  }

  // Animation loop
  function animate() {
    // Clear canvas with deep purple background
    ctx.fillStyle = colors.deepPurple;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw connections
    connections.forEach(connection => {
      connection.update();
      connection.draw();
    });

    // Update and draw nodes
    nodes.forEach(node => {
      node.update();
      node.draw();
    });

    // Update and draw particles
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    animationId = requestAnimationFrame(animate);
  }

  animate();

  // Cleanup function
  return () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    window.removeEventListener('resize', resizeCanvas);
  };
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initSmoothScroll();
  initRevealOnScroll();
  initMobileMenu();
  initTypingEffect();
  initTerminalAnimation();
  initParallax();
  initActiveNavLink();
  initCardGlow();
  initStatCounter();
  initTechTagAnimation();
  initCursorTrail();
  initKonamiCode();
  initLazyLoad();
  initNeuralNetworkCanvas(); // Add neural network canvas initialization

  // Add loading animation
  window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease';
      document.body.style.opacity = '1';
    }, 100);
  });
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Reinitialize particles on resize
    const particlesContainer = document.getElementById('particles');
    particlesContainer.innerHTML = '';
    initParticles();
  }, 250);
});

// Prevent scroll jank
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Scroll-based animations handled here
      ticking = false;
    });
    ticking = true;
  }
});
