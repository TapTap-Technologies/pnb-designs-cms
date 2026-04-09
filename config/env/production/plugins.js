module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        authType: 'default',
        account: env('AZURE_STORAGE_ACCOUNT_NAME'),
        accountKey: env('AZURE_STORAGE_ACCOUNT_KEY'),
        containerName: env('AZURE_STORAGE_CONTAINER_NAME'),
        defaultPath: 'pbdesigns',
      },
    },
  },
});