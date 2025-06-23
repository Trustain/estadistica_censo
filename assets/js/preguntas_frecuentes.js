  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const isVisible = answer.classList.contains('show');

      // Oculta todas las respuestas
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('show'));

      // Si la respuesta no estaba visible, mostrarla
      if (!isVisible) {
        answer.classList.add('show');
      }
    });
  });