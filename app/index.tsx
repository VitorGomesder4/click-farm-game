import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [dinheiro, setDinheiro] = useState<number>(0);
  const [valor_clique, setValor_clique] = useState<number>(1);

  const addValor = () => {
    setDinheiro(dinheiro + valor_clique);
  };

  const modificarClique = (dinheiro: number) => {
    if (dinheiro >= 10) {
      setValor_clique(valor_clique + 1);
      setDinheiro(dinheiro - 10);
    }
  };

  const modificarClique2 = (dinheiro: number) => {
    if (dinheiro >= 18) {
      setValor_clique(valor_clique + 3);
      setDinheiro(dinheiro - 18);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <Text style={styles.valorDinheiro}>$ {dinheiro}</Text>

        <View style={styles.buff}>
          <Button
            title="Ganhar Dinheiro"
            color={colors.primary}
            onPress={addValor}
          />
        </View>

        <Text style={styles.textoSecundario}>
          Valor do clique: <Text style={styles.textoDestaque}>{valor_clique}</Text>
        </Text>
      </View>

      <View style={styles.rightView}>
        <View>
          <View style={styles.lojaTitle}>
            <Text style={styles.texto_cfg}>Loja</Text>
          </View>

          <View style={styles.buff}>
            <Button
              title="+1 por 10"
              color={colors.success}
              onPress={() => modificarClique(dinheiro)}
            />
          </View>

          <View style={styles.buff}>
            <Button
              title="+3 por 18"
              color={colors.accent}
              onPress={() => modificarClique2(dinheiro)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const colors = {
  background: "#0F172A",
  surface: "#1E293B",
  textPrimary: "#F8FAFC",
  textSecondary: "#94A3B8",
  primary: "#22D3EE",
  secondary: "#6366F1",
  accent: "#A855F7",
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  buttonBg: "#334155",
  buttonHover: "#475569",
  border: "#1E293B",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.background,
  },
  leftView: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.surface,
  },
  rightView: {
    flex: 2,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  lojaTitle: {
    height: 30,
    width: 100,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -200,
  },
  buff: {
    height: 50,
    width: 150,
    backgroundColor: colors.buttonBg,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    shadowColor: colors.border,
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  texto_cfg: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  valorDinheiro: {
    fontSize: 48,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: 20,
  },
  textoSecundario: {
    fontSize: 18,
    color: colors.textSecondary,
    marginTop: 15,
  },
  textoDestaque: {
    color: colors.primary,
    fontWeight: "bold",
  },
});
