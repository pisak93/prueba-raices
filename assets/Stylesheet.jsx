import { StyleSheet } from "react-native";
//COLORES
export const colores = {
  fondo: "#FFFCF5",
  blanco: "#FFFFFF",

  Primario: "#3F7440",
  PrimarioClaro: "#E8F0DD",

  texto: "#3C3C3C",

  borde: "#E6E1D3",
  bordePrimario: "#3F7440",
  bordeInput: "#b8c2b9",

  campo: "#F8F7F4",
  placeholder: "#8c968d",
  desactivado: "#D6D3C9",

  Error: "#D64545",
  ErrorClaro: "#FBE0DE",
  iconoError: "#E05A5A",

  fondoExito: "#F5EDE0",
  iconoExito: "#3F9E4F",
  fondoAdvertencia: "#FFF3D6",
  iconoAdvertencia: "#E0A526",

  fondoFaltante: "#FBECCB",
  textoFaltante: "#8A5A00",
  notificacionLeida: "#FBF9F2",

  fondoTarjeta: "#b8d0b3",
  imagenVacia: "#d5e4d1",
  imagenCosecha: "#eef2ed",
  puntoCarrusel: "#c7d4c5",

  fondoToast: "#2F3B2F",
  accionToast: "#CDE3AE",
  overlay: "rgba(0,0,0,0.45)",
  transparente: "transparent",
};

// TEXTO
export const tamanos = {
  etiqueta: 16,
  apoyo: 15,
  cuerpoM: 18,
  cuerpoL: 20,
  paso: 28,
  subtitulo: 19,
  titulo: 22,
  tituloS: 28,
  tituloM: 32,
  tituloL: 34,
  Display: 64,
};

export const pesos = {
  normal: "400",
  medio: "500",
  semibold: "600",
  bold: "700",
};

//ESPACIADO
export const espacios = {
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

//FORMAS
export const radios = {
  pequeno: 12,
  imagen: 14,
  tarjeta: 16,
  botonSecundario: 18,
  boton: 20,
  chip: 21,
  modal: 24,
  circulo: 999,
};

//APPBAR SUPERIOR
export const appBar = StyleSheet.create({
  contenedor: {
    width: "100%",
    padding: 20,
    backgroundColor: colores.fondo,
  },
  fila: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: espacios.m,
  },
  saludo: {
    flex: 1,
    fontSize: 24,
    fontWeight: pesos.bold,
    color: colores.Primario,
  },
  botonNotificaciones: {
    width: 52,
    height: 52,
    borderRadius: radios.circulo,
    backgroundColor: colores.blanco,
    alignItems: "center",
    justifyContent: "center",
  },
  campana: {
    fontSize: 26,
  },
  contador: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: colores.rojo,
    borderRadius: radios.pequeno,
    paddingHorizontal: 6,
  },
  numero: {
    color: colores.blanco,
    fontSize: tamanos.contador,
  },
  botonVolver: {
    width: 48,
    minHeight: 44,
    justifyContent: "center",
  },

  titulo: {
    fontSize: tamanos.titulo,
    fontWeight: pesos.bold,
    color: colores.Primario,
    textAlign: "center",
  },
  botonSalir: {
    minHeight: 44,
    justifyContent: "center",
  },
  salir: {
    fontSize: tamanos.paso,
    color: colores.textoAyuda,
  },
  paso: {
    flexShrink: 1,
    fontSize: tamanos.paso,
    fontWeight: pesos.bold,
    color: colores.Primario,
    textAlign: "right",
  },
  fondoProgreso: {
    height: 10,
    backgroundColor: colores.borde,
    borderRadius: 5,
    marginTop: espacios.m,
    overflow: "hidden",
  },
  progreso: {
    height: 10,
    backgroundColor: colores.Primario,
    borderRadius: 5,
  },
});

//BARRA DE NAVEGACIÓN
export const navegacion = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    width: "100%",
    minHeight: 96,
    backgroundColor: colores.blanco,
    borderTopWidth: 1,
    borderTopColor: colores.bordePrimario,
    paddingVertical: espacios.m,
  },
  opcion: {
    flex: 1,
    alignItems: "center",
  },
  fondoIcono: {
    width: 56,
    height: 40,
    borderRadius: radios.boton,
    alignItems: "center",
    justifyContent: "center",
  },
  fondoActivo: {
    backgroundColor: colores.PrimarioClaro,
  },
  icono: {
    fontSize: 26,
    color: colores.Primario,
  },
  texto: {
    fontSize: tamanos.apoyo,
    marginTop: 5,
    textAlign: "center",
    color: colores.textoSecundario,
  },
  textoActivo: {
    color: colores.Primario,
    fontWeight: pesos.bold,
  },
});

