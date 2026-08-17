document.addEventListener('DOMContentLoaded', () => {
    /**
     * Infographic Reveal Animation
     * Uses Intersection Observer to trigger the 'active' class 
     * when the step enters the viewport.
     */
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small delay based on index to create a staggered effect
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 150);
            }
        });
    }, observerOptions);

    const steps = document.querySelectorAll('.reveal-step');
    steps.forEach(step => observer.observe(step));

    /**
     * Smooth Scroll for anchor links
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    /**
     * Simple Form Submission Handler (UX only)
     */
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxIeyHQuZ_sAQOrMXCR8wBX3vs1tOSnDPlm4YJOwO2ss2J-poIpBGD1Nh5yr3HDYHXPsw/exec'
    const form = document.querySelector('#solicitud-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Enviando...';
            btn.disabled = true;
            const datosForm = new FormData(form)
            try {
                const envio = await fetch(scriptURL, {
                    method: 'POST',
                    body: datosForm
                });
                if (!envio.ok) {
                    throw new Error('Ocurrió un error en la red');
                } else {
                    setTimeout(() => {
                        alert('¡Gracias! Un consultor de bitORbyte se pondrá en contacto contigo pronto para iniciar tu exploración gratuita.');
                        btn.innerText = originalText;
                        btn.disabled = false;
                        form.reset();
                    }, 1500);
                }

            } catch (error) {
                console.error('Error al enviar', error)
                alert('ocurrio un error al enviar los datos');
                btn.innerText = originalText;
                btn.disabled = false;
                form.reset();
            }

        });
    }
});
