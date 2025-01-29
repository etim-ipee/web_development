const greetMe = (name) =>{
        const username = name || 'somebody'
        return () => {
            return `Hello ${username}`
        }
    }
    
    const greet = greetMe('Elijah')
    console.log(greet()); 