//BOTÓN
export const boton = StyleSheet.create({
  boton: {
    width: 338,
    height: 64,
    borderRadius: radios.boton,
    backgroundColor: colores.PrimarioBoton,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 10,
  },
  texto: {
    fontSize: tamanos.cuerpo,
    fontWeight: pesos.bold,
    color: colores.blanco,
  },

  
});
export const entradaTexto = StyleSheet.create({
  input: {
    width: "100%",
    height: 56,
    borderWidth: 1.5,
    borderColor: "#b8c2b9",
    borderRadius: 28,
    paddingHorizontal: 25,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#ffffff",
  },
});
export const inicio = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fcf8f2",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  searchContainer: {
    marginVertical: 10,
  },
  seccionTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginVertical: 15,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 15,
  },
  card: {
    width: "47%",
    height: 180,
    borderRadius: 24,
    padding: 16,
    justifyContent: "space-between",
  },
  iconoPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginBottom: 2,
  },
  cardSubtitulo: {
    fontSize: 13,
    color: "#556b55",
  },
  cosechaCard: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderWidth: 1.5,
    borderColor: "#e2e8e0",
    borderRadius: 20,
    padding: 14,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cosechaFila: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  imagenCosechaVacia: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d5e4d1",
  },
  cosechaTexto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2e3b2e",
  },
  cosechaVer: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3b6e44",
  },
});

export const explorarRecetas = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fcf8f2", 
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerContainer: {
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginTop: 8,
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 15,
    color: "#737c73",
  },
  listaRecetas: {
    gap: 15, // Espaciado entre las tarjetas de receta
  },
  fondolmagen: {
  width: 60,
  height: 60,
  borderRadius: 12,
  backgroundColor: "#d5e4d1",
}
});
// Tarjeta de recetas
export const receta = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    backgroundColor: colores.blanco,
    borderWidth: 1.5,
    borderColor: colores.borde,
    borderRadius: 20,
    padding: 14,
    alignItems: "center",
    gap: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  fondoImagen: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: colores.imagenVacia,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  imagen: {
    width: "100%",
    height: "100%",
  },
  icono: {
    fontSize: 26,
  },
  contenido: {
    flex: 1,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: colores.texto || "#2e3b2e",
    marginBottom: 2,
  },
  detalle: {
    fontSize: 13,
    color: "#737c73",
    marginBottom: 8,
  },
  etiqueta: {
    alignSelf: "flex-start",
    backgroundColor: colores.PrimarioClaro,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  etiquetaFaltante: {
    backgroundColor: colores.fondoFaltante || "#FBECCB",
  },
  estado: {
    fontSize: 12,
    fontWeight: "bold",
    color: colores.Primario,
  },
  textoFaltante: {
    color: colores.textoFaltante || "#8A5A00",
  },
});
export const remediosCaseros = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fcf8f2",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerContainer: {
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginTop: 8,
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 15,
    color: "#737c73",
  },
  filtrosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 18,
    marginBottom: 20,
  },
  chipFiltro: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: "#ffffff",
    borderWidth: 1.5,
    borderColor: "#e2e8e0",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  chipActivo: {
    backgroundColor: "#3F7440",
    borderColor: "#3F7440",
  },
  textoChip: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3c3c3c",
  },
  textoChipActivo: {
    color: "#ffffff",
  },
  listaRecetas: {
    gap: 15,
  },
});

