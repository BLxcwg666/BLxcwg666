import { useEffect, useRef } from 'react';

function StarBackground() {
  const canvasRef = useRef(null);
  const offscreenCanvasRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Create offscreen canvas
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvasRef.current = offscreenCanvas;
    const offscreenCtx = offscreenCanvas.getContext('2d');

    // Set canvas size
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const maxDimension = Math.max(width, height);
    offscreenCanvas.width = 2.6 * maxDimension;
    offscreenCanvas.height = 2.6 * maxDimension;

    // Initialize context
    ctx.fillStyle = 'rgba(21,21,21,1)';
    ctx.fillRect(0, 0, width, height);
    ctx.lineCap = 'round';

    // Generate stars
    const stars = [];
    const random = (min, max) => {
      const range = max - min;
      return min + Math.round(Math.random() * range);
    };

    for (let i = 0; i < 20000; i++) {
      const r = random(120, 255);
      const g = random(120, 255);
      const b = random(120, 255);
      const a = random(30, 100) / 100;

      stars.push({
        x: random(-offscreenCanvas.width, offscreenCanvas.width),
        y: random(-offscreenCanvas.height, offscreenCanvas.height),
        size: 1.2,
        color: `rgba(${r},${g},${b},${a})`
      });
    }

    // Draw stars on offscreen canvas
    stars.forEach(star => {
      offscreenCtx.beginPath();
      offscreenCtx.arc(star.x, star.y, star.size, 0, 2 * Math.PI, true);
      offscreenCtx.fillStyle = star.color;
      offscreenCtx.closePath();
      offscreenCtx.fill();
    });

    // Animation
    let frameCount = 0;
    ctx.translate(width, 0);

    const drawFrame = () => {
      ctx.drawImage(
        offscreenCanvas,
        -offscreenCanvas.width / 2,
        -offscreenCanvas.height / 2
      );
    };

    const rotate = (degree) => {
      ctx.rotate(degree * Math.PI / 180);
    };

    const animate = () => {
      drawFrame();
      
      // Frame counter and fade effect
      frameCount++;
      if (frameCount > 150 && frameCount % 8 === 0) {
        ctx.fillStyle = 'rgba(0,0,0,.04)';
        ctx.fillRect(-3 * maxDimension, -3 * maxDimension, 6 * maxDimension, 6 * maxDimension);
      }
      
      // Rotate (match original speed exactly)
      rotate(0.025);
    };

    // Use requestAnimationFrame polyfill pattern
    const requestAnimFrame = window.requestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.oRequestAnimationFrame || 
                            window.msRequestAnimationFrame || 
                            function(callback) { window.setTimeout(callback, 1000 / 60); };

    const animationLoop = () => {
      animate();
      animationIdRef.current = requestAnimFrame(animationLoop);
    };

    animationLoop();

    // Handle resize
    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      
      ctx.fillStyle = 'rgba(21,21,21,1)';
      ctx.fillRect(0, 0, width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <div className="background">
      <canvas ref={canvasRef} id="startrack"></canvas>
      <div className="cover"></div>
    </div>
  );
}

export default StarBackground;

