module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '843aac0366a52eb42eddc531af36d6c5'),
  },
});
