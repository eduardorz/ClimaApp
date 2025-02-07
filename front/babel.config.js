module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env', // Aquí se importarán las variables de entorno
        path: '.env', // Asegúrate de que el archivo .env esté en la raíz del proyecto
      },
    ],
  ],
};
