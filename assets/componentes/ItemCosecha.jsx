import { Image, Pressable, Text, View } from "react-native";
import iconoBasura from "../../assets/images/Basura.png";
import { itemCosecha } from "../Stylesheet";

const BUCKET_URL =
  "https://pcsuyiirlhvunumtfpwf.supabase.co/storage/v1/object/public/Recetas_Imagenes/";

export default function ItemCosecha({
  titulo,
  subtitulo,
  imagen,
  onEliminar,
}) {
  return (
    <View style={itemCosecha.contenedor}>
      <View style={itemCosecha.filaInfo}>
        
        <View style={[itemCosecha.contenedorImagen, { overflow: "hidden" }]}>
          {imagen && (
            <Image
              source={{ uri: `${BUCKET_URL}${imagen}` }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          )}
        </View>

        <View style={itemCosecha.textosContainer}>
          <Text style={itemCosecha.titulo}>{titulo}</Text>
          <Text style={itemCosecha.subtitulo}>{subtitulo}</Text>
        </View>
      </View>

      
      {onEliminar && (
        <Pressable style={itemCosecha.botonEliminar} onPress={onEliminar}>
          <Image
            source={iconoBasura}
            style={{ width: 20, height: 20, resizeMode: "contain" }}
          />
        </Pressable>
      )}
    </View>
  );
}