const timeline = gsap.timeline({ defaults: {duration: 1}});
timeline
   
    .from(".content h1", {  opacity: 0, duration: .75 , y: '-10%', ease: 'sine.in' } )
    .from(".project-section", {  opacity: 0, duration: .75 , y: '10%', ease: 'power4' } )
    .from(".logo", {  opacity: 0, duration: .25 ,  ease: 'sine.in' } )
    .from(".navprojects", { opacity: 0, duration: .25 , ease: 'sine.in' })
    .from(".navservices", { opacity: 0, duration: .25 , ease: 'sine.in' })
    .from(".navhome", { opacity: 0, duration: .25 , ease: 'sine.in' })
    .from(".btn-signing", { opacity: 0, duration: .25 , ease: 'sine.in' })
