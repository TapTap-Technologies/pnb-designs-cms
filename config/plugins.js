/** @param {{ env: (key: string, defaultValue?: string) => string }} options */
module.exports = ({ env }) => {
  const storageProvider = env('STORAGE_PROVIDER', 'azure'); // Default to Azure if not specified

  const uploadConfig = storageProvider === 'azure'
    ? {
        provider: 'strapi-provider-upload-azure-storage',
        providerOptions: {
          account: env('AZURE_STORAGE_ACCOUNT_NAME'),
          accountKey: env('AZURE_STORAGE_ACCOUNT_KEY'),
          containerName: env('AZURE_STORAGE_CONTAINER_NAME'),
          defaultPath: 'pbdesigns',
        },
      }
    : {
        provider: 'strapi-provider-upload-do',
        providerOptions: {
          space: env('DO_SPACES_BUCKET'),
          accessKeyId: env('DO_SPACES_KEY'),
          secretAccessKey: env('DO_SPACES_SECRET'),
          endpoint: env('DO_SPACES_ENDPOINT'),
          region: env('DO_SPACES_REGION'),
          directory: 'pbdesigns',
          params: {
            ACL: 'public-read',
          },
        },
      };

  return {
    'users-permissions': {
      jwtSecret: env('JWT_SECRET', 'your-generated-secret-here'),
    },
    upload: uploadConfig,
  };
};
