import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Filtro from "../../assets/componentes/Filtro";
import { detalleReceta } from "../../assets/Stylesheet";

const BUCKET_URL =
  "https://pcsuyiirlhvunumtfpwf.supabase.co/storage/v1/object/public/Recetas_Imagenes/";

export default function DetalleRecetaScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [guardada, setGuardada] = useState(params.guardada === "true");

  const titulo = params.nombre || "Jugo de mora";
  const tiempo = params.tiempo || "5 min";
  const imagenArchivo = params.imagen || "mora.png";
  const uriImagen = imagenArchivo.startsWith("http")
    ? imagenArchivo
    : `${BUCKET_URL}${imagenArchivo}`;

  const ingredientes = [
    { id: "1", texto: "1 taza de moras", deHuerta: true },
    { id: "2", texto: "2 vasos de agua", deHuerta: false },
    { id: "3", texto: "Miel al gusto (opcional)", deHuerta: false },
  ];

  return (
    <SafeAreaView style={detalleReceta.safeArea} edges={["top", "bottom"]}>
      <View style={[detalleReceta.topBar, { justifyContent: "flex-end" }]}>
        <Pressable
          style={detalleReceta.botonCircular}
          onPress={() => setGuardada(!guardada)}
        >
          <Text style={{ fontSize: 20, color: guardada ? "#d9534f" : "#2e3b2e" }}>
            {guardada ? "♥" : "♡"}
          </Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={detalleReceta.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={detalleReceta.bannerContainer}> 
            
        </View>

        <Text style={detalleReceta.titulo}>{titulo}</Text>

        <View style={detalleReceta.chipsRow}>
          <Filtro texto={`🕒 ${tiempo}`} activo={false} onPress={() => {}} />
          <Filtro texto="☕ 2 vasos" activo={false} onPress={() => {}} />
          <Filtro texto="🌿 Fácil" activo={false} onPress={() => {}} />
        </View>

        <View style={detalleReceta.cardBeneficio}>
          <Text style={detalleReceta.tituloBeneficio}>💚 ¿Para qué sirve?</Text>
          <Text style={detalleReceta.textoBeneficio}>
            Aporta vitamina C y antioxidantes que ayudan a tus defensas.
          </Text>
        </View>

        <Text style={detalleReceta.seccionTitulo}>Ingredientes</Text>
        <View style={detalleReceta.listaIngredientes}>
          {ingredientes.map((item) => (
            <View key={item.id} style={detalleReceta.itemIngrediente}>
              <View style={detalleReceta.checkCirculo}>
                <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 13 }}>
                  ✓
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={detalleReceta.textoIngrediente}>{item.texto}</Text>
                {item.deHuerta && (
                  <Text style={detalleReceta.subtextoHuerta}>De tu huerta</Text>
                )}
              </View>
            </View>
          ))}
        </View>

        <View style={detalleReceta.cardImportante}>
          <Text style={detalleReceta.tituloImportante}>⚠️ Importante</Text>
          <Text style={detalleReceta.textoImportante}>
            Esta receta no reemplaza a tu médico. Si tienes alguna condición de salud, consulta antes.
          </Text>
        </View>
      </ScrollView>

    <View style={detalleReceta.footerFijo}>
      <Pressable
      style={detalleReceta.botonPrincipal}
       onPress={() =>
       router.push({
        pathname: "/paso-a-paso",
        params: { nombre: titulo },
        })
      }
     >
            <Text style={detalleReceta.textoBotonPrincipal}>
               Empezar paso a paso
            </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}