// ITEM COSECHA
export const itemCosecha = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    backgroundColor: colores.blanco,
    borderWidth: 1.5,
    borderColor: colores.borde,
    borderRadius: 20,
    padding: 12,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  filaInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  // Contenedor de la imagen vacío 
  contenedorImagen: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: colores.imagenCosecha || "#eef2ed",
    justifyContent: "center",
    alignItems: "center",
  },
  textosContainer: {
    justifyContent: "center",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: colores.texto || "#2e3b2e",
    marginBottom: 2,
  },
  subtitulo: {
    fontSize: 13,
    color: "#737c73",
  },
  botonEliminar: {
    width: 44,
    height: 44,
    borderRadius: radios.circulo,
    backgroundColor: colores.ErrorClaro || "#FBE0DE",
    justifyContent: "center",
    alignItems: "center",
  },
  iconoEliminar: {
    fontSize: 18,
    color: colores.Error || "#D64545",
  },
});
export const miHuerta = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fcf8f2",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerContainer: {
    marginTop: 10,
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 15,
    color: "#737c73",
  },
  botonAgregar: {
    width: "100%",
    height: 56,
    backgroundColor: "#3F7440",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  textoBotonAgregar: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  filtrosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },
  chipFiltro: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: "#ffffff",
    borderWidth: 1.5,
    borderColor: "#e2e8e0",
  },
  chipActivo: {
    backgroundColor: "#3F7440",
    borderColor: "#3F7440",
  },
  textoChip: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3c3c3c",
  },
  textoChipActivo: {
    color: "#ffffff",
  },
  listaCosechas: {
    gap: 12,
  },
});

// PANTALLA DE PERFIL
export const perfil = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
  },

  contenido: {
    padding: 20,
    paddingBottom: 35,
  },

  filaPerfil: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    marginBottom: 35,
  },

  foto: {
    width: 85,
    height: 85,
    borderRadius: 50,
    backgroundColor: colores.PrimarioClaro,
    justifyContent: "center",
    alignItems: "center",
  },

  inicial: {
    fontSize: 35,
    fontWeight: pesos.bold,
    color: colores.Primario,
  },

  datos: {
    marginLeft: 18,
    flex: 1,
  },

  nombre: {
    fontSize: 21,
    fontWeight: pesos.bold,
    color: colores.texto,
  },

  correo: {
    fontSize: 14,
    color: "#737C73",
    marginTop: 5,
  },

  menu: {
    backgroundColor: colores.blanco,
    borderRadius: radios.botonSecundario,
    paddingHorizontal: 15,
  },

  opcion: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: espacios.l,
    borderBottomWidth: 1,
    borderBottomColor: "#F0EDE5",
  },

  iconoCirculo: {
    width: 42,
    height: 42,
    borderRadius: 30,
    backgroundColor: colores.PrimarioClaro,
    justifyContent: "center",
    alignItems: "center",
  },

  icono: {
    fontSize: tamanos.cuerpoL,
    color: colores.Primario,
  },

  textoOpcion: {
    flex: 1,
    fontSize: tamanos.apoyo,
    fontWeight: pesos.semibold,
    color: colores.texto,
    marginLeft: 14,
  },

  flecha: {
    fontSize: 26,
    color: colores.placeholder,
  },

  cerrarSesion: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    marginTop: 20,
    backgroundColor: colores.ErrorClaro,
    borderRadius: radios.botonSecundario,
  },

  iconoCerrar: {
    fontSize: 23,
    color: colores.Error,
    marginRight: 15,
  },

  textoCerrar: {
    fontSize: tamanos.etiqueta,
    fontWeight: pesos.bold,
    color: colores.Error,
  },
});

// Filtro
export const filtro = {
  contenedor: remediosCaseros.chipFiltro,
  activo: remediosCaseros.chipActivo,
  texto: remediosCaseros.textoChip,
  textoActivo: remediosCaseros.textoChipActivo,
};

// Tarjetas de categoria 
export const categoria = StyleSheet.create({
  card: {
    width: "47%",
    height: 180,
    borderRadius: 24,
    padding: 16,
    justifyContent: "space-between",
  },
  imagenVacia: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginBottom: 2,
  },
  subtitulo: {
    fontSize: 13,
    color: "#556b55",
  },
});

// Agregar planta
export const agregarPlanta = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colores.fondo || "#fcf8f2",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 100, 
  },
  headerContainer: {
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginTop: 8,
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 15,
    color: "#737c73",
    lineHeight: 22,
  },
  searchContainer: {
    marginVertical: 12,
  },
  seccionTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginTop: 18,
    marginBottom: 12,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },

  footerFlotante: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colores.blanco,
    borderTopWidth: 1,
    borderTopColor: colores.borde,
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: "center",
  },
  botonAgregar: {
    width: "100%",
    height: 56,
    backgroundColor: colores.Primario || "#3F7440",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBoton: {
    fontSize: 16,
    fontWeight: "bold",
    color: colores.blanco,
  },
});

