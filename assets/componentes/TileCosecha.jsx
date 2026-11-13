import { Image, Pressable, Text, View } from "react-native";
import { tileCosecha } from "../Stylesheet";

const BUCKET_URL =
  "https://pcsuyiirlhvunumtfpwf.supabase.co/storage/v1/object/public/Recetas_Imagenes/";

export default function TileCosecha({
  titulo = "Hierbabuena",
  imagen,
  yaAgregada = false,
  seleccionada = false,
  onPress,
}) {
  const uriImagen =
    imagen && imagen.startsWith("http") ? imagen : `${BUCKET_URL}${imagen}`;

  return (
    <Pressable
      style={[
        tileCosecha.card,
        yaAgregada && tileCosecha.cardAgregada,
        seleccionada && !yaAgregada && tileCosecha.cardSeleccionada,
      ]}
      onPress={!yaAgregada ? onPress : undefined}
    >
      <View
        style={[
          tileCosecha.imagenVacia,
          { overflow: "hidden", position: "relative" },
        ]}
      >
        {imagen && (
          <Image
            source={{ uri: uriImagen }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        )}

        {(yaAgregada || seleccionada) && (
          <View style={tileCosecha.checkBadge}>
            <Text style={tileCosecha.checkTexto}>✓</Text>
          </View>
        )}
      </View>

      <Text
        style={[
          tileCosecha.titulo,
          yaAgregada && tileCosecha.tituloAgregado,
        ]}
        numberOfLines={1}
      >
        {titulo}
      </Text>
    </Pressable>
  );
}