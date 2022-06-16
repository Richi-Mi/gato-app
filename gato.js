const container = document.getElementById('container')
const botonReiniciar = document.getElementById('btn_res')
const jugador = document.getElementById('jugador')

let player = true
let terminado = false

let arrGan = [], claseGan = "" 

const comprobar = () => {
    let valor00 = container.children.cuadro00.textContent
    let valor01 = container.children.cuadro01.textContent
    let valor02 = container.children.cuadro02.textContent
    let valor10 = container.children.cuadro10.textContent
    let valor11 = container.children.cuadro11.textContent
    let valor12 = container.children.cuadro12.textContent
    let valor20 = container.children.cuadro20.textContent
    let valor21 = container.children.cuadro21.textContent
    let valor22 = container.children.cuadro22.textContent

    let childrens = container.children

    if (terminado == false) {
        // Comprobar Filas
        if (valor00 == valor01 && valor00 == valor02 && valor00 != "") {
            mostrarGanador(valor00)
            mostrarLinea([ childrens.cuadro00, childrens.cuadro01, childrens.cuadro02 ], "linea_horizontal") 
            terminado = true
        }
        if (valor10 == valor11 && valor10 == valor12 && valor10 != "") {
            mostrarGanador(valor10)
            mostrarLinea([ childrens.cuadro10, childrens.cuadro11, childrens.cuadro12 ], "linea_horizontal")
            terminado = true
        }
        if (valor20 == valor21 && valor20 == valor22 && valor20 != "") {
            mostrarGanador(valor20)
            mostrarLinea([ childrens.cuadro20, childrens.cuadro21, childrens.cuadro22 ], "linea_horizontal")
            terminado = true
        }
        // Comprobar Columnas
        if (valor00 == valor10 && valor00 == valor20 && valor00 != "") {
            mostrarGanador(valor00)
            mostrarLinea([ childrens.cuadro00, childrens.cuadro10, childrens.cuadro20 ], "linea_vertical")
            terminado = true
        }
        if (valor01 == valor11 && valor01 == valor21 && valor01 != "") {
            mostrarGanador(valor01)
            mostrarLinea([ childrens.cuadro01, childrens.cuadro11, childrens.cuadro21 ], "linea_vertical")
            terminado = true
        }
        if (valor02 == valor12 && valor02 == valor22 && valor02 != "") {
            mostrarGanador(valor02)
            mostrarLinea([ childrens.cuadro02, childrens.cuadro12, childrens.cuadro22 ], "linea_vertical")
            terminado = true
        }
        // Comprobar Diagonales
        if (valor00 == valor11 && valor00 == valor22 && valor00 != "") {
            mostrarGanador(valor00)
            mostrarLinea([ childrens.cuadro00, childrens.cuadro11, childrens.cuadro22 ], "diagonal_derecha")
            terminado = true
        }
        if (valor02 == valor11 && valor02 == valor20 && valor02 != "") {
            mostrarGanador(valor02)
            mostrarLinea([ childrens.cuadro02, childrens.cuadro11, childrens.cuadro20 ], "diagonal_izquierda")
            terminado = true
        }

    }


}

const mostrarLinea = ( arrCuadros = [], clase ) => {
    arrGan = arrCuadros
    claseGan = clase
    arrCuadros.forEach( cuadro => {
        cuadro.classList.add( clase );
    })
}

const mostrarGanador = (valor) => {

    jugador.textContent = " "

    if (valor == "X") {
        document.getElementById('ganador').textContent = "Gano Jugador X"
    }
    else {
        document.getElementById('ganador').textContent = "Gano Jugador O"
    }
}
const vaciarCuadros = () => {

    container.children.cuadro00.textContent = ""
    container.children.cuadro01.textContent = ""
    container.children.cuadro02.textContent = ""
    container.children.cuadro10.textContent = ""
    container.children.cuadro11.textContent = ""
    container.children.cuadro12.textContent = ""
    container.children.cuadro20.textContent = ""
    container.children.cuadro21.textContent = ""
    container.children.cuadro22.textContent = ""


    terminado = false
    player = true
    jugador.textContent = "Turno de Jugador X"
    document.getElementById('ganador').textContent = "Jugando..."
}

const reiniciarClases = () => {
    arrGan.forEach( cuadro => {
        cuadro.classList.remove( claseGan )
    })
}

botonReiniciar.addEventListener('click', () => {

    vaciarCuadros()
    reiniciarClases()

})

container.addEventListener('click', (e) => {
    const cuadro = e.target.id
    if (terminado == false) {
        switch (player) {
            case true:

                if (e.target.textContent == "") {
                    jugador.textContent = "Turno de Jugador O"
                    e.target.textContent = "X";
                    player = false

                }

                break;
            case false:

                if (e.target.textContent == "") {
                    jugador.textContent = "Turno de Jugador X"
                    e.target.textContent = "O";
                    player = true

                }
        }
        comprobar()
    }
})