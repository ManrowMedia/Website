

gsap.to(".reality", {
  scale: 1.1,
  rotation: 1,
  filter: "brightness(2)",
  textShadow: "0 0 40px #11a1bc",
  repeat: -1,
  yoyo: true,
  duration: 2,
  ease: "bounce"
});

const timeline = gsap.timeline({ defaults: {duration: 1}});
timeline
   
    .from(".content h1", {  opacity: 0, duration: .75 , y: '-10%', ease: 'sine.in' } )
    .from(".content p", { opacity: 0, duration: .75 , x: '-100%', ease: 'expo.out' } )
    .from(".buttons", { opacity: 0, duration: .75 , y: '200%', ease: 'expo.out' } ) 
    .from(".logo", {  opacity: 0, duration: .25 ,  ease: 'sine.in' } )
    .from(".navabout", { opacity: 0, duration: .25 , })
    .from(".navprojects", { opacity: 0, duration: .25 , ease: 'sine.in' })
    .from(".navservices", { opacity: 0, duration: .25 , ease: 'sine.in'})
    .from(".btn-signing", { opacity: 0, duration: .25 , ease: 'sine.in' })