// TileCosecha
export const tileCosecha = StyleSheet.create({
  card: {
    width: "31%", // 3 columnas por fila
    backgroundColor: colores.blanco,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: colores.borde,
    padding: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  cardSeleccionada: {
    borderColor: colores.Primario || "#3F7440",
    backgroundColor: "#eef5ed",
    borderWidth: 2,
  },
  cardAgregada: {
    backgroundColor: "#f0f2ef",
    opacity: 0.7,
  },
  imagenVacia: {
    width: "100%",
    height: 75,
    borderRadius: 10,
    backgroundColor: colores.imagenVacia || "#d5e4d1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    overflow: "hidden",
  },
  checkBadge: {
    position: "absolute",
    top: 6,
    right: 6,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colores.Primario || "#3F7440",
    justifyContent: "center",
    alignItems: "center",
  },
  checkTexto: {
    color: colores.blanco || "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  titulo: {
    fontSize: 13,
    fontWeight: "600",
    color: colores.texto || "#3c3c3c",
    textAlign: "center",
  },
  tituloAgregado: {
    color: "#99a199",
  },
});

// PlantaAgregada
export const plantaAgregada = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colores.fondo || "#fcf8f2",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
  iconoContenedor: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: colores.Primario || "#3F7440",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: "#f4f8f3",
  },
  iconoCheck: {
    fontSize: 40,
    color: colores.Primario || "#3F7440",
    fontWeight: "bold",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: colores.Primario || "#3F7440",
    marginBottom: 12,
    textAlign: "center",
  },
  mensaje: {
    fontSize: 16,
    color: "#737c73",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 36,
    paddingHorizontal: 10,
  },
  botonPrimario: {
    width: "100%",
    height: 56,
    backgroundColor: colores.Primario || "#3F7440",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  textoBotonPrimario: {
    fontSize: 16,
    fontWeight: "bold",
    color: colores.blanco || "#ffffff",
  },
  enlaceSecundario: {
    fontSize: 15,
    fontWeight: "600",
    color: colores.Primario || "#3F7440",
    textAlign: "center",
    paddingVertical: 8,
  },
});

// EditarDatos
export const editarDatos = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colores.fondo || "#fcf8f2",
  },
  container: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginTop: 8,
    marginBottom: 4,
  },
  avatarContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  foto: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    backgroundColor: colores.PrimarioClaro || "#E8F0DD",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colores.Primario || "#3F7440",
    marginBottom: 8,
  },
  inicial: {
    fontSize: 35,
    fontWeight: "bold",
    color: colores.Primario || "#3F7440",
  },
  cambiarFotoTexto: {
    fontSize: 14,
    fontWeight: "600",
    color: colores.Primario || "#3F7440",
  },
  formContainer: {
    width: "100%",
    gap: 16,
    marginTop: 10,
  },
  campoContainer: {
    width: "100%",
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2e3b2e",
    marginLeft: 4,
  },
  footerAcciones: {
    width: "100%",
    marginTop: 36,
    alignItems: "center",
    gap: 14,
  },
  botonGuardar: {
    width: "100%",
    height: 56,
    backgroundColor: colores.Primario || "#3F7440",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotonGuardar: {
    fontSize: 16,
    fontWeight: "bold",
    color: colores.blanco || "#ffffff",
  },
  botonCancelar: {
    paddingVertical: 8,
  },
  textoCancelar: {
    fontSize: 15,
    fontWeight: "600",
    color: "#737c73",
  },
});

//Comunidad
export const comunidad = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colores.fondo || "#fcf8f2",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 100, 
  },
  headerContainer: {
    marginVertical: 12,
    paddingHorizontal: 4,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 15,
    color: "#737c73",
  },
  listaTarjetas: {
    gap: 16,
    marginTop: 8,
  },
});

// Tile Comunidad
export const tileComunidad = StyleSheet.create({
  card: {
    backgroundColor: colores.blanco || "#ffffff",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: colores.borde || "#e0dcd5",
    overflow: "hidden",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  imagenBanner: {
    width: "100%",
    height: 110,
    borderRadius: 12,
    backgroundColor: "#d5e4d1",
    marginBottom: 14,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  badgeEtiqueta: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#c8e6c9",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  textoBadge: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2e3b2e",
  },
  filaInfoSuperior: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  avataresContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarCirculo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#b3e5fc",
    borderWidth: 2,
    borderColor: colores.blanco,
    marginLeft: -10,
    justifyContent: "center",
    alignItems: "center",
  },
  textoMasVecinos: {
    fontSize: 13,
    fontWeight: "600",
    color: "#737c73",
    marginLeft: 8,
  },
  ubicacionBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  textoUbicacion: {
    fontSize: 13,
    fontWeight: "600",
    color: "#737c73",
  },
  filaContenido: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textosContainer: {
    flex: 1,
    paddingRight: 10,
  },
  tituloTarjeta: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginBottom: 4,
  },
  subtituloTarjeta: {
    fontSize: 14,
    color: "#737c73",
    lineHeight: 20,
  },
  flecha: {
    fontSize: 22,
    color: "#737c73",
    fontWeight: "600",
  },
});

