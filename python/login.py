def ADMIN():
    # Admin login
    print("-------Admin-------")
    Admin = input("Ingrese Usuario: ")
    contraA = input("Ingrese contraseña: ")
    if Admin == "ADMIN01" and contraA == "ADMIN0111":
        print("Acceso permitido")
    else:
        print("Acceso denegado")

def usuario():
    # Usuario login
    print("-------Usuario-------")
    Usuario = input("Ingrese Usuario: ")
    contraU = input("Ingrese contraseña: ")
    if Usuario == "USUARIO01" and contraU == "USUARIO222":
        print("Acceso permitido")
    else:
        print("Acceso denegado")

