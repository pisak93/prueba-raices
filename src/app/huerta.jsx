import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BarraNavegacion from "../../assets/componentes/BarraNavegacion";
import ItemCosecha from "../../assets/componentes/ItemCosecha";
import { miHuerta } from "../../assets/Stylesheet";

export default function MiHuertaScreen() {
  const router = useRouter(); 
  const [pestanaActiva, setPestanaActiva] = useState("Mi huerta");
  const [filtroSeleccionado, setFiltroSeleccionado] = useState("Todas");

  const filtros = [
    { id: "Todas", label: "Todas" },
    { id: "Hierbas", label: "Hierbas" },
    { id: "Frutas", label: "Frutas" },
    { id: "Verduras", label: "Verduras" },
  ];

  return (
    <SafeAreaView style={miHuerta.safeArea} edges={["top"]}>

      <ScrollView contentContainerStyle={miHuerta.container} showsVerticalScrollIndicator={false}>
        <View style={miHuerta.headerContainer}>
          <Text style={miHuerta.titulo}>Mi huerta</Text>
          <Text style={miHuerta.subtitulo}>9 cosechas</Text>
        </View>

        <View style={miHuerta.filtrosContainer}>
          {filtros.map((filtro) => {
            const activo = filtroSeleccionado === filtro.id;
            return (
              <Pressable
                key={filtro.id}
                style={[
                  miHuerta.chipFiltro,
                  activo && miHuerta.chipActivo,
                ]}
                onPress={() => setFiltroSeleccionado(filtro.id)}
              >
                <Text
                  style={[
                    miHuerta.textoChip,
                    activo && miHuerta.textoChipActivo,
                  ]}
                >
                  {filtro.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={miHuerta.listaCosechas}>
          <ItemCosecha
            titulo="Hierbabuena"
            subtitulo="Hierbas aromáticas"
            imagen="Hierbabuena.png" 
            onEliminar={() => console.log("Eliminar hierbabuena")}
          />
          <ItemCosecha
            titulo="Manzanilla"
            subtitulo="Hierbas aromáticas"
            imagen="Manzanilla.png" 
            onEliminar={() => console.log("Eliminar hierbabuena")}
          />
          <ItemCosecha
            titulo="Limoncillo"
            subtitulo="Hierbas aromáticas"
            imagen="Limoncillo.png" 
            onEliminar={() => console.log("Eliminar limoncillo")}
          />
          <ItemCosecha
            titulo="Limón"
            subtitulo="Frutas"
            imagen="Limon.png" 
            onEliminar={() => console.log("Eliminar limón")}
          />
          <ItemCosecha
            titulo="Mora"
            subtitulo="Frutas"
            imagen="Mora.jpg" 
            onEliminar={() => console.log("Eliminar mora")}
          />
          <ItemCosecha
            titulo="Banano"
            subtitulo="Frutas"
            imagen="Banano.png" 
            onEliminar={() => console.log("Eliminar banano")}
          />
        </View>

        <Text> </Text>
        <Pressable 
          style={miHuerta.botonAgregar}
          onPress={() => router.push("/AgregarPlanta")} 
        >
          <Text style={miHuerta.textoBotonAgregar}>+ Agregar planta</Text>
        </Pressable>

      </ScrollView>

      <BarraNavegacion activo={pestanaActiva} onChange={setPestanaActiva} />
    </SafeAreaView>
  );
}