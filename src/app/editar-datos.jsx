import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TextInput from "../../assets/componentes/TextInput";
import { editarDatos } from "../../assets/Stylesheet";

export default function EditarDatosScreen() {
  const router = useRouter();

  const [nombre, setNombre] = useState("Lara Gómez");
  const [correo, setCorreo] = useState("lara.gomez@correo.com");

  const esFormularioValido = nombre.trim().length > 0 && correo.trim().length > 0;

  const handleGuardar = () => {
    if (!esFormularioValido) return;
    
    
    router.push("/guardar-cambios");
  };

  return (
    <SafeAreaView style={editarDatos.safeArea} edges={["top"]}>
      
      <Text> </Text>

      <ScrollView
        contentContainerStyle={editarDatos.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={editarDatos.headerContainer}>
          <Text style={editarDatos.titulo}>Editar mis datos</Text>
        </View>

        <View style={editarDatos.avatarContainer}>
          <View style={editarDatos.foto}>
            <Text style={editarDatos.inicial}>
              {nombre ? nombre.charAt(0).toUpperCase() : "L"}
            </Text>
          </View>
          <Pressable onPress={() => console.log("Cambiar foto")}>
            <Text style={editarDatos.cambiarFotoTexto}>Cambiar foto</Text>
          </Pressable>
        </View>

        <View style={editarDatos.formContainer}>
          <View style={editarDatos.campoContainer}>
            <Text style={editarDatos.label}>Nombre</Text>
            <TextInput
              placeholder="Escribe tu nombre"
              value={nombre}
              onChangeText={setNombre}
            />
          </View>

          <View style={editarDatos.campoContainer}>
            <Text style={editarDatos.label}>Correo electrónico</Text>
            <TextInput
              placeholder="Escribe tu correo"
              value={correo}
              onChangeText={setCorreo}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={editarDatos.footerAcciones}>
          <Pressable
            style={[
              editarDatos.botonGuardar,
              !esFormularioValido && { opacity: 0.5 },
            ]}
            disabled={!esFormularioValido}
            onPress={handleGuardar}
          >
            <Text style={editarDatos.textoBotonGuardar}>Guardar cambios</Text>
          </Pressable>

          <Pressable
            style={editarDatos.botonCancelar}
            onPress={() => router.back()}
          >
            <Text style={editarDatos.textoCancelar}>Cancelar</Text>
          </Pressable>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}