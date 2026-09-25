import { Text, TextInput, Pressable, View } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),

  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),
});
const SignIn = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <View>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{color:"red"}}>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
        onBlur={formik.handleBlur('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{color:"red"}}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