// Vecinos cerca de ti
export const vecinosCerca = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colores.fondo || "#fcf8f2",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 110,
  },
  headerContainer: {
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginTop: 4,
    marginBottom: 2,
  },
  subtitulo: {
    fontSize: 15,
    color: "#737c73",
  },
  filtrosContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },
  chipFiltro: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colores.blanco || "#ffffff",
    borderWidth: 1,
    borderColor: colores.borde || "#e0dcd5",
  },
  chipActivo: {
    backgroundColor: colores.Primario || "#3F7440",
    borderColor: colores.Primario || "#3F7440",
  },
  textoChip: {
    fontSize: 14,
    fontWeight: "600",
    color: "#737c73",
  },
  textoChipActivo: {
    color: colores.blanco || "#ffffff",
  },
  listaVecinos: {
    gap: 14,
  },
  footerAviso: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#edf3eb",
    padding: 12,
    borderRadius: 14,
    marginTop: 20,
    gap: 10,
  },
  textoAviso: {
    flex: 1,
    fontSize: 13,
    color: "#526352",
    lineHeight: 18,
  },
});

// TileComunidad (Vecino)
export const tileVecino = StyleSheet.create({
  card: {
    backgroundColor: colores.blanco || "#ffffff",
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: colores.borde || "#e0dcd5",
    padding: 16,
    gap: 12,
  },
  filaSuperior: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoVecino: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#c8e6c9",
    justifyContent: "center",
    alignItems: "center",
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2e3b2e",
  },
  barrio: {
    fontSize: 13,
    color: "#737c73",
    marginTop: 2,
  },
  botonSaludar: {
    backgroundColor: colores.Primario || "#3F7440",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  textoSaludar: {
    color: colores.blanco || "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  botonEnviado: {
    backgroundColor: "#f0f2ef",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: "#d5dcd5",
  },
  textoEnviado: {
    color: "#737c73",
    fontSize: 14,
    fontWeight: "600",
  },
  cultivosContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#fcf8f2",
    padding: 10,
    borderRadius: 12,
  },
  textoCultiva: {
    fontSize: 13,
    color: "#737c73",
    flex: 1,
  },
});
// PerfilVecino
export const perfilVecino = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colores.fondo || "#fcf8f2",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 110,
    alignItems: "center",
  },
  headerPerfil: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 24,
  },
  avatarGrande: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#c8e6c9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colores.Primario || "#3F7440",
  },
  nombre: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginBottom: 4,
  },
  subInfo: {
    fontSize: 14,
    color: "#737c73",
    marginBottom: 8,
  },
  badgeAmigos: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#edf3eb",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  textoAmigos: {
    fontSize: 13,
    fontWeight: "600",
    color: colores.Primario || "#3F7440",
  },
  seccionContainer: {
    width: "100%",
    marginBottom: 24,
  },
  seccionTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginBottom: 12,
  },
  huertaGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  miniaturaHuerta: {
    flex: 1,
    backgroundColor: colores.blanco || "#ffffff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colores.borde || "#e0dcd5",
    padding: 8,
    alignItems: "center",
  },
  imagenMiniatura: {
    width: "100%",
    height: 60,
    borderRadius: 10,
    backgroundColor: "#d5e4d1",
    marginBottom: 6,
  },
  nombrePlantaMini: {
    fontSize: 12,
    fontWeight: "600",
    color: "#3c3c3c",
    textAlign: "center",
  },
  listaCosechas: {
    gap: 10,
  },
  footerAcciones: {
    width: "100%",
    alignItems: "center",
    gap: 16,
    marginTop: 10,
  },
  botonEscribir: {
    width: "100%",
    height: 54,
    backgroundColor: colores.Primario || "#3F7440",
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  textoBotonEscribir: {
    fontSize: 16,
    fontWeight: "bold",
    color: colores.blanco || "#ffffff",
  },
  filaPeligro: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
    marginTop: 4,
  },
  textoAccionPeligro: {
    fontSize: 14,
    fontWeight: "600",
    color: "#d9534f",
  },
});

