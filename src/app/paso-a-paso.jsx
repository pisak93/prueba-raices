import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { pasoAPaso } from "../../assets/Stylesheet";

export default function PasoAPasoScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const tituloReceta = params.nombre || "Jugo de mora";

  const pasos = [
    "Lava bien las moras.",
    "Licúa las moras con los 2 vasos de agua hasta obtener una mezcla homogénea.",
    "Cuela el jugo si lo prefieres sin semillas, endulza con miel al gusto y sirve.",
  ];

  const [indicePaso, setIndicePaso] = useState(0);
  const totalPasos = pasos.length;
  const esPrimerPaso = indicePaso === 0;
  const esUltimoPaso = indicePaso === totalPasos - 1;
  const porcentajeProgreso = `${((indicePaso + 1) / totalPasos) * 100}%`;

  function handleSiguiente() {
    if (!esUltimoPaso) {
      setIndicePaso(indicePaso + 1);
    } else {
      router.push({
        pathname: "/RecetaTerminada",
        params: { nombre: tituloReceta },
      });
    }
  }

  function handleAnterior() {
    if (!esPrimerPaso) {
      setIndicePaso(indicePaso - 1);
    }
  }

  return (
    <SafeAreaView style={pasoAPaso.safeArea} edges={["top", "bottom"]}>
      <View style={pasoAPaso.container}>
        <View>
          <View style={pasoAPaso.topBar}>
            <Pressable
              style={pasoAPaso.botonSalir}
              onPress={() => router.back()}
            >
              <Text style={pasoAPaso.textoSalir}>✕  Salir</Text>
            </Pressable>

            <Text style={pasoAPaso.textoProgreso}>
              Paso {indicePaso + 1} de {totalPasos}
            </Text>
          </View>

          <View style={pasoAPaso.barraProgresoFondo}>
            <View
              style={[
                pasoAPaso.barraProgresoRelleno,
                { width: porcentajeProgreso },
              ]}
            />
          </View>

          
          <Pressable
            style={pasoAPaso.bannerMedia}
            onPress={() =>
              Alert.alert("Vista previa", `Demostración del paso ${indicePaso + 1}`)
            }
          >
            <View style={pasoAPaso.botonPlayCirculo}>
              <Text style={pasoAPaso.iconoPlay}>▶</Text>
            </View>
          </Pressable>

          <Text style={pasoAPaso.instruccionTexto}>{pasos[indicePaso]}</Text>
        </View>

        

        <View style={pasoAPaso.controlesInferiores}>
          <Pressable
            style={pasoAPaso.botonEscuchar}
            onPress={() =>
              Alert.alert("Leyendo paso", pasos[indicePaso])
            }
          >
            <Text style={{ fontSize: 18 }}>🔊</Text>
            <Text style={pasoAPaso.textoEscuchar}>Escuchar paso</Text>
          </Pressable>

          <View style={pasoAPaso.filaNavegacion}>
            <Pressable
              style={[
                pasoAPaso.botonAnterior,
                esPrimerPaso && { opacity: 0.45 },
              ]}
              disabled={esPrimerPaso}
              onPress={handleAnterior}
            >
              <Text
                style={[
                  pasoAPaso.textoAnterior,
                  esPrimerPaso && { color: "#a8a39a" },
                ]}
              >
                Anterior
              </Text>
            </Pressable>

            <Pressable
              style={pasoAPaso.botonSiguiente}
              onPress={handleSiguiente}
            >
              <Text style={pasoAPaso.textoSiguiente}>
                {esUltimoPaso ? "Finalizar" : "Siguiente"}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}