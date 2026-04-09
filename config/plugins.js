/** @param {{ env: (key: string, defaultValue?: string) => string }} options */
module.exports = ({ env }) => {
  return {
    'users-permissions': {
      jwtSecret: env('JWT_SECRET', 'your-generated-secret-here'),
    },
    upload: {
      provider: 'strapi-provider-upload-azure-storage',
      providerOptions: {
        authType: 'default',
        account: env('AZURE_STORAGE_ACCOUNT_NAME'),
        accountKey: env('AZURE_STORAGE_ACCOUNT_KEY'),
        containerName: env('AZURE_STORAGE_CONTAINER_NAME'),
        defaultPath: 'pbdesigns',
      },
    },
  };
};
