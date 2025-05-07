
//Blue Prints
class AnimalGame {
   
   constructor() {
       
       this.animals = [
    'Lion', 'Tiger', 'Elephant', 'Monkey', 'Giraffe',
    'Zebra', 'Rhinoceros', 'Leopard', 'Cheetah', 'Panda',
    'Orangutan', 'Kangaroo', 'Koala', 'Sloth', 'Cobra',
    'Alligator', 'Hippopotamus', 'Meerkat', 'Ocelot', 'Armadillo',
    'AyeAye', 'Quokka', 'Axolotl', 'Narwhal', 'Tarsier',
    'Okapi', 'Cassowary', 'Shoebill', 'Saola', 'Markhor',
    'Vaquita', 'Kakapo', 'Dugong', 'Manatee', 'Platypus',
    'Binturong', 'Dhole', 'Fossa', 'Capybara', 'Addax',
    'Gaur', 'Tapir', 'Iriomote', 'Przewalski', 'Quagga',
    'Thylacine', 'Megalodon', 'Dodo', 'Moa', 'WoollyMammoth', 'Pachycephalosaurus'
    ];
       
       this.currentAnimals = this.getRandomAnimals()
       
       this.rounds = 0
       
       this.timer = 60
       
       this.setUpdate()
       
   }
   
   
   getRandomAnimals() {
       
       const randomIndex = Math.floor(Math.random() * this.animals.length)
       
       
       return this.animals[randomIndex]
       
   }
   
   setRounds() {
       
       this.rounds += 1
       document.getElementById("rounds").textContent = `Rounds Points ${game.rounds}` 
   }
   
   setTimer() {
       
       setInterval(() => {
           if (this.timer > 0) {
               this.timer -= 1
           } else {
               
               window.location.reload()
               alert(`Your Highest Score is ${this.rounds}`)
           }
           document.getElementById("timer").textContent = `${game.timer}`
           
       }, 1000)
       
       
       
   }
   
   
   
   handMiddle(word) {
       
       if (word.length <= 2) return word
       
       const indices = []
       
       for (let i = 0; i < word.length; i++) {
           
           indices.push(i)
           
       }
       
       for (let i = indices.length - 1; i > 0; i--) {
          
          const j = Math.floor(Math.random() * (i + 1))
          
          const temp = indices[i]
          indices[i] = indices[j]
          indices[j] = temp
          
          
       }
       
       const hideIndexes = [indices[0], indices[1]]
       
       let result = ''
       
       for (let i = 0; i < word.length; i++) {
           
           if (hideIndexes.includes(i)) {
               
               result += "*"
               
           } else {
               
               result += word[i]
               
               
               
           }
           
       }
       
       
       return result
       
   }
   
   setUpdate() {
       
       document.getElementById("clue").textContent = this.handMiddle(this.currentAnimals)
       
   }
   
   
}


//Game Usage
const game = new AnimalGame()

document.getElementById("start").addEventListener("click", () => {
    
    const clueId = document.getElementById("clue")
    
    clueId.style.display = "block"
    
    game.setTimer()
    
    game.currentAnimals = game.getRandomAnimals()
    
    game.setUpdate()
    
    document.getElementById("guess").style.display = "block" 
    
    document.getElementById("start").style.display = "none" 
    
})

document.getElementById("guess").addEventListener("click", handleGuess)

document.getElementById("guessInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleGuess()
    }
})

function handleGuess() {
    
    const guessInputId = document.getElementById("guessInput").value.trim()

    if (guessInputId.toLowerCase() === game.currentAnimals.toLowerCase()) {
        
        game.setRounds()
        
        game.currentAnimals = game.getRandomAnimals()
        
        game.setUpdate()
        
        game.timer = 61
        
        document.getElementById("clue").style.color = "#000"
        
        
        
    } else {
        
        game.timer -= 10
       
        document.getElementById("clue").classList.add("shake")
        
     setTimeout(() => {
         document.getElementById("clue").classList.remove("shake")
     }, 300)
        
    }
    
    document.getElementById("guessInput").value = ""
    
}

