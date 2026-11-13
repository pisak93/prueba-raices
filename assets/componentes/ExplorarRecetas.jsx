import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { explorarRecetas, remediosCaseros } from "../Stylesheet";
import BarraNavegacion from "./BarraNavegacion";
import Filtro from "./Filtro";
import Receta from "./Receta";
import TextInput from "./TextInput";

import api from "../api/axios";

function normalizar(texto) {
  if (!texto) return "";
  return texto
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function ExplorarRecetas({
  titulo,
  subtitulo,
  categoria,
  busquedaInicial = "",
  filtroInicial = "Todas",
}) {
  const [busqueda, setBusqueda] = useState(busquedaInicial);
  const [filtro, setFiltro] = useState(filtroInicial);
  const [recetas, setRecetas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const router = useRouter();

  useEffect(function () {
    async function traerRecetas() {
      try {
        const response = await api.get("/Recetas?select=*&order=id");
        setRecetas(response.data);
      } catch (error) {
        console.error("Error al obtener recetas:", error);
      } finally {
        setCargando(false);
      }
    }
    traerRecetas();
  }, []);

  const esCatalogo = !categoria;
  const consulta = normalizar(busqueda);

  const visibles = recetas.filter((item) => {
    if (categoria && item.Categoria !== categoria) return false;
    if (filtro === "Guardadas" && !item.guardada) return false;
    if (filtro === "Aromáticas" && item.Categoria !== "Aromáticas") return false;

    const texto = [
      item.Nombre,
      item.Categoria,
      item.Propiedad,
      item.ingredientes || "",
    ].join(" ");

    return normalizar(texto).includes(consulta);
  });

  function mostrarTodas() {
    setBusqueda("");
    setFiltro("Todas");
  }

  return (
    <SafeAreaView style={explorarRecetas.safeArea} edges={["bottom"]}>
      <Stack.Screen options={{ title: titulo }} />

      <FlatList
        contentContainerStyle={explorarRecetas.container}
        keyboardShouldPersistTaps="handled"
        data={visibles}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={
          <>
            <View style={explorarRecetas.headerContainer}>
              <Text style={explorarRecetas.titulo}>{titulo}</Text>
              <Text style={explorarRecetas.subtitulo}>{subtitulo}</Text>
            </View>

            {esCatalogo && (
              <View style={explorarRecetas.headerContainer}>
                <TextInput
                  placeholder="Buscar receta, planta o malestar"
                  value={busqueda}
                  onChangeText={setBusqueda}
                />

                <View style={remediosCaseros.filtrosContainer}>
                  <Filtro
                    texto="Todas"
                    activo={filtro === "Todas"}
                    onPress={() => setFiltro("Todas")}
                  />
                  <Filtro
                    texto="Guardadas"
                    activo={filtro === "Guardadas"}
                    onPress={() => setFiltro("Guardadas")}
                  />
                  <Filtro
                    texto="Aromáticas"
                    activo={filtro === "Aromáticas"}
                    onPress={() => setFiltro("Aromáticas")}
                  />
                </View>
              </View>
            )}

            {consulta !== "" && visibles.length > 0 && (
              <View style={explorarRecetas.listaRecetas}>
                <Text style={explorarRecetas.subtitulo}>
                  {visibles.length} {visibles.length === 1 ? "resultado" : "resultados"}
                  {" para “"}
                  {busqueda.trim()}
                  {"”"}
                </Text>
              </View>
            )}
          </>
        }
        renderItem={({ item }) => (
  <View style={explorarRecetas.listaRecetas}>
    <Receta
      titulo={item.Nombre}
      beneficio={
        esCatalogo
          ? item.Categoria + " · " + item.Propiedad
          : item.Propiedad
      }
      tiempo={item.Tiempo}
      faltante={item.faltante}
      imagen={item.Imagen || item.imagen}
      onPress={() =>
        router.push({
          pathname: "/detalle-receta",
          params: {
            id: item.id,
            nombre: item.Nombre,
            tiempo: item.Tiempo,
            imagen: item.Imagen || item.imagen || "",
            guardada: String(item.guardada),
          },
        })
      }
    />
  </View>
)}
        ListEmptyComponent={
          cargando ? (
            <Text style={explorarRecetas.subtitulo}>Cargando recetas...</Text>
          ) : (
            <View style={explorarRecetas.listaRecetas}>
              <Text style={explorarRecetas.titulo}>No encontramos recetas</Text>
              <Text style={explorarRecetas.subtitulo}>
                Prueba con una planta o fruta de tu huerta, como hierbabuena o limón.
              </Text>
              <Filtro texto="Ver todas las recetas" onPress={mostrarTodas} />
            </View>
          )
        }
      />

      <BarraNavegacion activo="Recetas" />
    </SafeAreaView>
  );
}