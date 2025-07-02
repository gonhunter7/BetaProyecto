CREATE TABLE Cliente(
	id_cliente SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	email VARCHAR(100) UNIQUE,
	contraseña TEXT NOT NULL,
	fecha_registro DATE DEFAULT CURRENT_DATE
);
CREATE TABLE Producto (
    id_producto SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
	-- me lo anoto por las dudas. check sirve para hacer un condicional impidiendo que se
	-- puedan insertar otros tipos de dato en ese campo (no podrias poner 'papa' por ej)
    tipo VARCHAR(50) NOT NULL CHECK (tipo IN ('vuelo', 'estadía', 'alquiler', 'paquete')),
    precio NUMERIC(10,2) NOT NULL,
    activo BOOLEAN DEFAULT TRUE
);
CREATE TABLE Producto_Extendido (
    id_producto INT PRIMARY KEY,
    destino VARCHAR(100),
    duracion_dias INT,
    incluye_vuelo BOOLEAN DEFAULT FALSE,
    incluye_hotel BOOLEAN DEFAULT FALSE,
    incluye_auto BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_producto) REFERENCES Producto(id_producto) ON DELETE CASCADE
);

CREATE TABLE Pedido(
	id_pedido SERIAL PRIMARY KEY,
	id_cliente INT NOT NULL,
	fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	estado VARCHAR(50) DEFAULT 'pendiente',
	FOREIGN KEY(id_cliente) REFERENCES Cliente(id_cliente)
);
CREATE TABLE Detalle_Pedido(
	id_detalle SERIAL PRIMARY KEY,
	id_pedido INT NOT NULL,
	Id_producto INT NOT NULL,
	cantidad INT NOT NULL,
	precio_unitario NUMERIC(10, 2) NOT NULL,
	FOREIGN KEY(id_pedido) REFERENCES Pedido(id_pedido),
	FOREIGN KEY(id_producto) REFERENCES Producto(id_producto)	
);
CREATE TABLE Venta(
	id_venta SERIAL PRIMARY KEY,
	id_pedido INT NOT NULL,
	total NUMERIC(10,2) NOT NULL,
	fecha_pago TIMESTAMP,
	medio_pago VARCHAR(50),
	FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido)
);
CREATE TABLE Mail_notificacion(
	id_mail SERIAL PRIMARY KEY,
	id_pedido INT NOT NULL,
	destinatario VARCHAR(100),
	asunto VARCHAR(150),
	cuerpo TEXT,
	fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(id_pedido) REFERENCES Pedido(id_pedido)
);
CREATE TABLE Usuario_empresa(
	id_usuario SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	email VARCHAR(100) UNIQUE,
	contraseña TEXT,
	rol VARCHAR(50),
	activo BOOLEAN DEFAULT TRUE
);


