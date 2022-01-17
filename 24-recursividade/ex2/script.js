let casas = [ 
    ["casa 1 (0x0)", "casa 2 (0x1)", "casa 3 (0x2)"],
    ["casa 4 (1x0)", "casa 5 (1x1)", "casa 6 (1x2)"],
    ["casa 7 (2x0)", "casa 8 (2x1)", "casa 9 (2x2)"] 
]
let contador = 9
let linha = 0
let coluna = 0


function showMatrix (matriz) {
    if (contador > 0) {
        console.log(matriz[linha][coluna])
        if (coluna < 2) {
            coluna++
        } else{
            coluna = 0
            linha++
        }
        contador-- 
        return showMatrix (matriz)
    }  else {
        return
    }

}

showMatrix(casas)






