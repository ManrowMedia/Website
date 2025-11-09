const timeline = gsap.timeline({ defaults: {duration: 1}});
timeline
   
    .from(".content h1", {  opacity: 0, duration: .75 , y: '-10%', ease: 'sine.in' } )
    .from(".content p", { opacity: 0, duration: .75 , y: '10%', ease: 'sine.in' } ) 
    .from("#services", {  opacity: 0, duration: .75 , y: '10%', ease: 'power4' } )
    .from(".logo", {  opacity: 0, duration: .25 ,  ease: 'sine.in' } )
    .from(".navabout", { opacity: 0, duration: .25 , ease: 'sine.in' })
    .from(".navprojects", { opacity: 0, duration: .25 , ease: 'sine.in' })
    .from(".navhome", { opacity: 0, duration: .25 , ease: 'sine.in' })
    .from(".btn-signing", { opacity: 0, duration: .25 , ease: 'sine.in' })
