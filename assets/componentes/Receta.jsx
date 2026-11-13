import { Image, Pressable, Text, View } from "react-native";
import { receta } from "../Stylesheet";

const BUCKET_URL =
  "https://pcsuyiirlhvunumtfpwf.supabase.co/storage/v1/object/public/Recetas_Imagenes/";

function Receta({
  titulo = "Aromática de manzanilla",
  beneficio = "Digestión",
  tiempo = "10 min",
  imagen,
  faltante = "",
  onPress,
}) {
  let estado = "✓ Tienes todo";

  if (faltante) {
    estado = "Te falta: " + faltante;
  }

  const uriImagen =
    imagen && imagen.startsWith("http") ? imagen : `${BUCKET_URL}${imagen}`;

  return (
    <Pressable onPress={onPress} style={receta.contenedor}>
      <View style={[receta.fondoImagen, { overflow: "hidden" }]}>
        {imagen ? (
          <Image
            source={{ uri: uriImagen }}
            style={receta.imagen}
            resizeMode="cover"
          />
        ) : (
          <Text style={receta.icono}></Text>
        )}
      </View>

      <View style={receta.contenido}>
        <Text numberOfLines={2} style={receta.titulo}>
          {titulo}
        </Text>

        <Text style={receta.detalle}>
          {beneficio} · {tiempo}
        </Text>

        <View
          style={[
            receta.etiqueta,
            Boolean(faltante) && receta.etiquetaFaltante,
          ]}
        >
          <Text
            style={[
              receta.estado,
              Boolean(faltante) && receta.textoFaltante,
            ]}
          >
            {estado}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default Receta;