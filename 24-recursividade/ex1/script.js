function factorial(fatorial) {
    if (fatorial === 1 || fatorial === 0) {
        return 1
    }
    if (fatorial > 1) {
        fatorial =  fatorial - (fatorial%1)
        return fatorial * factorial(fatorial - 1)
        
    }
    return "indefinido"
}

console.log(factorial(6))