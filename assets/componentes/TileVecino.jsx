import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { tileVecino } from "../Stylesheet";

export default function TileVecino({
  nombre,
  barrio,
  cultivos,
  estadoSaludo = "Saludar",
  onSaludar,
}) {
  const router = useRouter();
  const esEnviado = estadoSaludo === "Enviado";

  return (
    <Pressable 
      style={tileVecino.card}
      onPress={() => {
        router.push({
          pathname: "/perfil-vecino",
          params: { nombre, barrio }
        });
      }}
    >
      <View style={tileVecino.filaSuperior}>
        <View style={tileVecino.infoVecino}>
          <View style={tileVecino.avatar} />
          <View>
            <Text style={tileVecino.nombre}>{nombre}</Text>
            <Text style={tileVecino.barrio}>📍 {barrio}</Text>
          </View>
        </View>

        <Pressable
          style={esEnviado ? tileVecino.botonEnviado : tileVecino.botonSaludar}
          onPress={(e) => {
            e.stopPropagation(); 
            onSaludar();
          }}
        >
          <Text style={esEnviado ? tileVecino.textoEnviado : tileVecino.textoSaludar}>
            {esEnviado ? "🕒 Enviado" : "👋 Saludar"}
          </Text>
        </Pressable>
      </View>

      <View style={tileVecino.cultivosContainer}>
        <Text style={tileVecino.textoCultiva} numberOfLines={1}>
          🌱 <Text style={{ fontWeight: "600", color: "#2e3b2e" }}>Cultiva:</Text> {cultivos}
        </Text>
      </View>
    </Pressable>
  );
}