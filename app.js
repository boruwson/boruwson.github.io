// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","domek.png")
loadSprite("kartka1","domek123.png")

loadSound("muzyka","muzyczkainf1.mp3")

const domek = add([
    sprite("kartka"),
    pos(0,0)
])

//  const domek1 = add([
//      sprite("kartka1"),
//      pos(0,0)
//  ])

onMouseRelease(()=>play("muzyka"))

let pierwsza = true

loop(1,()=>{
    if (pierwsza) {
        domek.use(sprite("kartka1"))
        pierwsza = false
    }
    
    
    
   else     {
    domek.use(sprite("kartka"))
    pierwsza = true
   }
    
    
})



