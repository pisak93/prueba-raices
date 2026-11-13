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

        <Text style={plantaAgregada.titulo}>¡Cambios guardados!</Text>

        <Text style={plantaAgregada.mensaje}>
          Tus datos se actualizaron correctamente.
        </Text>

        <Pressable
          style={plantaAgregada.botonPrimario}
          onPress={() => router.replace("/perfil")} 
        >
          <Text style={plantaAgregada.textoBotonPrimario}>Volver a mi perfil</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}