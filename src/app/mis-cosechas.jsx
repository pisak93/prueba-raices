import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppBarSuperior from "../../assets/componentes/AppBarSuperior";

// SUPABASE: cliente configurado con la URL y la API Key
import api from "../../assets/api/axios";

export default function MisCosechas() {
  const router = useRouter();
  const [cosechas, setCosechas] = useState([]);

  // ==========================================
  // ANOTACIÓN SUPABASE: LEER (GET)
  // Antes: lista COSECHAS escrita a mano. Ahora viene de la tabla "cosechas".
  // ==========================================
  useFocusEffect(
    useCallback(() => {
      async function traer() {
        try {
          const response = await api.get("/cosechas?select=*&en_huerta=eq.true&order=nombre");
          setCosechas(response.data);
        } catch (error) {
          console.error("Error al obtener cosechas:", error);
        }
      }
      traer();
    }, []),
  );

  // Agrupa por categoría para mostrarlas como antes
  const COSECHAS = [];
  cosechas.forEach((c) => {
    let grupo = COSECHAS.find((g) => g.categoria === c.categoria);
    if (!grupo) {
      grupo = { categoria: c.categoria, icono: c.icono, elementos: [] };
      COSECHAS.push(grupo);
    }
    grupo.elementos.push(c.nombre);
  });

  const totalCosechas = cosechas.length;

  return (
    <SafeAreaView style={estilos.contenedor} edges={["top"]}>
      <AppBarSuperior
        tipo="volver"
        titulo="Mis cosechas"
        onVolver={() => router.back()}
      />

      <ScrollView
        contentContainerStyle={estilos.contenido}
        showsVerticalScrollIndicator={false}
      >
        <Text style={estilos.subtitulo}>
          {totalCosechas} cosechas en tu huerta
        </Text>

        {COSECHAS.map((categoria) => (
          <View
            key={categoria.categoria}
            style={estilos.grupo}
          >
            <Text style={estilos.categoria}>
              {categoria.categoria}
            </Text>

            <View style={estilos.lista}>
              {categoria.elementos.map((nombre) => (
                <View
                  key={nombre}
                  style={estilos.chip}
                >
                  <Text style={estilos.icono}>
                    {categoria.icono}
                  </Text>

                  <Text style={estilos.nombre}>
                    {nombre}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        <Pressable
          style={estilos.boton}
          onPress={() => router.replace("/huerta")}
        >
          <Text style={estilos.textoBoton}>
            ✏️  Editar mis cosechas
          </Text>
        </Pressable>

        <View style={estilos.separador} />

        <Pressable
          style={estilos.botonSecundario}
          onPress={() => router.push("/agregar-cosecha")}
        >
          <Text style={estilos.textoSecundario}>
            + Agregar cosecha
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#FFFCF5",
  },
  contenido: {
    padding: 20,
    paddingBottom: 35,
  },
  subtitulo: {
    fontSize: 15,
    color: "#737c73",
    marginBottom: 25,
  },
  grupo: {
    marginBottom: 25,
  },
  categoria: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#3F7440",
    marginBottom: 12,
  },
  lista: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F0DD",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    gap: 8,
  },
  icono: {
    fontSize: 19,
  },
  nombre: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3C3C3C",
  },
  boton: {
    height: 58,
    backgroundColor: "#3F7440",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  textoBoton: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  separador: {
    height: 1,
    backgroundColor: "#E6E1D3",
    marginVertical: 20,
  },
  botonSecundario: {
    height: 58,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#3F7440",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textoSecundario: {
    color: "#3F7440",
    fontSize: 16,
    fontWeight: "bold",
  },
});