// Detalle receta (Jugo de mora)
export const detalleReceta = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colores.fondo || "#fcf8f2",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  botonCircular: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colores.blanco || "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colores.borde || "#e0dcd5",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  bannerContainer: {
    width: "100%",
    height: 185,
    backgroundColor: "#b8dce8",
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    marginBottom: 20,
  },
  imagenReceta: {
    width: 85,
    height: 85,
    borderRadius: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: colores.Primario || "#3F7440",
    marginBottom: 14,
  },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 20,
  },
  cardBeneficio: {
    backgroundColor: "#cde2b8",
    borderRadius: 18,
    padding: 16,
    marginBottom: 24,
  },
  tituloBeneficio: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3a6332",
    marginBottom: 6,
  },
  textoBeneficio: {
    fontSize: 15,
    color: "#2e3b2e",
    lineHeight: 22,
  },
  seccionTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginBottom: 14,
  },
  listaIngredientes: {
    gap: 14,
    marginBottom: 24,
  },
  itemIngrediente: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  checkCirculo: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colores.Primario || "#3F7440",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },
  textoIngrediente: {
    fontSize: 16,
    color: "#2e3b2e",
    fontWeight: "500",
  },
  subtextoHuerta: {
    fontSize: 13,
    color: colores.Primario || "#3F7440",
    fontWeight: "600",
    marginTop: 2,
  },
  cardImportante: {
    backgroundColor: "#f3df9b",
    borderRadius: 16,
    padding: 16,
  },
  tituloImportante: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#8a6200",
    marginBottom: 4,
  },
  textoImportante: {
    fontSize: 14,
    color: "#5c4508",
    lineHeight: 20,
  },
  footerFijo: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colores.blanco || "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: colores.borde || "#e0dcd5",
  },
  botonPrincipal: {
    width: "100%",
    height: 56,
    backgroundColor: colores.Primario || "#3F7440",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotonPrincipal: {
    color: colores.blanco || "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

// Paso a paso
export const pasoAPaso = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colores.fondo || "#fcf8f2",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 24,
    justifyContent: "space-between",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  botonSalir: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 4,
  },
  textoSalir: {
    fontSize: 17,
    color: "#6b665e",
    fontWeight: "500",
  },
  textoProgreso: {
    fontSize: 17,
    color: colores.Primario || "#3F7440",
    fontWeight: "bold",
  },
  barraProgresoFondo: {
    width: "100%",
    height: 8,
    backgroundColor: "#e6e1d6",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 24,
  },
  barraProgresoRelleno: {
    height: "100%",
    backgroundColor: colores.Primario || "#3F7440",
    borderRadius: 4,
  },
  bannerMedia: {
    width: "100%",
    height: 220,
    backgroundColor: "#b8dce8",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 26,
  },
  botonPlayCirculo: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  iconoPlay: {
    fontSize: 28,
    color: colores.Primario || "#3F7440",
    marginLeft: 4,
  },
  instruccionTexto: {
    fontSize: 26,
    fontWeight: "600",
    color: "#222422",
    lineHeight: 34,
  },
  controlesInferiores: {
    gap: 16,
  },
  botonEscuchar: {
    width: "100%",
    height: 54,
    backgroundColor: colores.blanco || "#ffffff",
    borderRadius: 27,
    borderWidth: 1.5,
    borderColor: colores.Primario || "#3F7440",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  textoEscuchar: {
    fontSize: 17,
    fontWeight: "bold",
    color: colores.Primario || "#3F7440",
  },
  filaNavegacion: {
    flexDirection: "row",
    gap: 14,
  },
  botonAnterior: {
    flex: 1,
    height: 54,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#d6d1c7",
    backgroundColor: "#f7f3eb",
    justifyContent: "center",
    alignItems: "center",
  },
  textoAnterior: {
    fontSize: 17,
    fontWeight: "600",
    color: "#5c5852",
  },
  botonSiguiente: {
    flex: 1,
    height: 54,
    borderRadius: 16,
    backgroundColor: colores.Primario || "#3F7440",
    justifyContent: "center",
    alignItems: "center",
  },
  textoSiguiente: {
    fontSize: 17,
    fontWeight: "bold",
    color: colores.blanco || "#ffffff",
  },
});