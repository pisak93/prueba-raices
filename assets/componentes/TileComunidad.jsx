import { Pressable, Text, View } from "react-native";
import { tileComunidad } from "../Stylesheet";

export default function TileComunidad({
  titulo,
  subtitulo,
  imagenContenido, 
  avataresHeader = false, 
  ubicacionTexto = "",
  badgeTexto = "",
  onPress,
}) {
  return (
    <Pressable style={tileComunidad.card} onPress={onPress}>
      
      {avataresHeader && (
        <View style={tileComunidad.filaInfoSuperior}>
          <View style={avataresContainerEstilos.contenedor}>
            <View style={[tileComunidad.avatarCirculo, { zIndex: 3, marginLeft: 0 }]} />
            <View style={[tileComunidad.avatarCirculo, { zIndex: 2 }]} />
            <View style={[tileComunidad.avatarCirculo, { zIndex: 1 }]} />
            <View style={[tileComunidad.avatarCirculo, { zIndex: 0 }]} />
            <Text style={tileComunidad.textoMasVecinos}>+2 más</Text>
          </View>

          {ubicacionTexto ? (
            <View style={tileComunidad.ubicacionBadge}>
              <Text style={tileComunidad.textoUbicacion}>📍 {ubicacionTexto}</Text>
            </View>
          ) : null}
        </View>
      )}

      {imagenContenido && (
        <View style={tileComunidad.imagenBanner}>
          {imagenContenido}
          {badgeTexto ? (
            <View style={tileComunidad.badgeEtiqueta}>
              <Text style={tileComunidad.textoBadge}>{badgeTexto}</Text>
            </View>
          ) : null}
        </View>
      )}

      <View style={tileComunidad.filaContenido}>
        <View style={tileComunidad.textosContainer}>
          <Text style={tileComunidad.tituloTarjeta}>{titulo}</Text>
          <Text style={tileComunidad.subtituloTarjeta}>{subtitulo}</Text>
        </View>
        <Text style={tileComunidad.flecha}>›</Text>
      </View>

    </Pressable>
  );
}

const avataresContainerEstilos = {
  contenedor: {
    flexDirection: "row",
    alignItems: "center",
  },
};