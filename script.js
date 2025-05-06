
class AnimalGame {
   
   constructor() {
       
       this.animals = [
           'Lion', 'Tiger', 'Elephant', 'Monkey', 'Giraffe'
       ]
       
       this.currentAnimals = this.getRandomAnimals || ''
       
       this.attempts = 0
       
       this.timer = 60
       
       
   }
   
   getRandomAnimals() {
       
       const randomIndex = Math.floor(Math.random() * this.animals.length)
       
       
       return this.animals[randomIndex]
       
   }
   
   
   
   
}


