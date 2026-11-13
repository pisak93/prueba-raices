import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BarraNavegacion from "../../assets/componentes/BarraNavegacion";
import ItemCosecha from "../../assets/componentes/ItemCosecha";
import { perfilVecino } from "../../assets/Stylesheet";

export default function PerfilVecinoScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [pestanaActiva, setPestanaActiva] = useState("Comunidad");

  const nombreVecino = params.nombre || "Rosa Martínez";
  const barrioVecino = params.barrio || "Cedritos";

  return (
    <SafeAreaView style={perfilVecino.safeArea} edges={["top"]}>
      <ScrollView
        contentContainerStyle={perfilVecino.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={perfilVecino.headerPerfil}>
          <View style={perfilVecino.avatarGrande} />
          <Text style={perfilVecino.nombre}>{nombreVecino}</Text>
          <Text style={perfilVecino.subInfo}>📍 {barrioVecino} · Vecina desde 2026</Text>
          
          <View style={perfilVecino.badgeAmigos}>
            <Text style={perfilVecino.textoAmigos}>✓ Ya son amigas</Text>
          </View>
        </View>

        <View style={perfilVecino.seccionContainer}>
          <Text style={perfilVecino.seccionTitulo}>Su huerta</Text>
          <View style={perfilVecino.huertaGrid}>
            <View style={perfilVecino.miniaturaHuerta}>
              <View style={perfilVecino.imagenMiniatura} />
              <Text style={perfilVecino.nombrePlantaMini}>Hierbabuena</Text>
            </View>
            <View style={perfilVecino.miniaturaHuerta}>
              <View style={perfilVecino.imagenMiniatura} />
              <Text style={perfilVecino.nombrePlantaMini}>Tomate</Text>
            </View>
            <View style={perfilVecino.miniaturaHuerta}>
              <View style={perfilVecino.imagenMiniatura} />
              <Text style={perfilVecino.nombrePlantaMini}>Limón</Text>
            </View>
            <View style={perfilVecino.miniaturaHuerta}>
              <View style={perfilVecino.imagenMiniatura} />
              <Text style={perfilVecino.nombrePlantaMini}>Albahaca</Text>
            </View>
          </View>
        </View>

        <View style={perfilVecino.seccionContainer}>
          <Text style={perfilVecino.seccionTitulo}>Sus cosechas</Text>
          <View style={perfilVecino.listaCosechas}>
            <ItemCosecha
              titulo="Cosechó tomates"
              subtitulo="Hace 2 días"
            />
            <ItemCosecha
              titulo="Cosechó hierbabuena"
              subtitulo="Hace 1 semana"
            />
          </View>
        </View>

        <View style={perfilVecino.footerAcciones}>
          <Pressable
            style={perfilVecino.botonEscribir}
            onPress={() => Alert.alert("Chat", `Iniciando chat con ${nombreVecino}`)}
          >
            <Text style={{ fontSize: 18, color: "#fff" }}>💬</Text>
            <Text style={perfilVecino.textoBotonEscribir}>Escribirle</Text>
          </Pressable>

          <View style={perfilVecino.filaPeligro}>
            <Pressable onPress={() => Alert.alert("Reportar", "Usuario reportado.")}>
              <Text style={perfilVecino.textoAccionPeligro}>🚩 Reportar</Text>
            </Pressable>
            <Pressable onPress={() => Alert.alert("Bloquear", "Usuario bloqueado.")}>
              <Text style={[perfilVecino.textoAccionPeligro, { color: "#737c73" }]}>🚫 Bloquear</Text>
            </Pressable>
          </View>
        </View>

      </ScrollView>

      <BarraNavegacion activo={pestanaActiva} onChange={pestanaActiva} />
    </SafeAreaView>
  );
}