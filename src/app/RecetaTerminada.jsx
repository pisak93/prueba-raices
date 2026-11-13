import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { plantaAgregada } from "../../assets/Stylesheet";

export default function CambiosGuardadosScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={plantaAgregada.safeArea} edges={["top", "bottom"]}>
      <View style={plantaAgregada.container}>
        
        <View style={plantaAgregada.iconoContenedor}>
          <Text style={plantaAgregada.iconoCheck}>✓</Text>
        </View>

        <Text style={plantaAgregada.titulo}>Buen Provecho</Text>

        <Text style={plantaAgregada.mensaje}>
          Preparaste tu batido verde. Tómalo recién hecho para aprovechar sus vitaminas.
        </Text>

        <Pressable
          style={plantaAgregada.botonPrimario}
          onPress={() => router.replace("/")} 
        >
          <Text style={plantaAgregada.textoBotonPrimario}>Volver al inicio</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}