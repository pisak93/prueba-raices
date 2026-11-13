import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BarraNavegacion from "../../assets/componentes/BarraNavegacion";
import TileVecino from "../../assets/componentes/TileVecino";
import { vecinosCerca } from "../../assets/Stylesheet";

export default function VecinosCercaScreen() {
  const router = useRouter();
  const [pestanaActiva, setPestanaActiva] = useState("Comunidad");
  const [filtroSeleccionado, setFiltroSeleccionado] = useState("Todos");

  const [estadosSaludos, setEstadosSaludos] = useState({
    1: "Saludar",
    2: "Enviado",
    3: "Saludar",
    4: "Saludar",
  });

  const filtros = [
    { id: "Todos", label: "Todos" },
    { id: "Hierbas", label: "Hierbas" },
    { id: "Frutas", label: "Frutas" },
    { id: "Verduras", label: "Verduras" },
  ];

  const vecinos = [
    { id: 1, nombre: "Rosa Martínez", barrio: "Cedritos", cultivos: "Hierbabuena, tomate y limón" },
    { id: 2, nombre: "Jorge Rincón", barrio: "Bosa", cultivos: "Mora y fresa" },
    { id: 3, nombre: "Carmen Suárez", barrio: "Usaquén", cultivos: "Manzanilla, caléndula y albahaca" },
    { id: 4, nombre: "Luis Pardo", barrio: "Cedritos", cultivos: "Tomate cherry y cilantro" },
  ];

  const toggleSaludar = (id) => {
    setEstadosSaludos((prev) => ({
      ...prev,
      [id]: prev[id] === "Saludar" ? "Enviado" : "Saludar",
    }));
  };

  return (
    <SafeAreaView style={vecinosCerca.safeArea} edges={["top"]}>

      <ScrollView
        contentContainerStyle={vecinosCerca.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={vecinosCerca.headerContainer}>
            <Text></Text>
          <Text style={vecinosCerca.titulo}>Vecinos cerca</Text>
          <Text style={vecinosCerca.subtitulo}>Personas con huerta en tu barrio</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={vecinosCerca.filtrosContainer}>
          {filtros.map((filtro) => {
            const activo = filtroSeleccionado === filtro.id;
            return (
              <Pressable
                key={filtro.id}
                style={[vecinosCerca.chipFiltro, activo && vecinosCerca.chipActivo]}
                onPress={() => setFiltroSeleccionado(filtro.id)}
              >
                <Text style={[vecinosCerca.textoChip, activo && vecinosCerca.textoChipActivo]}>
                  {filtro.label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={vecinosCerca.listaVecinos}>
          {vecinos.map((vecino) => (
            <TileVecino
              key={vecino.id}
              nombre={vecino.nombre}
              barrio={vecino.barrio}
              cultivos={vecino.cultivos}
              estadoSaludo={estadosSaludos[vecino.id]}
              onSaludar={() => toggleSaludar(vecino.id)}
            />
          ))}
        </View>

        <View style={vecinosCerca.footerAviso}>
          <Text style={{ fontSize: 16 }}>🔒</Text>
          <Text style={vecinosCerca.textoAviso}>
            Solo mostramos nombre, barrio y huerta. Nunca tu dirección.
          </Text>
        </View>
      </ScrollView>

      <BarraNavegacion activo={pestanaActiva} onChange={pestanaActiva} />
    </SafeAreaView>
  );
}