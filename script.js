(function(){
  const path=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  document.querySelectorAll('[data-nav]').forEach(a=>{
    if(a.getAttribute('href').toLowerCase()===path){a.setAttribute('aria-current','page');}
  });

  const contact=document.querySelector('#contactForm');
  if(contact){
    contact.addEventListener('submit',e=>{
      e.preventDefault();
      const status=document.querySelector('#contactStatus');
      if(!contact.checkValidity()){contact.reportValidity();return;}
      status.textContent='Demo submission validated successfully. In a production deployment, this message would be sent through a secure server-side endpoint.';
      status.classList.add('show');
      contact.reset();
    });
  }

  const feedback=document.querySelector('#feedbackForm');
  if(feedback){
    feedback.addEventListener('submit',e=>{
      e.preventDefault();
      if(!feedback.checkValidity()){feedback.reportValidity();return;}
      const data=Object.fromEntries(new FormData(feedback).entries());
      data.savedAt=new Date().toISOString();
      const old=JSON.parse(localStorage.getItem('kku-demo-feedback')||'[]');
      old.push(data);
      localStorage.setItem('kku-demo-feedback',JSON.stringify(old));
      const status=document.querySelector('#feedbackStatus');
      status.textContent='Thank you. This demo stores the response only in this browser for prototype testing; no personal data is transmitted.';
      status.classList.add('show');
      feedback.reset();
    });
  }
})();
