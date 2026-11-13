import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { plantaAgregada } from "../../assets/Stylesheet";

export default function PlantaAgregadaScreen() {
  const router = useRouter();
  
  const params = useLocalSearchParams();
  const nombrePlanta = params.planta || "toronjil";

  return (
    <SafeAreaView style={plantaAgregada.safeArea} edges={["top", "bottom"]}>
      <View style={plantaAgregada.container}>
        
        <View style={plantaAgregada.iconoContenedor}>
          <Text style={plantaAgregada.iconoCheck}>✓</Text>
        </View>

        <Text style={plantaAgregada.titulo}>¡Agregado!</Text>

        <Text style={plantaAgregada.mensaje}>
          El {nombrePlanta} ya está en tu huerta. Ahora puedes preparar 3 recetas nuevas.
        </Text>

        <Pressable
          style={plantaAgregada.botonPrimario}
          onPress={() => router.push("/huerta")} 
        >
          <Text style={plantaAgregada.textoBotonPrimario}>Ver mi huerta</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            router.push({
              pathname: "/recetas",
              params: { q: nombrePlanta },
            });
          }}
        >
          <Text style={plantaAgregada.enlaceSecundario}>
            Ver recetas con {nombrePlanta}
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}