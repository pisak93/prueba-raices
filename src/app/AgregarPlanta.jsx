import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TextInput from "../../assets/componentes/TextInput";
import TileCosecha from "../../assets/componentes/TileCosecha";
import { agregarPlanta } from "../../assets/Stylesheet";

export default function AgregarPlantaScreen() {
  const router = useRouter();
  const [busqueda, setBusqueda] = useState("");
  const [seleccionada, setSeleccionada] = useState("Toronjil");

  
  const plantasAromaticas = [
    { id: "1", nombre: "Hierbabuena", imagen: "Hierbabuena.png", agregada: true },
    { id: "2", nombre: "Manzanilla", imagen: "Manzanilla.png", agregada: true },
    { id: "3", nombre: "Toronjil", imagen: "Toronjil.png", agregada: false },
    { id: "4", nombre: "Limoncillo", imagen: "Limoncillo.png", agregada: true },
    { id: "5", nombre: "Albahaca", imagen: "Albahaca.png", agregada: false },
    { id: "6", nombre: "Romero", imagen: "Romero.png", agregada: false },
    { id: "7", nombre: "Sábila", imagen: "Sabila.png", agregada: false },
    { id: "8", nombre: "Caléndula", imagen: "Calendula.png", agregada: false },
    { id: "9", nombre: "Orégano", imagen: "Oregano.png", agregada: false },
  ];

  const handleSeleccionar = (nombre) => {
    setSeleccionada(seleccionada === nombre ? null : nombre);
  };

  const cantidadSeleccionada = seleccionada ? 1 : 0;

  return (
    <SafeAreaView style={agregarPlanta.safeArea} edges={["top"]}>
      <Text></Text>

      <ScrollView
        contentContainerStyle={agregarPlanta.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={agregarPlanta.headerContainer}>
          <Text style={agregarPlanta.titulo}>Agregar planta</Text>
          <Text style={agregarPlanta.subtitulo}>
            Toca lo que quieres agregar. Lo que ya tienes aparece en gris.
          </Text>
        </View>

        <View style={agregarPlanta.searchContainer}>
          <TextInput
            placeholder="Buscar planta o fruta"
            value={busqueda}
            onChangeText={setBusqueda}
          />
        </View>

        <Text style={agregarPlanta.seccionTitulo}>Hierbas aromáticas</Text>

        <View style={agregarPlanta.gridContainer}>
          {plantasAromaticas.map((planta) => {
            const esSeleccionada = seleccionada === planta.nombre;
            return (
              <TileCosecha
                key={planta.id}
                titulo={planta.nombre}
                imagen={planta.imagen}
                yaAgregada={planta.agregada}
                seleccionada={esSeleccionada}
                onPress={() => handleSeleccionar(planta.nombre)}
              />
            );
          })}
        </View>
      </ScrollView>

      <View style={agregarPlanta.footerFlotante}>
        <Pressable
          style={[
            agregarPlanta.botonAgregar,
            !seleccionada && { opacity: 0.5 },
          ]}
          disabled={!seleccionada}
          onPress={() => {
            router.push({
              pathname: "/Planta-Agregada",
              params: { planta: seleccionada.toLowerCase() },
            });
          }}
        >
          <Text style={agregarPlanta.textoBoton}>
            Agregar ({cantidadSeleccionada})
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}