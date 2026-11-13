import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BarraNavegacion from "../../assets/componentes/BarraNavegacion";
import TileComunidad from "../../assets/componentes/TileComunidad";
import { comunidad } from "../../assets/Stylesheet";

export default function ComunidadScreen() {
  const router = useRouter();
  const [pestanaActiva, setPestanaActiva] = useState("Comunidad");

  return (
    <SafeAreaView style={comunidad.safeArea} edges={["top"]}>
      <ScrollView
        contentContainerStyle={comunidad.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={comunidad.headerContainer}>
          <Text style={comunidad.titulo}>Comunidad</Text>
          <Text style={comunidad.subtitulo}>Conoce a tus vecinos huerteros</Text>
        </View>

        <View style={comunidad.listaTarjetas}>
          
          <TileComunidad
            titulo="Vecinos cerca de ti"
            subtitulo="6 vecinos con huerta en tu barrio"
            avataresHeader={true}
            ubicacionTexto="Cedritos"
            onPress={() => router.push("/vecinos-cerca")}
          />


          <TileComunidad
            titulo="Intercambios"
            subtitulo="Ofrece o busca semillas, cosechas y plantas"
            badgeTexto="3 ofertas nuevas"
            imagenContenido={<View style={{ width: "100%", height: "100%", backgroundColor: "#e2ebd9" }} />}
            onPress={() => Alert.alert("Intercambios", "Sección de intercambios próximamente.")}
          />


          <TileComunidad
            titulo="Cocinemos juntos"
            subtitulo="Una receta a la misma hora con tus vecinos"
            badgeTexto="HOY - 4:00 p.m."
            imagenContenido={<View style={{ width: "100%", height: "100%", backgroundColor: "#d5e4d1" }} />}
            onPress={() => Alert.alert("Cocinemos juntos", "Próximamente eventos en vivo.")}
          />

        </View>
      </ScrollView>

      <BarraNavegacion activo={pestanaActiva} onChange={setPestanaActiva} />
    </SafeAreaView>
  );
}