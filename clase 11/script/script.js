
# Definir las variables
topping = input("Ingrese el topping (Oreo, KitKat, Kinder): ").lower()
precio = 0  # Inicializar el precio en 0

# Asignar el precio según el topping
if topping == "oreo":
    precio = 10
elif topping == "kitkat":
    precio = 15
elif topping == "kinder":
    precio = 25
else:
    print("No tenemos este topping")

# Ingresar el precio del helado 
helado = 5

# Calcular el precio final
precioFinal = helado + precio

# Imprimir el mensaje con el precio final
if precio != 0:
    print("El helado cuesta $" + str(precioFinal))

















    // Variable que contiene un array de datos
var menu = ['carne', 'pescado', 'verdura'];

// Ciclo FOR para recorrer el array y mostrar las opciones
for (var i = 0; i < menu.length; i++) {
    switch (menu[i]) {
        case 'carne':
            console.log('Cliente eligió carne. Como bebida, se le ofrece vino tinto.');
            break;
        case 'pescado':
            console.log('Cliente eligió pescado. Como bebida, se le ofrece vino blanco.');
            break;
        case 'verdura':
            console.log('Cliente eligió verdura. Como bebida, se le ofrece agua.');
            break;
        default:
            console.log('Elija carne, pescado o verdura.');
    }
}

// Variable para el ciclo WHILE
var numero = 1;

// Ciclo WHILE para mostrar un mensaje mientras el número sea menor que 11
while (numero < 11) {
    console.log(numero + ' es más chico que 11');
    numero++; // Incrementa la variable para evitar un bucle infinito
}

}

